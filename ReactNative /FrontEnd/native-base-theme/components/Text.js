import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const textTheme = {
      fontSize: variables.DefaultFontSize - 1,
      fontFamily: variables.fontFamily,
      color: variables.textColor,
      '.note': {
        color: '#a7a7a7',
        fontSize: variables.noteFontSize
      },
      '.headerText':{
          color: "#ffffff" ,
          marginLeft:20,
          fontSize: 20,
      },
      '.firstapp':{
          color:"#67A8F2",
          fontSize: 50
      },
      '.forgetpassword_text':{
          fontSize:10,
          marginLeft:40
      },
      '.sidebarText':{
          color:"#67A8F2",
          fontSize: 20,
          marginBottom:20
      },
  };

  return textTheme;
};
