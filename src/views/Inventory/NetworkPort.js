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

class NetworkPort extends Component {
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
          <Card>
            <CardHeader>Network Port</CardHeader>
            <CardBody>
              <Row style={{marginLeft: '50px'}}>
              <Col xs='4'>
              <FormGroup>
                <Label >DC Site</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                </Input>
                <Label >Network Name</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                </Input>
                </FormGroup>
              </Col>
              </Row>
              <Card>
              <CardBody>
              <Row style={{marginLeft: '30px'}}>
                <Col xs='3'>
                <Label>Port Ref ID</Label>
                <Input type="text" id="portrefid"name="portrefid"/>
                <Label>Port No</Label>
                <Input type="text" id="portrefid"name="portrefid"/>
                <Label>Data Cable Pre-Laid</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                </Input>
                <Label>Network Type</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                </Input>
                </Col>
                <Row style={{marginLeft: '100px'}}></Row>
                <Col xs='3'>
                <Label>Status</Label>
                <Input type="select" name="select" id="select">
                <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                </Input>
                <Col xs='4'></Col>
                <Label>Description</Label>
                <Input type="text" id="description"name="description"/>
                <Label>Commission Date</Label>
                <Input type="text" id="portrefid"name="portrefid"/>
                <Label>Decommission Date</Label>
                <Input type="text" id="portrefid"name="portrefid"/>
                </Col> 
              </Row>
              </CardBody>
              <Col xs='2' style={{marginLeft: '460px', marginTop: '10px'}}>
                                <Button block color="primary"> Submit</Button>
                            </Col>
              </Card>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NetworkPort;
