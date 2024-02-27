import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/other'}>
          <li>The other page</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
