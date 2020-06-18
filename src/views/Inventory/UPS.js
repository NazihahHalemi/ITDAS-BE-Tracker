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

class UPS extends Component {
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
      UPSRefID: "",
      UPSStatus: "",
      UPSName: "",
      UPSCode: "",
      UPSFuse: "",
      UPSUser: "",
      UPSDesc: "",
    };
  }

  componentDidMount(){
    this.LOVsite();

  }

  LOVsite(){

    fetch('/claritybqm/reportFetch/?scriptName=DC_LOCATION')
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

         
    fetch('/claritybqm/reportFetch/?scriptName=DC_CREATE_UPS&UPS_NAME='+values.UPSName+'&UPS_SITE_ID='+'345435'+'&UPS_LOCN_ID='+
    '3454345'+'&UPS_CODE='+values.UPSCode+'&UPS_FUSE='+values.UPSFuse+'&UPS_USER_RACK='+values.UPSUser+'&UPS_STATUS='+values.UPSStatus+'&UPS_DESC='+values.UPSDesc,{
        method: 'post',
    })
    .then(response => response.json())
    

    // axios({
    //     method: 'post',
    //     url: '/claritybqm/reportFetch/?scriptName=DC_CREATE_UPS',
    //     data: {
    //        // UPS_ID: values.UPSRefID,
    //         UPS_NAME: values.UPSName,
    //         UPS_SITE_ID: '345435',
    //         UPS_LOCN_ID: '3454345',
    //         UPS_CODE: values.UPSCode,
    //         UPS_FUSE: values.UPSFuse,
    //         UPS_USER_RACK: values.UPSUser,
    //         UPS_STATUS: values.UPSStatus,
    //         UPS_DESC: values.UPSDesc,
    //        // UPS_CREATED_DT: '',
    //        // UPS_CREATED_BY: '',
    //       //  UPS_CLOSED_DT: '',
    //        // UPS_CLOSED_BY: '',
            
    //     }
    //   });
    
    
  }
  render() {
  
    return (
      <div className="animated fadeIn">
          <Row>
              <Col xs='12'>
              <Card>
                  <CardHeader>UPS</CardHeader>
                  <CardBody>
                    <Form id="formUPS" onSubmit={this.handleSubmit}>
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
                        <Col xs='4'>
                            <Label>Brand</Label>
                            <Input type="text" id="UPSBrand" name="UPSBrand" onChange={this.handleChangeValue}/>
                        </Col>
                    </Row>
                    <Row  style={{marginLeft: "360px", marginTop: "-50px"}}>
                         <Col xs='6'>
                            <Label>Model</Label>
                            <Input type="text" id="UPSModel" name="UPSModel" onChange={this.handleChangeValue}/>
                        </Col>
                    </Row>
                    <Row  style={{marginLeft: "50px", marginTop: "10px"}}>
                        <Col xs='4'>
                            <Label>UPS Ref ID</Label>
                            <Input type="text" id="UPSRefID" name="UPSRefID" onChange={this.handleChangeValue}/>
                        </Col>
                        <Col xs='4'>
                            <Label>Status</Label>
                            <Input type="text" id="UPSStatus" name="UPSStatus" onChange={this.handleChangeValue}/>
                        </Col>
                    </Row>
                    <Row  style={{marginLeft: "50px", marginTop: "10px"}}>
                        <Col xs='4'>
                            <Label>UPS Name</Label>
                            <Input type="text" id="UPSName" name="UPSName" onChange={this.handleChangeValue}/>
                            <Label>Power Capacity</Label>
                            <Input type="text" id="UPSPower" name="UPSPower" onChange={this.handleChangeValue}/>
                        </Col>
                        <Col xs='4'>
                            <Label>Description</Label>
                            <Input type="textarea" id="UPSDesc" name="UPSDesc" rows="6" onChange={this.handleChangeValue}/>
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

export default UPS;
