import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "IBM Plex Sans";
    src: url("/fonts/IBMPlexSans-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "IBM Plex Sans";
    src: url("/fonts/IBMPlexSans-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "IBM Plex Sans";
    src: url("/fonts/IBMPlexSans-BoldItalic.ttf") format("truetype");
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: "IBM Plex Sans";
    src: url("/fonts/IBMPlexSans-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "IBM Plex Sans";
    src: url("/fonts/IBMPlexSans-LightItalic.ttf") format("truetype");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "IBM Plex Sans";
    src: url("/fonts/IBMPlexSans-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "IBM Plex Sans";
    src: url("/fonts/IBMPlexSans-MediumItalic.ttf") format("truetype");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "IBM Plex Sans";
    src: url("/fonts/IBMPlexSans-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "IBM Plex Sans";
    src: url("/fonts/IBMPlexSans-SemiBoldItalic.ttf") format("truetype");
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: "IBM Plex Sans";
    src: url("/fonts/IBMPlexSans-Thin.ttf") format("truetype");
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "IBM Plex Sans";
    src: url("/fonts/IBMPlexSans-ThinItalic.ttf") format("truetype");
    font-weight: 100;
    font-style: italic;
  }

  body {
    background-color: var(--main-bg-color);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: white;
  }
`;
