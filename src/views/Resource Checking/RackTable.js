import React, {useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Route, Redirect,Link } from "react-router-dom";
import ToolkitProvider, { Search }  from 'react-bootstrap-table2-toolkit';
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

const { SearchBar,ClearSearchButton } = Search;
const columns = [
    {
        dataField: 'SITE_ID',
        text: 'Site ID',  
    },
    { 
        dataField: 'SITE_NAME',
        text: 'Site Name',    
    },
    {
        dataField: 'SITE_ADDE_ID', 
        text: 'Site Address ID',  
      
    },
    {
      dataField: 'SITE_TYPE', 
      text: 'Site Type',  
    
  },
  {
    dataField: 'SITE_PARENT_ID', 
    text: 'Site Parent ID',  
  
    
},  {
  dataField: 'SITE_ABBR', 
  text: 'Site Abbr',  

},
{
dataField: 'SITE_MGR', 
text: 'Site Manager',  

},
{
dataField: 'SITE_MGR_NO', 
text: 'Site Manager No',  

},
{
  dataField: 'SITE_STATUS', 
  text: 'Site Status',  
  
  },
  {
  dataField: 'SITE_DESC', 
  text: 'Site Desc',  
  
  },
    {
      text: 'Action',
      isDummyField: true,
      formatter: (cell,row)=>{
              return(<Link className="btn btn-success btn-sm"
                    to={{
                    pathname: "/product offering/services",
                    state: {state: row}
                    }} 
                >Select
                    </Link>)
      },
      //formatExtraData: { hoverIdx: this.state.hoverIdx },
      // headerStyle: { width: '50px' },
      // style: { height: '30px' }
    }
]


const RackTable = (props) =>{
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
                        <BootstrapTable
                        { ...props.baseProps }
                        pagination={ paginationFactory() }
                        noDataIndication= { noDataFound }
                        />
                      </CardBody>
                    </Card>
                    </div>
                    )
                }
                </ToolkitProvider>
    
    )
}

export default RackTable