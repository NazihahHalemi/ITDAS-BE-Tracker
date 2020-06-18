import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane
,Pagination, PaginationItem, PaginationLink, Table, Button} from 'reactstrap';
import { connect } from "react-redux";

class myTask extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }

  componentDidMount(){
    this.props.fetchBadge();
    this.props.fetchUser();
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const task = this.props.badge.Task
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>My Task</strong> <small>Waiting Approval</small>
                <div className="card-header-actions">
                  <p><b><em>Pending:</em></b><Badge color="warning">{task}</Badge></p>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="3">
                    <ListGroup id="list-tab" role="tablist">
                      <ListGroupItem onClick={() => this.toggle(0)} action active={this.state.activeTab === 0} >DC Site <i className="float-right fa fa-bell-o"><Badge color="danger">5</Badge></i></ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(1)} action active={this.state.activeTab === 1} >DC Location <i className="float-right fa fa-bell-o"><Badge color="danger">5</Badge></i></ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(2)} action active={this.state.activeTab === 2} >Bandwith <i className="float-right fa fa-bell-o"><Badge color="danger">5</Badge></i></ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(3)} action active={this.state.activeTab === 3} >PDU <i className="float-right fa fa-bell-o"><Badge color="danger">8</Badge></i></ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col xs="9">
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId={0} >
                         <Table hover bordered striped responsive size="sm">
                            <thead>
                            <tr>
                                <th>Username</th>
                                <th>Date registered</th>
                                <th>Role</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Vishnu Serghei</td>
                                <td>2012/01/01</td>
                                <td>Member</td>
                                <td>
                                <Badge color="success">Active</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Zbyněk Phoibos</td>
                                <td>2012/02/01</td>
                                <td>Staff</td>
                                <td>
                                <Badge color="danger">Banned</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Einar Randall</td>
                                <td>2012/02/01</td>
                                <td>Admin</td>
                                <td>
                                <Badge color="secondary">Inactive</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Félix Troels</td>
                                <td>2012/03/01</td>
                                <td>Member</td>
                                <td>
                                <Badge color="warning">Pending</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Aulus Agmundr</td>
                                <td>2012/01/21</td>
                                <td>Staff</td>
                                <td>
                                <Badge color="success">Active</Badge>
                                </td>
                            </tr>
                            </tbody>
                            </Table>
                            <nav>
                            <Pagination>
                                <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                                <PaginationItem active>
                                <PaginationLink tag="button">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                            </Pagination>
                            </nav>
                      </TabPane>
                      <TabPane tabId={1}>
                        <Table hover bordered striped responsive size="sm">
                            <thead>
                            <tr>
                                <th>Username</th>
                                <th>Date registered</th>
                                <th>Role</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Vishnu Serghei</td>
                                <td>2012/01/01</td>
                                <td>Member</td>
                                <td>
                                <Badge color="success">Active</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Zbyněk Phoibos</td>
                                <td>2012/02/01</td>
                                <td>Staff</td>
                                <td>
                                <Badge color="danger">Banned</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Einar Randall</td>
                                <td>2012/02/01</td>
                                <td>Admin</td>
                                <td>
                                <Badge color="secondary">Inactive</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Félix Troels</td>
                                <td>2012/03/01</td>
                                <td>Member</td>
                                <td>
                                <Badge color="warning">Pending</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Aulus Agmundr</td>
                                <td>2012/01/21</td>
                                <td>Staff</td>
                                <td>
                                <Badge color="success">Active</Badge>
                                </td>
                            </tr>
                            </tbody>
                            </Table>
                            <nav>
                            <Pagination>
                                <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                                <PaginationItem active>
                                <PaginationLink tag="button">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                            </Pagination>
                            </nav>
                      </TabPane>
                      <TabPane tabId={2}>
                        <Table hover bordered striped responsive size="sm">
                            <thead>
                            <tr>
                                <th>Username</th>
                                <th>Date registered</th>
                                <th>Role</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Vishnu Serghei</td>
                                <td>2012/01/01</td>
                                <td>Member</td>
                                <td>
                                <Badge color="success">Active</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Zbyněk Phoibos</td>
                                <td>2012/02/01</td>
                                <td>Staff</td>
                                <td>
                                <Badge color="danger">Banned</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Einar Randall</td>
                                <td>2012/02/01</td>
                                <td>Admin</td>
                                <td>
                                <Badge color="secondary">Inactive</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Félix Troels</td>
                                <td>2012/03/01</td>
                                <td>Member</td>
                                <td>
                                <Badge color="warning">Pending</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Aulus Agmundr</td>
                                <td>2012/01/21</td>
                                <td>Staff</td>
                                <td>
                                <Badge color="success">Active</Badge>
                                </td>
                            </tr>
                            </tbody>
                            </Table>
                            <nav>
                            <Pagination>
                                <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                                <PaginationItem active>
                                <PaginationLink tag="button">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                            </Pagination>
                            </nav>
                      </TabPane>
                      <TabPane tabId={3}>
                      <Table hover bordered striped responsive size="sm">
                            <thead>
                            <tr>
                                <th>Username</th>
                                <th>Date registered</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Vishnu Serghei</td>
                                <td>2012/01/01</td>
                                <td>Member</td>
                                <td>
                                <Badge color="success">Active</Badge>
                                </td>
                                <td>
                                <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}  tag="a" href="#/pdu" > View</Button>
                                <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Zbyněk Phoibos</td>
                                <td>2012/02/01</td>
                                <td>Staff</td>
                                <td>
                                <Badge color="danger">Banned</Badge>
                                </td>
                                <td>
                                <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}  tag="a" href="#/pdu" > View</Button>
                                <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Einar Randall</td>
                                <td>2012/02/01</td>
                                <td>Admin</td>
                                <td>
                                <Badge color="secondary">Inactive</Badge>
                                </td>
                                <td>
                                <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Félix Troels</td>
                                <td>2012/03/01</td>
                                <td>Member</td>
                                <td>
                                <Badge color="warning">Pending</Badge>
                                </td>
                                <td>
                                <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Aulus Agmundr</td>
                                <td>2012/01/21</td>
                                <td>Staff</td>
                                <td>
                                <Badge color="success">Active</Badge>
                                </td>
                                <td>
                                <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Aulus Agmundr</td>
                                <td>2012/01/21</td>
                                <td>Staff</td>
                                <td>
                                <Badge color="success">Active</Badge>
                                </td>
                                <td>
                                <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Aulus Agmundr</td>
                                <td>2012/01/21</td>
                                <td>Staff</td>
                                <td>
                                <Badge color="success">Active</Badge>
                                </td>
                                <td>
                                <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Aulus Agmundr</td>
                                <td>2012/01/21</td>
                                <td>Staff</td>
                                <td>
                                <Badge color="success">Active</Badge>
                                </td>
                                <td>
                                <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                </td>
                            </tr>
                            </tbody>
                            </Table>
                            <nav>
                            <Pagination>
                                <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                                <PaginationItem active>
                                <PaginationLink tag="button">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                            </Pagination>
                            </nav>
                      </TabPane>
                    </TabContent>
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

const mapStateToProps = state => {
    return {
      badge:state.badge,
      user: state.user,
     
    };
  };
  
  const mapDispachToProps = dispatch => {
    return {
      fetchBadge: () => dispatch({ type: "FETCH_BADGE"}),
      fetchUser: () => dispatch({ type: "FETCH_USER"}),
       
    };
  };
  
  export default connect(mapStateToProps,mapDispachToProps)(myTask);
