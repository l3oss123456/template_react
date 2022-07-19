import React, { useState, useEffect } from "react";
import * as R from "ramda";
import { Image, Spin } from "antd";
import image_config from "../../Configs/images";

const Images = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  let imageFound = false;

  const getSourceLocal = () => {
    let data = null;
    let base = image_config;

    if (!R.isNil(props.name) && !R.isEmpty(props.name)) {
      imageFound = true;
      let splitNames = props.name.split(".");

      for (let x in splitNames) {
        // if (!base[splitNames[x].trim()]) {
        //   base = null
        //   imageFound = false
        //   break
        // }
        if (!R.isNil(base[splitNames[x].trim()])) {
          base = base[splitNames[x].trim()];
        } else {
          base = null;
          imageFound = false;
          break;
        }
      }

      if (imageFound) {
        data = base.image;
      }
    }

    let source = imageFound ? data : image_config.icon.notFoundImage.image;

    let imgWidth = 100,
      imgHeight = 100;

    if (imageFound) {
      //set width to image
      if (props.width) imgWidth = props.width;
      else imgWidth = base.width;

      //set height to image
      if (props.height) imgHeight = props.height;
      else imgHeight = base.height;
    } else {
      imgWidth = `100%`;
      imgHeight = `100%`;
    }

    return {
      width: imgWidth,
      height: imgHeight,
      src: source,
      preview: props.preview ? props.preview : false,
      draggable: false,
    };
  };

  const getSourceUri = () => {
    let source = props.uri ? props.uri : image_config.icon.notFoundImage.image;

    return {
      width: props.width ? props.width : 100,
      height: props.height ? props.height : 100,
      src: source,
      alt: source,
      preview: props.preview ? props.preview : false,
      draggable: false,
    };
  };

  let setting = {};
  switch (props.sourceType) {
    case "uri":
      setting = getSourceUri();
      break;

    default:
      setting = getSourceLocal();
      break;
  }

  useEffect(() => {
    const setLoading = () => {
      if (imageFound) {
        setIsLoading(false);
      } else {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    };
    setLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setting]);

  return (
    <>
      {!isLoading ? (
        <Image
          {...setting}
          style={{
            ...props.style,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            pointerEvents: "none",
          }}
        />
      ) : (
        <Spin spinning={isLoading} />
      )}
    </>
  );
};

export default Images;
