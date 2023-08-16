'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

function SearchBar() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gary-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400 flex justify-around items-center gap-1"
      >
        <div className='text-xl'><FcSearch /></div>
        <p>Search</p>
      </button>
    </form>
  )
}

export default SearchBar