import React from 'react';
import './App.css';
import ListItem from './ListItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
  // App constructor
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
  }

  // Add new item
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          key: '',
          text: ''
        }
      });
    }
  }

  // Delete existing item
  deleteItem(key) {
    const filteredItems = this.state.items.filter(
      item => item.key !== key
    );
    this.setState({
      items: filteredItems
    })
  }

  // Update value of item
  updateItem(key, value) {
    const newItems = this.state.items.map((item) => {
      if (item.key === key) {
        return {
          key: key,
          text: value
        }
      }

      return item
    });

    this.setState({
      items: newItems
    })
  }

  // Handle input
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  // Component rendering
  render() {
    return (
      <div className="App" >
        <header>
          <form id="todoForm" onSubmit={(e) => this.addItem(e)}>
            <input
              onChange={(e) => this.handleInput(e)}
              value={this.state.currentItem.text}
              type="text"
              placeholder="Enter Task" />
            <button type="submit">Add</button>
          </form>
          <ListItem
            items={this.state.items}
            deleteItem={(key) => this.deleteItem(key)}
            updateItem={(key, value) => this.updateItem(key, value)}
          />
        </header>
      </div>
    );
  }
}

export default App;
