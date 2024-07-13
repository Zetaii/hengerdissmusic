import { Link } from "react-router-dom"
function Categories() {
  return (
    <div className="widget">
      <h3 className="wp-block-heading">Categories:</h3>
      <ul>
        <li>
          <Link to="/">Design</Link>
        </li>
        <li>
          <Link to="/">Composement</Link>
        </li>
        <li>
          <Link to="/">Marketing</Link>
        </li>
        <li>
          <Link to="/">Songwriting</Link>
        </li>
        <li>
          <Link to="/">Uncategorized</Link>
        </li>
      </ul>
    </div>
  )
}

export default Categories
