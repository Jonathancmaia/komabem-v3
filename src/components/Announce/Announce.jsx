import { Row, Col } from "react-bootstrap";
import "./style.css";

export default function Announce() {
    return (
        <Row id="announce">
            <Col className="p-5">
                <Row>
                    <Col>
                        <div className="fs-4 fw-bolder">
                            COMIDAS MAIS PRÁTICAS E SAUDÁVEIS PARA TORNAR O SEU DIA
                        </div>
                        <div className="text-danger fs-4 fw-bolder">
                            MAIS PRÁTICO!
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="py-5">
                        Muitas vezes quando temos dias mais corridos, fica difícil se alimentar bem. Para isso, a Komabem Congelados© oferece linhas completas de refeições prontas e super práticas de preparar.
                    </Col>
                </Row>
                <Row>
                    <Col className="pb-5">
                        São caldos, sopas, massas, sobremesas e muito mais! Tudo prontinho para esquentar e comer de um jeito prático e fácil.
                    </Col>
                </Row>
            </Col>
            <Col md="4" className="announce-bg"></Col>
        </Row>
    );
}