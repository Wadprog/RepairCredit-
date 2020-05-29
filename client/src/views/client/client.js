import React, { useEffect } from "react";
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";

import { loadCoworkers } from "../../redux/actions/client";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

const TableList = ({ loadCoworkers, coworkers }) => {
  useEffect(() => {
    loadCoworkers();
  }, []);

  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color='primary'>
            <h4 className={classes.cardTitleWhite}>Clients'list</h4>
            <p className={classes.cardCategoryWhite}>
              List of all clients in the organization
              <a className='ml-2 btn btn-primary '> add New</a>
            </p>
          </CardHeader>
          <CardBody>
            {coworkers ? (
              <Table
                tableHeaderColor='primary'
                tableHead={["Name", "Type", "Phone", "Email", "-"]}
                tableData={coworkers.map((coworker) => {
                  return [
                    `${coworker.firstname}  ${coworker.lastname}`,
                    coworker.levelAccess,
                    "809-767-34-78",
                    coworker.email,
                    <a className='btn btn-outline-primary'>View</a>,
                  ];
                })}
              />
            ) : null}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  coworkers: state.employee.coworkers,
});

export default connect(mapStateToProps, { loadCoworkers })(TableList);
