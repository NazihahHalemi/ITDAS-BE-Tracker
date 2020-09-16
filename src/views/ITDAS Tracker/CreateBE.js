import React, {Component} from 'react';
import { Badge, Table, Form, FormText, Button,Input, Label, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row, Modal, ModalBody, ModalFooter, ModalHeader, } from 'reactstrap';
import {connect} from 'react-redux';
import $ from 'jquery';
import axios from 'axios';
import Swal from 'sweetalert2'

class CreateBE extends Component {

    constructor(props) {
        super(props);
        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.lovCatType = this.lovCatType.bind(this);
        this.togglePrimary = this.togglePrimary.bind(this);
        this.handleSubmitRemark = this.handleSubmitRemark.bind(this);
        this.handleChangeRemark = this.handleChangeRemark.bind(this);
        this.onSubmitTM = this.onSubmitTM.bind(this);
        this.onChangeSysTM = this.onChangeSysTM.bind(this);
        this.onChangeRequestor = this.onChangeRequestor.bind(this);
        this.addRequestor = this.addRequestor.bind(this);
        this.onChangeSysVendor = this.onChangeSysVendor.bind(this);
        this.onSubmitVendor = this.onSubmitVendor.bind(this);
        this.addGITAssessors = this.addGITAssessors.bind(this);
        this.onChangeGITAssessors = this.onChangeGITAssessors.bind(this);
        // Don't call this.setState() here!
        this.state = {
            data: [],
            accordion: [true, false, false, false],
            //requestorID: "",
            Lovcategory : {},
            LovCatType: {},
            LovSystem: {},
            LovPillar: {},
            LovStatus: {},
            LovStatusDesc: {},
            LovLOB: {},
            LovConsultant : {},
            LovGIT : {},
            LovRequestor :{},
            LovVendor :{},
            primary: false,
            dataRequest: {},
            dataSysTM : {},
            dataRequestor : {},
            dataSysVendor : {},
            dataGITAssessors : {},
        };

    }

    componentDidMount(){
        // console.log('testt');
        //generate requestor ID:
       //var reqID = localStorage.getItem('requestorID')
       //if(reqID === ""){
        this.generateRequestorID();
      // }
       
       this.lovCategory();
       //this.lovCatType();
       this.lovSystem();
       this.lovPillar();
       this.lovStatus();
       this.lovStatusDesc();
       this.lovLOB();
       this.LovConsultant();
       this.LovGIT();
       this.LovRequestor();
       this.LovVendor();
       //this.getReqList();
       
       }
       
       generateRequestorID(){
         //system will auto generate requestor id
        var accessToken = localStorage.getItem('token');
        fetch("/api/ITD_REQ_SEQ",
        {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
         }
         )
        .then(response =>  response.json())
        .then(result =>  {
          console.log('requestorID',result);
          //this.setState({ requestorID : result[0].REQ_ID })
          localStorage.setItem('requestorID', result[0].REQ_ID)
         
         })       
       }
       
       lovCategory(){
        var accessToken = localStorage.getItem('token');
        //console.log('token',accessToken)
         fetch("/api/ITD_LOV/?type=CATEGORY",
         {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
         }
         )
        .then(response =>  response.json())
        .then(result =>  {
          //console.log('result',result.data);
          this.setState({Lovcategory : result})
         }
         )
       }
       
       lovCatType(e){
       //console.log('lovCatType', e.target.value);
         var accessToken = localStorage.getItem('token');

         fetch("/api/ITD_LOV/?type=CATEGORY&value=" + e.target.value,
         {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
         }
         )
        .then(response =>  response.json())
        .then(result =>  {
         //console.log('lovCatType-result',result.data);
          this.setState({LovCatType : result})
         }
         )
       }
       
       lovSystem(){
        var accessToken = localStorage.getItem('token');
         fetch("/api/ITD_LOV/?type=SYSTEM",
         {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
         }
         )
         .then(response =>  response.json())
         .then(result =>  {
           this.setState({ LovSystem : result })
          }
          )
       }

       lovPillar(){
        var accessToken = localStorage.getItem('token');
        fetch("/api/ITD_LOV/?type=PILLAR",
        {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
         }
        )
        .then(response =>  response.json())
        .then(result =>  {
          this.setState({ LovPillar : result })
         })
       }

       lovStatus(){
        var accessToken = localStorage.getItem('token');
        fetch("/api/ITD_LOV/?type=STATUS",
        {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
         }
         )
        .then(response =>  response.json())
        .then(result =>  {
          //console.log('status:',result);
          this.setState({ LovStatus : result })
         })
       }

       lovStatusDesc(){
        var accessToken = localStorage.getItem('token');
        fetch("/api/ITD_LOV/?type=STATUS_DESC",
        {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
         }
         )
        .then(response =>  response.json())
        .then(result =>  {
          this.setState({ LovStatusDesc : result })
         })
       }

       lovLOB(){
        var accessToken = localStorage.getItem('token');
        fetch("/api/ITD_LOV/?type=LOB",
        {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
         }
         )
        .then(response =>  response.json())
        .then(result =>  {
          this.setState({ LovLOB : result })
         })
       }

       LovConsultant(){
        var accessToken = localStorage.getItem('token');
        fetch("/api/ITD_LOV/?type=CONSULTANT",
        {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
         }
         )
        .then(response =>  response.json())
        .then(result =>  {
          this.setState({ LovConsultant : result })
         }
         )
      }

      LovGIT(){
        var accessToken = localStorage.getItem('token');
        fetch("/api/ITD_LOV/?type=GIT",
        {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
         }
         )
        .then(response =>  response.json())
        .then(result =>  {
          this.setState({ LovGIT : result })
         }
         )
      }

      LovRequestor(){
        var accessToken = localStorage.getItem('token');
        fetch("/api/ITD_LOV/?type=LOB&value=UNIFI",
        {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
         }
         )
        .then(response =>  response.json())
        .then(result =>  {
          this.setState({ LovRequestor : result })
         })
       
      }

      LovVendor(){
        var accessToken = localStorage.getItem('token');
        fetch("/api/ITD_LOV/?type=VENDOR",
        {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
         }
         )
        .then(response =>  response.json())
        .then(result =>  {
          this.setState({ LovVendor : result })
         })
       
      }

      getReqList(){
        var accessToken = localStorage.getItem('token');
        var reqID = localStorage.getItem('requestorID');
        fetch("/api/ITD_REQUEST_LIST/?REQ_ID=" + reqID,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
         }
        )
        .then(response =>  response.json())
        .then(result =>  {
          console.log('getReqList',result);
          this.setState({ dataRequest : result.req_update })
         }
         )   

      }

    toggleAccordion(tab) {

        const prevState = this.state.accordion;
        const state = prevState.map((x, index) => tab === index ? !x : false);
    
        this.setState({
          accordion: state,
        });
      }

      togglePrimary() {
        this.setState({
          primary: !this.state.primary,
        });
      }

      handleChangeRemark(e){

          e.preventDefault();
          var $inputs = $('#addRemark :input');//get form values
          var values = {};

          $inputs.each(function () {
              if ($(this).is(':radio') == true || $(this).is(':checkbox') == true){
                values[this.name] = $('input[name=' + $(this).attr('name') + ']:checked').val() == undefined ? "" : $('input[name=' + $(this).attr('name') + ']:checked').val();
                    } 
                    else {
                values[this.name] = $(this).val() == undefined ? "" : $(this).val();
              }
          });

        // console.log('handleChangeRemark', values);
      }

      handleSubmitRemark(e){

        e.preventDefault();
        var $inputs = $('#addRemark :input');//get form values
        var values = {};
        var reqID = localStorage.getItem('requestorID');

        $inputs.each(function () {
            if ($(this).is(':radio') == true || $(this).is(':checkbox') == true){
              values[this.name] = $('input[name=' + $(this).attr('name') + ']:checked').val() == undefined ? "" : $('input[name=' + $(this).attr('name') + ']:checked').val();
                  } 
                  else {
              values[this.name] = $(this).val() == undefined ? "" : $(this).val();
            }
            values['REQ_ID'] = reqID;
            values['RU_ID'] = '';
            values['RU_UPDATED_BY'] = 'TMXXXXX';
        });

          //console.log('addremark', values);
          var accessToken = localStorage.getItem('token');
          axios.post('/api/ITD_REQ_STAT_UPD_CREATE', {data: values},
          {
            headers: {
              Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
            }
          }
          ).then((res) => {
            console.log('success to create ', res);   
            if(res.data.response === "unauthorized") {
              localStorage.removeItem("token");
              localStorage.removeItem("requestorID");
              Swal.fire({
                  position: 'center',
                  icon: 'info',
                  title: 'Your session has timed out!',
                  showConfirmButton: false,
                  timer: 1000
                })
              setTimeout(function(){ this.props.history.push('/login') }, 2000);
            
          }
            this.getReqList();
            this.togglePrimary()
          })
          .catch((err) => {
            console.log('failed to create ', err);
          });


      }

      onChangeRequestor(e){

        e.preventDefault();
        //console.log({[e.target.name]: e.target.value});
        this.setState({ [e.target.name]: e.target.value });

      }

      addRequestor(){
        var reqID = localStorage.getItem('requestorID');

        if(this.state.RQ_REQUESTOR_NAME || this.state.RQ_LOB || this.state.RQ_EMAIL){

          var values = {
            'RQ_REQ_ID' : reqID,
            'RQ_REQUESTOR_NAME' : this.state.RQ_REQUESTOR_NAME,
            'RQ_LOB' : this.state.RQ_LOB,
            'RQ_EMAIL' : this.state.RQ_EMAIL
          }
        
          var accessToken = localStorage.getItem('token');
          axios.post('/api/ITD_REQ_REQUESTOR_CREATE', {data: values},
          {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
          }
          ).then((res) => {
            console.log('success to create ', res);   
            //timeout process
            if(res.data.response === "unauthorized") {
            localStorage.removeItem("token");
            localStorage.removeItem("requestorID");
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Your session has timed out!',
                showConfirmButton: false,
                timer: 1000
              })
            setTimeout(function(){ this.props.history.push('/login') }, 2000);
            
          }
          //success
          else{
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Data has been added.',
              showConfirmButton: false,
              timer: 1000
            })

            var accessToken = localStorage.getItem('token');
            var reqID = localStorage.getItem('requestorID');
            fetch("/api/ITD_REQUEST_LIST/?REQ_ID=" + reqID,
            {
              headers: {
                Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
              }
            }
            )
            .then(response =>  response.json())
            .then(result =>  {
              //console.log('getReqList',result);
              this.setState({ dataRequestor : result.req_requestor })
            }
            )   

          }
        
          })
          .catch((err) => {
            console.log('failed to create ', err);
          });

        }


      }

      onChangeGITAssessors(e){

        e.preventDefault();
        //console.log({[e.target.name]: e.target.value});
        this.setState({ [e.target.name]: e.target.value });

      }

      addGITAssessors(){
        var reqID = localStorage.getItem('requestorID');

        if(this.state.RG_REQ_ID || this.state.RG_NAME || this.state.RG_SYSTEM || this.state.RG_EMAIL || this.state.RG_TAGCOST){

          var values = {
            'RG_REQ_ID' : reqID,
            'RG_NAME' : this.state.RG_NAME,
            'RG_SYSTEM' : this.state.RG_SYSTEM,
            'RG_EMAIL' : this.state.RG_EMAIL,
            'RG_TAGCOST' : this.state.RG_TAGCOST
          }
        
          var accessToken = localStorage.getItem('token');
          axios.post('/api/ITD_REQ_GIT_CREATE', {data: values},
          {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
          }
          ).then((res) => {
            console.log('success to create ', res);   
            //timeout process
            if(res.data.response === "unauthorized") {
            localStorage.removeItem("token");
            localStorage.removeItem("requestorID");
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Your session has timed out!',
                showConfirmButton: false,
                timer: 1000
              })
            setTimeout(function(){ this.props.history.push('/login') }, 2000);
            
          }
          //success
          else{
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Data has been added.',
              showConfirmButton: false,
              timer: 1000
            })

            var accessToken = localStorage.getItem('token');
            var reqID = localStorage.getItem('requestorID');
            fetch("/api/ITD_REQUEST_LIST/?REQ_ID=" + reqID,
            {
              headers: {
                Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
              }
            }
            )
            .then(response =>  response.json())
            .then(result =>  {
              //console.log('getReqList',result);
              this.setState({ dataGITAssessors : result.req_requestor })
            }
            )   

          }
        
          })
          .catch((err) => {
            console.log('failed to create ', err);
          });

        }


      }

      onChangeSysTM(e){

        e.preventDefault();

        this.setState({ [e.target.name]: e.target.value });

      }

      onSubmitTM(){
        var reqID = localStorage.getItem('requestorID');

        if(this.state.IM_IMPACTED_SYSTEM || this.state.IM_MANDAYS){

          var values = {
            'IM_REQ_ID' : reqID,
            'IM_IMPACTED_SYSTEM' : this.state.IM_IMPACTED_SYSTEM,
            'IM_MANDAYS' : this.state.IM_MANDAYS
          }

          var accessToken = localStorage.getItem('token');
          axios.post('/api/ITD_REQ_SYS_TM_CREATE', {data: values},
          {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
          }
          ).then((res) => {
            console.log('success to create ', res);   
            //timeout process
            if(res.data.response === "unauthorized") {
            localStorage.removeItem("token");
            localStorage.removeItem("requestorID");
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Your session has timed out!',
                showConfirmButton: false,
                timer: 1000
              })
            setTimeout(function(){ this.props.history.push('/login') }, 2000);
            
          }
          //success
          else{
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Data has been added.',
              showConfirmButton: false,
              timer: 1000
            })

            var accessToken = localStorage.getItem('token');
            var reqID = localStorage.getItem('requestorID');
            fetch("/api/ITD_REQUEST_LIST/?REQ_ID=" + reqID,
            {
              headers: {
                Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
              }
            }
            )
            .then(response =>  response.json())
            .then(result =>  {
              //console.log('getReqList',result);
              this.setState({ dataSysTM : result.req_sys_tm })
            }
            )   

          }
        
          })
          .catch((err) => {
            console.log('failed to create ', err);
          });

        }

      }

      onChangeSysVendor(e){

        e.preventDefault();

        this.setState({ [e.target.name]: e.target.value });

      }

      onSubmitVendor(){
        var reqID = localStorage.getItem('requestorID');

        if(this.state.IM_VENDOR || this.state.IM_SYSTEMS || this.state. IM_MANDAYS){

          var values = {
            'IV_REQ_ID' : reqID,
            'IV_VENDOR' : this.state.IV_VENDOR,
            'IV_SYSTEM' : this.state.IV_SYSTEM,
            'IV_MANDAYS' : this.state.IV_MANDAYS
          }

          var accessToken = localStorage.getItem('token');
          axios.post('/api/ITD_REQ_SYS_VENDOR_CREATE', {data: values},
          {
          headers: {
            Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
          }
          }
          ).then((res) => {
            console.log('success to create ', res);   
            //timeout process
            if(res.data.response === "unauthorized") {
            localStorage.removeItem("token");
            localStorage.removeItem("requestorID");
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Your session has timed out!',
                showConfirmButton: false,
                timer: 1000
              })
            setTimeout(function(){ this.props.history.push('/login') }, 2000);
            
          }
          //success
          else{
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Data has been added.',
              showConfirmButton: false,
              timer: 1000
            })

            var accessToken = localStorage.getItem('token');
            var reqID = localStorage.getItem('requestorID');
            fetch("/api/ITD_REQUEST_LIST/?REQ_ID=" + reqID,
            {
              headers: {
                Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
              }
            }
            )
            .then(response =>  response.json())
            .then(result =>  {
              //console.log('getReqList',result);
              this.setState({ dataSysVendor : result.req_sys_vendor })
            }
            )   

          }
        
          })
          .catch((err) => {
            console.log('failed to create ', err);
          });

        }

      }

    render() {
        var category = this.state.Lovcategory
        var type = this.state.LovCatType
        var system = this.state.LovSystem
        var pillar = this.state.LovPillar
        var status = this.state.LovStatus
        var statusdesc = this.state.LovStatusDesc
        var lob = this.state.LovLOB
        var consultant = this.state.LovConsultant
        var git = this.state.LovGIT
        var vendor = this.state.LovVendor
        var reqID = localStorage.getItem('requestorID')
        var reqSysTM = this.state.dataSysTM
        var requestor = this.state.LovRequestor
        var dataRequestor = this.state.dataRequestor
        var dataGITAssessors = this.state.dataGITAssessors
        var reqSysVendor = this.state.dataSysVendor

        return (
            <div>

            <Card>
              <CardHeader>
                {/* <i className="fa fa-align-justify"></i>  */}
                <i className="animated fadeIn"></i>
                <strong>Create Pre-BE/Non-BE</strong>
                {/* <div className="card-header-actions">
                  <Badge>NEW</Badge>
                </div> */}
              </CardHeader>
              <div className="form-button">
                <Row style={{ marginTop: '20px' }}>
                <Col style={{ marginLeft: '20px' }}>
                    <Button type="reset" color="primary"> Reset</Button>
                    <Button type="save" color="success"> Save</Button>
                    <Button type="next" color="dark"> Submit</Button>
                </Col>
                </Row>
                </div>

              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h6 className="m-0 p-0"><strong>REQUEST PROFILE</strong></h6>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
              <Row>
                <Col xs='3'>
                <Label>Requestor ID</Label>
                <Input type="text" id="REQ_ID"name="REQ_ID" value={reqID} readOnly/>
                <Label>Reference #</Label>
                <Input type="text" id="REQ_REF_NO"name="REQ_REF_NO"/>
                <Label>Ext Ref # (IRIS No/Proj No)</Label>
                <Input type="text" id="REQ_EXT_NO"name="REQ_EXT_NO"/>
                <Label >Category</Label>
                <Input type="select" name="category" id="category" onChange={this.lovCatType}>
                <option value="">Please select</option>
                        {
                           Object.values(category).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                          })
                        }
                </Input>
                <Label>Type</Label>
                <Input type="select" name="type" id="type">
                        <option value="">Please select</option>
                        {/* <option value="product">Product</option>
                        <option value="non-product">Non-Product</option> */}
                        {
                           Object.values(type).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                          })
                        }  
   
                </Input>
                <Label>Agile</Label>
                <Input type="select" name="REQ_AGILE" id="REQ_AGILE">
                        <option value="">Please select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>             
                </Input>
                <Label>AOP</Label>
                <Input type="select" name="REQ_AOP" id="REQ_AOP">
                        <option value="">Please select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>       
                </Input>
                <Label>Ana Plan No/Ref. No</Label>
                <Input type="text" id="REQ_ANA_PLAN_REF_NO"name="REQ_ANA_PLAN_REF_NO"/>
                </Col>

                <Col xs='3'>
                <Label>Plan PBE No</Label>
                <Input type="text" id="REQ_PLAN_PBE_NO"name="REQ_PLAN_PBE_NO"/>             
                <Label>Plan PBE Date/RFS Date</Label>
                <Input type="date" id="REQ_PLAN_PBE_DATE"name="REQ_PLAN_PBE_DATE"/>
                <Label>Actual PBE No</Label>
                <Input type="text" id="REQ_ACTUAL_PBE_NO"name="REQ_ACTUAL_PBE_NO"/>
                <Label>Actual PBE Date/RFS Date</Label>
                <Input type="date" id="REQ_ACTUAL_PBE_DATE"name="REQ_ACTUAL_PBE_DATE"/>
                <Label>Quarterly Plan RFS Date</Label>
                <Input type="select" name="REQ_QTR_PLAN_RFS" id="REQ_QTR_PLAN_RFS">
                        <option value="">Please select</option>
                        <option value="Q1">Q1</option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">Q3</option>
                        <option value="Q4">Q4</option>                     
                </Input>
                </Col>

                <Col xs='3'>
                <Label >Name/Description</Label>
                <Input type="textarea" id="REQ_DESC"name="REQ_DESC"/>
                <Label >Remarks/Benefit</Label>
                <Input type="textarea" id="REQ_REMARKS"name="REQ_REMARKS"/>
                <Label>System</Label>
                <Input type="select" name="REQ_SYSTEM" id="REQ_SYSTEM">
                        <option value="">Please select</option>
                        {
                  Object.values(system).map((d)=>{
                   //console.log('data', d.LOV_VALUE)
                   return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                 })
                }
                </Input>
                </Col>
                <Col xs='3'>
                <Label>System/Ref/Project/Initiative Name</Label>
                <Input type="text" id="REQ_SRPI_NAME"name="REQ_SRPI_NAME"/>
                <Label>Status</Label>
                <Input type="select" name="REQ_STATUS" id="REQ_STATUS">
                <option value="">Please select</option>
                        {
                  Object.values(status).map((d)=>{
                   //console.log('data', d.LOV_VALUE)
                   return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                 })
                }
                </Input>
                <Label>Status Description</Label>
                <Input type="select" name="REQ_STATUS_DESC" id="REQ_STATUS_DESC">
                <option value="">Please select</option>
                        {
                  Object.values(statusdesc).map((d)=>{
                   //console.log('data', d.LOV_VALUE)
                   return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                 })
                }
                </Input>
                </Col> 
              </Row>
            </CardBody>
   
            <Col xs="5" sm="5" md="12">
                        <Card className="border-primary">
                        <CardHeader>
                        <strong>Latest Remark/Update</strong>
                        <div style={{float: 'right'}} onClick={this.togglePrimary} ><Button type="back" color="primary"> Add Remarks </Button></div>
                        <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
                       className={'modal-primary ' + this.props.className}>
                  <ModalHeader toggle={this.togglePrimary}>Add Remark</ModalHeader>
                  <ModalBody>
                  <Form id="addRemark" onSubmit={this.handleSubmitRemark}>
                    <Row>
                        <Col>
                        <Label>Update type</Label>
                            <Input type="select" name="RU_TYPE" id="RU_TYPE" onChange={this.handleChangeRemark}>
                            <option value="">Please select</option>
                            {
                            Object.values(statusdesc).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                            })
                            }
                         </Input>
                        </Col>
                        <Col>
                        <Label>Status Date</Label>
                        <Input type="date" id="RU_STATUS_DATE" name="RU_STATUS_DATE" onChange={this.handleChangeRemark}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12'>
                        <Label>Remarks</Label>
                        <Input type="textarea" id="RU_REMARK" name="RU_REMARK" size='20' onChange={this.handleChangeRemark}/>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '20px'}}>
                        <Col>
                         <Button color="primary" type="submit" >Add</Button>{' '}
                        </Col>
                        <Col>
                        <Button color="success" type="submit">Update</Button>
                        </Col>
                        <Col>
                        <Button color="warning" type="submit" >Delete</Button>
                        </Col>
                    </Row>
                    </Form>
                  </ModalBody>
                  {/* <ModalFooter>
                  </ModalFooter> */}
                </Modal>
                        </CardHeader>
                        <CardBody>
                        <Col xs='15'>
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
    {
        this.state.dataRequest ? Object.values(this.state.dataRequest).map((d,index)=>{
            return(<tr>
            <td>
              {index+1}
                
            </td>
            <td>
                {d.RU_UPDATED_BY}
            </td>
            <td>
                {d.RU_TYPE}

            </td>
            <td>
                {/* {d.RU_STATUS_DATE} */}
            </td>
            <td>
                {/* {d.RU_UPDATED_DATE} */}
            </td>
            <td>
                {d.RU_REMARK}
            </td>
            <td>

            </td>

        </tr>
        )

        }) : ""
    }
  </tbody>
</table>
</Col>
</CardBody>
</Card>
</Col>
</Collapse>
</Card>

                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h6 className="m-0 p-0"><strong>REQUESTOR, CONSULTANTS, GIT ASSESSORS</strong></h6>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                    <CardHeader>
                    <strong>REQUESTOR</strong>
                   </CardHeader>
                    <CardBody>
                <Row>
                <Col xs='3'>
                <Label>LOB</Label>
                <Input type="select" name="RQ_LOB" id="RQ_LOB" onChange={this.onChangeRequestor}>
                <option value="">Please select</option>
                   {
                   Object.values(lob).map((d)=>{
                   //console.log('data', d.LOV_VALUE)
                   return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                 })
               }
                </Input>
                </Col>
                  <Col xs='3'>
                  <Label>Requestor Name</Label>
                  <Input type="select" name="RQ_REQUESTOR_NAME" id="RQ_REQUESTOR_NAME" onChange={this.onChangeRequestor}>
                  <option value="">Please select</option>
                  {
                           Object.values(requestor).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                          })
                 }
                </Input>
                  </Col>
                  <Col xs='3'>
                <Label>Email Address</Label>
                <Input type="text" id="RQ_EMAIL"name="RQ_EMAIL" onChange={this.onChangeRequestor}/>
                </Col>
                <Col xs='1' style={{marginLeft: '30px', marginTop: '25px'}}>
                <Button block color="primary" type="submit" onClick={this.addRequestor}> Add</Button>
                </Col>
                   </Row>
                    </CardBody>
                   
<CardBody>
  <Row>
    <Col xs='10'>
    <table className="table table-bordered table-striped table table-sm">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Requestor Name</th>
      <th scope="col">LOB</th>
      <th scope="col">Email ID</th>
    </tr>
  </thead>
  <tbody>
    {
      Object.values(dataRequestor).map((d,index)=>{
        return(<tr>
          <td>
             {index+1} 
          </td>
          <td>
              {d.RQ_REQUESTOR_NAME}
          </td>
          <td>
              {d.RQ_LOB}
          </td>
          <td>
              {d.RQ_EMAIL}
          </td>
      </tr>)
      })
    }
  </tbody>
</table>
</Col>
</Row>
 </CardBody>     

          <Card>
            <CardHeader>
            <strong>CONSULTANTS</strong>
            </CardHeader>
            </Card>
            <CardBody>
                <Row>
                <Col xs='4'>
                  <Label>Consultant 1</Label>
                <Input type="select" name="REQ_CONSULT_1" id="REQ_CONSULT_1">
                <option value="">Please select</option>
                  {
                           Object.values(consultant).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                          })
                        }               
                </Input>
                </Col>
                <Col xs='4'>
                <Label>Tag Cost</Label>
                <Input type="text" id="REQ_TAGCOST_1"name="REQ_TAGCOST_1"/>
                </Col>
                </Row>

                <Row>
                <Col xs='4'>
                <Label>Consultants 2</Label>
                <Input type="select" name="REQ_CONSULT_2" id="REQ_CONSULT_2">
                <option value="">Please select</option>
                  {
                           Object.values(consultant).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                          })
                        }
                       
                </Input>
                </Col>
                <Col xs='4'>
                <Label>Tag Cost</Label>
                <Input type="text" id="REQ_TAGCOST_2"name="REQ_TAGCOST_2"/>
                </Col>
                </Row>

                <Row>
                <Col xs='4'>
                <Label>Consultants 3</Label>
                <Input type="select" name="REQ_CONSULT_3" id="REQ_CONSULT_3">
                <option value="">Please select</option>
                  {
                           Object.values(consultant).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                          })
                        }       
                </Input>
                </Col>
                <Col xs='4'>
                <Label>Tag Cost</Label>
                <Input type="text" id="REQ_TAGCOST_3"name="REQ_TAGCOST_3"/>
                </Col>
              </Row>
            </CardBody>

            <Card>
            <CardHeader>
            <strong>GIT ASSESSORS</strong>
            </CardHeader>
            </Card>
              <CardBody>
                <Row>
                  <Col xs='3'>
                  <Label>GIT Names</Label>
                  <Input type="select" name="RG_NAME" id="RG_NAME" onChange={this.onChangeGITAssessors}>
                <option value="">Please select</option>
                  {
                           Object.values(git).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                          })
                        }
                </Input>
                  </Col>
                  <Col xs='2'>
                <Label>System</Label>
                <Input type="select" name="RG_SYSTEM" id="RG_SYSTEM" onChange={this.onChangeGITAssessors}>
                        <option value="">Please select</option>
                        {
                            Object.values(system).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                            })
                            }                           
                </Input>
                </Col>
                
                <Col xs='3'>
                <Label>Email Address</Label>
                <Input type="text" id="RG_EMAIL"name="RG_EMAIL" onChange={this.onChangeGITAssessors}/>
                </Col>

                <Col xs='2'>
                <Label>Tag Cost</Label>
                <Input type="text" id="RG_TAGCOST"name="RG_TAGCOST" onChange={this.onChangeGITAssessors}/>
                </Col>
                <Col xs='1' style={{marginLeft: '30px', marginTop: '25px'}}>
                <Button block color="primary" type="submit" onClick={this.addGITAssessors}> Add</Button>
                            </Col>
                  </Row>
                </CardBody>

                <CardBody>
  <Row>
    <Col xs='11'>
    <table className="table table-bordered table-striped table table-sm">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">GIT Name</th>
      <th scope="col">System</th>
      <th scope="col">Email ID</th>
      <th scope="col">Tag Cost</th>
    </tr>
  </thead>
  <tbody>
  {
     dataGITAssessors ? Object.values(dataGITAssessors).map((d,index)=>{
        return(<tr>
          <td>
            {index+1}
          </td>
          <td>
              {d.RG_NAME}
          </td>
          <td>
              {d.RG_SYSTEM}
          </td>
          <td>
              {d.RG_EMAIL}
          </td>
          <td>
              {d.RG_TAGCOST}
          </td>
      </tr>)
      }) : ""
    }
  </tbody>
</table>
</Col>
</Row>
 </CardBody>
  </Collapse>
  </Card>

                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h6 className="m-0 p-0"><strong>MANDAYS PROFILE</strong></h6>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <Row>
                            
                            <Col xs='3'>
                            <Label>PIP Pillar</Label>
                            <Input type="select" id="REQ_PIP_PILLAR"name="REQ_PIP_PILLAR">
                            <option value="0">Please select</option>
                            {
                            Object.values(pillar).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                            })
                        }
                            </Input>
                            </Col>

                            <Col xs='2'>
                            <Label>RM</Label>
                            <Input type="text" id="REQ_PIP_PILLAR_REVENUE"name="REQ_PIP_PILLAR_REVENUE" placeholder="RM"/>
                            <FormText className="help-block">Please Input RM Figure for PIP Pillar Revenue Generation</FormText>
                            </Col>

                            <Col xs='3'>
                            <Label>MD Category</Label>
                            <Input type="select" name="REQ_MD_CATEGORY" id="REQ_MD_CATEGORY">
                                    <option value="0">Please select</option>
                                    <option value="Simple">Simple (less or equal 50)</option>
                                    <option value="Medium">Medium (less or equal 250)</option>
                                    <option value="Complex">Complex (more than 250)</option>
                            </Input>
                            </Col>

                            <Col xs='2'>
                            <Label>Ballpark TM</Label>
                            <Input type="text" id="REQ_BALLPARK_TM"name="REQ_BALLPARK_TM"/>
                            </Col> 

                            <Col xs='2'>
                            <Label>Ballpark Vendor</Label>
                            <Input type="text" id="REQ_BALLPARK_VENDOR"name="REQ_BALLPARK_VENDOR"/>
                            </Col> 

                            <Col xs="12" sm="6" md="6">
                            <Card className="border-primary">
                            <CardHeader>
                            <strong>TM</strong>
                            </CardHeader>
                            <CardBody>
                            <Row>
                            <Col xs='5'>
                            <Label>Solution & Design</Label>
                            <Input type="text" id="REQ_TOTAL_TAGCOST_TM"name="solutionDREQ_TOTAL_TAGCOST_TMesign"/>
                            <Label>Build</Label>
                            <Input type="text" id="REQ_BUILD_TM"name="REQ_BUILD_TM"/>
                            </Col>
                            <Col xs='5'>
                            <Label>Test</Label>
                            <Input type="text" id="REQ_TEST_TM"name="REQ_TEST_TM"/>
                            <Label>Total IA</Label>
                            <Input type="text" id="REQ_TOTAL_IA_TM"name="REQ_TOTAL_IA_TM"/>
                            </Col>
                            </Row>
                            </CardBody>
                            </Card>
                            </Col>

                            <Col xs="12" sm="6" md="6">
                            <Card className="border-primary">
                            <CardHeader>
                            <strong>External</strong>
                            </CardHeader>
                            <CardBody>
                            <Row>
                            <Col xs='5'>
                            <Label>Solution & Design</Label>
                            <Input type="text" id="REQ_TOTAL_TAGCOST_EXT"name="REQ_TOTAL_TAGCOST_EXT"/>
                            <Label>Build</Label>
                            <Input type="text" id="REQ_BUILD_EXT"name="REQ_BUILD_EXT"/>
                            </Col>
                            <Col xs='5'>
                            <Label>Test</Label>
                            <Input type="text" id="REQ_TEST_EXT"name="REQ_TEST_EXT"/>
                            <Label>Total IA</Label>
                            <Input type="text" id="REQ_TOTAL_IA_EXT"name="REQ_TOTAL_IA_EXT"/>
                            </Col>
                            </Row>
                            </CardBody>
                            </Card>
                            </Col>

                            {/** add system TM */}
                            <Col xs='3'>
                            <Label>Impacted Sytem</Label>
                            <Input type="select" id="IM_IMPACTED_SYSTEM"name="IM_IMPACTED_SYSTEM" onChange={this.onChangeSysTM}>
                            <option value="0">Please select</option>
                            {
                            Object.values(system).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                            })
                            }
                           </Input>
                           <Col style={{marginLeft: '30px', marginTop: '25px'}}>
                            </Col>
                            <button class="btn btn-primary" type="add" onClick={this.onSubmitTM}>Add</button>
                            </Col>
                            <Col xs='3'>
                            <Label>Mandays</Label>
                            <Input type="text" id="IM_MANDAYS"name="IM_MANDAYS" onChange={this.onChangeSysTM} />
                            </Col>

                            {/** add system EXTERNAL */}
                            <Col xs='3'>
                            <Label>Vendor</Label>
                            <Input type="select" id="IV_VENDOR"name="IV_VENDOR" onChange={this.onChangeSysVendor} >
                            <option value="0">Please select</option>
                            {
                            Object.values(vendor).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                            })
                            }
                            </Input>
                            <Label>Mandays</Label>
                            <Input type="text" id="IV_MANDAYS"name="IV_MANDAYS" onChange={this.onChangeSysVendor} />
                            </Col>
                            <Col xs='3'>
                            <Label>Systems</Label>
                            <Input type="select" id="IV_SYSTEM"name="IV_SYSTEM" onChange={this.onChangeSysVendor}>
                            <option value="0">Please select</option>
                            {
                            Object.values(system).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                            })
                        }
                        </Input>
                        <Col style={{marginLeft: '30px', marginTop: '25px'}}>
                            </Col>
                            <button class="btn btn-primary" type="submit" onClick={this.onSubmitVendor}>Add</button>
                            </Col>
                        
                        <Col xs="12" lg="6"> 
                        <Card>
                        <CardBody>
                            <Table striped responsive size="sm">
                            <thead>
                            <tr>
                                <th>No.</th>
                                <th>System Name</th>
                                <th>Mandays</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Object.values(reqSysTM).map((d,index)=>{
                                    return(<tr>
                                    <td>
                                      {index+1}  
                                    </td>
                                    <td>
                                        {d.IM_IMPACTED_SYSTEM}
                                    </td>
                                    <td>
                                        {d.IM_MANDAYS}
                                    </td>
                                </tr>
                                )
                                })
                            }
                            </tbody>
                            </Table>
                        </CardBody>
                        </Card>
                    </Col>
                            
                    <Col xs="12" lg="6">
                        <Card>
                        <CardBody>
                            <Table striped responsive size="sm">
                            <thead>
                            <tr>
                                <th>No.</th>
                                <th>Vendor Name</th>
                                <th>System Name</th>
                                <th>Mandays</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Object.values(reqSysVendor).map((d,index)=>{
                                    return(<tr>
                                    <td>
                                        {index+1}
                                    </td>
                                    <td>
                                        {d.IV_VENDOR}
                                    </td>
                                    <td>
                                        {d.IV_SYSTEM}
                                    </td>
                                    <td>
                                        {d.IV_MANDAYS}
                                    </td>
                                </tr>
                                )
                                })
                            }
                            </tbody>
                            </Table>
                        </CardBody>
                        </Card>
                    </Col>

                            <Col xs='3'>
                            <strong>Grand Total IA</strong>
                            <FormText className="help-block">Total IA (TM) + Total IA (External)</FormText>
                            </Col>
                            <Col xs='3'><Input type="text" id="impactedSystem"name="impactedSystem"/></Col>
                            
                        </Row>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingFour">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(3)} aria-expanded={this.state.accordion[3]} aria-controls="collapseThree">
                        <h6 className="m-0 p-0"><strong>BUDGET PROFILE & STATUS DATE PROFILE</strong></h6>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[3]} data-parent="#accordion" id="collapseFour">
                    <CardHeader>
                      <strong>BUDGET PROFILE</strong>
                      </CardHeader>
                      <CardBody>
                      <Row>
                        <Col xs='2'>
                        <Label>Budget Memo Date</Label>
                        <Input type="date" id="REQ_BUDGET_MEMO_DATE"name="REQ_BUDGET_MEMO_DATE"/>
                        </Col>
                        <Col xs='2'>
                        <Label>Budget Memo Amount</Label>
                        <Input type="text" id="REQ_BUDGET_MEMO_AMT"name="REQ_BUDGET_MEMO_AMT" placeholder="RM"/>
                        </Col>
                        <Col xs='2'>
                        <Label>Budget Transfer Date</Label>
                        <Input type="date" id="REQ_BUDGET_TRANSFER_DATE"name="REQ_BUDGET_TRANSFER_DATE"/>
                        </Col>
                        <Col xs='3'>
                        <Label>Budget Transfer Man Days</Label>
                        <Input type="text" id="REQ_BUDGET_TRANSFER_MDY"name="REQ_BUDGET_TRANSFER_MDY"/>
                        </Col>
                        <Col xs='3'>
                        <Label>Budget Transfer Amount</Label>
                        <Input type="text" id="REQ_BUDGET_TRANSFER_AMT"name="REQ_BUDGET_TRANSFER_AMT" placeholder="RM"/>
                        </Col>
                        </Row>
                        
                        </CardBody>

                    <CardHeader>MOT Follow Up</CardHeader>
                    <CardBody>
                        <Row>
                        <Col xs='3'>
                        <Label>Advise Requestor To Sent MOT</Label>
                        <Input type="select" name="REQ_MOT_ADVISE" id="REQ_MOT_ADVISE">
                        <option value="">Please select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </Input>
                        </Col>
                        <Col xs='3'>
                        <Label>MOT Send to User</Label>
                        <Input type="select" name="REQ_MOT_SEND_USER" id="REQ_MOT_SEND_USER">
                        <option value="">Please select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </Input>
                        </Col>
                        <Col xs='3'>
                        <Label>Date Sending</Label>
                        <Input type="date" id="REQ_MOT_DATE_SEND"name="REQ_MOT_DATE_SEND"/>    
                        </Col>
                </Row>
                </CardBody>

                <CardHeader>MOT Received by GIT Business Finance</CardHeader>
                    <CardBody>
                        <Row>
                        <Col xs='3'>
                        <Label>MOT Received</Label>
                        <Input type="select" name="REQ_MOT_RECEIVED" id="REQ_MOT_RECEIVED">
                        <option value="">Please select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </Input> 
                        </Col>
                        <Col xs='6'>
                        <Label>Remarks</Label>
                        <Input type="textarea" id="REQ_MOT_REMARK"name="REQ_MOT_REMARK"/>   
                        </Col>
                </Row>
                </CardBody>

                    <Card>
                    <CardHeader>
                    <strong>STATUS DATE PROFILE</strong>
                    </CardHeader>
                    </Card>
                    <CardBody>
                        <Row>
                        <Col xs='3'>
                        <Label>Request Date</Label>
                        <Input type="date" id="REQ_REQUEST_DATE"name="REQ_REQUEST_DATE"/>
                        <Label>BE Received Date</Label>
                        <Input type="date" id="REQ_BE_RECEIVED"name="REQ_BE_RECEIVED"/>
                        </Col>

                        <Col xs="12" sm="6" md="4">
                        <Card className="border-primary">
                        <CardHeader>
                        <strong>Design & Mandays Approval</strong>
                        </CardHeader>
                        <CardBody>
                        <Col xs='8'>
                        <Label>ITDC Approved Ball Park</Label>
                        <Input type="date" id="REQ_ITDC_BALLPARK"name="REQ_ITDC_BALLPARK"/>
                        <Label>ITDC Approved Final</Label>
                        <Input type="date" id="REQ_ITDC_APPROVE_FINAL"name="REQ_ITDC_APPROVE_FINAL"/>
                        </Col>
                        </CardBody>
                        </Card>
                        </Col>

                        <Col xs="12" sm="6" md="5">
                        <Card className="border-primary">
                        <CardHeader>
                        <strong>Business Case Approval</strong>
                        </CardHeader>
                        <CardBody>
                        <Col xs='8'>
                        <Label>IBER Approved Ball Park</Label>
                        <Input type="date" id="REQ_IBER_BALLPARK"name="REQ_IBER_BALLPARK"/>
                        <Label>IBER Approved Final</Label>
                        <Input type="date" id="REQ_IBER_APPROVE_FINAL"name="REQ_IBER_APPROVE_FINAL"/>
                        <Label>PCM1/PSC Approved </Label>
                        <Input type="date" id="REQ_PCM1_PSC_APPROVE"name="REQ_PCM1_PSC_APPROVE"/>
                        <Label>PCM2/PSC Approved </Label>
                        <Input type="date" id="REQ_PCM2_PSC_APPROVE"name="REQ_PCM2_PSC_APPROVE"/>
                        </Col>
                        </CardBody>
                        </Card>
                        </Col>

                        </Row>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
            </div>

        );
    }
}

export default CreateBE;
