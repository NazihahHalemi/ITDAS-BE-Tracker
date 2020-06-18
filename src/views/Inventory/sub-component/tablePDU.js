import React, {useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Route, Redirect,Link } from "react-router-dom";
import ToolkitProvider, { Search }  from 'react-bootstrap-table2-toolkit';
import '../css/style.css';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    Carddatext,
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
    Row, Table, CardHeader
  } from 'reactstrap';
  import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
 
const { SearchBar,ClearSearchButton } = Search;
const columns = [
    {
        dataField: 'PDU_ID',
        text: 'PDU ID',
        sort: true,  
    },
    { 
        dataField: 'PDU_NAME',
        text: 'PDU Name',    
        sort: true,
        filter: textFilter(),
    },
    {
        dataField: 'PDU_SITE_ID', 
        text: 'PDU Site ID',  
        sort: true,
        filter: textFilter(),
      
    },
    {
      dataField: 'PDU_LOCN_ID', 
      text: 'Locn ID',  
      sort: true,
      filter: textFilter(),
    
  },
  {
    dataField: 'PDU_CODE', 
    text: 'PDU CODE',  
    sort: true,
    filter: textFilter(),
  
},
{
  dataField: 'PDU_FUSE', 
  text: 'PDU Fuse',
  sort: true,  

},
{
dataField: 'PDU_USER_RACK', 
text: 'PDU User Rack', 
sort: true, 

},
{
dataField: 'PDU_STATUS', 
text: 'PDU Status',  
sort: true,

},
{
  dataField: 'PDU_DESC', 
  text: 'PDU Desc',
  sort: true,  
  
},
// {
// dataField: 'PDU_CREATED_DT', 
// text: 'Creted Date', 
// sort: true, 

// },   
// {
//     dataField: 'PDU_CREATED_BY', 
// text: 'Created by',  
// sort: true,

// }, 
// {
// dataField: 'PDU_DECOMM_DT', 
// text: 'Closed Date',
// sort: true,  

// },
// {
// dataField: 'PDU_CLOSED_BY', 
// text: 'Closed by',  
// sort: true,

// }, 
{
    text: 'Action',
    isDummyField: true,
    formatter: (cell,row)=>{
            return(<div><Button className="btn btn-success btn-sm"> Edit</Button>
                        <Button className="btn btn-danger btn-sm"> Delete</Button></div>)
    },
    //formatExtraData: { hoverIdx: this.state.hoverIdx },
    // headerStyle: { width: '50px' },
    // style: { height: '30px' }
},

]


const TablePDU = (props) =>{
    const [addModal, setaddModal] = useState(false);

    
const noDataFound = () => {
    return(
        <div style={{marginLeft: '400px'}}>
            <i className="fa fa-database"></i>
            <span>&nbsp;No Data Found</span>&nbsp;&nbsp;
        </div>
        
    )
}
 
    return(
       
                <ToolkitProvider
                keyField="id"
                data={ props.data }
                columns={ columns }
                search
                >
                {
                    props => (
                    <div>
                        {/* <h3>Input something at below input field:</h3> */}
                        <Card xl='6'>
                            <CardHeader>
                            <Button color="primary" href="#/PDU"><i className="fa fa-plus-square"></i>&nbsp; Add New PDU</Button>
                            </CardHeader>
                            <CardBody>
                               <Row>
                                <Col xs='6'>
                                  <h6>* Input any columns name</h6>
                                 <SearchBar { ...props.searchProps } placeholder="Enter Keyword" style={{width: '300%'}}/>
                                 </Col>
                                 <Col xs='6'>
                                    <FormGroup style={{marginLeft: '80px', marginTop: '20px'}}>
                                    <ClearSearchButton { ...props.searchProps } className="btn btn-danger"/>
                                    </FormGroup>
                                 </Col>
                               </Row>
                               
                        <hr />
                        <div className="expanded-container">
                        <BootstrapTable
                        { ...props.baseProps }
                        pagination={ paginationFactory() }
                        noDataIndication= { noDataFound }
                        filter={ filterFactory() }
                        striped
                        hover
                        condensed
                        />
                        </div>
                      </CardBody>
                    </Card>
                    </div>
                    )
                }
                </ToolkitProvider>
        // <BootstrapTable keyField='id' data={ props.data } 
        // columns={ columns } pagination={ paginationFactory() }
        // noDataIndication="There is no data"
        //  />

    )
}

export default TablePDU