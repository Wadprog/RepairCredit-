import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function SimpleCard({
  children,
  titleLeft,
  titleIcon,
  titleLink,
  titleLinkName,
  iconColor = "primary",
}) {
  return (
    <Card>
      <Card.Header className='px-4 py-2 text-sm text-dark'>
        <Row>
          <Col>
            {titleIcon != null && titleIcon != "" && (
              <i className={`fa fa-${titleIcon} mr-2 text-${iconColor}`}></i>
            )}
            {titleLeft}
          </Col>
          {titleLinkName != null && titleLinkName != "" && (
            <Col className='text-right  text-sm'>
              <Link to={`/${titleLink}`}>{titleLinkName}</Link>
            </Col>
          )}
        </Row>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default SimpleCard;
