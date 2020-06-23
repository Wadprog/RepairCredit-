





import React from "react";
import { Row, Col, Alert } from "react-bootstrap";
function PageAlert({
  variant,
  icon,
  msg,
  textColor = "dark",
  Inconcolor,
  border = true,
  rounded = true,
}) {
  return (
    <Alert
      variant={variant}
      className={`${border && "border"} ${rounded && "rounded"}`}
    >
      <Row>
        {icon != null && icon != "" && (
          <Col xs={1} className=' text-center'>
            <i className={`fa  fa-3x text-${Inconcolor} fa-${icon}`}></i>
          </Col>
        )}

        <Col>
          <p className={`text-${textColor}`}>{msg}.</p>
        </Col>
      </Row>
    </Alert>
  );
}

export default PageAlert;
