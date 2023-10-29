import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Intro() {
    return (
        <Row id="intro" className="d-flex align-content-center">
            <Col>
                <Row>
                    <Col>
                        <div className="logo"></div>
                    </Col>
                    <Col md="4"></Col>
                </Row>

                <Row>
                    <Col className="px-5 text-light">
                        <Row className="d-flex h5">
                            O sabor da tradição em cada prato!
                        </Row>
                        <Row className="d-flex h5">
                            Conheça os nossos congelado a là carte que entregamos diáriamente.
                        </Row>
                    </Col>
                    <Col md="4"></Col>
                </Row>
            </Col>
        </Row>
    );
}