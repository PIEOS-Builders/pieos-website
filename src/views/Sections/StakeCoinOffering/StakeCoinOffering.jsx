import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import Image from "components/Image";
import "./StakeCoinOffering.scss";

const StakeCoinOffering = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, subheader2, subheader3, pieosDapp, pieosDappLink } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={10} className="text-center">
          <h1 className="text-dark mt-0">{header}</h1>
          <h4 className="text-warning mt-0 mb-3">{subheader}</h4>
          <p className="sco-description text-black-50 mb-3">
            {subheader2}
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="ml-auto text-center mb-4">
          <a className="d-block" href={`${pieosDappLink}`} target="_blank" rel="noopener noreferrer">
            <Image className="pieos-dapp-icon d-block mx-auto" fileName="pieos-logo.png" alt="pieos-logo.png" />
            <span className="text-warning">{pieosDapp}</span>
          </a>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <p className="sco-notice text-muted mb-3">
            {subheader3}
          </p>
        </Col>
      </Row>
    </PageSection>
  );
};

StakeCoinOffering.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

StakeCoinOffering.defaultProps = {
  className: null,
  frontmatter: null,
};

export default StakeCoinOffering;
