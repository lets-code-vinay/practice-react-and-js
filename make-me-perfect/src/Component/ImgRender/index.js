import React from "react";
import { string } from "prop-types";

function ImgRender({ src, alt, defaultTheme, ...props }) {
  return <img src={src} alt={alt} {...props} />;
}

ImgRender.propTypes = {
  alt: string,
  src: string.isRequired,
};

ImgRender.defaultProps = {
  alt: "",
};

export default ImgRender;
