import React, { Fragment, useEffect, useState } from "react";
import { Alert, OverlayTrigger, Tooltip, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { loadCoworkers } from "../../../redux/actions/partners";

import Addpartners from "../../../components/Forms/AddPartnersModal";


function Partners({ loadCoworkers, partners }) {
  useEffect(() => {
    loadCoworkers();
  }, []);

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div className="row mb-2">
        <div className="col-12">
          <div className="d-flex justify-content-between">
            <h5>My Team (The Oasis Firm)</h5>
            <h5>
              <span
                className="e-circle text-center"
                style={{ height: 25, width: 25 }}
              >
                <i className="fa fa-play"></i>
              </span>
              <span>Watch a quick video</span>
              <span>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => {
                    setModalShow(true);
                  }}
                >
                  Add New Team Member
                </Button>
              </span>
            </h5>
          </div>
        </div>
      </div>

      <Alert variant="warning">
        Click "Add New Team Member" to give login access to your co-workers and
        employees. Each team member must have their own unique User ID and
        Password. User ID's cannot be shared.
      </Alert>

      {partners != null && partners.length > 0 ? (
        <Fragment>
          <Alert variant="light" className="border rounded">
            Hold your mouse over a team member to display the options to Resend
            Login Details or Delete the Team Member. If you're a new user, be
            sure to click on your team member profile to enter all your contact
            details.
          </Alert>
          <div className="row pl-2 mb-3">
            {partners.map((partner) => (
              <div className="col col-4" key={partner._id}>
                <>
                  <OverlayTrigger
                    key={1}
                    placement={"top"}
                    overlay={
                      <Tooltip>
                        <Button href="#">Resend link</Button>
                      </Tooltip>
                    }
                  >
                    <Card className=" text-center">
                      <Card.Body className=" bg-secondary text-white text-center">
                        <i className="fa fa-user fa-5x"></i>
                      </Card.Body>
                      <Card.Footer>
                        {partner.firstName + " " + partner.lastName}
                      </Card.Footer>
                    </Card>
                  </OverlayTrigger>
                </>
              </div>
            ))}
          </div>
        </Fragment>
      ) : (
        <p> there are no partners created yet</p>
      )}
      <Alert variant="light" className="border rounded">
        <div className="row">
          <div className="col-1 text-center">
            <i className="fa fa-lightbulb-o fa-3x text-warning"></i>
          </div>
          <div className="col-11">
            The account owner cannot change, as that is who has created this
            account, but if you would like to set a different name and email for
            all automated notifications sent from your company, visit Automated
            Notification Options.
          </div>
        </div>
      </Alert>

      <Alert variant="warning">
        Your account has one owner: the person who signed our user agreement.
        The account owner's name and User ID cannot be modified or deleted, and
        no other person may request changes to the account. If you need to
        contact us, always write from the same email address you signed up with.
        This is for safety and security of the data we store. Read more.
      </Alert>

      <Alert variant="light" className="border rounded">
        <div className="row">
          <div className="col-1 text-center">
            <i className="fa fa-exclamation-triangle fa-3x text-warning"></i>
          </div>
          <div className="col-11">
            The account owner cannot change, as that is who has created this
            account, but if you would like to set a different name and email for
            all automated notifications sent from your company, visit Automated
            Notification Options.
          </div>
        </div>
      </Alert>

      <Addpartners show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.partners.loading,
  partners: state.person.coworkers,
});

const mapDispatchToProps = {
  loadCoworkers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Partners);
