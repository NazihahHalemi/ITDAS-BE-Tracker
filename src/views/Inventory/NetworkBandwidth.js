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

class NetworkBandwidth extends Component {
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
            <CardHeader>Network Bandwith</CardHeader>
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
                </FormGroup>
              </Col>
              </Row>
              <Card>
              <CardBody>
              <Row style={{marginLeft: '230px'}}>
                <Col xs='3'>
                <Label>Network Ref ID</Label>
                <Input type="text" id="networkrefid"name="networkrefid"/>
                <Label>Network Name</Label>
                <Input type="text" id="networkname"name="networkname"/>
                <Label>Bandwidth (MB)</Label>
                <Input type="text" id="bandwidthmb"name="bandwidthmb"/>
                <Label>Commission Date</Label>
                <Input type="text" id="portrefid"name="portrefid"/>
                <Label>Decommission Date</Label>
                <Input type="text" id="portrefid"name="portrefid"/>
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
                <Label>Description</Label>
                <Input type="text" id="description"name="description"/>
                </Col> 
              </Row>
              </CardBody>
              <Col xs='2' style={{marginLeft: '560px', marginTop: '20px'}}>
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

export default NetworkBandwidth;
