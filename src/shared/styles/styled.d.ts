import "styled-components";

declare module "styled-components" {
  export interface IButton {
    variants: {
      main: string;
      outline: string;
      desructive: string;
    };
    sizes: {
      icon: string;
      default: string;
    };
  }
}
