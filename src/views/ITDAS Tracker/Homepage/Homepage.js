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
import HomepageTable from './HomepageTable';

class Homepage extends Component {
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
            <CardHeader>
            <strong>SEARCH PRE-BE / NON-BE</strong>
            </CardHeader>
              <CardBody>

           <Col xs="12" sm="6" md="12">
                  <Card className="border-primary">
                  <CardHeader>
                   Search
                  </CardHeader>
                  <CardBody>
                  <Row>
                  <Col xs='3'>
                  <Label>Search Request By</Label>
                  <Input type="select" name="requestorMOT" id="requestorMOT">
                   <option value="">Please select</option>
                   <option value="Yes">Reference No.</option>
                   <option value="No">IRIS Ref. No.</option>
                  </Input>
                  </Col>
                  <Col xs='3'>
                  <Label>   </Label>
                  <Input type="text" id="searchrequest"name="searchrequest"/>
                  </Col>
                  <Col xs='3'>
                  <button class="btn btn-primary" type="search">Search</button>
                  </Col>
                  </Row>
                  </CardBody>
                  </Card>
                  </Col>

                  <Col xs="12" sm="6" md="12">
                  <Card className="border-primary">
                  <CardHeader>
                   Filter List
                  </CardHeader>
                  <CardBody>
                  <Row>
                  <Col xs='3'>
                  <Label>LOB</Label>
                  <Input type="text" id="budgettransfermandays"name="budgettransfermandays"/>
                  </Col>
                  <Col xs='3'>
                  <Label>Consultant 1</Label>
                  <Input type="text" id="budgettransfermandays"name="budgettransfermandays"/>
                  </Col>
                  <Col xs='3'>
                  <Label>Status </Label>
                  <Input type="text" id="budgettransfermandays"name="budgettransfermandays"/>
                  </Col>
                  <Col xs='3'>
                  <button class="btn btn-primary" type="filter">Filter</button>
                  </Col>
                  </Row>
                  </CardBody>
                  </Card>
                  </Col>

                  {/* <Card>
                        <CardBody>
                              <HomepageTable id="" data={data}/>
                          </CardBody>
                      </Card> */}
          </CardBody>
              </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Homepage;
