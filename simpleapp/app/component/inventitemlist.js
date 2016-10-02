import React, { Component } from 'react';

import Panel from './Panel';
import ListGroup from './ListGroup';

const InventItemList = (props) => {

    var element = !props.items || props.items.length < 1 
        ? <p>Список номенклатуры пуст</p>
        : <ListGroup items={props.items} />;

    return (
            <Panel header={props.header} >
                {element}                
            </Panel>
        );
}

Panel.propTypes = {
    header: React.PropTypes.string,
    items: React.PropTypes.array
};

export default InventItemList;