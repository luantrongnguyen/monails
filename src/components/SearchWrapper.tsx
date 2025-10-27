import React, { useState } from 'react';

const SearchWrapper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search submitted');
  };

  const closeSearch = () => {
    setIsOpen(false);
  };

  return (
    <div className={`search-wrapper section-padding-100 ${isOpen ? 'active' : ''}`}>
      <div className="search-close" onClick={closeSearch}>
        <i className="fa fa-close" aria-hidden="true"></i>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="search-content">
              <form onSubmit={handleSearch}>
                <input 
                  type="search" 
                  name="search" 
                  id="search" 
                  placeholder="Type your keyword..."
                />
                <button type="submit">
                  <img src="/img/core-img/search.png" alt="Search" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWrapper;
