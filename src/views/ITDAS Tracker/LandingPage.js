import React , {Component } from 'react';
import { Route, Redirect, Link } from "react-router-dom";
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
// import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      dataRequest : [],
    };
  }

componentDidMount(){
    
    fetch("claritybqm/reportFetch/?scriptName=ITD_REQUEST_LIST")
    .then(response =>  response.json())
    .then(result =>  {
      console.log('result',result);
      this.setState({dataRequest : result})
     }
     )
}

  render() {
    const columns=[
      { title: 'REF #', field: 'REQ_REF_NO' },
      { title: 'IRIS REF #', field: 'REQ_REF_NO' },
      { title: 'NAME/ DESCRIPTION', field: 'REQ_REF_NAME'},
      { title: 'INITIATIVE NAME', field: 'REQ_REF_NAME'},
      { title: 'STATUS', field: 'REQ_STATUS'},
      { title: 'SYSTEM', field: 'REQ_SYSTEM'},
      { title: 'PLAN PBE NO', field: 'REQ_PLANPBENO'},
      { title: 'PLAN PBE DATE', field: 'REQ_PLANPBEDATE'},
      { title: 'ACTUAL PBE NO', field: 'REQ_ACTUAL_PBE_NO'},
      { title: 'ACTUAL PBE DATE', field: 'REQ_ACTUAL_PBE_DATE'},
      { title: 'LOB', field: 'REQ_LOB'},
      { title: 'CONSULTANT 1', field: 'REQ_ITCNAME_1'},
      { title: 'CONSULTANT 2', field: 'REQ_ITCNAME_2'},
      { title: 'CONSULTANT 3', field: 'REQ_ITCNAME_3'},

    ]
    const data = this.state.dataRequest
    //console.log(data);
    const tableIcons = {
    //   Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
      Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
      DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
      Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
      //Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
      Filter: forwardRef((props, ref) =><div />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
      ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
      ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };
    
    return( 
    <div style={{ maxWidth: '100%' }}>
    <MaterialTable
      columns={columns}
      data={data}
      title="Search Pre-BE/Non BE"
      icons={tableIcons} 
      options={{    
        //hover: true,
        filtering: true,
        pageSize: 10,
        exportButton: true,
      }}
    />
  </div>)
  }
}
export default LandingPage