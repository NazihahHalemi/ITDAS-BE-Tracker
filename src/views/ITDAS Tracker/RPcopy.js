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

class requestProfile extends Component {
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
            <CardHeader>Request Profile</CardHeader>
            <CardBody>
              <Row >
              <Col xs='4'>
              <FormGroup>
              <Label>Reference</Label>
                <Input type="text" id="referenceid"name="referenceid"/>
                <Label >Category</Label>
                <Input type="select" name="category" id="categorybe">
                        <option value="">Please select</option>
                        <option value="BE">BE</option>
                        <option value="Non-BE">Non-BE</option>
                        <option value="MVP">MVP</option>
                </Input>
                <Label >Type</Label>
                <Input type="select" name="type" id="typebe">
                        <option value="">Please select</option>
                        <option value="product">Product</option>
                        <option value="non-product">Non-Product</option>
                        
                </Input>

                <Label >System</Label>
                <Input type="select" name="system" id="systemid">
                        <option value="0">Please select</option>
                        <option value="product">Product</option>
                        <option value="non-product">Non-Product</option>
                        
                </Input>

                <Label >System/Ref/Project/Initiative Name</Label>
                <Input type="text" id="projectName"name="projectName"/>

                <Label >Name/Description</Label>
                <Input type="textarea" id="descriptionid"name="description"/>
                
                </FormGroup>
              </Col>
              <Col xs='2'>
              <Label>Agile</Label>
              <Input type="select" name="system" id="system">
                        <option value="">Please select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        
                </Input>
                <Label>AOP</Label>
              <Input type="select" name="aop" id="aop">
                        <option value="">Please select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        
                </Input>

                <Label>Ana Plan No/Ref. No</Label>
                <Input type="text" id="planNo"name="planNo"/>
                <Label>Impacted Systems</Label>
                <Input type="textarea" id="impactedsystem"name="impactedsystem"/>

                <Label>System
</Label>
              <Input type="select" name="systemcategory" id="systemcategory">
                        <option value="">Please select</option>
                        <option value="Build">Build</option>
                        <option value="Testing">Testing</option>
                        <option value="Deployed">Deployed</option>
                        <option value="Completed">Completed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="KIV">KIV</option>
                        <option value="Cancel">Cancel</option>
                        <option value="Close">Close</option>
                        
                </Input>
              </Col>
              </Row>
              <Card>
                <CardBody>
              <Row>
                <Col xs='3'>
                <Label>Reference</Label>
                <Input type="text" id="reference"name="reference"/>
                <Label >Category</Label>
                <Input type="select" name="category" id="categorybe">
                        <option value="">Please select</option>
                        <option value="BE">BE</option>
                        <option value="Non-BE">Non-BE</option>
                        <option value="MVP">MVP</option>
                </Input>
                <Label>Type</Label>
                <Input type="select" name="type" id="typebe">
                        <option value="">Please select</option>
                        <option value="product">Product</option>
                        <option value="non-product">Non-Product</option>    
                </Input>
                <Label>System</Label>
                <Input type="select" name="system" id="systemid">
                        <option value="0">Please select</option>
                        <option value="product">Product</option>
                        <option value="non-product">Non-Product</option>         
                </Input>
                <Label >System/Ref/Project/Initiative Name</Label>
                <Input type="text" id="projectName"name="projectName"/>

                <Label >Name/Description</Label>
                <Input type="textarea" id="descriptionid"name="description"/>
                </Col>
                <Col xs='3'>
                <Label>Agile</Label>
                <Input type="select" name="system" id="system">
                        <option value="">Please select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        
                </Input>
                <Label>AOP</Label>
                <Input type="select" name="aop" id="aop">
                        <option value="">Please select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        
                </Input>
                <Label>Ana Plan No/Ref. No</Label>
                <Input type="text" id="planNo"name="planNo"/>
                <Label>Impacted Systems</Label>
                <Input type="textarea" id="impactedsystem"name="impactedsystem"/>
                <Label>System</Label>
                <Input type="select" name="systemcategory" id="systemcategory">
                        <option value="">Please select</option>
                        <option value="Build">Build</option>
                        <option value="Testing">Testing</option>
                        <option value="Deployed">Deployed</option>
                        <option value="Completed">Completed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="KIV">KIV</option>
                        <option value="Cancel">Cancel</option>
                        <option value="Close">Close</option>
                        
                </Input>
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

export default requestProfile;
