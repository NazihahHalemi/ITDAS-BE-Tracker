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
  Table,
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
                <Label>PIP Pillar</Label>
                <Input type="text" id="PIPpillar"name="PIPpillar"/>
                </Col>

                <Col xs='2'>
                <Label>RM</Label>
                <Input type="text" id="RM"name="RM" placeholder="RM"/>
                <FormText className="help-block">Please Input RM Figure for PIP Pillar Revenue Generation</FormText>
                </Col>

                <Col xs='3'>
                <Label>MD Category</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="Simple">Simple (less or equal 50)</option>
                        <option value="Medium">Medium (less or equal 250)</option>
                        <option value="Complex">Complex (more than 250)</option>
                </Input>
                </Col>

                <Col xs='2'>
                <Label>Ballpark TM</Label>
                <Input type="text" id="ballparkTM"name="ballparkTM"/>
                </Col> 

                <Col xs='2'>
                <Label>Ballpark Vendor</Label>
                <Input type="text" id="ballparkVendor"name="ballparkVendor"/>
                </Col> 

                <Col xs="12" sm="6" md="6">
                  <Card className="border-primary">
                  <CardHeader className="font-weight-bolder bg-info">
                   TM
                  </CardHeader>
                  <CardBody>
                  <Row>
                  <Col xs='5'>
                  <Label>Solution & Design</Label>
                  <Input type="text" id="solutionDesign"name="solutionDesign"/>
                  <Label>Build</Label>
                  <Input type="text" id="build"name="build"/>
                  </Col>
                  <Col xs='5'>
                  <Label>Test</Label>
                  <Input type="text" id="test"name="test"/>
                  <Label>Total IA</Label>
                  <Input type="text" id="totalIA"name="totalIA"/>
                  </Col>
                  </Row>
                  </CardBody>
                  </Card>
                  </Col>

                  <Col xs="12" sm="6" md="6">
                  <Card className="border-primary">
                  <CardHeader className="font-weight-bolder bg-info">
                   External
                  </CardHeader>
                  <CardBody>
                  <Row>
                  <Col xs='5'>
                  <Label>Solution & Design</Label>
                  <Input type="text" id="solutionDesign"name="solutionDesign"/>
                  <Label>Build</Label>
                  <Input type="text" id="build"name="build"/>
                  </Col>
                  <Col xs='5'>
                  <Label>Test</Label>
                  <Input type="text" id="test"name="test"/>
                  <Label>Total IA</Label>
                  <Input type="text" id="totalIA"name="totalIA"/>
                  </Col>
                  </Row>
                  </CardBody>
                  </Card>
                  </Col>

                <Col xs='3'>
                <Label>Impacted Sytem</Label>
                <Input type="text" id="impactedSystem"name="impactedSystem"/>
                <button class="btn btn-primary" type="submit">Add</button>
                </Col>
                <Col xs='3'>
                <Label>Mandays</Label>
                <Input type="text" id="mandays"name="mandays" />
                </Col>
                <Col xs='3'>
                <Label>Vendor</Label>
                <Input type="text" id="vendor"name="vendor"/>
                <Label>Mandays</Label>
                <Input type="text" id="mandays"name="mandays" />
                
                </Col>
                <Col xs='2'>
                <Label>Systems</Label>
                <Input type="text" id="system"name="system" />
                <button class="btn btn-primary" type="submit">Add</button>
                </Col>

            <Col xs="12" lg="6">
            <Card>
              <CardBody>
                <Table striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>No</th>
                    <th>System Name</th>
                    <th>Mandays</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Nova</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Siebel</td>
                    <td>5</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
                
          <Col xs="12" lg="6">
            <Card>
              <CardBody>
                <Table striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>No</th>
                    <th>Vendor Name</th>
                    <th>System Name</th>
                    <th>Mandays</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>AAA</td>
                    <td>Nova</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>BBB</td>
                    <td>Siebel</td>
                    <td>5</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

                <Col xs='3'>
                <strong>Grand Total IA</strong>
                <FormText className="help-block">Total IA (TM) + Total IA (External)</FormText>
                </Col>
                <Col xs='3'><Input type="text" id="impactedSystem"name="impactedSystem"/></Col>
                
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
