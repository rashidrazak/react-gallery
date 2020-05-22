import React from 'react'

class ImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    console.log('imageRef:', this.imageRef)

    // Must attach an event listener to detect when the image has been loaded
    this.imageRef.current.addEventListener('load', this.setSpans.bind(this))
  }

  setSpans() {
    console.log('clientHeight', this.imageRef.current.clientHeight)
  }

  render() {
    const {urls, alt_description} = this.props.image

    return (
      <div>
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
