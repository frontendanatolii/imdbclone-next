import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons/lib/esm/iconBase';

interface Props {
  title: string,
  address: string,
  Icon: IconType,
}

function MenuItem({ title, address, Icon }: Props) {
  return (
    <div>
      <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
        <Icon className='text-3xl sm:hidden mx-4' />
        <p className='no-underline hidden sm:inline my-2 text-sm'>{title}</p>
      </Link>
    </div>
  )
}

export default MenuItem