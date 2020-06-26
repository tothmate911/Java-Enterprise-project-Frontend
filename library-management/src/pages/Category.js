import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function Category() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/books/category/${getCategoryFromUrl()}`)
            .then((response) => setBooks(response.data));
    }, [])

    const getCategoryFromUrl = () => {
        const urlSplitter = window.location.href.split("/");
        return urlSplitter[urlSplitter.length - 1]
    }


    const bookIterator =
        books.map((item, index) => (
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
        ))

    return (
        <div className="card-columns">{bookIterator}</div>
    )
}

export default Category;