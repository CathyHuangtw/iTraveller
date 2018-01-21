import { grey300, purple300, grey800 } from 'material-ui/styles/colors';

export default{
  fullrow: {
    position: 'relative',
    width: '100vw',
    backgroundColor: grey300,
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    fontFamily: 'Roboto',
  },
  actionrow: {
    composes: 'row',
    maxWidth: '1000px',
    margin: '0 auto', //horizontally center a <div>
    paddingBottom: '20px'
  },
  p: {
    color: grey800,
    marginTop: 5,
    fontWeight: 400,
  }

}