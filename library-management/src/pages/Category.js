import React, {useEffect, useState} from "react";
import axios from "axios";


function Category() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/books/category/${getCategoryFromUrl()}`)
            .then((response) => setBooks(response.data));
    },[])

    const getCategoryFromUrl = () => {
        const urlSplitter = window.location.href.split("/");
        return urlSplitter[urlSplitter.length -1]
    }


    const bookIterator =
        books.map((item, index) => (
            <div key={index}>{item.title}</div>
        ))

    return(
        <div>{bookIterator}</div>
    )
}
export default Category;