import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
import './ListItem.css'

const ListItem = (props) => {
    const items = props.items;

    const listItems = items.map(item => {
        return (
            <div className="list-item" key={item.key}>
                <p>
                    <input type="text"
                        id={item.key}
                        value={item.text}
                        onChange={(e) => props.updateItem(item.key, e.target.value)}
                    />
                    <span>
                        <FontAwesomeIcon
                            className="faicons"
                            icon="trash"
                            onClick={() => props.deleteItem(item.key)}
                        />
                    </span>
                </p>
            </div>
        )
    });

    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}

export default ListItem;