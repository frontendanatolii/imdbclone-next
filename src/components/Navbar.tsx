import React from 'react'
import NavbarItem from './NavbarItem'

function Navbar() {
  return (
    <div className='flex justify-center dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg'>
      <NavbarItem title='Trending' param='fetchTrending' />
      <NavbarItem title='Top rated' param='fetchTopRated' />
    </div>
  )
}

export default Navbar