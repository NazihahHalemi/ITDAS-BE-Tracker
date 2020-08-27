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
import {Link} from 'react-router-dom' ;
import axios from 'axios';
import Swal from 'sweetalert2';

class requestProfile extends Component {
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
          <Col xs ='12'>
          <Card>
            <CardHeader>
            <strong>REQUEST PROFILE</strong>
                    {/* <small> Form</small> */}
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs='3'>
                <Label>Reference #</Label>
                <Input type="text" id="reference"name="reference"/>
                <Label>Ext Ref # (IRIS No/Proj No)</Label>
                <Input type="text" id="irisnoprojno"name="irisnoprojno"/>
                <Label >Category</Label>
                <Input type="select" name="category" id="categorybe">
                        <option value="">Please select</option>
                        <option value="BE">BE</option>
                        <option value="Non-BE">Non-BE</option>
                        <option value="MVP">MVP</option>
                </Input>
                <Label>Type</Label>
                <Input type="select" name="type" id="type">
                        <option value="">Please select</option>
                        <option value="product">Product</option>
                        <option value="non-product">Non-Product</option>    
                </Input>
                <Label>Agile</Label>
                <Input type="select" name="agile" id="agile">
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
                <Input type="text" id="anaplanno"name="anaplanno"/>
                </Col>

                <Col xs='3'>
                <Label>Plan PBE No</Label>
                <Input type="text" id="planpbeno"name="planpbeno"/>             
                <Label>Plan PBE Date/RFS Date</Label>
                <Input type="date" id="planpbedate"name="planpbedate"/>
                <Label>Actual PBE No</Label>
                <Input type="text" id="actualpbeno"name="actualpbeno"/>
                <Label>Actual PBE Date/RFS Date</Label>
                <Input type="date" id="actualpbedate"name="actualpbedate"/>
                <Label>Quarterly Plan RFS Date</Label>
                <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="Q1">Q1</option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">Q3</option>
                        <option value="Q4">Q4</option>                     
                </Input>
                </Col>

                <Col xs='3'>
                <Label >Name/Description</Label>
                <Input type="textarea" id="description"name="description"/>
                <Label >Remarks/Benefit</Label>
                <Input type="textarea" id="latestremark"name="latestremark"/>
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
                <Label>System/Ref/Project/Initiative Name</Label>
                <Input type="text" id="initiativename"name="initiativename"/>
                <Label>Status</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="SIT">SIT</option>
                        <option value="UAT">UAT</option>
                        <option value="Regression">Regression</option>
                        <option value="PT">PT</option>
                        <option value="Pre Prod">Pre Prod</option>
                </Input>
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
              </Row>
            </CardBody>
        
            <Col xs='2' style={{marginLeft: '1100px', marginTop: '25px'}}>
                               <Link to={'/editLocation'}><Button block color="primary"> Add Remark</Button></Link> 
                </Col>

  <Col xs='2'><Label>Latest Remark/Update</Label></Col>
  <Col xs='2'><Button> Add Remarks </Button></Col>

<Row>
  <CardBody>
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
  </tbody>
</table>
</Col>
</CardBody>
</Row>
          </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default requestProfile;
