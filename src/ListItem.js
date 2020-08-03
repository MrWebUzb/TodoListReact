import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
import './ListItem.css'

import ScrollArea from 'react-scrollbar';

const ListItem = (props) => {
    const items = props.items;

    items.sort((a, b) => {
        return a.key < b.key;
    });

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
        <ScrollArea
            speed={0.8}
            horizontal={false}
            className="list">
            <FlipMove duration={300} easing="ease-in-out" style={{ height: '100%' }}>
                {listItems}
            </FlipMove>
        </ScrollArea>
    )
}

export default ListItem;