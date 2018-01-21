/* add jss-compose plugin into react-jss */
import {jss, create as createInjectSheet} from 'react-jss';
import jssCompose from 'jss-compose';

jss.use(jssCompose());
export const injectSheet = createInjectSheet(jss);