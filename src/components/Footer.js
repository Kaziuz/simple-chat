import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="pt-5">
      <div className="container text-center">
        <p>&copy; Chat 2020</p>
        <Link to="/politica">
          <p>Terms & conditions</p>
        </Link>
      </div>
    </footer>
  )
}

export default Footer