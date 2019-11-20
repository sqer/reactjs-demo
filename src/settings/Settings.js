import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Users from './Users'
import Preferences from './Preferences'

class Home extends React.Component {

    render() {
        return (
            <Tabs defaultActiveKey="users" id="uncontrolled-tab-example">
                <Tab eventKey="users" title="Users">
                    <Users />
                </Tab>
                <Tab eventKey="preferences" title="Preferences">
                    <Preferences />
                </Tab>
            </Tabs>
        );
    }
}

export default Home;

