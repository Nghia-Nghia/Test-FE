import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
  font-family: "SF Pro Display";
  src: local("SF Pro Display"),
  url(https://pixel.orichi.info/fonts/SFProDisplay-Regular.ttf) format("opentype");
}

@font-face {
  font-family: "SF Pro Text";
  src: local("SF Pro Text"),
  url(https://pixel.orichi.info/fonts/SFProText-Regular.ttf) format("opentype");
}

@font-face {
  font-family: "SF Pro";
  src: local("SF Pro"), url(https://pixel.orichi.info/fonts/SF-Pro.ttf) format("opentype");
}
`;
