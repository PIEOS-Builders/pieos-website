import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
import Image from "components/Image";
import "./ImageCard.scss";

const ImageCard = ({ className, imageFileName, imageAlt, header, subheader, subheader2, extraInfo }) => {
  return (
    <Card className={clsx("image-card bg-dark text-white text-center", className)}>
      <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} />
      <Card.ImgOverlay className="no-padding">
        <div className="logo">
          <Image
            className="mx-auto logo-image"
            // fileName="pieos-logo/pieos-logo-pie-circle.png"
            fileName="pieos-logo/pieos-logo-frame-yellow.png"
            alt="PIEOS Logo"
          />
        </div>
        <Container>
          <div className="intro-text">
            <div className="intro-lead-in">{subheader}</div>
            <div className="intro-lead-in-2">{subheader2}</div>
            <div className="intro-heading text-uppercase">
              {header}
            </div>
            {extraInfo}
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  subheader2: PropTypes.string,
  extraInfo: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  imageFileName: null,
  imageAlt: null,
  header: "",
  subheader: "",
  subheader2: "",
  extraInfo: null,
};

export default ImageCard;
