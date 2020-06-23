import React from "react";
import { Form, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageAlert from "../../components/PageAlert";
function Tab2() {
  return (
    <div>
      <PageAlert
        msg="Simple audit is the ultimate sales tool for a potential client 
      considering your services. With 1 click it creates an in-depth credit
      analysis report for your client, showing items affecting the score and
       next steps. Our default template will automatically fill in each client's
        name and your company information with no editing needed. you can modify
         it or add your own templates, but we recommend not making any changes at
          all"
        variant='warning'
        children={
          <span>
            <i class='fa fa-play-circle text-primary'></i>
            <Link to='#'> Watch a quick video</Link>
          </span>
        }
      />

      <div className='d-flex justify-content-center mt-2'>
        <span className='h4'>Generate simple Audit Now</span>
      </div>
      <div className='d-flex justify-content-center mt-2'>
        <span className=''>Using data from SmartCredit imported report</span>
      </div>
      <div className='d-flex justify-content-center'>
        <span className=''>(Last imported 3 days ago)</span>
      </div>
      <div className='d-flex justify-content-center mt-2'>
        <span className=''>using template</span>
      </div>
      <div className='d-flex justify-content-center mt-2'>
        <Form className='p-3'>
          <Form.Group>
            <Form.Control md={6} size='sm' as='select' custom>
              <option>Simple Audit (default)</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
      <div className='d-flex justify-content-center mt-2 mb-4'>
        <Button size='sm' variant='primary' className='px-2'>
          Generate Simple Audit
        </Button>
      </div>
      <div className='mt-4'>
        <span className='h4'>Save Audit</span>
        <Table size='sm' className='table-border small'>
          <thead className='border-bottom-0 table-borderless'>
            <tr>
              <th>Audit Name</th>
              <th>Date Created</th>
              <th>Team Member</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-bottom p-0 m-0'>
              <td>John Doe Credit Analysis</td>
              <td>Jun 18 2020 03:26 pm</td>
              <td>Carl</td>
              <td>
                <Form className=''>
                  <Form.Group>
                    <Form.Control md={4} size='sm' as='select' custom>
                      <option>Actions</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </td>
            </tr>
          </tbody>
          <p className='mt-2'>
            <span className='text-primary'>Total: </span>
            <span>1</span>
          </p>
        </Table>
      </div>
    </div>
  );
}

export default Tab2;
