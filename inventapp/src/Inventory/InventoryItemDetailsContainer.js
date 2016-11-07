import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import axios from 'axios';
import InventoryItemDetails from './InventoryItemDetails';

class InventoryItemDetailsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
        item: null
    };
  }

  componentDidMount() {
    this.loadInventItemDetailsFromServer(this.props.params.id);
  }

  componentWillUnmount() {
  }

  render() {

    if (!this.state.item) {
      return null;
    }

    return (
      <InventoryItemDetails item={this.state.item}
      handleItemChange={this.handleItemChange.bind(this)}
      handleItemSave={this.handleItemSave.bind(this)}
      handleItemCancel={this.handleItemCancel.bind(this)} />
    );
  }

  loadInventItemDetailsFromServer(id) {
    axios.get('/inventory/' + id)
      .then((response) => {
        this.setState({
            item: response.data
        });
      })
      .catch((error) => {
        // TODO: redirect to error page
      });
  }

  handleItemChange(event) {
    event.preventDefault();
    var target = event.target;

    var newState = Object.assign({}, this.state);
    newState.item[target.name] = target.value;

    this.setState(newState);
  }

  handleItemSave(event) {
    event.preventDefault();
    var item = this.state.item;

    axios({
      method: item.id ? 'put' : 'post',
      url: '/inventory/' + (item.id ? item.id : ''),
      data: item
    }).then((response) => {
      hashHistory.push('/inventory-items');
    })
    .catch((error) => {
      // TODO: redirect to error page
    });
  }

  handleItemCancel(event) {
    event.preventDefault();

    hashHistory.push('/inventory-items');
  }
}

export default InventoryItemDetailsContainer;
