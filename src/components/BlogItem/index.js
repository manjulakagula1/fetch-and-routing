// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogsData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogsData
  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="item-container">
          <img src={imageUrl} alt={`item${id}`} className="item-image" />

          <div className="item-info">
            <p className="item-topic">{topic}</p>
            <h1 className="item-title">{title}</h1>

            <div className="author-info">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
