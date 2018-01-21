import * as d3 from 'd3';
import topojson from 'topojson';
import Datamap from 'datamaps/dist/datamaps.world.hires.min'
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import defaultData from '../data/worldmap-data';
import traveledPlaces from '../data/traveledmap-data';
import injectSheet from 'react-jss';
import styles from '../styles/worldMapStyle';


@injectSheet(styles)
export default class WorldMap extends React.Component {
  constructor(props){
    super(props);
    this.datamap = null;
  }

  travelData() {
    const newData = traveledPlaces.reduce((object, data) => {
      if(data.code == 'CHN') {
        object[data.code] = { value: 'test', fillColor: '#8258FA', fillKey: 'CHN' };
      } else {
        object[data.code] = { value: 'test', fillColor: '#8258FA' };
      }
      return object;
    }, {});
    console.log(newData);
    return newData;
  }

  renderMap() {
    const map = new Datamap({
      element: ReactDOM.findDOMNode(this),
      scope: 'world',
      data: this.travelData(),
      geographyConfig: {
        highlightOnHover: false,
        borderWidth: 0.5,
        highlightFillColor: '#FFCC80',
        popupTemplate: function(geography, data) {
          if (data && data.value) {
            return '<div class="hoverinfo"><strong>' + geography.properties.name + String.fromCodePoint(128681) +'</strong></div>';
          } else {
            return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
          }
        }
      },
      bubblesConfig: {
        borderWidth: 2,
        borderOpacity: 1,
        borderColor: '#FFFFFF',
        popupTemplate: function(geography, data) {
            return ['<div class="hoverinfo">' +  data.name,
            '<br/>Payload: ' +  data.yield + ' kilotons',
            '<br/>Country: ' +  data.country + '',
            '<br/>Date: ' +  data.date + '',
            '</div>'].join('');
        },
      }
    });
    return map;
  }
  currentScreenWidth() {
    return window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
  }
  componentDidMount() {
    const mapContainer = d3.select('#datamap-container');
    const initialScreenWidth = this.currentScreenWidth();
    console.log(initialScreenWidth);

    if(initialScreenWidth < 600) {
      mapContainer.style('width', initialScreenWidth + 'px');
      mapContainer.style('height', initialScreenWidth * 0.5625 + 'px');
    } else {
      mapContainer.style('width', '1000px');
      mapContainer.style('height', '600px');
    }

    // mapContainer.style(containerWidth);
    const testBubble = [{
        name: 'Joe 4',
        yield: 400,
        fillKey: 'red',
        country: 'USSR',
        date: '1953-08-12',
        centered: 'MYS',
        radius: 50
      },
      { centered: 'CHN', fillKey: 'bubbleFill', radius: 50 }];

    this.datamap = this.renderMap().bubbles(testBubble);

    window.addEventListener('resize', () => {
      const currentScreenWidth = this.currentScreenWidth();
      const mapContainerWidth = mapContainer.style('width');
      if (this.currentScreenWidth() > 600 && mapContainerWidth !== '600px') {
        d3.select('svg').remove();
        mapContainer.style({
          width: '800px',
          height: '750px'
        });
        this.datamap = this.renderMap();
      }
      else if (this.currentScreenWidth() <= 600) {
        d3.select('svg').remove();
        mapContainer.style({
          width: currentScreenWidth + 'px',
          height: (currentScreenWidth * 0.5625) + 'px'
        });
        this.datamap = this.renderMap();
      }
    });
  }
  componentWillUnmount() {
    d3.select('svg').remove();
  }
  render() {
    const {classes} = this.props;
    return (
      <div className={classNames('row', classes.datamapContainer)} id="datamap-container"></div>
    );
  }

}

