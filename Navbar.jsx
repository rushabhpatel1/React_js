import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to = '/'>Form</Link><br></br>
      <Link to = '/Controlled'>Controlled</Link><br></br>
      <Link to = '/Timer'>Timer</Link><br></br>
      <Link to = '/Productpage'>Product Page</Link>
    </div>
  )
}
