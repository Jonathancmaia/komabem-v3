import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import ListItems from './components/ListItems/ListItems';
import { useState, useEffect } from 'react';

export default function Menu() {

    const [itemsClass, setItemsClass] = useState(false);
    const [classType, setClassType] = useState(false);

    return (
        <Container fluid>
            <Navbar>
                <Container>

                    <Nav.Link href="/menu" className="red-button">
                        Cardápio
                    </Nav.Link>

                    <Nav.Link href="/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
                            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                    </Nav.Link>
                </Container>
            </Navbar>

            <Row className="bg-dark text-light p-3 d-flex align-items-center">
                <Col role="button" className="fw-bolder fs-3 text-warning text-center" md={6} onClick={() => { setItemsClass(false) }}>
                    Todos os Produtos
                </Col>
                <Col role="button" className="small text-center p-1 fw-bold" md={2} onClick={() => { setItemsClass("Linha Individual") }}>
                    Linha Tradicional
                </Col>
                <Col role="button" className="small text-center p-1 fw-bold" md={2} onClick={() => { setItemsClass("Linha Tradicional") }}>
                    Tradicional - 2 pessoas
                </Col>
                <Col role="button" className="small text-center p-1 bg-warning text-danger fw-bolder rounded"
                    onClick={() => { setItemsClass("Linha Premium") }} md={2}>
                    Linha Premium
                </Col>
            </Row>

            <Row>
                <Col>
                    <ListItems key={`${itemsClass}-${classType}`} itemsClass={itemsClass} classType={classType} />
                </Col>
            </Row>
        </Container >
    );
}