import items from "./items";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';

export default function ListItems(props) {

    const [filteredItems, setFilteredItems] = useState(items);
    const [quantity, setQuantity] = useState({});
    const [cart, setCart] = useState([]);

    useEffect(() => {

        let filteredItemsHandler = [];

        if (props.itemsClass) {

            filteredItemsHandler[props.itemsClass] = filteredItems[props.itemsClass];

            setFilteredItems(filteredItemsHandler);
        } else if (props.itemsClass && props.classType) {

            filteredItemsHandler[props.itemsClass] = [];
            filteredItemsHandler[props.itemsClass][props.classType] = filteredItems[props.itemsClass][props.classType];

            setFilteredItems(filteredItemsHandler);
        } else if (props.classType && !props.itemsClass) {

            let keys = Object.keys(filteredItems);

            for (let i = 0; i < keys.length; i++) {

                if (filteredItems[keys[i]][props.classType]) {
                    filteredItemsHandler[keys[i]] = [];
                    filteredItemsHandler[keys[i]][props.classType] = filteredItems[keys[i]][props.classType];
                }
            }

            setFilteredItems(filteredItemsHandler);
        }
    }, [props]);

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

    const updateItemQuantity = (itemId, newQuantity) => {
        const updatedQuantity = { ...quantity };
        if (newQuantity > 0) {
            updatedQuantity[itemId] = { ...updatedQuantity[itemId], quantity: newQuantity };
        } else {
            delete updatedQuantity[itemId];
        }
        setQuantity(updatedQuantity);
    };

    const getItemQuantity = (itemId) => {
        return quantity[itemId] ? quantity[itemId].quantity : 1;
    };

    const updateCart = (item, action) => {

        if (action === 'add') {
            const cartHandler = [...cart, item];
            setCart(cartHandler);
        } else if (action === 'remove') {
            const index = cart.findIndex((itemRemove) => item === itemRemove.id);

            if (index !== -1) {
                let cartHandler = [...cart];
                cartHandler.splice(index, 1);
                setCart(cartHandler);
            }
        }
    }

    const isItemInCart = (itemId) => {
        return cart.some((item) => item.id === itemId);
    };


    return (
        <Row>
            <Col>
                {
                    Object.keys(filteredItems).map((itemClass, index) =>
                        <Row key={"class" + index} className="mt-5 display-4">
                            <Col>
                                {itemClass}
                                {Object.keys(filteredItems[itemClass]).map((type, index) =>
                                    <Row key={"type" + index} className="mt-3 display-6">
                                        <Col>
                                            {type}
                                            <Row className="mt-3">
                                                {filteredItems[itemClass][type].map((i, index) =>
                                                    <Col key={"item" + index} sm={4} className="my-1 fs-6">
                                                        <Card className="h-100">
                                                            <Card.Body className="d-flex flex-column">
                                                                <Card.Title className="h-100">
                                                                    {i.name}
                                                                </Card.Title>
                                                                <Card.Text className="text-center mt-auto fs-3 fw-bolder mt-2">
                                                                    {
                                                                        StyledCurrency(i.value)
                                                                    }
                                                                </Card.Text>
                                                                <Card.Footer className="mt-auto bg-white">
                                                                    <Row>
                                                                        <Col>
                                                                            <Row>
                                                                                <Col className="d-flex align-items-center justify-content-center m-0 p-0" role="button"
                                                                                    onClick={() => {
                                                                                        updateItemQuantity(i.id, parseInt(document.getElementById("qtd" + index).value) - 1)
                                                                                    }}
                                                                                >
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-bookmark-dash" viewBox="0 0 16 16">
                                                                                        <path fillRule="evenodd" d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                                                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                                                                    </svg>
                                                                                </Col>
                                                                                <Col className="d-flex justify-content-center m-0 p-0">
                                                                                    <Form>
                                                                                        <Form.Control
                                                                                            id={"qtd" + index}
                                                                                            size="sm"
                                                                                            className="p-0 text-center"
                                                                                            style={{ "width": "2rem" }}
                                                                                            value={getItemQuantity(i.id)}
                                                                                            type="number"
                                                                                            onChange={(e) => updateItemQuantity(i.id, parseInt(e.target.value))}
                                                                                        />
                                                                                    </Form>
                                                                                </Col>
                                                                                <Col className="d-flex align-items-center justify-content-center m-0 p-0" role="button"
                                                                                    onClick={() => {
                                                                                        updateItemQuantity(i.id, parseInt(document.getElementById("qtd" + index).value) + 1)
                                                                                    }}
                                                                                >
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-bookmark-plus" viewBox="0 0 16 16">
                                                                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                                                                        <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                                                                                    </svg>
                                                                                </Col>
                                                                            </Row>
                                                                        </Col>
                                                                        <Col className="d-flex justify-content-center">
                                                                            {
                                                                                isItemInCart(i.id) ?
                                                                                    <Button variant="danger"
                                                                                        onClick={() => {
                                                                                            updateCart(i.id, 'remove');
                                                                                        }}
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-dash" viewBox="0 0 16 16">
                                                                                            <path fillRule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                                                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                                                        </svg>
                                                                                    </Button>
                                                                                    :
                                                                                    <Button className="bg-brown"
                                                                                        onClick={() => {
                                                                                            updateCart({ id: i.id, value: i.value, quantity: document.getElementById("qtd" + index).value }, 'add');
                                                                                        }}
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-check" viewBox="0 0 16 16">
                                                                                            <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                                                        </svg>
                                                                                    </Button>
                                                                            }

                                                                        </Col>
                                                                    </Row>
                                                                </Card.Footer>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                )}
                                            </Row>
                                        </Col>
                                    </Row>
                                )}
                            </Col>
                        </Row>
                    )
                }
            </Col>
        </Row>
    );
}