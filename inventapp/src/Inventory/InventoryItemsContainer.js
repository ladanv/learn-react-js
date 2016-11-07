import React, { Component } from 'react';
import axios from 'axios';
import InventoryItems from './InventoryItems';

class InventoryItemsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
        items: []
    };
  }

  componentDidMount() {
    this.loadInventItemsFromServer();
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <InventoryItems items={this.state.items} />
    );
  }

  loadInventItemsFromServer() {
    axios.get('/inventory')
      .then((response) => {
        this.setState({
            items: response.data
        });
      })
      .catch((error) => {
        // TODO: redirect to error page
      });
  }
}

export default InventoryItemsContainer;
