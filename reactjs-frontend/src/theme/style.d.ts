import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
      details: string;
      accentLight: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      xl: string;
    };
    spacings: {
      small: string;
      medium: string;
      large: string;
    };
    radius: {
      small: string;
      medium: string;
      large: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
  }
}

