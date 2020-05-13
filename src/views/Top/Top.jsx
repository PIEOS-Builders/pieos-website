import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";
import Icon from "components/Icon";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, subheader2, imageFileName, jumpToAnchor, jumpToAnchorText, jumpToAnchor2, jumpToAnchorText2 } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  let extraInfoPart;
  if (jumpToAnchor && jumpToAnchorText) {
    extraInfoPart = (
      <>
        <Button size="lg" variant="dark" className="text-uppercase" onClick={scrollToSection} href={jumpToAnchor} target="_blank">
          <Icon iconName="FilePdfIcon" inverse size="1x"/> &nbsp;
          {jumpToAnchorText}
        </Button><br/><br/>
        <Button size="m" variant="primary" className="text-uppercase" onClick={scrollToSection} href={jumpToAnchor2} target="_blank">
          <Icon iconName="ChartPieIcon" size="1x"/> &nbsp;
          {jumpToAnchorText2}
        </Button>
      </>
    );
  }

  return (
    <ImageCard
      imageFileName={imageFileName}
      header={header}
      subheader={subheader}
      subheader2={subheader2}
      extraInfo={extraInfoPart}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
