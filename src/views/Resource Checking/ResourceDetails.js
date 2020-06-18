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
  Row,Progress
} from 'reactstrap';
import TableRack from './RackTable';

class ResourceDetails extends Component {
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
      
        this.fetchDCSiteList();
    
      }
    
      fetchDCSiteList(){
        fetch('/claritybqm/reportFetch/?scriptName=DC_SITE')
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
                        <strong>Rack Details</strong>
                        {/* <small> Form</small> */}
                    </CardHeader>
                    <CardBody>
                        <TableRack data={data} />
                    </CardBody>
                </Card>
            </Col>
            </Row>
            </div>
        );
    }
    }
    

export default ResourceDetails;
