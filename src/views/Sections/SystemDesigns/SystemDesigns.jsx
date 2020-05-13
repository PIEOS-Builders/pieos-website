import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import SystemDesignItem from "components/SystemDesignItem";
import PageSection from "components/PageSection";
import "./SystemDesigns.scss";

const SystemDesigns = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, systemDesigns } = frontmatter;

  return (
    <PageSection className={clsx("systemdesign-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {systemDesigns.map(
          ({ content, extraInfo, header, imageFileName, imageFileNameDetail, subheader }) => (
            <SystemDesignItem
              key={header}
              imageFileName={imageFileName}
              header={header}
              subheader={subheader}
              content={content}
              imageFileNameDetail={imageFileNameDetail}
              extraInfo={
                <ul>
                  {extraInfo.map((ei) => (
                    <li key={ei}>{ei}</li>
                  ))}
                </ul>
              }
            />
          ),
        )}
      </Row>
    </PageSection>
  );
};

SystemDesigns.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

SystemDesigns.defaultProps = {
  className: null,
  frontmatter: null,
};

export default SystemDesigns;
