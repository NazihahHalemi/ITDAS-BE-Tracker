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

class mandaysProfile extends Component {
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
            <CardHeader>
            <strong>MANDAYS PROFILE</strong>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs='3'>
                <Label>Ballpark TM</Label>
                <Input type="text" id="ballparkTM"name="ballparkTM"/>
                <Label>Total IA TM</Label>
                <Input type="text" id="totalIATM"name="totalIATM"/>
                <Label>Solution & Design TM</Label>
                <Input type="text" id="solutionDesignTM"name="solutionDesignTM"/>
                <Label>Build TM</Label>
                <Input type="text" id="buildTM"name="buildTM"/>
                <Label>Test TM</Label>
                <Input type="text" id="testTM"name="testTM"/>
                </Col>

                <Col xs='3'>
                <Label>Ballpark Vendor</Label>
                <Input type="text" id="ballparkVendor" name="ballparkVendor"/>
                <Label>Total IA Vendor</Label>
                <Input type="text" id="totalIAVendor"name="totalIAVendor"/>
                <Label>Solution & Design Vendor</Label>
                <Input type="text" id="solutionDesignVendor"name="solutionDesignVendor"/>
                <Label>Build Vendor</Label>
                <Input type="text" id="buildVendor"name="buildVendor"/>
                <Label>Test Vendor</Label>
                <Input type="text" id="testVendor"name="testVendor"/>
                </Col>

                <Col xs='3'>
                <Label>PIP Pillar</Label>
                <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="P1">Revenue Generation</option>
                        <option value="P2">Customer Excellence</option>
                        <option value="P3">Manpower Optimization</option>
                        <option value="P4">Superior Network</option>
                </Input>
                <Label>MD Category</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="Simple">Simple (less or equal 50)</option>
                        <option value="Medium">Medium (less or equal 250)</option>
                        <option value="Complex">Complex (more than 250)</option>
                </Input>
                </Col>
                <Col xs='3'>
                <Label>Please Input RM Figure for PIP Pillar Revenue Generation</Label>
                <Input type="text" id="PIPrevenue"name="PIPrevenue" placeholder="RM"/>
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

export default mandaysProfile;
