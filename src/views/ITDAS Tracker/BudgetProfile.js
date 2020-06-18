import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class budgetProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs ='12'>
          <Card >
            <CardHeader>
            <strong>BUDGET PROFILE </strong>
            </CardHeader>
              <CardBody>
                <Row>
                  <Col xs='2'>
                  <Label>Budget Memo Date</Label>
                  <Input type="date" id="budgetmemodate"name="budgetmemodate"/>
                  </Col>
                  <Col xs='2'>
                  <Label>Budget Memo Amount</Label>
                  <Input type="text" id="budgetmemoamount"name="budgetmemoamount" placeholder="RM"/>
                  </Col>
                  <Col xs='2'>
                  <Label>Budget Transfer Date</Label>
                  <Input type="date" id="budgettransferdate"name="budgettransferdate"/>
                  </Col>
                  <Col xs='3'>
                  <Label>Budget Transfer Man Days</Label>
                  <Input type="text" id="budgettransfermandays"name="budgettransfermandays"/>
                  </Col>
                  <Col xs='3'>
                  <Label>Budget Transfer Amount</Label>
                  <Input type="text" id="budgettransferamount"name="budgettransferamount" placeholder="RM"/>
                  </Col>
                </Row>
                
                </CardBody>

            <CardHeader>MOT Follow Up</CardHeader>
              <CardBody>
                <Row>
                  <Col xs='3'>
                  <Label>Advise Requestor To Sent MOT</Label>
                  <Input type="select" name="requestorMOT" id="requestorMOT">
                   <option value="">Please select</option>
                   <option value="Yes">Yes</option>
                   <option value="No">No</option>
                  </Input>
                  <Label>MOT Send to User</Label>
                  <Input type="select" name="requestorMOT" id="requestorMOT">
                   <option value="">Please select</option>
                   <option value="Yes">Yes</option>
                   <option value="No">No</option>
                  </Input>
                  </Col>
                  <Col xs='3'>
                  <Label>Date Sending</Label>
                  <Input type="date" id="budgetmemodate"name="budgetmemodate"/>    
                </Col>
           </Row>
          </CardBody>

          <CardHeader>MOT Received by GIT Business Finance</CardHeader>
              <CardBody>
                <Row>
                  <Col xs='3'>
                  <Label>MOT Received</Label>
                  <Input type="select" name="requestorMOT" id="requestorMOT">
                   <option value="">Please select</option>
                   <option value="Yes">Yes</option>
                   <option value="No">No</option>
                  </Input> 
                  </Col>
                  <Col xs='3'>
                  <Label>Remarks</Label>
                  <Input type="textarea" id="remarks"name="remarks"/>   
                </Col>
           </Row>
          </CardBody>

            <CardHeader>
            <strong>STATUS DATE PROFILE</strong>
            </CardHeader>
              <CardBody>
                <Row>
                  <Col xs='3'>
                  <Label>Request Date</Label>
                  <Input type="date" id="requestdate"name="requestdate"/>
                  <Label>BE Received Date</Label>
                  <Input type="date" id="BEreceiveddate"name="BEreceiveddate"/>
                  </Col>
                  <Col xs='3'>
                  <Label>ITDC Approved Date</Label>
                  <Input type="date" id="ITDCapproveddate"name="ITDCapproveddate"/>
                  <Label>IBER Approved Date</Label>
                  <Input type="date" id="IBERapproveddate"name="IBERapproveddate"/>
                  </Col>
                  <Col xs='3'>
                  <Label>PCM/PSC Approved Date</Label>
                  <Input type="date" id="PCMPSCapproveddate"name="PCMPSCapproveddate"/>
                  </Col>
                  </Row>
                </CardBody>
              </Card>

         
          </Col>
        </Row>
      </div>
    );
  }
}

export default budgetProfile;
