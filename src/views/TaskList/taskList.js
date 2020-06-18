import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';
import FontAwesome from '../Icons/FontAwesome/FontAwesome';
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

class TaskList extends Component {
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
          <Card color="success" outline>
            <CardHeader>Task List</CardHeader>
            <CardBody>
                <ListGroup className="list-group-accent" tag={'div'}>
                  <ListGroupItem action /*tag="a" href="#"*/ className="list-group-item-accent-warning list-group-item-divider">
                    <div> <i className="icon-envelope-open "></i> Coordinate Proc Process (Centralized Contract) </div>
                    <div className="float-right">
                    <p><em>Action by</em></p> <Badge color="warning" className="pull-right" pill>DC Prod</Badge> 
                    </div>
                  </ListGroupItem>
                  <ListGroupItem action tag="a" href="#" className="list-group-item-accent-success list-group-item-divider">
                    <div> <i className="cui-inbox icons "></i> Perform Site Prep </div>
                    <div className="float-right">
                    <p><em>Action by</em></p>
                    <Badge color="success" className="pull-right" pill>Technology Delivery</Badge>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                    <div> <i className="icon-envelope-open "></i> Perform Service Handover </div>
                    <div className="float-right">
                    <p><em>Action by</em></p>
                    <Badge color="warning" className="pull-right" pill>PM</Badge>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem action tag="a" href="#" className="list-group-item-accent-success list-group-item-divider">
                    <div>  <i className="cui-inbox icons "></i> Verify Handover Document </div>
                    <div className="float-right">
                    <p><em>Action by</em></p>
                    <Badge color="success" className="pull-right" pill>OTM</Badge>
                    </div>
                  </ListGroupItem>
                </ListGroup>
            </CardBody>
          </Card>
        </Row>
       </div>
    );
  }
}

export default TaskList;
