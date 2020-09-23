import React, {Component} from 'react';
import { Badge, Table, Form, FormText, Button,Input, Label, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row, Modal, ModalBody, ModalFooter, ModalHeader, } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import Swal from 'sweetalert2'
import { FormControl } from '@material-ui/core';
import auth from '../../auth';

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
        this.onChageReqType = this.onChageReqType.bind(this);
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
            RUstatusDate: "",
            RUtype: "",
            RUdate: "",
            RURemark: "",
            RUid:"",
            ReqEmail:"",
            RGEMAIL:"",
            refNo: "",
            dataRequestBE: [],
        };

    }

    componentDidMount(){
      //localStorage.setItem('requestorID', '100189')
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
       this.getReqList();
       this.getRequestorList();
       this.getGITAssesor();
       this.getTMSystem();
       this.getVendorSystem();
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
          //console.log('requestorID',result);
          //this.setState({ requestorID : result[0].REQ_ID })
          if (result.response === "unauthorized"){
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Your session has timed out!',
              showConfirmButton: false,
              timer: 1000
            })
              }
          else{
          localStorage.setItem('requestorID', result[0].REQ_ID)
          }
         
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
          if (result.response === "unauthorized"){
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Your session has timed out!',
              showConfirmButton: false,
              timer: 1000
            })
              }
          else{
          this.setState({Lovcategory : result})
          }
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
         if (result.response === "unauthorized"){
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Your session has timed out!',
            showConfirmButton: false,
            timer: 1000
          })
            }
        else{
          this.setState({LovCatType : result})
        }
         }
         )
       }

       onChageReqType(e){

        var filterType = Object.values(this.state.LovCatType).filter(f=> f.LOV_VALUE == e.target.value)
        //console.log('type', filterType[0].LOV_VALUE_2);
        var refType = filterType[0].LOV_VALUE_2;
        var date = new Date;
       
        var month = (date.getMonth() + 1).toString().padStart(2, "0"); // Since getMonth() returns month from 0-11 not 1-12
        var year = date.getFullYear()+"";
        var strYear= year.match(/\d{2}$/);
        var monthYear =  strYear+month;
        var reqID = localStorage.getItem('requestorID');
        var refno = refType+"-"+monthYear+"-"+reqID//.toString().slice(-3)

       // console.log('type',refno);
       this.setState({
         refNo : refno
       })

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
          if (result.response === "unauthorized"){
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Your session has timed out!',
              showConfirmButton: false,
              timer: 1000
            })
              }
          else{
           this.setState({ LovSystem : result })
          }
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
          if (result.response === "unauthorized"){
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Your session has timed out!',
              showConfirmButton: false,
              timer: 1000
            })
              }
          else{
          this.setState({ LovPillar : result })
          }
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
          if (result.response === "unauthorized"){
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Your session has timed out!',
              showConfirmButton: false,
              timer: 1000
            })
              }
          else{
           this.setState({ LovStatus : result })
          }
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
          if (result.response === "unauthorized"){
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Your session has timed out!',
              showConfirmButton: false,
              timer: 1000
            })
              }
          else{
          this.setState({ LovLOB : result })
          }
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
          if (result.response === "unauthorized"){
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Your session has timed out!',
              showConfirmButton: false,
              timer: 1000
            })
              }
          else{
          this.setState({ LovConsultant : result })
          }
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
          if (result.response === "unauthorized"){
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Your session has timed out!',
              showConfirmButton: false,
              timer: 1000
            })
              }
          else{
          this.setState({ LovGIT : result })
          }
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
          if (result.response === "unauthorized"){
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Your session has timed out!',
              showConfirmButton: false,
              timer: 1000
            })
              }
          else{
          this.setState({ LovRequestor : result })
          }
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
          if (result.response === "unauthorized"){
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Your session has timed out!',
              showConfirmButton: false,
              timer: 1000
            })
          }
          else{
              this.setState({ LovVendor : result })
              }
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
         if (result.response === "unauthorized"){
              Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Your session has timed out!',
                showConfirmButton: false,
                timer: 1000
              })
         }
         else{
          this.setState({
            dataRequest : result.req_update,
            dataRequestBE : result.request[0]
          })
         }
         
         }
         )   

      }

      getRequestorList(){
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
             if (result.response === "unauthorized"){
              Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Your session has timed out!',
                showConfirmButton: false,
                timer: 1000
              })
                }
            else{
             this.setState({ dataRequestor : result.req_requestor })
             }
           }
           )   
 
     }

     getGITAssesor(){

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
          if (result.response === "unauthorized"){
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Your session has timed out!',
              showConfirmButton: false,
              timer: 1000
            })
              }
          else{
          this.setState({ dataGITAssessors : result.req_git })
          }
        }
        )   

     }
    
     getTMSystem(){

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
        if (result.response === "unauthorized"){
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Your session has timed out!',
            showConfirmButton: false,
            timer: 1000
          })
            }
        else{
        this.setState({ dataSysTM : result.req_sys_tm })
        }
      }
      )   

     }

    getVendorSystem(){
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
        if (result.response === "unauthorized"){
          Swal.fire({
            title: 'Your session has timed out!',
            text: 'Do you want to save the changes?',
            showDenyButton: true,
            //showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              //return <Redirect to='/login' />
              this.handleSubmitBE()
              this.props.history.push('/login')
             // Swal.fire('Saved!', '', 'success', <Redirect to='/login' />)
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
          }
        else{
        this.setState({ dataSysVendor : result.req_sys_vendor })
        }
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

      togglePrimary(e,ID) {
        this.setState({
          primary: !this.state.primary,
        });

        if(ID){
          var filterRU = Object.values(this.state.dataRequest).filter(d=> d.RU_ID == ID)
          //console.log('RUID',filterRU[0]);
          this.setState({
            RUid: ID,
            RURemark: filterRU[0].RU_REMARK,
            RUtype: filterRU[0].RU_TYPE,
            RUdate: filterRU[0].RU_STATUS_DATE
          })
        }
      
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
        var username = localStorage.getItem('username');
        var reqID = localStorage.getItem('requestorID');
        var RUdate =  this.state.RUstatusDate
    
        $inputs.each(function () {
            if ($(this).is(':radio') == true || $(this).is(':checkbox') == true){
              values[this.name] = $('input[name=' + $(this).attr('name') + ']:checked').val() == undefined ? "" : $('input[name=' + $(this).attr('name') + ']:checked').val();
                  } 
                  else {
              values[this.name] = $(this).val() == undefined ? "" : $(this).val();
            }
            values['REQ_ID'] = reqID;
            values['RU_ID'] = '';
            values['RU_STATUS_DATE'] = RUdate;
            values['RU_UPDATED_BY'] = username.toUpperCase();
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
            ////setTimeout(function(){ this.props.history.push('/login') }, 2000);
           
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
            //setTimeout(function(){ this.props.history.push('/login') }, 2000);
            
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

            // var accessToken = localStorage.getItem('token');
            // var reqID = localStorage.getItem('requestorID');
            // fetch("/api/ITD_REQUEST_LIST/?REQ_ID=" + reqID,
            // {
            //   headers: {
            //     Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
            //   }
            // }
            // )
            // .then(response =>  response.json())
            // .then(result =>  {
            //   //console.log('getReqList',result);
            //   this.setState({ dataRequestor : result.req_requestor })
            // }
            // )   

            this.getRequestorList();

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

        if(e.target.name == 'RG_NAME'){
          if(e.target.value){
            var filterEmail = Object.values(this.state.LovGIT).filter(r=> r.LOV_VALUE == e.target.value)
            console.log('emial',filterEmail);
            this.setState({ 
              'RG_EMAIL' : filterEmail[0].LOV_VALUE_2,
              RGEMAIL : filterEmail[0].LOV_VALUE_2
            });
          }
        }
        else{
          if(e.target.name == 'RG_EMAIL'){
              this.setState({ 
                'RG_EMAIL' : e.target.value,
                RGEMAIL : e.target.value
              });
          }
        }

      }

      onChangeRequestor(e){

        e.preventDefault();
        //console.log({[e.target.name]: e.target.value});
        this.setState({ [e.target.name]: e.target.value });
      
        if(e.target.name == 'RQ_REQUESTOR_NAME'){
          if(e.target.value){
            var filterEmail = Object.values(this.state.LovRequestor).filter(r=> r.LOV_VALUE == e.target.value)
            this.setState({ 
              'RQ_EMAIL' : filterEmail[0].LOV_VALUE_2,
              ReqEmail : filterEmail[0].LOV_VALUE_2
            });
          }
        }
        else{
          if(e.target.name == 'RQ_EMAIL'){
              this.setState({ 
                'RQ_EMAIL' : e.target.value,
                 ReqEmail : e.target.value
              });
          }
        }
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
            //setTimeout(function(){ this.props.history.push('/login') }, 2000);
            
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

          this.getGITAssesor()
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
            //setTimeout(function(){ this.props.history.push('/login') }, 2000);
            
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

           this.getTMSystem();

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
        //console.log('vendorsubmit');
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
            //setTimeout(function(){ this.props.history.push('/login') }, 2000);
            
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

           this.getVendorSystem();

          }
        
          })
          .catch((err) => {
            console.log('failed to create ', err);
          });

        }

      }

      deleteRU(e,ID){

        e.preventDefault();
        var accessToken = localStorage.getItem('token');
    
        axios.post('/api/ITD_REQ_STAT_UPD_DELETE', {data: {'RU_ID': ID}},
        {
         headers: {
           Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
         }
        }
        ).then((res) => {
          console.log('success to delete ', res);   
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
           //setTimeout(function(){ this.props.history.push('/login') }, 2000);
          
        }
          this.getReqList();
         // this.togglePrimary()
        })
        .catch((err) => {
          console.log('failed to create ', err);
        });

      }

      onChangeDate(e){
        var Inputdate = e.target.value
        let arr = Inputdate.split('-') //now we get array of these and we can made in any format as we want
        let dateFormat = arr[2] + "/" + arr[1] + "/" + arr[0]  //In dd-mm-yyyy format
        //console.log('date',Inputdate);
        this.setState({
          RUstatusDate : dateFormat
        })
      }
  
   //main - submit BE
    handleSubmitBE(e,type){

      e.preventDefault();
      var $inputs = $('#submitBE :input');//get form values
      var values = {};
      var username = localStorage.getItem('username');
    
      $inputs.each(function () {
          if ($(this).is(':radio') == true || $(this).is(':checkbox') == true){
            values[this.name] = $('input[name=' + $(this).attr('name') + ']:checked').val() == undefined ? "" : $('input[name=' + $(this).attr('name') + ']:checked').val();
                } 
                else {
            values[this.name] = $(this).val() == undefined ? "" : $(this).val();
          }
          values['REQ_INSERT_BY'] = username.toUpperCase()
       });
  
      console.log('typeBE',type);
      if(type === 'saveBE' || type === 'submitBE')
       var accessToken = localStorage.getItem('token');
       axios.post('/api/ITD_REQUEST_CREATE', {data: values},
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
         //setTimeout(function(){ this.props.history.push('/login') }, 2000);
         
       }
       //success
       else{
         Swal.fire({
           position: 'center',
           icon: 'info',
           title: 'Data has been created.',
           showConfirmButton: false,
           timer: 1000
         })

         //setTimeout(function(){ this.props.history.push('/LandingPage') }, 2000);
        // setTimeout(function(){ return(<Redirect from="/CreateBE"  to="/LandingPage" />)}, 2000);

       }
     
       })
       .catch((err) => {
         console.log('failed to create ', err);
       });

    }

    render() {
        //console.log('req',this.state.dataRequestBE);
        var colapsebgColor = '#84CCFA'
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
        var requestBE = this.state.dataRequestBE
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
              <Form id="submitBE" onSubmit={this.handleSubmitBE}>
              <div className="form-button">
                <Row style={{ marginTop: '20px' }}>
                <Col style={{ marginLeft: '20px' }}>
                    <Button type="reset" color="primary"> Reset</Button>
                    <Button type="submit" color="success" onClick={(e)=>this.handleSubmitBE(e,'saveBE')}> Save</Button>
                    <Button type="submit" color="dark" onClick={(e)=>this.handleSubmitBE(e,'submitBE')}> Submit</Button>
                </Col>
                </Row>
                </div>

              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne" style={{backgroundColor: colapsebgColor}}>
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h6  style={{color: 'black'}}style={{color: 'black'}}className="m-0 p-0"><strong>REQUEST PROFILE</strong></h6>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
              <Row>
                <Col xs='3'>
                <FormControl hidden={true}>
                <Label>Requestor ID</Label>
                <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_ID"name="REQ_ID" value={reqID} readOnly/>
                </FormControl>
                <Label>Reference #</Label>
                <Input type="text"  style={{backgroundColor: '##ABB2B9'}}id="REQ_REF_NO"name="REQ_REF_NO" value={requestBE ? requestBE.REQ_REF_NO : this.state.refNo } readOnly/>
                <Label>Ext Ref # (IRIS No/Proj No)</Label>
                <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_EXT_NO" name="REQ_EXT_NO" value={requestBE.REQ_EXT_NO}/>
                <Label >Category</Label>
                <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_CATEGORY" id="REQ_CATEGORY" value={requestBE.REQ_CATEGORY} onChange={this.lovCatType}>
                <option value="">Please select</option>
                        {
                           Object.values(category).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                          })
                        }
                </Input>
                <Label>Type</Label>
                <Input type="select"  style={{backgroundColor: '#EAEDED '}}  name="REQ_TYPE" id="REQ_TYPE" onChange={this.onChageReqType}>
                        {/* <option value="">Please select</option> */}
                        {/* <option value="product">Product</option>
                        <option value="non-product">Non-Product</option> */}
                        {
                           requestBE ? 
                           <option key={requestBE.REQ_TYPE} value={requestBE.REQ_TYPE}>{requestBE.REQ_TYPE}</option>
                           :
                           Object.values(type).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                          }) 

                        }  
   
                </Input>
                <Label>Agile</Label>
                <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_AGILE" id="REQ_AGILE" value={requestBE.REQ_AGILE}>
                        <option value="">Please select</option>
                        <option value="YES">Yes</option>
                        <option value="NO">No</option>             
                </Input>
                <Label>AOP</Label>
                <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_AOP" id="REQ_AOP" value={requestBE.REQ_AOP}>
                        <option value="">Please select</option>
                        <option value="YES">Yes</option>
                        <option value="NO">No</option>       
                </Input>
                <Label>Ana Plan No/Ref. No</Label>
                <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_ANA_PLAN_REF_NO"name="REQ_ANA_PLAN_REF_NO" value={requestBE.REQ_ANA_PLAN_REF_NO}/>
                </Col>

                <Col xs='3'>
                <Label>Plan PBE No</Label>
                <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_PLAN_PBE_NO" name="REQ_PLAN_PBE_NO" value={requestBE.REQ_PLAN_PBE_NO}/>             
                <Label>Plan PBE Date/RFS Date</Label>
                <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="REQ_PLAN_PBE_DATE" name="REQ_PLAN_PBE_DATE" value={requestBE.REQ_PLAN_PBE_DATE}/>
                <Label>Actual PBE No</Label>
                <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_ACTUAL_PBE_NO" name="REQ_ACTUAL_PBE_NO" value={requestBE.REQ_ACTUAL_PBE_NO}/>
                <Label>Actual PBE Date/RFS Date</Label>
                <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="REQ_ACTUAL_PBE_DATE" name="REQ_ACTUAL_PBE_DATE" value={requestBE.REQ_ACTUAL_PBE_DATE}/>
                <Label>Quarterly Plan RFS Date</Label>
                <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_QTR_PLAN_RFS" id="REQ_QTR_PLAN_RFS" value={requestBE.REQ_QTR_PLAN_RFS}>
                        <option value="">Please select</option>
                        <option value="Q1">Q1</option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">Q3</option>
                        <option value="Q4">Q4</option>                     
                </Input>
                </Col>

                <Col xs='3'>
                <Label >Name/Description</Label>
                <Input type="textarea"  style={{backgroundColor: '#EAEDED '}} id="REQ_DESC"name="REQ_DESC" value={requestBE.REQ_DESC}/>
                <Label >Remarks/Benefit</Label>
                <Input type="textarea"  style={{backgroundColor: '#EAEDED '}} id="REQ_REMARKS"name="REQ_REMARKS" value={requestBE.REQ_REMARKS}/>
                <Label>System</Label>
                <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_SYSTEM" id="REQ_SYSTEM" value={requestBE.REQ_SYSTEM}>
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
                <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_SRPI_NAME"name="REQ_SRPI_NAME" value={requestBE.REQ_SRPI_NAME}/>
                <Label>Status</Label>
                <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_STATUS" id="REQ_STATUS" value={requestBE.REQ_STATUS}>
                <option value="">Please select</option>
                        {
                  Object.values(status).map((d)=>{
                   //console.log('data', d.LOV_VALUE)
                   return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                 })
                }
                </Input>
                <Label>Status Description</Label>
                <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_STATUS_DESC" id="REQ_STATUS_DESC" value={requestBE.REQ_STATUS_DESC}>
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
                        <div style={{float: 'right'}} onClick={this.togglePrimary} ><Button type="button" color="primary"> Add Remarks </Button></div>
                        <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
                       className={'modal-primary ' + this.props.className}>
                  <ModalHeader toggle={this.togglePrimary}>Add Remark</ModalHeader>
                  <ModalBody>
                  <Form id="addRemark" onSubmit={this.handleSubmitRemark}>
                    <Row>
                        <Col>
                        <Label>Update type</Label>
                            <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="RU_TYPE" id="RU_TYPE" onChange={this.handleChangeRemark}>
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
                        <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="RU_STATUS_DATE" name="RU_STATUS_DATE" onChange={this.handleChangeRemark}  onChange={this.onChangeDate.bind(this)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12'>
                        <Label>Remarks</Label>
                        <Input type="textarea"  style={{backgroundColor: '#EAEDED '}} id="RU_REMARK" name="RU_REMARK" size='20' onChange={this.handleChangeRemark}/>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '20px'}}>
                        <Col>
                         <Button color="primary" type="submit">Add / UPDATE</Button>{' '}
                        </Col>
                        {/* <Col>
                        <Button color="success" type="submit">Update</Button>
                        </Col>
                        <Col>
                        <Button color="warning" type="submit" >Delete</Button>
                        </Col> */}
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
                {d.RU_STATUS_DATE}
            </td>
            <td>
                {d.RU_UPDATED_DATE}
            </td>
            <td>
                {d.RU_REMARK}
            </td>
            <td>
            <Row>
                <Col>
                  <Button color="success" type='button' onClick={(e)=>this.togglePrimary(e,d.RU_ID)} >Update</Button>
                  </Col>
                  <Col>
                  <Button color="warning" type='button'  onClick={(e)=> this.deleteRU(e,d.RU_ID)}>Delete</Button>
                </Col>
              </Row>
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
                    <CardHeader id="headingTwo"  style={{backgroundColor: colapsebgColor}}>
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h6  style={{color: 'black'}}style={{color: 'black'}}className="m-0 p-0"><strong>REQUESTOR, CONSULTANTS, GIT ASSESSORS</strong></h6>
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
                <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="RQ_LOB" id="RQ_LOB" onChange={this.onChangeRequestor}>
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
                  <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="RQ_REQUESTOR_NAME" id="RQ_REQUESTOR_NAME" onChange={this.onChangeRequestor}>
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
                <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="RQ_EMAIL"name="RQ_EMAIL" onChange={this.onChangeRequestor}  value={this.state.ReqEmail}/>
                </Col>
                <Col xs='1' style={{marginLeft: '30px', marginTop: '25px'}}>
                <Button block color="primary" type='button' onClick={this.addRequestor}> Add</Button>
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
                <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_CONSULT_1" id="REQ_CONSULT_1" value={requestBE.REQ_CONSULT_1}>
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
                <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_TAGCOST_1"name="REQ_TAGCOST_1" value={requestBE.REQ_TAGCOST_1}/>
                </Col>
                </Row>

                <Row>
                <Col xs='4'>
                <Label>Consultants 2</Label>
                <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_CONSULT_2" id="REQ_CONSULT_2" value={requestBE.REQ_CONSULT_2}>
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
                <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_TAGCOST_2"name="REQ_TAGCOST_2" value={requestBE.REQ_TAGCOST_2}/>
                </Col>
                </Row>

                <Row>
                <Col xs='4'>
                <Label>Consultants 3</Label>
                <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_CONSULT_3" id="REQ_CONSULT_3" value={requestBE.REQ_CONSULT_3}>
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
                <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_TAGCOST_3"name="REQ_TAGCOST_3" value={requestBE.REQ_TAGCOST_3}/>
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
                  <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="RG_NAME" id="RG_NAME" onChange={this.onChangeGITAssessors}>
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
                <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="RG_SYSTEM" id="RG_SYSTEM" onChange={this.onChangeGITAssessors}>
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
                <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="RG_EMAIL"name="RG_EMAIL" onChange={this.onChangeGITAssessors} value={this.state.RGEMAIL}/>
                </Col>

                <Col xs='2'>
                <Label>Tag Cost</Label>
                <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="RG_TAGCOST"name="RG_TAGCOST" onChange={this.onChangeGITAssessors}/>
                </Col>
                <Col xs='1' style={{marginLeft: '30px', marginTop: '25px'}}>
                <Button block color="primary" type="button" onClick={this.addGITAssessors}> Add</Button>
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
                    <CardHeader id="headingThree"  style={{backgroundColor: colapsebgColor}}>
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h6  style={{color: 'black'}}style={{color: 'black'}}className="m-0 p-0"><strong>MANDAYS PROFILE</strong></h6>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <Row>
                            
                            <Col xs='3'>
                            <Label>PIP Pillar</Label>
                            <Input type="select"  style={{backgroundColor: '#EAEDED '}} id="REQ_PIP_PILLAR"name="REQ_PIP_PILLAR" value={requestBE.REQ_PIP_PILLAR}>
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
                            <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_PIP_PILLAR_REVENUE"name="REQ_PIP_PILLAR_REVENUE" placeholder="RM" value={requestBE.REQ_PIP_PILLAR_REVENUE}/>
                            <FormText className="help-block">Please Input RM Figure for PIP Pillar Revenue Generation</FormText>
                            </Col>

                            <Col xs='3'>
                            <Label>MD Category</Label>
                            <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_MD_CATEGORY" id="REQ_MD_CATEGORY" value={requestBE.REQ_MD_CATEGORY}>
                                    <option value="0">Please select</option>
                                    <option value="Simple">Simple (less or equal 50)</option>
                                    <option value="Medium">Medium (less or equal 250)</option>
                                    <option value="Complex">Complex (more than 250)</option>
                            </Input>
                            </Col>

                            <Col xs='2'>
                            <Label>Ballpark TM</Label>
                            <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_BALLPARK_TM" name="REQ_BALLPARK_TM" value={requestBE.REQ_BALLPARK_TM}/>
                            </Col> 

                            <Col xs='2'>
                            <Label>Ballpark Vendor</Label>
                            <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_BALLPARK_VENDOR" name="REQ_BALLPARK_VENDOR" value={requestBE.REQ_BALLPARK_VENDOR}/>
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
                            <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_TOTAL_TAGCOST_TM"name="REQ_TOTAL_TAGCOST_TM" value={requestBE.REQ_TOTAL_TAGCOST_TM}/>
                            <Label>Build</Label>
                            <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_BUILD_TM"name="REQ_BUILD_TM" value={requestBE.REQ_BUILD_TM}/>
                            </Col>
                            <Col xs='5'>
                            <Label>Test</Label>
                            <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_TEST_TM"name="REQ_TEST_TM" value={requestBE.REQ_TEST_TM}/>
                            <Label>Total IA</Label>
                            <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_TOTAL_IA_TM"name="REQ_TOTAL_IA_TM" value={requestBE.REQ_TOTAL_IA_TM}/>
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
                            <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_TOTAL_TAGCOST_EXT"name="REQ_TOTAL_TAGCOST_EXT" value={requestBE.REQ_TOTAL_TAGCOST_EXT}/>
                            <Label>Build</Label>
                            <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_BUILD_EXT"name="REQ_BUILD_EXT" value={requestBE.REQ_BUILD_EXT}/>
                            </Col>
                            <Col xs='5'>
                            <Label>Test</Label>
                            <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_TEST_EXT"name="REQ_TEST_EXT" value={requestBE.REQ_TEST_EXT}/>
                            <Label>Total IA</Label>
                            <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_TOTAL_IA_EXT"name="REQ_TOTAL_IA_EXT" value={requestBE.REQ_TOTAL_IA_EXT}/>
                            </Col>
                            </Row>
                            </CardBody>
                            </Card>
                            </Col>

                            {/** add system TM */}
                            <Col xs='3'>
                            <Label>Impacted Sytem</Label>
                            <Input type="select"  style={{backgroundColor: '#EAEDED '}} id="IM_IMPACTED_SYSTEM"name="IM_IMPACTED_SYSTEM" onChange={this.onChangeSysTM}>
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
                            <button class="btn btn-primary" type="button" onClick={this.onSubmitTM}>Add</button>
                            </Col>
                            <Col xs='3'>
                            <Label>Mandays</Label>
                            <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="IM_MANDAYS"name="IM_MANDAYS" onChange={this.onChangeSysTM} />
                            </Col>

                            {/** add system EXTERNAL */}
                            <Col xs='3'>
                            <Label>Vendor</Label>
                            <Input type="select"  style={{backgroundColor: '#EAEDED '}} id="IV_VENDOR"name="IV_VENDOR" onChange={this.onChangeSysVendor} >
                            <option value="0">Please select</option>
                            {
                            Object.values(vendor).map((d)=>{
                            //console.log('data', d.LOV_VALUE)
                            return <option key={d.LOV_VALUE} value={d.LOV_VALUE}>{d.LOV_VALUE}</option>
                            })
                            }
                            </Input>
                            <Label>Mandays</Label>
                            <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="IV_MANDAYS"name="IV_MANDAYS" onChange={this.onChangeSysVendor} />
                            </Col>
                            <Col xs='3'>
                            <Label>Systems</Label>
                            <Input type="select"  style={{backgroundColor: '#EAEDED '}} id="IV_SYSTEM"name="IV_SYSTEM" onChange={this.onChangeSysVendor}>
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
                            <button class="btn btn-primary" type="button" onClick={this.onSubmitVendor}>Add</button>
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
                              reqSysTM ?  Object.values(reqSysTM).map((d,index)=>{
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
                                }) : ""
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
                                reqSysVendor ? Object.values(reqSysVendor).map((d,index)=>{
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
                                }) : ""
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
                            <Col xs='3'><Input type="text"  style={{backgroundColor: '#EAEDED '}}id="impactedSystem"name="impactedSystem" /></Col>
                            
                        </Row>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingFour"  style={{backgroundColor: colapsebgColor}}>
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(3)} aria-expanded={this.state.accordion[3]} aria-controls="collapseThree">
                        <h6  style={{color: 'black'}}style={{color: 'black'}}className="m-0 p-0" ><strong>BUDGET PROFILE & STATUS DATE PROFILE</strong></h6>
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
                        <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="REQ_BUDGET_MEMO_DATE"name="REQ_BUDGET_MEMO_DATE" value={requestBE.REQ_BUDGET_MEMO_DATE}/>
                        </Col>
                        <Col xs='2'>
                        <Label>Budget Memo Amount</Label>
                        <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_BUDGET_MEMO_AMT"name="REQ_BUDGET_MEMO_AMT" placeholder="RM" value={requestBE.REQ_BUDGET_MEMO_AMT}/>
                        </Col>
                        <Col xs='2'>
                        <Label>Budget Transfer Date</Label>
                        <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="REQ_BUDGET_TRANSFER_DATE"name="REQ_BUDGET_TRANSFER_DATE" value={requestBE.REQ_BUDGET_TRANSFER_DATE}/>
                        </Col>
                        <Col xs='3'>
                        <Label>Budget Transfer Man Days</Label>
                        <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_BUDGET_TRANSFER_MDY"name="REQ_BUDGET_TRANSFER_MDY" value={requestBE.REQ_BUDGET_TRANSFER_MDY}/>
                        </Col>
                        <Col xs='3'>
                        <Label>Budget Transfer Amount</Label>
                        <Input type="text"  style={{backgroundColor: '#EAEDED '}}id="REQ_BUDGET_TRANSFER_AMT"name="REQ_BUDGET_TRANSFER_AMT" placeholder="RM" value={requestBE.REQ_BUDGET_TRANSFER_AMT}/>
                        </Col>
                        </Row>
                        
                        </CardBody>

                    <CardHeader>MOT Follow Up</CardHeader>
                    <CardBody>
                        <Row>
                        <Col xs='3'>
                        <Label>Advise Requestor To Sent MOT</Label>
                        <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_MOT_ADVISE" id="REQ_MOT_ADVISE" value={requestBE.REQ_MOT_ADVISE}>
                        <option value="">Please select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </Input>
                        </Col>
                        <Col xs='3'>
                        <Label>MOT Send to User</Label>
                        <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_MOT_SEND_USER" id="REQ_MOT_SEND_USER" value={requestBE.REQ_MOT_SEND_USER}>
                        <option value="">Please select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </Input>
                        </Col>
                        <Col xs='3'>
                        <Label>Date Sending</Label>
                        <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="REQ_MOT_DATE_SEND"name="REQ_MOT_DATE_SEND" value={requestBE.REQ_MOT_DATE_SEND}/>    
                        </Col>
                </Row>
                </CardBody>

                <CardHeader>MOT Received by GIT Business Finance</CardHeader>
                    <CardBody>
                        <Row>
                        <Col xs='3'>
                        <Label>MOT Received</Label>
                        <Input type="select"  style={{backgroundColor: '#EAEDED '}} name="REQ_MOT_RECEIVED" id="REQ_MOT_RECEIVED" value={requestBE.REQ_MOT_RECEIVED}>
                        <option value="">Please select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </Input> 
                        </Col>
                        <Col xs='6'>
                        <Label>Remarks</Label>
                        <Input type="textarea"  style={{backgroundColor: '#EAEDED '}} id="REQ_MOT_REMARK" name="REQ_MOT_REMARK" value={requestBE.REQ_MOT_REMARK}/>   
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
                        <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="REQ_REQUEST_DATE"name="REQ_REQUEST_DATE" value={requestBE.REQ_REQUEST_DATE}/>
                        <Label>BE Received Date</Label>
                        <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="REQ_BE_RECEIVED"name="REQ_BE_RECEIVED" value={requestBE.REQ_BE_RECEIVED}/>
                        </Col>

                        <Col xs="12" sm="6" md="4">
                        <Card className="border-primary">
                        <CardHeader>
                        <strong>Design & Mandays Approval</strong>
                        </CardHeader>
                        <CardBody>
                        <Col xs='8'>
                        <Label>ITDC Approved Ball Park</Label>
                        <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="REQ_ITDC_BALLPARK"name="REQ_ITDC_BALLPARK" value={requestBE.REQ_ITDC_BALLPARK}/>
                        <Label>ITDC Approved Final</Label>
                        <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="REQ_ITDC_APPROVE_FINAL"name="REQ_ITDC_APPROVE_FINAL" value={requestBE.REQ_ITDC_APPROVE_FINAL}/>
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
                        <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="REQ_IBER_BALLPARK"name="REQ_IBER_BALLPARK" value={requestBE.REQ_IBER_BALLPARK}/>
                        <Label>IBER Approved Final</Label>
                        <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="REQ_IBER_APPROVE_FINAL"name="REQ_IBER_APPROVE_FINAL" value={requestBE.REQ_IBER_APPROVE_FINAL}/>
                        <Label>PCM1/PSC Approved </Label>
                        <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="REQ_PCM1_PSC_APPROVE"name="REQ_PCM1_PSC_APPROVE" value={requestBE.REQ_PCM1_PSC_APPROVE}/>
                        <Label>PCM2/PSC Approved </Label>
                        <Input type="date"  style={{backgroundColor: '#EAEDED '}} id="REQ_PCM2_PSC_APPROVE"name="REQ_PCM2_PSC_APPROVE" value={requestBE.REQ_PCM2_PSC_APPROVE}/>
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
              </Form>
            </Card>
            </div>

        );
    }
}

export default CreateBE;
