import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      text: {
        primary: string;
        secondary: string;
      };
    };
  }
}
