import React from 'react'
import unsplash from '../api/unsplash'

import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [] }

  async onSearchSubmit(term) {
    console.log('Searching for: ', term)

    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    })

    console.log(response.data.results)
    this.setState({ images: response.data.results })
  }

  /**
   * <SearchBar onSearch={this.onSearchSubmit} />
   * onSearch is a prop that will pass callback function to children
   * onSearch is arbitrary. We can call it anything.
   */
  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSearch={this.onSearchSubmit.bind(this)} />
        <p>Found: {this.state.images.length} images</p>
        <div>
          <ImageList images={this.state.images} />
        </div>
      </div>
    )
  }
}

export default App
