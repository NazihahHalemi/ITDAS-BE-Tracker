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

        this.callApi();
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
                                BE Data Table
                            </CardHeader>
                            <CardBody>
                            <Table responsive="responsive">
                                    <thead>
                                        <tr>
                                            <th>NO.</th>
                                            <th>REFERENCE NO.</th>
                                            <th>NAME / DESCRIPTION</th>
                                            <th>INITIATIVE NAME</th>
                                            <th>STATUS</th>
                                            <th>SYSTEM</th>
                                            <th>PLAN PBE NO</th>
                                            <th>PLAN PBE DATE</th>
                                            <th>ACTUAL PBE NO.</th>
                                            <th>ACTUAL PBE DATE</th>
                                            <th>LOB</th>
                                            <th>CONSULTANT 1</th>
                                            <th>CONSULTANT 2</th>
                                            <th>CONSULTANT 3</th>
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
                                                            {data.REQ_REF_NO}
                                                        </td>
                                                        <td>
                                                            {data.REQ_REF_NAME}
                                                        </td>
                                                        <td>
                                                            {data.REQ_REF_NAME}
                                                        </td>
                                                        <td>
                                                            {data.REQ_STATUS}
                                                        </td>
                                                        <td>
                                                            {data.REQ_SYSTEM}
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
