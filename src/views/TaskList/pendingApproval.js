import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, UncontrolledCollapse, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';
import FontAwesome from '../Icons/FontAwesome/FontAwesome';
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

class Approval extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: 1
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs='4'>
                        <Card>
                            <CardHeader id="toggler">
                                <Row>
                                    <Col xs='8'>
                                        DC Site Commisioning
                </Col>
                                    <Col xs='2'>
                                        <Badge color="warning" className="float-right" pill>4</Badge>
                                    </Col>
                                    <Col xs='2'>
                                        <i className="icon-list"></i>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#toggler">
                                <Card color="success" outline>
                                    <div>
                                        <CardBody>
                                            <ListGroup className="list-group-accent" tag={'div'}>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 8</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: BRF</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 6</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 1</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </CardBody>
                                    </div>
                                </Card>
                            </UncontrolledCollapse>
                        </Card>
                    </Col>
                    <Col xs='4'>
                        <Card>
                            <CardHeader id="toggler2">
                                <Row>
                                    <Col xs='8'>
                                        DC Location Commisioning
                        </Col>
                                    <Col xs='2'>
                                        <Badge color="warning" className="float-right" pill>4</Badge>
                                    </Col>
                                    <Col xs='2'>
                                        <i className="icon-list"></i>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#toggler2">
                                <Card color="success" outline>
                                    <div>
                                        <CardBody>
                                            <ListGroup className="list-group-accent" tag={'div'}>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 8</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col col="2" className="mb-3 mb-xl-0 text-center">
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }} style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col col="2" className="mb-3 mb-xl-0 text-center">
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: BRF</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 6</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 1</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </CardBody>
                                    </div>
                                </Card>
                            </UncontrolledCollapse>
                        </Card>
                    </Col>
                    <Col xs='4'>
                        <Card>
                            <CardHeader id="toggler3">
                                <Row>
                                    <Col xs='8'>
                                        DC Rack Commisioning
                        </Col>
                                    <Col xs='2'>
                                        <Badge color="warning" className="float-right" pill>4</Badge>
                                    </Col>
                                    <Col xs='2'>
                                        <i className="icon-list"></i>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#toggler3">
                                <Card color="success" outline>
                                    <div>
                                        <CardBody>
                                            <ListGroup className="list-group-accent" tag={'div'}>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 8</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col col="2" className="mb-3 mb-xl-0 text-center">
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }} style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col col="2" className="mb-3 mb-xl-0 text-center">
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: BRF</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 6</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 1</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </CardBody>
                                    </div>
                                </Card>
                            </UncontrolledCollapse>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs='4'>
                        <Card>
                            <CardHeader id="toggler4">
                                <Row>
                                    <Col xs='8'>
                                        UPS Commisioning
                </Col>
                                    <Col xs='2'>
                                        <Badge color="warning" className="float-right" pill>4</Badge>
                                    </Col>
                                    <Col xs='2'>
                                        <i className="icon-list"></i>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#toggler4">
                                <Card color="success" outline>
                                    <div>
                                        <CardBody>
                                            <ListGroup className="list-group-accent" tag={'div'}>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 8</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: BRF</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 6</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 1</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </CardBody>
                                    </div>
                                </Card>
                            </UncontrolledCollapse>
                        </Card>
                    </Col>
                    <Col xs='4'>
                        <Card>
                            <CardHeader id="toggler5">
                                <Row>
                                    <Col xs='8'>
                                        PDU Commisioning
                        </Col>
                                    <Col xs='2'>
                                        <Badge color="warning" className="float-right" pill>4</Badge>
                                    </Col>
                                    <Col xs='2'>
                                        <i className="icon-list"></i>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#toggler5">
                                <Card color="success" outline>
                                    <div>
                                        <CardBody>
                                            <ListGroup className="list-group-accent" tag={'div'}>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 8</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col col="2" className="mb-3 mb-xl-0 text-center">
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }} style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col col="2" className="mb-3 mb-xl-0 text-center">
                                                            <Button block color="info" className="btn-pill" size="sm"  tag="a" href="#/pdu" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: BRF</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 6</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 1</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </CardBody>
                                    </div>
                                </Card>
                            </UncontrolledCollapse>
                        </Card>
                    </Col>
                    <Col xs='4'>
                        <Card>
                            <CardHeader id="toggler6">
                                <Row>
                                    <Col xs='8'>
                                        DC Rack Commisioning
                        </Col>
                                    <Col xs='2'>
                                        <Badge color="warning" className="float-right" pill>4</Badge>
                                    </Col>
                                    <Col xs='2'>
                                        <i className="icon-list"></i>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#toggler6">
                                <Card color="success" outline>
                                    <div>
                                        <CardBody>
                                            <ListGroup className="list-group-accent" tag={'div'}>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 8</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col col="2" className="mb-3 mb-xl-0 text-center">
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }} style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col col="2" className="mb-3 mb-xl-0 text-center">
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: BRF</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 6</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                                                    <div className="float-right">
                                                        <Badge color="danger" className="pull-right" pill> Urgent</Badge>
                                                    </div>
                                                    <div> Site Name: CBJ 1</div>
                                                    <div style={{ marginLeft: '150px' }}>
                                                        <Col>
                                                            <Button block color="success" className="btn-pill" size="sm" style={{ width: "80px" }}> Approve</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="info" className="btn-pill" size="sm" style={{ width: "80px" }}> View</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button block color="danger" className="btn-pill" size="sm" style={{ width: "80px" }}> Decline</Button>
                                                        </Col>
                                                    </div>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </CardBody>
                                    </div>
                                </Card>
                            </UncontrolledCollapse>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Approval;
