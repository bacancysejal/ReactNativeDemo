import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const contentTheme = {
      '.sidebarstyle':{
        backgroundColor: "#FFF5EE"
    },
      '.sidebarstylefirst':{
          backgroundColor: "#810541"
      },
      '.firstback':{
          backgroundColor: "#FFF5EE"
      },
      '.padder': {
        padding: variables.contentPadding,
      },
      flex: 1,
      backgroundColor: 'transparent',
      'NativeBase.Segment': {
        borderWidth: 0,
        backgroundColor: 'transparent'
      }
  };

  return contentTheme;
};
