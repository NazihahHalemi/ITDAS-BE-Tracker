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
  Row, Progress,Table,Alert,
} from 'reactstrap';

class ResourceCheck extends Component {
  constructor(props) {
    super(props);

    this.resourceSummary = this.resourceSummary.bind(this);
    this.handleChangeSite = this.handleChangeSite.bind(this);
    this.state = {
      SiteOption: {},
      selectedSite: "",
      openContainer: false,
      rack_util: {},
      total_util: '',
      space_util: '80',
      colorBadge: "",
      alertFlag: true,
      dcLocation: {},
    };
  }

  componentDidMount(){
    this.LOVsite();

  }

  handleChangeSite(e){
      
    this.setState({
        selectedSite: e.target.value
    })
    
    
    var siteSelected = e.target.value
    if(siteSelected != ""){

        fetch('/claritybqm/reportFetch/?scriptName=DC_LOCATION')
        .then(response => response.json())
        .then((loc) => 
        {
            //console.log('site',JSON.stringify(site))
            
            var LocFilter = loc.filter(loc => loc.SITE_NAME == siteSelected);
            this.setState({ dcLocation : LocFilter})          
           
        }
        );

    }

  }

  LOVsite(){

    fetch('/claritybqm/reportFetch/?scriptName=DC_LOV&type=SITE')
    .then(response => response.json())
    .then((site) => 
    {
        //console.log('site',JSON.stringify(site))
        this.setState({ SiteOption : site})          
       
    }
    );

   
  }
  resourceSummary(e){
    
    this.setState({openContainer : true})
    fetch('/claritybqm/reportFetch/?scriptName=DC_NE_UTILIZATION&siteName=' + this.state.selectedSite)
    .then(response => response.json())
    .then((util) => 
    {
        console.log('util',util)
        this.setState({ rack_util : util})    
        Object.values(util).map((d)=>
        {
            this.setState({ total_util : d.RACK_UTILIZATION})    
        })
       
    }
    );

    this.createSummaryPanel();
    
  }
  createSummaryPanel(){
    var alertShow = this.state.alertFlag
    if(this.state.openContainer == true){
        if(this.state.rack_util.length){
            if(this.state.total_util >= "80" ){
               var color = "danger"
            }
            if(this.state.total_util  < "80"){
                var color = "primary"
             }
             if(this.state.space_util  >= "70" && alertShow == true){
                var colorSpace = "danger";
                alertShow = false
             }
            return(<Card outline color="primary">
                <CardHeader>
                    <Row>
                    Summary
                    <Col xs='4' style={{marginLeft: '600px'}}>
                        <Button block color="info" className="btn-pill" href="#/resourceDetails"> Resource Details</Button>
                    </Col>
                    </Row>
                </CardHeader>
                    <CardBody>
                    <Row>
                      <Col xs="4" sm="6" md="4">
                        <Card>
                            <CardHeader>
                                Rack
                                <div className="card-header-actions">
                                  <Badge pill color={color} className="float-right">Rack Utilization: {this.state.total_util}%</Badge>
                                </div>
                            </CardHeader>
                            <CardBody>
                               <Row>
                                   <Col>
                                        {
                                            Object.values(this.state.rack_util).map((d)=>
                                            {
                                                return(<div>
                                                    <Label>Rack Utilized : <Badge pill color="warning" >  {d.RACK_UTILIZED}</Badge></Label>
                                                    <Label>Rack Available : <Badge pill color="success">  {d.RACK_AVAILABLE}</Badge></Label>
                                                    <Label>Total Rack Capacity : <Badge pill color="primary" >  {d.TOTAL_RACK}</Badge></Label>
                                                    </div>)
                                            })
                                        }
                                   </Col>
                               </Row>
                            </CardBody>
                            </Card>
                        </Col>
                        <Col xs="4" sm="6" md="4">
                        <Card>
                            <CardHeader>
                                Space
                                <div className="card-header-actions">
                                  <Badge pill color={colorSpace} className="float-right">Space Utilization: {this.state.space_util}%</Badge>
                                </div>
                            </CardHeader>
                            <CardBody>
                               <Row>
                                   <Col>
                                        {
                                            Object.values(this.state.rack_util).map((d)=>
                                            {
                                                return(<div>
                                                    <Label>Space Utilized : <Badge pill color="warning" >  {d.RACK_UTILIZED} sqft</Badge></Label>
                                                    <Label>Space Available : <Badge pill color="success">  {d.RACK_AVAILABLE} sqft</Badge></Label>
                                                    <Label>Total Space Capacity : <Badge pill color="primary" >  {d.TOTAL_RACK} sqft</Badge></Label>
                                                    </div>)
                                            })
                                        }
                                   </Col>
                               </Row>
                            </CardBody>
                            </Card>
                        </Col>
                        <Col xs="4" sm="6" md="4">
                        <Card>
                            <CardHeader>
                                Power
                                <div className="card-header-actions">
                                  <Badge pill color={color} className="float-right">Power Utilization: {this.state.total_util}%</Badge>
                                </div>
                            </CardHeader>
                            <CardBody>
                               <Row>
                                   <Col>
                                        {
                                            Object.values(this.state.rack_util).map((d)=>
                                            {
                                                return(<div>
                                                    <Label>Power Utilized : <Badge pill color="warning" >  {d.RACK_UTILIZED} KW</Badge></Label>
                                                    <Label>Power Available : <Badge pill color="success">  {d.RACK_AVAILABLE} KW</Badge></Label>
                                                    <Label>Total Power Capacity : <Badge pill color="primary" >  {d.TOTAL_RACK} KW</Badge></Label>
                                                    </div>)
                                            })
                                        }
                                   </Col>
                               </Row>
                            </CardBody>
                            </Card>
                        </Col>
                     </Row>
                     <Row>
                      <Col xs="4" sm="6" md="4">
                        <Card>
                            <CardHeader>
                                Network Port
                                <div className="card-header-actions">
                                  <Badge pill color={color} className="float-right">Network Port Utilization: {this.state.total_util}%</Badge>
                                </div>
                            </CardHeader>
                            <CardBody>
                               <Row>
                                   <Col>
                                        {
                                            Object.values(this.state.rack_util).map((d)=>
                                            {
                                                return(<div>
                                                    <Label>Network Port Utilized : <Badge pill color="warning" >  {d.RACK_UTILIZED}</Badge></Label>
                                                    <Label>Network Port Available : <Badge pill color="success">  {d.RACK_AVAILABLE}</Badge></Label>
                                                    <Label>Total Network Port Capacity : <Badge pill color="primary" >  {d.TOTAL_RACK}</Badge></Label>
                                                    </div>)
                                            })
                                        }
                                   </Col>
                               </Row>
                            </CardBody>
                            </Card>
                        </Col>
                        <Col xs="4" sm="6" md="4">
                        <Card>
                            <CardHeader>
                                Bandwidth
                                <div className="card-header-actions">
                                  <Badge pill color={color} className="float-right">Bandwidth Utilization: {this.state.total_util}%</Badge>
                                </div>
                            </CardHeader>
                            <CardBody>
                               <Row>
                                   <Col>
                                        {
                                            Object.values(this.state.rack_util).map((d)=>
                                            {
                                                return(<div>
                                                    <Label>Bandwidth Utilized : <Badge pill color="warning" >  {d.RACK_UTILIZED} MB</Badge></Label>
                                                    <Label>Bandwidth Available : <Badge pill color="success">  {d.RACK_AVAILABLE} MB</Badge></Label>
                                                    <Label>Total Bandwidth Capacity : <Badge pill color="primary" >  {d.TOTAL_RACK} MB</Badge></Label>
                                                    </div>)
                                            })
                                        }
                                   </Col>
                               </Row>
                            </CardBody>
                            </Card>
                        </Col>
                     </Row>
                     <Alert color="danger" hidden={alertShow}>
                        {/*eslint-disable-next-line*/}
                        Space Utilization more than 70%, please contact <a href={"mailto:azura.abubakar@tm.com.my?subject=Space Utilization more than 70%"} target='_blank' className="alert-link"> DC Manager</a> to confirm availability.
                    </Alert>
                    </CardBody>
                    <CardFooter>
                        <div>
                            <Row>
                                <Col>
                                 <h6>Floor Plan:</h6>
                                    <img src={'../../assets/img/avatars/floorPlan.png'}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                 <h6>Rack Utilization:</h6>
                                    <img src={'../../assets/img/avatars/rackUtil.png'}/>
                                </Col>
                           </Row>
                        </div>
                    </CardFooter>
                 </Card>)
        }
    }
   
  }
  render() {
   //console.log('RACK_UTILIZATION',this.state.rack_util.RACK_UTILIZATION);
   
    return (
      <div className="animated fadeIn">
          <Row>
              <Col xs='12'>
              <Card>
                  <CardHeader>Resource Check</CardHeader>
                  <CardBody>
                    <Row style={{marginLeft: "50px"}}>
                        <Col xs="4">
                            <Label>DC Site</Label>
                            <Input  type="select" name="lovSite" id="lovSite" onChange={this.handleChangeSite}>
                                {
                                    Object.values(this.state.SiteOption).map(function(lov) {
                                    // console.log('lov',lov.LOV_VALUE);
                                        return <option key={lov.LOV_VALUE} value={lov.LOV_VALUE}>{lov.LOV_VALUE}</option>
                                    })
                                }
                            
                            </Input>
                        </Col>
                    </Row>
                    <Row  style={{marginLeft: "50px", marginTop: "10px"}}>
                        <Col xs="4">
                            <Label>DC Location</Label>
                            <Input type="select" name="lovLoc" id="lovLoc" >
                                {
                                        Object.values(this.state.dcLocation).map(function(lov) {
                                        // console.log('lov',lov.LOV_VALUE);
                                            return <option key={lov.LOCATION} value={lov.LOCATION}>{lov.LOCATION}</option>
                                        })
                                }
                            
                            </Input>
                        </Col>
                        <Col xs='2'>
                            <Button block color="success" onClick={this.resourceSummary}> Check Resource</Button>
                        </Col>
                    </Row>
                    <Row style={{marginLeft: "50px", marginTop: "10px"}}>
                        <Col>
                             {this.createSummaryPanel(this.state.openContainer)}
                        </Col> 
                    </Row>
                  </CardBody>
              </Card>
              </Col>
          </Row>
      </div>
    );
  }
}

export default ResourceCheck;
