import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [myValue, setMyValue] = useState("old value");

    return (
        <div>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    <Link to="/settings">
                        Go to settings
                        </Link>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>Hook example</Card.Header>
                <Card.Body>
                    <Card.Title>Use hook to change state</Card.Title>
                    <Card.Text>
                        State value: {myValue}
                    </Card.Text>
                    <Button onClick={() => setMyValue("new value")}>Change</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Dashboard;

