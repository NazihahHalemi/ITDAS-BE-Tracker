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
import axios from 'axios';
import Swal from 'sweetalert2';

class PDU extends Component {
  constructor(props) {
    super(props);
    this.handleChangeSite= this.handleChangeSite.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.state = {
      SiteOption: {},
      selectedSite: "",
      dcLocation: {},
      lovSite: "",
      selectLoc: "",
      pduRefID: "",
      pduStatus: "",
      pduName: "",
      pduCode: "",
      pduFuse: "",
      pduUser: "",
      pduDesc: "",
    };
  }

  componentDidMount(){
    this.LOVsite();

  }

  LOVsite(){

    fetch('/claritybqm/reportFetch/?scriptName=DC_SITE')
    .then(response => response.json())
    .then((site) => 
    {  
        this.setState({ SiteOption : site})  
        // site.map((d)=>{
        //     this.setState({ SiteOption : d.SITE_NAME})  
        //     console.log(d.SITE_NAME);
            
        // })
                  
    }
    );

  }
  handleChangeSite(e){
      
    this.setState({
        selectedSite: e.target.value
    }) 
    
    var siteSelected = e.target.value
    if(siteSelected != ""){
        
        fetch('/claritybqm/reportFetch/?scriptName=DC_LOCATION&site='+siteSelected)
        .then(response => response.json())
        .then((loc) => 
        {
            
            this.setState({ dcLocation : loc})          
           
        }
        );

    }

  }
  handleChangeValue(e){

    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const values = this.state;
    //console.log(this.state);
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

         
    fetch('/claritybqm/reportFetch/?scriptName=DC_CREATE_PDU&PDU_NAME='+values.pduName+'&PDU_SITE_ID='+'345435'+'&PDU_LOCN_ID='+
    '3454345'+'&PDU_CODE='+values.pduCode+'&PDU_FUSE='+values.pduFuse+'&PDU_USER_RACK='+values.pduUser+'&PDU_STATUS='+values.pduStatus+'&PDU_DESC='+values.pduDesc,{
        method: 'post',
    })
    .then(response => response.json())
    .then((save) => {
        console.log(save)
        if(save.length){
            Swal.fire({
                icon: 'success',
                //title: 'Oops...',
                text: 'Data has been saved.',
              })
        }else{
            Swal.fire({
                icon: 'error',
                //title: 'Oops...',
                text: save.Failed,
              })
        }
    
    } )

    // axios({
    //     method: 'post',
    //     url: '/claritybqm/reportFetch/?scriptName=DC_CREATE_PDU',
    //     data: {
    //        // PDU_ID: values.pduRefID,
    //         PDU_NAME: values.pduName,
    //         PDU_SITE_ID: '345435',
    //         PDU_LOCN_ID: '3454345',
    //         PDU_CODE: values.pduCode,
    //         PDU_FUSE: values.pduFuse,
    //         PDU_USER_RACK: values.pduUser,
    //         PDU_STATUS: values.pduStatus,
    //         PDU_DESC: values.pduDesc,
    //        // PDU_CREATED_DT: '',
    //        // PDU_CREATED_BY: '',
    //       //  PDU_CLOSED_DT: '',
    //        // PDU_CLOSED_BY: '',
            
    //     }
    //   });
    
    
  }
  render() {
  
    return (
      <div className="animated fadeIn">
          <Row>
              <Col xs='12'>
              <Card>
                  <CardHeader>PDU</CardHeader>
                  <CardBody>
                    <Form id="formPDU" onSubmit={this.handleSubmit}>
                    <Row style={{marginLeft: "50px"}}>
                        <Col xs="4">
                            <Label>DC Site</Label>
                            <Input  type="select" name="lovSite" id="lovSite" onChange={this.handleChangeSite} >
                                {
                                    
                                    Object.values(this.state.SiteOption).map(function(lov,index) {
                                       
                                        return <option key={index} value={lov.SITE_NAME}>{lov.SITE_NAME}</option>
                                    })
                                }
                            
                            </Input>
                        </Col>
                    </Row>
                    <Row  style={{marginLeft: "50px", marginTop: "10px"}}>
                        <Col xs="4">
                            <Label>Served DC Location</Label>
                            <Input type="select" name="selectLoc" id="selectLoc" multiple onChange={this.handleChangeValue}>
                            {
                                    Object.values(this.state.dcLocation).map(function(lov) {
                                    // console.log('lov',lov.LOV_VALUE);
                                        return <option key={lov.LOCATION_NAME} value={lov.LOCATION_NAME}>{lov.LOCATION_NAME}</option>
                                    })
                                }
                            </Input>
                        </Col>
                    </Row>
                    <Row  style={{marginLeft: "50px", marginTop: "10px"}}>
                        <Col xs='4'>
                            <Label>PDU Ref ID</Label>
                            <Input type="text" id="pduRefID" name="pduRefID" onChange={this.handleChangeValue}/>
                        </Col>
                        <Col xs='4'>
                            <Label>Status</Label>
                            <Input type="text" id="pduStatus" name="pduStatus" onChange={this.handleChangeValue}/>
                        </Col>
                    </Row>
                    <Row  style={{marginLeft: "50px", marginTop: "10px"}}>
                        <Col xs='4'>
                            <Label>PDU Name</Label>
                            <Input type="text" id="pduName" name="pduName" onChange={this.handleChangeValue}/>
                            <Label>Code</Label>
                            <Input type="text" id="pduCode" name="pduCode" onChange={this.handleChangeValue}/>
                            <Label>Fuse</Label>
                            <Input type="text" id="pduFuse" name="pduFuse" onChange={this.handleChangeValue}/>
                            <Label>User/Rack</Label>
                            <Input type="text" id="pduUser" name="pduUser" onChange={this.handleChangeValue}/>
                        </Col>
                        <Col xs='4'>
                            <Label>Description</Label>
                            <Input type="textarea" id="pduDesc" name="pduDesc" rows="6" onChange={this.handleChangeValue}/>
                            <Col xs='6' style={{marginLeft: '200px', marginTop: '20px'}}>
                                <Button block color="primary"> Save</Button>
                            </Col>
                            <Col xs='6' style={{marginLeft: '200px', marginTop: '20px'}}>
                                <Button block color="primary"> Submit</Button>
                            </Col>
                        </Col>
                    </Row>
                    </Form>
                  </CardBody>
              </Card>
              </Col>
          </Row>
      </div>
    );
  }
}

export default PDU;
