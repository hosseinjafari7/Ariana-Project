import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='border border-black flex justify-center gap-x-24 py-4 my-4 rounded-xl'>
      <Link to="/">FormPage</Link>
      <Link to="/chart">ChartPage</Link>
    </div>
  )
}
