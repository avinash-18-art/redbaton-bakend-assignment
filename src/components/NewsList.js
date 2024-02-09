import React, {useState, useEffect} from 'react'
import axios from 'axios'

function NewsList() {
  const [newsItems, setNewsItems] = useState([])

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = () => {
    axios
      .get('/news')
      .then(response => {
        setNewsItems(response.data)
      })
      .catch(error => {
        console.error('Error fetching news:', error)
      })
  }

  return (
    <div>
      <h2>News List</h2>
      <ul>
        {newsItems.map(news => (
          <li key={news.id}>
            <a href={news.url}>{news.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsList
