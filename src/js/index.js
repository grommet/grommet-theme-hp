// (C) Copyright 2017-2018 Hewlett Packard Enterprise Development LP
import { css } from 'styled-components';

const isObject = item => (
  item && typeof item === 'object' && !Array.isArray(item));

const deepFreeze = (obj) => {
  Object.keys(obj).forEach(
    key => key && isObject(obj[key]) && Object.freeze(obj[key]),
  );
  return Object.freeze(obj);
};

const simplifiedPath = 'https://hpincfonts.s3.amazonaws.com';

export const hp = deepFreeze({
  global: {
    colors: {
      background: '#ffffff',
      brand: '#0096D6',
      control: {
        dark: '#00A8F0',
        light: '#0096D6',
      },
      focus: '#99d5ef',
      'neutral-1': '#006996',
      'neutral-2': '#A65336',
      'neutral-3': '#A69136',
      'neutral-4': '#774677',
      'accent-1': '#E6734B',
      'accent-2': '#E6C84B',
      'accent-3': '#915591',
      'status-critical': '#F04B37',
      'status-warning': '#F0AA3C',
      'status-ok': '#509137',
      'status-unknown': '#848484',
      'status-disabled': '#848484',
      'dark-1': '#000001',
      'dark-2': '#676767',
      'light-1': '#F2F2F2',
      'light-2': '#E8E8E8',
      'light-3': '#CCCCCC',
    },
    font: {
      family: "'HPSimplified', Arial, sans-serif",
      face: `
        @font-face {
          font-family: 'HPSimplified';
          src:
            local('HPSimplified'),
            url("${simplifiedPath}/hps-me-w27-regular-woff.woff") format('woff');
        }
      `,
    },
  },
  anchor: {
    color: {
      dark: '#00A8F0',
      light: '#2883d7',
    },
  },
  button: {
    extend: css`
      ${props => !props.plain && `
        font-weight: bold;
        border-radius: 0 6px;
      `}
    `,
  },
  checkBox: {
    icon: {
      extend: css`
        box-sizing: border-box;
        position: absolute;
        top: 0px;
        left: 0px;
        width: ${props => props.theme.checkBox.size};
        height: ${props => props.theme.checkBox.size};
      `,
    },
  },
});
