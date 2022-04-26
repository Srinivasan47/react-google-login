import { createTheme } from '@mui/material/styles';
import baseThemeSettings from './baseThemeSettings';

export const defaultThemeSettings = baseThemeSettings();
export default createTheme(defaultThemeSettings);
