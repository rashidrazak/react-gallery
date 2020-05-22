import React from 'react'

class ImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { spans: 0 }
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    console.log('imageRef:', this.imageRef)

    // Must attach an event listener to detect when the image has been loaded
    this.imageRef.current.addEventListener('load', this.setSpans.bind(this))
  }

  setSpans() {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)

    this.setState({ spans })
  }

  render() {
    const {urls, alt_description} = this.props.image

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={alt_description}
        />
      </div>
    )
  }
}

export default ImageCard
