import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {StyleContext} from "../context/StyleContext";
import axios from "axios";

function Search() {
    //const [search, setSearch] = useState("");
    const [result, setResult] = useState("");
    //const [Button] = useContext(StyleContext);
    //const [searchBy, setSearchBy] = useState("title");
    const [filteredBooks, setFilteredBooks] = useState([]);
    // let resultList = <span></span>;

    /*    const handleClick = (searchType) => {
            setSearchBy(searchType);
            setSearch(document.getElementById("search-field").value.toLowerCase());
            resultList = <span></span>;
        };*/

    useEffect(() => {
        axios
            .get("http://localhost:8080/books/", {})
            .then((response) => {
                setResult(response.data)
                //setFilteredBooks(response.data)
            })
    }, []);


    const handleQuery = (event) => {
        const fieldInput = event.target.value.toLowerCase()
        const searchedBook = result.filter(item => item.title.toLowerCase().includes(fieldInput))
        if (fieldInput !== '') {
            setFilteredBooks(searchedBook)
        } else if (fieldInput === '') {
            setFilteredBooks([]);
        } else {
            setFilteredBooks(searchedBook)

        }
    }

    const listBooks =
        filteredBooks.map((item, index) => (
            <div key={index} className="card shadow p-0">
                <div className="image-container">
                    <img className="img.fluid m-0" width="100%" src={item.image} alt=""></img>
                </div>
                <Link to={item.url} key={item.isbn13}>
                    <div className="card-body pt-0 pb-4">
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text bright-cyan">{item.authors}</p>
                    </div>
                </Link>
            </div>
        ));


    /*if (result) {
      resultList = result.map((book) => (
        <div key={book.isbn13}>
          <Link to={`/book/${book.isbn13}`}>
            <li>
              {book.authors}: {book.title}
            </li>
          </Link>
        </div>
      ));
    }*/

    return (
        <React.Fragment>
            <h1>Search</h1>
            <form>
                <input
                    onChange={handleQuery}
                    type="text"
                    id="search-field"
                    class="form-control mt-5"
                    placeholder="Search for book"
                />
            </form>
            <div className="card-columns" id="result-list">{listBooks}</div>
        </React.Fragment>
    );
}

export default Search;
