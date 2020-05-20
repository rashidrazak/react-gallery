import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit(event) {
    // Prevent the default behaviour of a form i.e. submit whenever ENTER is pressed
    event.preventDefault()
    console.log(this.state.term)
  }

  /**
   * NOTE:
   * 
   * If you prefer to call a helper function within onChange,
   * use arrow function to preserve 'this'
   * 
   * In JSX:
   * <input 
   *   type="text"
   *   value={this.state.term}
   *   onChange={(event) => this.onInputChange(event)}
   * />
   * 
   * In helper function:
   * onInputChange(event) {
   *   this.setState({ term: event.target.value })
   * }
   */
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })} 
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
