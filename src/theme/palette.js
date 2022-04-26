const computedStyle = getComputedStyle(document.documentElement);
const getHexFromVariable = (variableName) =>
  computedStyle.getPropertyValue(variableName).trim();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  primary: {
    main: getHexFromVariable('--theme-primary-color') || '#0071BA',
    light: getHexFromVariable('--theme-light-action-color') || '#0071BA',
    dark: getHexFromVariable('--theme-dark-action-color') || '#306FB4'
  },
  secondary: {
    main: getHexFromVariable('--theme-secondary') || '#FFFFFF',
    light: getHexFromVariable('--theme-light-secondary') || '#469DD800'
  },
  action: {
    disabled: getHexFromVariable('--theme-disabled-color') || '#cacfd1', // Set for disabled state of components - class .Mui-disabled
    disabledBackground:
      getHexFromVariable('--theme-disabled-color') || '#cacfd1' // Set for disabled state of components - class .Mui-disabled
  },
  text: {
    disabled: getHexFromVariable('--theme-disabled-color') || '#cacfd1' // Set for disabled text state of components - class .Mui-disabled
  },
  error: {
    main: getHexFromVariable('--theme-signal-error') || '#CC3059',
    background: getHexFromVariable('--theme-alert-notif-error-bg') || '#ffe8e8'
  },
  success: {
    main: getHexFromVariable('--theme-signal-success') || '#87CF6E',
    background:
      getHexFromVariable('--theme-alert-notif-success-bg') || '#87CF6E'
  },
  info: {
    main: getHexFromVariable('--theme-signal-info') || '#F58721',
    background: getHexFromVariable('--theme-alert-notif-info-bg') || '#F58721'
  },
  warning: {
    main: getHexFromVariable('--theme-signal-warning') || '#EDD138',
    background:
      getHexFromVariable('--theme-alert-notif-warning-bg') || '#ffedd9'
  },
  background: {
    default: getHexFromVariable('var(--theme-background)') || '#fff'
  }
};
