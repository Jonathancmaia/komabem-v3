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
                    <Col className="px-5 text-light text-center h1">
                         Sabor da Tradição em cada prato! <br></br>Conheça nossos congelados e a là<br></br> cante que oferecemos diariamente.
                    </Col>
                    <Col md="4"></Col>
                </Row>
            </Col>
        </Row>
    );
}