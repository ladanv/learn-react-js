import React, { Component } from 'react';
import $ from 'jquery';

import config from '../../config';
import Panel from './panel/Panel';
import InputFormGroup from './form/InputFormGroup';
import TextFormGroup from './form/TextFormGroup';

class InventItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: null
        };
    }

    componentDidMount() {
        this.loadInventItemFromServer();
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        var item = this.state.item;
        if (!item) {
            return null;
        }
        return (
            <Panel header={config.inventory}>
                <form>
                    <InputFormGroup key='name' id='name' label={config.inventItemName}
                        placeholder={config.inventItemNamePlaceholder} value={item.name} />
                    <InputFormGroup key='category' id='category' label={config.inventItemCategory}
                        placeholder={config.inventItemCategoryPlaceholder} value={item.category} />
                    <TextFormGroup key='description' id='description' label={config.inventItemDescription}
                        placeholder={config.inventItemDescriptionPlaceholder} value={item.description} />
                </form>
            </Panel>
        );
    }

    loadInventItemFromServer() {
        var itemUrl = config.apiUrl + '/inventory/' + this.props.params.itemId;
        this.serverRequest = $.get(itemUrl, function (result) {
            this.setState({
                item: result
            });
        }.bind(this));
    }
}

export default InventItem;
