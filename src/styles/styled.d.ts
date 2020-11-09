import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      backgroundSecundary: string;
      primary: string;
      text: string;
      textSecundary: string;
    }
  }
}
