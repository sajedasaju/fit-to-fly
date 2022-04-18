import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container shadow-lg p-3 mb-5 bg-body rounded mt-5'>
            <Accordion defaultActiveKey="0" className='container my-5 '>
                <Accordion.Item eventKey="0" className='border border-3'>
                    <Accordion.Header>Difference between authorization and authentication?</Accordion.Header>
                    <Accordion.Body>
                        <h3>Authentication</h3>
                        <p>Authentication is about validating of a user credentials like User Name/User ID and password to verify user identity .BY AUthentication prcess the identity of users are checked for providing the access to the system.
                            <br />
                            Eample: Employee of an company must joint before access the company mail.
                        </p>
                        <hr />
                        <h3>Authorization</h3>
                        <p>On the other hand,Authorization  occurs after your identity is successfully authenticated by the system, which ultimately gives you full permission to access the resources such as information, files, databases, funds, locations, almost anything.
                            <br />
                            Eample:After an employee successfully authenticates, the system determines what information the employees are allowed to access
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='border border-3'>
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        By using firebase a developer does not have to worry about the backend of the application; it just has to provide an interactive UI for the users of the application. We just need to write our code in Node.js and deploy it. Firebase takes care of scaling the infrastructure on demand, server configuration, and more.
                        <hr />
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='border border-3'>
                    <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        <h3>Services of Firebase</h3>
                        <ol>Hosting</ol>
                        <ol>Cloud Messaging</ol>
                        <ol>Real-Time Database</ol>
                        <ol>Storage</ol>
                        <ol>Notifications</ol>
                        <ol>Dynamic Links</ol>
                        <ol>Analytics</ol>
                        <ol>Development</ol>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;