import React from "react";
import { Card, Table, Row, Col } from "react-bootstrap";
import { dataByBureau, allFields } from "../../utils/creditItems";
import { capitalLizeString, camelobjectToString } from "../../utils/StringOperations";
function CreditItems({ bureauData }) {
  const creditBureaus = ["transUnion", "experian", "equifax"];

  const allKeys = allFields(bureauData.creditData[0]);

  return (
    <div>
      <Card>
        <Card.Body>
          <Table striped bordered hover size='sm' className='text-center'>
            <thead>
              <tr>
                <th></th>
                {creditBureaus.map(creditBureau => (
                  <th>{capitalLizeString(creditBureau)}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan={4} className='bg-secondary'>
                  <h4 className='text-center'>{bureauData.creditor}</h4>
                </td>
              </tr>
              <tr>
                <td>Account Name</td>

                {creditBureaus.map(creditBurr => (
                  <td>
                    {bureauData.creditData.map(creditBureauInfo => {
                      if (creditBureauInfo.name === creditBurr)
                        return bureauData.creditor;
                    })}
                  </td>
                ))}
              </tr>

              {allKeys.map(key => (
                <tr key={key}>
                  <td className='text-left'>{camelobjectToString(key)}</td>
                  {creditBureaus.map(creditBurr => (
                    <td>{dataByBureau(bureauData, creditBurr, key)}</td>
                  ))}
                </tr>
              ))}

              <tr>
                <td>Show more details </td>
                <td colSpan={3}></td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreditItems;
