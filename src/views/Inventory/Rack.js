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

class Rack extends Component {
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
            <CardHeader>Rack</CardHeader>
            <CardBody>
              <Row style={{marginLeft: '250px'}}>
              <Col xs='4'>
              <FormGroup>
                <Label >DC Site</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                </Input>
                <Label >DC Location</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                </Input>
                </FormGroup>
              </Col>
              <Col xs='4'>
              <Label>Room</Label>
              <Input type="text" id="room"name="room"/>
              </Col>
              </Row>
              <Card>
                <CardBody>
              <Row>
                <Col xs='3'>
                <Label>Rack ID</Label>
                <Input type="text" id="rackid"name="rackid"/>
                <Label>Rack No</Label>
                <Input type="text" id="rackno"name="rackno"/>
                <Label>Rack Type</Label>
                <Input type="text" id="racktype"name="racktype"/>
                <Label>Rack Size</Label>
                <Input type="text" id="racksize"name="racksize"/>
                </Col>
                <Col xs='3'>
                <Label>Power Density</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                </Input>
                <Label>Breaker Type</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                </Input>
                <Label>Power Phase</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                </Input>
                <Label>Cable ID</Label>
                <Input type="text" id="cableid"name="cableid"/>
                </Col>
                <Col xs='3'>
                <Label>PDU A</Label>
                <Input type="text" id="pdua"name="pdua"/>
                <Label>PDU B</Label>
                <Input type="text" id="pdub"name="pdub"/>
                <Label>Source A</Label>
                <Input type="text" id="sourcea"name="sourcea"/>
                <Label>Source B</Label>
                <Input type="text" id="sourceb"name="sourceb"/>
                <Label>Power Pre-Laid</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                </Input>
                <Label>Cabling Pre-Laid</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                </Input>
                </Col>
                <Col xs='3'>
                <Label>Status</Label>
                <Input type="select" name="select" id="select">
                <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                </Input>
                <Label>Description</Label>
                <Input type="text" id="description"name="description"/>
                </Col> 
              </Row>
              </CardBody>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="primary">Submit</Button>
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

export default Rack;
