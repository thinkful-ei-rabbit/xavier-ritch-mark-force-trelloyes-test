import React, { Component } from 'react';
import List from './List'
import STORE from './STORE'
import './App.css';

class App extends Component {
    state = { 
    store: STORE
   }

   handleDeleteCard(id){
     console.log('handleDeleteCard triggered')
      STORE.filter((item) => item.id !== id);
   }

  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              onDeleteCard={this.handleDeleteCard}
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
