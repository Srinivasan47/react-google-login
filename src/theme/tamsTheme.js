import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import baseThemeSettings from './baseThemeSettings';

const tamsThemeSettings = {
  components: {},
  zIndex: {
    appBar: 3000,
    drawer: 3100,
    modal: 3200,
    snackbar: 3300,
    tooltip: 3400
  },
  direction: 'ltr'
};
export default createTheme(deepmerge(baseThemeSettings(), tamsThemeSettings));
