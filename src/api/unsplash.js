import axios from 'axios'

/**
 * Create an instance of axios with defaulted properties.
 * This of this as a custom axios client
 */
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
  }
})