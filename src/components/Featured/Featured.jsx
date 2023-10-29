import "./style.css";
import { Col, Row, Button } from "react-bootstrap";

export default function Featured() {
    return (
        <Row id="featured" className="bg-dark text-light position-relative">
            <Col>
                <Row className="pt-4">
                    <Col className="text-center fs-5 fw-lighter">
                        Pratos em
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center fs-1 fw-bolder text-warning">
                        DESTAQUE
                    </Col>
                </Row>

                <Row>
                    <Col>
                        CARROSSEL AQ KKKKKKKKKKKKKKKKKKKKKKKKKK
                        FAZ AI TUTUR
                    </Col>
                </Row>

                <Row>
                    <Col className="d-flex justify-content-center p-4">
                        <Button variant="danger">
                            Veja toso do nossos produtos
                        </Button>
                    </Col>
                </Row>
            </Col>

            <div className="bg-dark triangle"></div>
        </Row>
    );
}