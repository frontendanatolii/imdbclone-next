'use client'

import React, { useEffect, useState } from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import { MdLightMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      {mounted && (currentTheme === 'dark'
        ? <MdLightMode onClick={() => setTheme('light')} className='cursor-pointer hover:text-amber-500 text-xl' />
        : <BsMoonStarsFill onClick={() => setTheme('dark')} className='cursor-pointer hover:text-amber-500 text-xl' />
      )}
    </>
  )
}

export default DarkModeSwitch