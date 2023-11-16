import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import NavbarMenu from './components/NavbarMenu/NavbarMenu';
// ME SALVA JONGAS import { useHistory } from 'react-router-dom';



export default function Cart() {

    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(true);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);



    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    function StyledCurrency(value) {
        const formattedValue = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value / 100);

        const parts = formattedValue.split(',');

        return (
            <span className="w-100 text-center d-flex flex-row justify-content-center align-items-center text-brown">
                <span className="small fw-bolder">{parts[0][0]}{parts[0][1]}</span>
                <span style={{ "display": "block" }} className="fs-1 fw-bolder">{parts[0].substring(2)}</span>

                <span className="fw-bolder small" style={{ "display": "block", "marginTop": "-0.9rem" }} >,{parts[1]}</span>
            </span>
        );
    }

    const updateCart = (item) => {
        const index = cart.findIndex((itemRemove) => item === itemRemove.id);

        if (index !== -1) {
            let cartHandler = [...cart];
            cartHandler.splice(index, 1);
            setCart(cartHandler);
        }
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    async function onSubmit() {
        setIsLoading(true);
        fetch(
            "https://www.gorillabyte.com.br/api/sendEmail?" +
            new URLSearchParams(new FormData(document.getElementById("formulary"))),
            {
                method: "post",
                headers: {
                    'Token': 'ilIPrzwrYPdCMpiibPbqvWxHr95fylTY'
                }
            }
        )
            .then((response) => response.json())
            .then((json) => {
                setIsLoading({ success: json.message });
                setCart([]);
            })
            .catch((err) => setIsLoading({ error: json.message + " " + err }));

        function gtag_report_conversion(url) {
            var callback = function () {
                if (typeof (url) != 'undefined') {
                    window.location = url;
                }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-11284618922/TcwACJnh3-cYEKq99oQq',
                'transaction_id': '',
                'event_callback': callback
            });

            setIsOrderPlaced(true);

            return false;

        }

        gtag_report_conversion();
    }

    return (
        <Container fluid>
            <NavbarMenu />

            {
                isLoading.success || isLoading.error ?
                    <Alert variant={isLoading.success ? "success" : "danger"} onClose={() => setShow(false)} dismissible>
                        {
                            isLoading.success ? <>{isLoading.success}</> : <>{isLoading.error}</>
                        }
                    </Alert>
                    :
                    <></>
            }

            <Row className="bg-dark text-light fs-1 fw-bolder">
                <Col className="d-flex justify-content-center align-items-center">
                    Meu Carrinho
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" style={{ "marginLeft": "1rem" }} fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                </Col>
            </Row>

            <Row className="mx-md-5">
                <Col className="mt-5">
                    <Form onSubmit={handleSubmit(onSubmit)} id="formulary">
                        <Row className="mx-1">
                            <Col sm="6">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Seu Nome"
                                    name="name"
                                    className={errors.name ? "error-input" : ""}
                                    {...register("name", {
                                        required: "true",
                                        maxLength: 100,
                                        minLength: 3,
                                    })}
                                />
                                {errors.name?.type === "required" && (
                                    <span className="text-danger">
                                        Você deve preencher seu nome.
                                    </span>
                                )}
                                {errors.name?.type === "minLength" && (
                                    <span className="text-danger">
                                        O nome preenchido deve ter no mínimo 3 caracteres.
                                    </span>
                                )}
                                {errors.name?.type === "maxLength" && (
                                    <span className="text-danger">
                                        O nome preenchido deve ter no máximo 100 caracteres.
                                    </span>
                                )}
                            </Col>
                            <Col sm={6}>
                                <Form.Label>Telefone\WhatsApp</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Telefone"
                                    name="phone"
                                    maxLength="15"
                                    minLength="14"
                                    {...register("phone", {
                                        required: true,
                                        maxLength: 16,
                                        minLength: 14,
                                    })}
                                    onKeyUp={(e) => {
                                        const phoneMask = (value) => {
                                            //Remove non numerics
                                            const cleanedValue = value.replace(/\D/g, "");

                                            // Verify if is cellphone (9 dígitos) or usual telephone (8 dígitos)
                                            const isCellPhone =
                                                cleanedValue.length === 12 ||
                                                cleanedValue.length === 11;

                                            if (isCellPhone) {
                                                // Cellphone format (xx) x xxxx-xxxx
                                                return `(${cleanedValue.slice(
                                                    0,
                                                    2
                                                )}) ${cleanedValue.slice(
                                                    2,
                                                    3
                                                )} ${cleanedValue.slice(3, 7)}-${cleanedValue.slice(
                                                    7
                                                )}`;
                                            } else {
                                                // Usual telephone format: (xx) xxxx-xxxx
                                                return `(${cleanedValue.slice(
                                                    0,
                                                    2
                                                )}) ${cleanedValue.slice(
                                                    2,
                                                    6
                                                )}-${cleanedValue.slice(6)}`;
                                            }
                                        };

                                        if (e.key === "Delete" || e.key === "Backspace") {
                                            // Allow backspace and delete without applying mask
                                            return;
                                        }

                                        e.target.value = phoneMask(e.target.value);
                                    }}
                                />
                                {errors.phone?.type === "required" && (
                                    <span className="text-danger">
                                        Você deve preencher seu telefone.
                                    </span>
                                )}
                                {errors.phone?.type === "minLength" && (
                                    <span className="text-danger">
                                        O número preenchido deve ter no mínimo 10 caracteres.
                                    </span>
                                )}
                                {errors.phone?.type === "maxLength" && (
                                    <span className="text-danger">
                                        O número preenchido deve ter no mínimo 11 caracteres.
                                    </span>
                                )}
                            </Col>
                        </Row>
                        <input type="hidden" name="Carrinho" value={JSON.stringify(cart)} />
                    </Form>
                </Col>
            </Row>

            <Row className="mx-md-5">
                <Col className="mt-4">
                    {cart.map((i, index) =>
                        <Row key={index} className="mx-3 my-1 border rounded p-2">
                            <Col className="text-center d-flex align-items-center fw-bold fs-4">
                                {i.name}
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center">
                                {
                                    StyledCurrency(i.value)
                                }
                            </Col>
                            <Col className="text-center d-flex align-items-center justify-content-center">
                                <div>
                                    Quantidade: <span className="fw-bold">{i.quantity}</span>
                                </div>
                            </Col>
                            <Col className="text-center d-flex align-items-center justify-content-center">
                                <Button variant="danger" onClick={() => { updateCart(i.id) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                    </svg>
                                </Button>
                            </Col>
                        </Row>
                    )}
                
                </Col>
            </Row>

            <Row className="mx-md-5">
                <Col className="m-3 d-grid gap-2">
                    <Button size="lg" variant="dark" className="fw-bold" type="submit" form="formulary" disabled={!isLoading && cart.length > 0 ? false : true}>
                        Concluir pedido
                    </Button>
                </Col>
            </Row>

            {isOrderPlaced && (
            <div className="alert alert-success mt-3" role="alert">
                 Seu pedido foi enviado com sucesso!
            </div>
            )}
        </Container>
    );
}