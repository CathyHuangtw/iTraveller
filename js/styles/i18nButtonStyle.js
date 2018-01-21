import {purple300} from 'material-ui/styles/colors';
import ribbonimg from '../../img/purple-ribbon.png';

const imgUrl = `url(${ribbonimg})`;

export default {
  main: {
    background: {
      image: imgUrl,
      repeat: 'no-repeat',
      size: [90, 150],
    },
    height: '155px',
    position: 'relative',
    left: '18%'
  },
  dropDown: {
    composes: 'pull-right',
  },
  dropDownAnchor: {
    horizontal: 'right',
    vertical: 'top'
  },
  dropDownTarget: {
    horizontal: 'left',
    vertical: 'top'
  },
}