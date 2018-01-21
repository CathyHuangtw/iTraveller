import React, { Component } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import styles from '../styles/i18nButtonStyle';
import injectSheet from 'react-jss';

import twFlag from '../../img/taiwan.png';
import cnFlag from '../../img/china.png';
import usaFlag from '../../img/usa.png';

@injectSheet(styles)
export default class I18nButton extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'en'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key, value) {
    this.setState({ value: value });
    this.props.changeLng(value);
  }

  render() {
    const { classes } = this.props;
    return(
      <DropDownMenu 
        value={this.state.value}
        className={classes.dropDown}
        onChange={this.handleChange}
        anchorOrigin={{horizontal: 'middle', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        menuItemStyle={{fontSize: 12}}>
        <MenuItem value={'en'}
                  primaryText={<MiniFlag img={usaFlag} value="en" />}
                  label={<img src={usaFlag} />}
          />
        <MenuItem value={'tw'}
                  primaryText={<MiniFlag img={twFlag} value="tw" />}
                  label={<img src={twFlag} />}
          />
        <MenuItem value={'cn'}
                  primaryText={<MiniFlag img={cnFlag} value="cn" />}
                  label={<img src={cnFlag} />}
          />
      </DropDownMenu>
    )
  }
}

class MiniFlag extends Component {
  render() {
    const languageName = {
      'en': 'English',
      'tw': '繁體中文',
      'cn': '簡體中文'
    };

    return(
      <div>
        <img src={this.props.img} />
        <p>{languageName[this.props.value]}</p>
      </div>
    )
  }
}