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
  Modal, ModalHeader, ModalBody, ModalFooter,
  Row, Table
} from 'reactstrap';
import {Snackbar,IconButton } from '@material-ui/core';
//import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
//import CloseIcon from '@material-ui/icons/Close';
import TableUPS from './sub-component/tableUPS';


class PDUList extends Component {
  constructor(props) {
    super(props);
    //this.handleInputChange = this.handleInputChange.bind(this);
    this.state={
        formValues: '',
        open: false,
        message: '',
        data: [],
      }
    
  }

  componentDidMount(){
  
    this.fetchDataPDU();

  }

  fetchDataPDU(){
    fetch('/claritybqm/reportFetch/?scriptName=DC_PDU')
    .then(response => response.json())
    .then(json => //console.log(json)
    this.setState({data : json})
    );
  }

render(){
    const data = this.state.data
return(
    <div className="animated fadeIn" >
        <Row>
        <Col xs="12">
            <Card>
                <CardHeader>
                    <strong>UPS List</strong>
                    {/* <small> Form</small> */}
                </CardHeader>
                <CardBody>
                    <TableUPS data={data} />
                </CardBody>
            </Card>
        </Col>
        </Row>
        </div>
    );
}
}

export default PDUList;