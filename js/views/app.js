import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import WorldMap from '../components/WorldMap';
import Footer from './Footer';
import I18nButton from './I18nButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/appStyle';
import injectSheet from 'react-jss';
import { I18nextProvider, translate } from 'react-i18next';
import i18n from '../i18n';

injectTapEventPlugin();

@injectSheet(styles)
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lng: 'en'};
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  render() {
    const { classes } = this.props;
    //const { t, i18n } = this.props;
    return (
      <MuiThemeProvider>
        <I18nextProvider i18n={ i18n }>
          <div className={classes.maincontainer}>
            <I18nButton changeLng={this.changeLanguage} />
            <h1>Countries I've Visited</h1>
            <WorldMap />
            <Footer />
          </div>
        </I18nextProvider>
      </MuiThemeProvider>
    );
  }
}

// export default translate('translations')(App);

