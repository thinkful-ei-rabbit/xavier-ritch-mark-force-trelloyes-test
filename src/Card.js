import React, { Component } from 'react';
import Store from './STORE'
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      deleteClicked: false
     }

     const handleDeleteCard = (id) => {
      Store.filter((item) => item.id !== id);
      this.setState({
        deleteClicked: true
      })
     }
  }

  render() { 
    return ( 
      <div className='Card'>
      <button
        type='button'
        onClick={this.props.onDeleteCard}
      >
        delete
      </button>
      <h3>{this.props.title}</h3>
      <p>{this.props.content}</p>
    </div>
     );
  }
}
 
export default Card;
