import { FcHome, FcInfo } from 'react-icons/fc'

import React from 'react'
import MenuItem from './MenuItem'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl items-center py-2 sm:mx-auto'>
      <div className='flex'>
        <MenuItem title='HOME' address='/' Icon={FcHome}  />
        <MenuItem title='ABOUT' address='/about' Icon={FcInfo}  />
      </div>
      <div className='flex items-center space-x-5'>
        <DarkModeSwitch />
        <Link href='/'>
            <h2 className='text-2xl'>
              <span className='font-bold bg-amber-500 py-1 px-2 mx-2 rounded-lg mr-1'>IMDb</span>
              <span className='text-xl hidden sm:inline'>Clone</span>
            </h2>
        </Link>
      </div>
    </div>
  )
}

export default Header