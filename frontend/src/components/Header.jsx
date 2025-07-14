import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';

import axios from "axios"

import { useState } from 'react';


import '../styles/Header.css'

function Header() {
    var data ={}

    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    // мне похуй мегакостыль (а может нет)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLoginSubmit = async (event) => {

        event.preventDefault();
        const form = event.currentTarget;
        data = {login: email, password: password}
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            console.log(email, password, rememberMe);
            const {response} = await axios.post("http://localhost:8080/login", params);
            console.log("response:", response);
        }

        setValidated(true); // ?? (это из документации я хз)
    }

    return (
        <>
            <Navbar bg="primary" variant="dark" className="navbar navbar-custom">
            <Container>
                <Navbar.Brand href="#home">Озончик</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Главная</Nav.Link>
                    <Nav.Link href="#features">Товары</Nav.Link>
                </Nav>

                <NavDropdown title={<img className='round-img' src='https://pm1.aminoapps.com/6497/1bd6b69e4beacc4d8ac05744e2973295182a72ad_hq.jpg' width='50' height='50'/>} id="navbarScrollingDropdown">
                        <NavDropdown.Item onClick={setShow} href="#action3">Войти</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5"> Еще че то </NavDropdown.Item>
                </NavDropdown>
            

            </Container>
            </Navbar>

            {/* модальное окно регистрации и входа*/}

            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title className="text-center w-100">Авторизация</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="registration"
                        id="tabs"
                        className="mb-3"
                        fill
                    >
                    <Tab eventKey="registration" title="Регистрация">
                        тут регистрация
                    </Tab>
                    <Tab eventKey="login" title="Логин">
                        <Form noValidate validated={validated} onSubmit={handleLoginSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Электронная почта</Form.Label>
                                <Form.Control type="email" placeholder="Электронная почта" onChange={e => setEmail(e.target.value)} required />
                                <Form.Control.Feedback type="invalid">
                                    Введите электронную почту!
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)} required />
                                <Form.Control.Feedback type="invalid">
                                    Введите пароль!
                                </Form.Control.Feedback>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Запомнить меня" onClick={e => setRememberMe(e.target.checked)} />
                            </Form.Group>
                            <Button  variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>

        </>
  );
}

export default Header