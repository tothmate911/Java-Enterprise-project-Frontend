import React, {useEffect, useState} from "react";
import axios from "axios";

function Categories() {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        axios
            .get("http://localhost:8080/books/categories", {})
            .then((response) => setCategories(response.data))
    }, [])

    const categoryIterator =
        categories.map((category, index) => (
            <a href="#" class="col-sm-6" key={index}>{category}</a>

        ));

    return (
        <div class="container">
            <div class="row">{categoryIterator}</div>
        </div>
    )
}

export default Categories;