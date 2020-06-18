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

class requestor extends Component {
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
            <CardHeader>REQUESTOR</CardHeader>
              <CardBody>
                <Row>
                  <Col xs='3'>
                  <Label>Requestor Name</Label>
                  <Input type="text" id="requestorname"name="requestorname"/>
                  </Col>
                   </Row>
                    </CardBody>
                    <Card>
            <CardHeader>CONSULTANTS</CardHeader>
            </Card>
              <CardBody>
                <Row>
                  <Col xs='3'>
                  <Label>Assignment Group</Label>
                  <Input type="select" name="assignmentgroup" id="assignmentgroup">
                   <option value="">Please select</option>
                   <option value="TM ONE">TM ONE</option>
                   <option value="UNIFI/CX">UNIFI/CX</option>
                   <option value="NT">NT</option>
                   <option value="CENTRAL FUNCTION">CENTRAL FUNCTION</option>
                   <option value="TMW/RRM">TMW/RRM</option>
                   <option value="BPM">BPM</option>
                  </Input>
                        </Col>
                        </Row>
                    </CardBody>
                    <Card>
            <CardHeader>GITD ASSESSORS</CardHeader>
            </Card>
              <CardBody>
                <Row>
                  <Col xs='3'>
                  <Label>GITD Names</Label>
                  <Input type="text" id="gitdnames"name="gitdnames"/>
                  <Label>GITD Names</Label>
                <Input type="text" id="gitdteams"name="gitdteams"/>
                  </Col>
                  </Row>
                </CardBody>
              </Card>
          <Card>
            <CardHeader>Requestor</CardHeader>
            <CardBody>
              <Row>
                <Col xs='3'>
                <Label>Requestor Name</Label>
                <Input type="text" id="requestorname"name="requestorname"/>
                <Label >Assignment Group</Label>
                <Input type="select" name="category" id="categorybe">
                        <option value="">Please select</option>
                        <option value="TM ONE">TM ONE</option>
                        <option value="UNIFI/CX">UNIFI/CX</option>
                        <option value="NT">NT</option>
                        <option value="CENTRAL FUNCTION">CENTRAL FUNCTION</option>
                        <option value="TMW/RRM">TMW/RRM</option>
                        <option value="BPM">BPM</option>
                </Input>
                <Label>GITD Names</Label>
                <Input type="text" id="gitdnames"name="gitdnames"/>
                <Label>GITD Names</Label>
                <Input type="text" id="gitdnames"name="gitdnames"/>
                </Col>
                <Col xs='3'>
                <Label>Requestor Email</Label>
                <Input type="text" id="requestoremail"name="requestoremail"/>
                <Label>Consultant 1</Label>
                <Input type="select" name="consultant1" id="consultant1">
                        <option value="">Please select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>         
                </Input>
                <Label>Consultant 2</Label>
                <Input type="select" name="consultant2" id="consultant2">
                        <option value="">Please select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>         
                </Input>
                <Label>GITD Teams</Label>
                <Input type="text" id="gitdteams"name="gitdteams"/>
                <Label>GITD Teams</Label>
                <Input type="text" id="gitdteams"name="gitdteams"/>
                </Col>

                <Col xs='3'>
                <Label>LOB</Label>
                <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="TMW">TMW</option>
                        <option value="TM ONE">TM ONE</option>
                        <option value="GITD">GITD</option>
                        <option value="RRM">RRM</option>
                        <option value="SFC">SFC</option>
                        <option value="DCX">DCX</option>
                        <option value="CXT">CXT</option>
                        <option value="GNT">GNT</option>
                        <option value="CF">CF</option>
                </Input>
                <Label>Tag Cost</Label>
                <Input type="text" id="tagcost"name="tagcost"/>
                <Label>Tag Cost</Label>
                <Input type="text" id="tagcost"name="tagcost"/>
                <Label >Tag Cost</Label>
                <Input type="text" id="tagcost"name="tagcost"/>
                <Label>Tag Cost</Label>
                <Input type="text" id="tagcost"name="tagcost"/>
                </Col>

                <Col xs='3'>
                <Label>Actual PBE No</Label>
                <Input type="text" id="actualpbeno"name="actualpbeno"/>
                <Label>Consultant 3</Label>
                <Input type="text" id="consultant3"name="consultant3"/>
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

export default requestor;
