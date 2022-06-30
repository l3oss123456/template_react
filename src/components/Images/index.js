import React from "react";
import * as R from "ramda";
import { Image } from "antd";
import image_config from "../../configs/images";

const Images = (props) => {
  const getSourceLocal = () => {
    let data = null;
    let base = image_config;
    let imageFound = false;

    if (!R.isNil(props.name) && !R.isEmpty(props.name)) {
      imageFound = true;
      let splitNames = props.name.split(".");

      for (let x in splitNames) {
        if (!base[splitNames[x].trim()]) {
          base = null;
          imageFound = false;
          break;
        }

        base = base[splitNames[x].trim()];
      }

      if (imageFound) {
        data = base.image;
      }
    }
    let source = imageFound ? data : null;

    let imgWidth = 100,
      imgHeight = 100;
    if (imageFound) {
      //set width to image
      if (props.width) imgWidth = props.width;
      else imgWidth = base.width;

      //set height to image
      if (props.height) imgHeight = props.height;
      else imgHeight = base.height;
    }
    return {
      width: imgWidth,
      height: imgHeight,
      src: source,
      alt: props.alt ? props.alt : `...`,
      preview: props.preview ? props.preview : false,
    };
  };

  const getSourceUri = () => {
    let source = props.uri ? props.uri : null;

    return {
      width: props.width ? props.width : 100,
      height: props.height ? props.height : 100,
      src: source,
      alt: props.alt ? props.alt : `...`,
      preview: props.preview ? props.preview : false,
    };
  };

  let setting = {};
  switch (props.sourceType) {
    case "uri":
      setting = getSourceUri();
      break;

    default:
      setting = getSourceLocal();
  }
  return (
    <Image
      {...setting}
      style={{
        ...props.style,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        pointerEvents: "none",
      }}
    />
  );
};

export default Images;
