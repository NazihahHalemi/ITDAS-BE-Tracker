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
            <strong>BUDGET PROFILE</strong>
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
                  </Col>
                  <Col xs='3'>
                  <Label>MOT Send to User</Label>
                  <Input type="select" name="MOTtouser" id="MOTtouser">
                   <option value="">Please select</option>
                   <option value="Yes">Yes</option>
                   <option value="No">No</option>
                  </Input>
                  </Col>
                  <Col xs='3'>
                  <Label>Date Sending</Label>
                  <Input type="date" id="datesending"name="datesending"/>    
                </Col>
           </Row>
          </CardBody>

          <CardHeader>MOT Received by GIT Business Finance</CardHeader>
              <CardBody>
                <Row>
                  <Col xs='3'>
                  <Label>MOT Received</Label>
                  <Input type="select" name="MOTreceived" id="MOTreceived">
                   <option value="">Please select</option>
                   <option value="Yes">Yes</option>
                   <option value="No">No</option>
                  </Input> 
                  </Col>
                  <Col xs='6'>
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

                  <Col xs="12" sm="6" md="4">
                  <Card className="border-primary">
                  <CardHeader>
                   Design & Mandays Approval
                  </CardHeader>
                  <CardBody>
                  <Col xs='8'>
                  <Label>ITDC Approved Ball Park</Label>
                  <Input type="date" id="ITDCapprovedballpark"name="ITDCapprovedballpark"/>
                  <Label>ITDC Approved Final</Label>
                  <Input type="date" id="ITDCapprovedfinal"name="ITDCapprovedfinal"/>
                  </Col>
                  </CardBody>
                  </Card>
                  </Col>

                  <Col xs="12" sm="6" md="5">
                  <Card className="border-primary">
                  <CardHeader>
                   Business Case Approval
                  </CardHeader>
                  <CardBody>
                  <Col xs='8'>
                  <Label>IBER Approved Ball Park</Label>
                  <Input type="date" id="IBERapprovedballpark"name="IBERapprovedblackpark"/>
                  <Label>IBER Approved Final</Label>
                  <Input type="date" id="IBERapprovedfinal"name="IBERapprovedfinal"/>
                  <Label>PCM1/PSC Approved </Label>
                  <Input type="date" id="IBERapprovedballpark"name="IBERapprovedblackpark"/>
                  <Label>PCM2/PSC Approved </Label>
                  <Input type="date" id="IBERapprovedfinal"name="IBERapprovedfinal"/>
                  </Col>
                  </CardBody>
                  </Card>
                  </Col>

                  </Row>
                </CardBody>

                <CardFooter>
            <div className="form-button">
            <Row style={{ marginBottom: '20px' }}>
              <Col>
                <Button type="back" size="sm" color="primary"> Back</Button>
                <Button type="save" size="sm" color="success"> Save</Button>
                <Button type="next" size="sm" color="dark"> Home</Button>
                </Col>
              </Row>
              </div>
            </CardFooter>
              </Card>

         
          </Col>
        </Row>
      </div>
    );
  }
}

export default budgetProfile;
