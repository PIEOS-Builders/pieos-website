import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";

const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, telegram, telegramLink, email } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          <p className="text-muted mb-5">{subheader}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={4} className="ml-auto text-center">
          <Icon iconName="TelegramIcon" size="4x" className="text-primary mb-3" />
          <a className="d-block" href={`${telegramLink}`}>
            {telegram}
          </a>
        </Col>
        <Col lg={4} className="mr-auto text-center">
          <Icon iconName="EnvelopIcon" size="4x" className="text-primary mb-3" />
          <a className="d-block" href={`mailto:${email}`}>
            {email}
          </a>
        </Col>
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
