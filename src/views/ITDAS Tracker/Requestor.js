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

  componentDidMount(){
    fetch("/claritybqm/reportFetch/?scriptName=ITDAS_REQUEST_LIST")
    .then(response => response.json())
    .then(data => console.log('req list:', data))

  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs ='12'>
          <Card >
            <CardHeader>
            <strong>REQUESTOR</strong>
                    {/* <small> Form</small> */}
            </CardHeader>
              <CardBody>
                <Row>
                <Col xs='2'>
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
                </Col>
                  <Col xs='3'>
                  <Label>Requestor Name</Label>
                  <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="Name1">Name1</option>
                        <option value="Name2">Name2</option>
                        <option value="Name3">Name3</option>
                </Input>
                  </Col>
                  <Col xs='3'>
                <Label>Email Address</Label>
                <Input type="text" id="emailaddress"name="emailaddress"/>
                </Col>
                <Col xs='1' style={{marginLeft: '30px', marginTop: '25px'}}>
                                <Button block color="primary"> Add</Button>
                            </Col>
                   </Row>
                    </CardBody>
                   
<CardBody>
  <Row>
    <Col xs='10'>
    <table className="table table-bordered table-striped table table-sm">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Requestor Name</th>
      <th scope="col">LOB</th>
      <th scope="col">Email ID</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</Col>
</Row>
 </CardBody>     

          <Card>
            <CardHeader>
            <strong>CONSULTANTS</strong>
                    {/* <small> Form</small> */}
            </CardHeader>
            </Card>
              <CardBody>
                <Row>
                  <Col xs='2'>
                <Label>Consultant 1</Label>
                <Input type="select" name="consultant1" id="consultant1">
                   <option value="">Please select</option>
                   <option value="yes">Yes</option>
                   <option value="no">No</option>         
                </Input>
                </Col>
                <Col xs='1'>
                <Label>Tag Cost</Label>
                <Input type="text" id="tagcost"name="tagcost"/>
                </Col>
                <Col xs='2'>
                <Label>Consultants 2</Label>
                <Input type="select" name="consultant3" id="consultant3">
                   <option value="">Please select</option>
                   <option value="yes">Yes</option>
                   <option value="no">No</option>         
                </Input>
                </Col>
                <Col xs='1'>
                <Label>Tag Cost</Label>
                <Input type="text" id="tagcost"name="tagcost"/>
                </Col>

                <Col xs='2'>
                <Label>Consultants 3</Label>
                <Input type="select" name="consultant1" id="consultant1">
                   <option value="">Please select</option>
                   <option value="yes">Yes</option>
                   <option value="no">No</option>         
                </Input>
                </Col>
                <Col xs='1'>
                <Label>Tag Cost</Label>
                <Input type="text" id="tagcost"name="tagcost"/>
                </Col>
              </Row>
            </CardBody>

           <Card>
            <CardHeader>
            <strong>GIT ASSESSORS</strong>
                    {/* <small> Form</small> */}
            </CardHeader>
            </Card>
              <CardBody>
                <Row>
                  <Col xs='3'>
                  <Label>GIT Names</Label>
                  <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="Name1">Name1</option>
                        <option value="Name2">Name2</option>
                        <option value="Name3">Name3</option>
                </Input>
                  </Col>
                  <Col xs='3'>
                <Label>System</Label>
                <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="Build">Build</option>
                        <option value="Testing">Testing</option>
                        <option value="Deployed">Deployed</option>
                        <option value="Build">Build</option>
                        <option value="Completed">Completed</option>
                        <option value="In Progress">Inprogress</option>
                        <option value="KIV">kiv</option>
                        <option value="Cancel">cancel</option>
                        <option value="Close">close</option>
                </Input>
                </Col>
                <Col xs='1'>
                <Label>Tag Cost</Label>
                <Input type="text" id="tagcost"name="tagcost"/>
                </Col>
                <Col xs='1' style={{marginLeft: '30px', marginTop: '25px'}}>
                                <Button block color="primary"> Add</Button>
                            </Col>
                  </Row>
                </CardBody>

                <CardBody>
  <Row>
    <Col xs='10'>
    <table class="table table-bordered table-striped table table-sm">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">System</th>
      <th scope="col">Email ID</th>
      <th scope="col">Tag Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
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
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
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
