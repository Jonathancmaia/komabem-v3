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
                    <Col lg="3"></Col>
                </Row>

                <Row>
                    <Col className="px-5 text-light text-center fw-bold fs-2 panel-text">
                        Sabor da Tradição em cada prato! <br></br>Conheça nossos congelados e a là<br></br> cante que oferecemos diariamente.
                    </Col>
                    <Col lg="3"></Col>
                </Row>
            </Col>
        </Row>
    );
}