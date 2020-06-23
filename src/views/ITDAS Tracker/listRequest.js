import React, {Component} from 'react';
import {
    Badge,
    Card,
    CardBody,
    CardHeader,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
    Table
} from 'reactstrap';

import {connect} from 'react-redux'

class RequestList extends Component {

    constructor(props) {
        super(props);

        // Don't call this.setState() here!
        this.state = {
            data: []
        };

    }

    callApi = () => {

        fetch('claritybqm/reportFetch/?scriptName=ITDAS_REQUEST_LIST')
            .then(
                response => response.json()
            )
            .then(json => {
                console.log(json)
                this.setState({data: json})
            });

    }

    componentDidMount() {

        //this.callApi();
        this.props.fetchRequest();

    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i>
                                Simple Table
                            </CardHeader>
                            <CardBody>
                                <Table responsive="responsive">
                                    <thead>
                                        <tr>
                                            <th>REQ_ID</th>
                                            <th>REQ_REF_NAME</th>
                                            <th>REQ_DESC</th>
                                            <th>REQ_REMARKS</th>
                                            <th>REQ_STATUSDESC</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            this
                                                .props
                                                .requestdata
                                                .map(
                                                    (data) => 
                                                    <tr>
                                                        <td>
                                                            {data.REQ_ID}

                                                        </td>
                                                        <td>
                                                            {data.REQ_REF_NAME}

                                                        </td>
                                                        <td>
                                                            {data.REQ_DESC}

                                                        </td>
                                                        <td>

                                                            {data.REQ_REMARKS}

                                                        </td>
                                                        <td>

                                                            {data.REQ_STATUSDESC}

                                                        </td>

                                                    </tr>

                                                )

                                        }

                                    </tbody>
                                </Table>
                                <Pagination>
                                    <PaginationItem>
                                        <PaginationLink previous="previous" tag="button"></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active="active">
                                        <PaginationLink tag="button">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">4</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next="next" tag="button"></PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

                <Row>

                    <Col xs="12" lg="6">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i>
                                Condensed Table
                            </CardHeader>
                            <CardBody>
                                <Table responsive="responsive" size="sm">
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
                                            <td>Carwyn Fachtna</td>
                                            <td>2012/01/01</td>
                                            <td>Member</td>
                                            <td>
                                                <Badge color="success">Active</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Nehemiah Tatius</td>
                                            <td>2012/02/01</td>
                                            <td>Staff</td>
                                            <td>
                                                <Badge color="danger">Banned</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ebbe Gemariah</td>
                                            <td>2012/02/01</td>
                                            <td>Admin</td>
                                            <td>
                                                <Badge color="secondary">Inactive</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Eustorgios Amulius</td>
                                            <td>2012/03/01</td>
                                            <td>Member</td>
                                            <td>
                                                <Badge color="warning">Pending</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Leopold Gáspár</td>
                                            <td>2012/01/21</td>
                                            <td>Staff</td>
                                            <td>
                                                <Badge color="success">Active</Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Pagination>
                                    <PaginationItem>
                                        <PaginationLink previous="previous" tag="button">Prev</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active="active">
                                        <PaginationLink tag="button">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">4</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next="next" tag="button">Next</PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" lg="6">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i>
                                Bordered Table
                            </CardHeader>
                            <CardBody>
                                <Table responsive="responsive" bordered="bordered">
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
                                            <td>Pompeius René</td>
                                            <td>2012/01/01</td>
                                            <td>Member</td>
                                            <td>
                                                <Badge color="success">Active</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Paĉjo Jadon</td>
                                            <td>2012/02/01</td>
                                            <td>Staff</td>
                                            <td>
                                                <Badge color="danger">Banned</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Micheal Mercurius</td>
                                            <td>2012/02/01</td>
                                            <td>Admin</td>
                                            <td>
                                                <Badge color="secondary">Inactive</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ganesha Dubhghall</td>
                                            <td>2012/03/01</td>
                                            <td>Member</td>
                                            <td>
                                                <Badge color="warning">Pending</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hiroto Šimun</td>
                                            <td>2012/01/21</td>
                                            <td>Staff</td>
                                            <td>
                                                <Badge color="success">Active</Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Pagination>
                                    <PaginationItem>
                                        <PaginationLink previous="previous" tag="button">Prev</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active="active">
                                        <PaginationLink tag="button">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem className="page-item">
                                        <PaginationLink tag="button">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">4</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next="next" tag="button">Next</PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i>
                                Combined All Table
                            </CardHeader>
                            <CardBody>
                                <Table
                                    hover="hover"
                                    bordered="bordered"
                                    striped="striped"
                                    responsive="responsive"
                                    size="sm">
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
                                        <PaginationItem>
                                            <PaginationLink previous="previous" tag="button">Prev</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem active="active">
                                            <PaginationLink tag="button">1</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink tag="button">2</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink tag="button">3</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink tag="button">4</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink next="next" tag="button">Next</PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
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
      requestdata: state.data
    };
  };
  
  const mapDispachToProps = dispatch => {
    return {
        
      fetchRequest: () => dispatch({ type: "FETCH_REQUEST"}),
    
    };
  };
  
export default connect(mapStateToProps,mapDispachToProps)(RequestList);


//export default RequestList;
