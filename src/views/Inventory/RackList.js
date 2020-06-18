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
import TablePDU from './sub-component/tableRack';
import { connect } from "react-redux";


class RackList extends Component {
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
  
    this.props.fetchRack();
    

  }

  
render(){
    const data =  this.props.rack
return(
    <div className="animated fadeIn" >
        <Row>
        <Col xs="12">
            <Card>
                <CardHeader>
                    <strong>Rack List</strong>
                    {/* <small> Form</small> */}
                </CardHeader>
                <CardBody>
                    <TablePDU data={data} />
                </CardBody>
            </Card>
        </Col>
        </Row>
        </div>
    );
}
}

const mapStateToProps = state => {
    return {
      rack: state.rack
    };
  };
  
  const mapDispachToProps = dispatch => {
    return {
        
      fetchRack: () => dispatch({ type: "FETCH_RACK"}),
    
    };
  };
  
export default connect(mapStateToProps,mapDispachToProps)(RackList);