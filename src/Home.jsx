import React, { useState } from 'react'
import { books } from './books.js';
// import axios from 'axios';
// import Pagination from './Pagination.js';

const Home = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const cardsPerPage = 8;
  // const indexOfLastCard = currentPage * cardsPerPage;
  // const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // const currentCard = books.slice(indexOfFirstCard, indexOfLastCard);
  // const totalPages = Math.ceil(books.length / cardsPerPage);
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  const [searchTitle, setSearchTitle] = useState('');
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredData, setFilteredData] = useState(books);


  const handleInputTitle = (event) => {
    const { value } = event.target;
    setSearchTitle(value);
    filterDataFuncTitle(value);
  };

  // console.log(searchTerm);
  const filterDataFuncTitle = (searchTitle) => {
    
    const value = books.filter((item) =>
      item.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    
    setFilteredData(value);
  };

  const handleInputAuthor = (event) => {
    const { value } = event.target;
    setSearchAuthor(value);
    filterDataFuncAuthor(value);
  };

  // console.log(searchTerm);
  const filterDataFuncAuthor = (searchAuthor) => {
    const value = books.filter((item) =>
      item.author.toLowerCase().includes(searchAuthor.toLowerCase())
    );

    setFilteredData(value);
  };
  
  const handleInputCountry = (event) => {
    const { value } = event.target;
    setSearchCountry(value);
    filterDataFuncCountry(value);
  };

  // console.log(searchTerm);
  const filterDataFuncCountry = (searchCountry) => {
    const value = books.filter((item) =>
      item.country.toLowerCase().includes(searchCountry.toLowerCase())
    );

    setFilteredData(value);
  };

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await axios.get(books)
  //     setPosts(res.data);
  //     setLoading(false);
  //   }
  //   fetchPosts();
  // },[]);

  // console.log(posts);
  
  return (
    <div className="flex flex-col items-center justify-around gap-4 p-20">
      <h3 className="text-4xl font-bold">Books List</h3>
      <div className="flex justify-around w-full p-4 bg-orange-100 border">
        <input
          type="text"
          value={searchTitle}
          onChange={handleInputTitle}
          className="w-1/5 p-2 mr-2 text-orange-500 bg-white border-2 rounded outline-none"
          placeholder="Search Filter"
        />
        <input
          type="text"
          value={searchAuthor}
          onChange={handleInputAuthor}
          className="w-1/5 p-2 mr-2 text-orange-500 bg-white border-2 rounded outline-none"
          placeholder="Filter by Author"
        />
        <input
          type="text"
          value={searchCountry}
          onChange={handleInputCountry}
          className="w-1/5 p-2 text-orange-500 bg-white border-2 rounded outline-none"
          placeholder="Filter by Country"
        />
        <button
          className="px-4 py-2 font-bold text-white transition duration-300 bg-orange-500 rounded w-1/8 hover:bg-orange-600"
          onClick={() => filterDataFuncTitle(searchTitle)}
        >
          Apply Filter
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 border-2 p-10">
        {filteredData.map((v, index) => (
          <div class="bg-gray-100 border-2 text-black p-4 rounded" key={index}>
            <div class="mb-2">
              <img
                src={v.imageLink}
                alt=""
                class="w-full h-40 object-cover rounded"
              />
            </div>
            <div>
              <p class="text-lg font-bold">{v.title}</p>
              <p>Author: {v.author}</p>
              <p>Language: {v.language}</p>
              <div className="flex items-center justify-between pb-3">
                <p>Pages: {v.pages}</p>
                <p>Year: {v.year}</p>
              </div>

              <a
                className="px-4 py-2 font-normal text-black transition duration-300 bg-gray-300 rounded hover:bg-gray-400"
                href={v.link}
              >
                Know More..
              </a>
            </div>
          </div>
        ))}

        {/* <Pagination totalPages={totalPages} paginate={paginate} /> */}
      </div>
    </div>
  );
}

export default Home