import React from 'react'

import SearchBar from './SearchBar'

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term)
  }

  /**
   * <SearchBar onSearch={this.onSearchSubmit} />
   * onSearch is a prop that will pass callback function to children
   * onSearch is arbitrary. We can call it anything.
   */
  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSearch={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App
