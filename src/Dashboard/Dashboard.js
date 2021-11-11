import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import AddProduct from './AddProduct/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
import ManageProduct from './ManageProduct/ManageProduct';
import MyOrder from './MyOrder/MyOrder';
import Pay from './Pay/Pay';
import Review from './Reviwe/Review';


const Dashboard = () => {

    let { path, url } = useRouteMatch();

    return (

        <div>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>







                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                                <Nav.Link as={Link} to={`${url}`}>Dashboard</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/pay`}>Pay</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/myOrder`}>My Order</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/review`}>Review</Nav.Link>

                                <Nav.Link as={Link} to={`${url}/manageOrder`}>Manage All Order</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/addProduct`}>Add A Product</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/manageProduct`}>Manage Product</Nav.Link>


                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>


            <Switch>
                <Route exact path={path}>

                </Route>
                <Route path={`${path}/pay`}>
                    <Pay></Pay>
                </Route>
                <Route path={`${path}/myOrder`}>
                    <MyOrder></MyOrder>
                </Route>
                <Route path={`${path}/review`}>
                    <Review></Review>
                </Route>
                <Route path={`${path}/manageOrder`}>
                    <ManageAllOrder></ManageAllOrder>
                </Route>
                <Route path={`${path}/addProduct`}>
                    <AddProduct></AddProduct>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
                <Route path={`${path}/manageProduct`}>
                    <ManageProduct></ManageProduct>
                </Route>

            </Switch>
        </div>

    );
};

export default Dashboard;