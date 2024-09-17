import './index.css'

const BlogItem = props => {
  const {blogDetail} = props

  const {id, title, description, publishedDate} = blogDetail
  return (
    <li className="blog-card">
      <div className="title-date-card">
        <h1 className="blog-title">{title}</h1>
        <p className="date-blog">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}
export default BlogItem
