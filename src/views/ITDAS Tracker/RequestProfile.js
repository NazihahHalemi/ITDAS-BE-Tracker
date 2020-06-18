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
                <Label>Plan PBE No</Label>
                <Input type="text" id="planpbeno"name="planpbeno"/>
                <Label>Plan PBE Date/RFS Date</Label>
                <Input type="date" id="planpbedate"name="planpbedate"/>
                <Label>Quarterly Plan RFS Date</Label>
                <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="Q1">Q1</option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">Q3</option>
                        <option value="Q4">Q4</option>
                </Input>
                <Label >Latest Remark/Update</Label>
                <Input type="textarea" id="latestremark"name="latestremark"/>
                <Label>Status Description</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="SIT">SIT</option>
                        <option value="UAT">UAT</option>
                        <option value="Regression">Regression</option>
                        <option value="PT">PT</option>
                        <option value="Pre Prod">Pre Prod</option>
                </Input>
                </Col>
                <Col xs='3'>
                <Label>Actual PBE No</Label>
                <Input type="text" id="actualpbeno"name="actualpbeno"/>
                <Label>Actual PBE Date</Label>
                <Input type="date" id="actualpbedate"name="actualpbedate"/>
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

export default requestProfile;
