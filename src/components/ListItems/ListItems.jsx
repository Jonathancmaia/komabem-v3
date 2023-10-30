import items from "./items";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';

export default function ListItems(props) {

    const [filteredItems, setFilteredItems] = useState(items);

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


    }, []);

    return (
        <Row>
            <Col>
                {
                    Object.keys(filteredItems).map((itemClass, index) =>
                        <div key={"class" + index}>
                            {itemClass}
                            {Object.keys(filteredItems[itemClass]).map((type, index) =>
                                <div key={"type" + index}>
                                    {type}
                                    {filteredItems[itemClass][type].map((i, index) =>
                                        <div key={"item" + index}>{i.name}</div>
                                    )}
                                </div>
                            )}
                        </div>
                    )
                }
            </Col>
        </Row>
    );
}