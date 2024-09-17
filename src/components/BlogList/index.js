import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul>
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogDetail={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
