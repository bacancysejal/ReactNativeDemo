import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {

  const iconTheme = {
    '.headerioc':{
      color : "#ffffff"
    },
    '.photosDisplay':{
      backgroundColor:'transparent',
      marginLeft:50,
      marginTop: -40
    },
    fontSize: variables.iconFontSize,
    color: '#000',
  };


  return iconTheme;
};
