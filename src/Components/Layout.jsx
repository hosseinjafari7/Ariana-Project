import React from 'react'
import Header from './Header'
import Body from './Body'

export default function Layout({children}) {
  return (
    <div className='mx-28'>
      <Header/>
      <Body>
        {children}
      </Body>
    </div>
  )
}
