import React, { Component } from 'react';
import $ from 'jquery';

import config from '../../config';
import Panel from './panel/Panel';
import ListGroup from './list/ListGroup';

class InventItemList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        this.serverRequest = $.get('', function (result) {
            this.setState({
                items: result
            });
        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        var items = this.state.items;
        var element = !items || items.length < 1 
            ? <p>{config.inventoryListIsEmptyMsg}</p>
            : <ListGroup items={items} />;

        return (
            <Panel header={config.inventory} >
                {element}                
            </Panel>
        );
    }
}

export default InventItemList;