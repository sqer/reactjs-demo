import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "../dashboard/Dashboard"
import Settings from "../settings/Settings"

class Main extends React.Component {

    // Switch and route replace content base on path
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/settings" component={Settings} />
                </Switch>
            </main>
        );
    }
}

export default Main;