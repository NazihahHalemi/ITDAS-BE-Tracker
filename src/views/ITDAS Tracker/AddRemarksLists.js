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

class AddRemarksList extends Component {
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
            <CardHeader>Add Remarks</CardHeader>
            <CardBody>
              <Row style={{marginLeft: '250px'}}>
              <Col xs='4'>
              </Col>
              </Row>
              <CardBody>
              <Row style={{marginLeft: '230px'}}>
                <Col xs='3'>
                <Label>Update Type</Label>
                <Input type="text" id="networkrefid"name="networkrefid"/>
                <Label>Remarks</Label>
                <Input type="textarea" id="networkname"name="networkname"/>
                </Col>
                <Row style={{marginLeft: '100px'}}></Row>
                <Col xs='3'>
                <Label>Status Date</Label>
                <Input type="date" name="select" id="select">
                <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                </Input>
                </Col> 
              </Row>
  
              <Row>
              <CardBody>
              <Row style={{marginLeft: '330px'}}>
                <Col xs='2'><Button block color="primary"> Add </Button>
                </Col>
                <Col xs='2'><Button block color="success"> Update </Button>
                </Col>
                <Col xs='2'><Button block color="warning"> Delete </Button>
                </Col>
                </Row>
                </CardBody>
              </Row>            
            </CardBody>
  
      <Col xs='12'>
    <table className="table table-bordered table-striped table table-sm">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Update By</th>
      <th scope="col">Type</th>
      <th scope="col">Status Date</th>
      <th scope="col">Update Date</th>
      <th scope="col">Remarks</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</Col>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddRemarksList;
