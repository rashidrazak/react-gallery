import React from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'

class App extends React.Component {
  async onSearchSubmit(term) {
    console.log('Searching for: ', term)
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      },
      params: { query: term }
    })

    console.log(response.data.results)
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
