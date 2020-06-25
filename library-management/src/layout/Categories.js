import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Categories() {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        axios
            .get("http://localhost:8080/books/categories", {})
            .then((response) => setCategories(response.data))
    }, [])

    const categoryIterator =
        categories.map((category, index) => (
            <Link class="col-sm-3" key={index}>{category}</Link>

        ));

    return (
        <div class="container">
            <div class="row">{categoryIterator}</div>
        </div>
    )
}

export default Categories;