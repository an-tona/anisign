import { useState } from 'react';

const SearchBar = ({ setSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="flex items-end gap-2 border-b border-b-transparent bg-transparent transition md:gap-4">
      <input
        className="flex h-[55px] w-full rounded-full  border border-secondary/60 bg-[#060606] focus:bg-[#0B0B0B] outline-none hover:opacity-60 focus:opacity-100 transition-all duration-300 px-4 font-medium py-2 text-sm placeholder:text-muted-foreground"
        placeholder="Введите название аниме..."
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
