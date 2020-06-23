

import React from "react";
import { Row, Col, Alert } from "react-bootstrap";
function PageAlert({
  variant,
  icon,
  children,
  msg,
  textColor = "dark",
  Inconcolor,
  border = true,
  rounded = true,
}) {
  return (
    <Alert
      variant={variant}
      className={`${border && "border"} ${rounded && "rounded"} ${"mt-3"}`}
    >
      <Row>
        {icon != null && icon != "" && (
          <Col xs={1} className=' text-center'>
            <i className={`fa  fa-3x text-${Inconcolor} fa-${icon}`}></i>
          </Col>
        )}

        <Col>
          <p className={`text-${textColor}`}>{msg}.  
          {children != null && children != "" && (
          <span>{children}</span>
        )}</p>
        </Col>
      </Row>
    </Alert>
  );
}

export default PageAlert;
