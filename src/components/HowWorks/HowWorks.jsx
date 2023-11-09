import "./style.css";
import { Col, Row } from "react-bootstrap";

export default function HowWorks() {
    return (
        <Row id="howworks" className="bg-danger text-light pb-5 px-5 position-relative">
            <Col>
                <Row>
                    <Col className="d-flex flex-column align-items-center p-4">
                        <div className="fw-lighter fs-4">
                            Como
                        </div>
                        <div className="fw-bolder fs-1">
                            Funciona
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Row>
                            <Col className="d-flex flex-column align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6rem" height="6rem" fill="currentColor" className="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z" />
                                </svg>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center fw-bold">
                                Escolha suas refeições
                            </Col>
                        </Row>
                        <Row>
                            <Col className="fw-lighter small text-center">
                                Escolha os pratos para montar o seu pedido.
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col className="d-flex flex-column align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6rem" height="6rem" fill="currentColor" className="bi bi-house-check" viewBox="0 0 16 16">
                                    <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z" />
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z" />
                                </svg>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center fw-bold">
                                Receba em casa
                            </Col>
                        </Row>
                        <Row>
                            <Col className="fw-lighter small text-center">
                                Vamos combinar a entrega do seu pedido na sua casa.
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col className="d-flex flex-column align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6rem" height="6rem" fill="currentColor" className="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z" />
                                </svg>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center fw-bold">
                                Prepare sua refeição
                            </Col>
                        </Row>
                        <Row>
                            <Col className="fw-lighter small text-center">
                                Siga as instruções que acompanham o pedido para aquecê-lo e tenha uma deliciosa refeição.
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </Col>

            <div className="bg-danger triangle"></div>
        </Row>
    );
}