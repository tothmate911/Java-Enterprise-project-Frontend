import React, {useEffect, useState} from "react";
import axios from "axios";

function Categories() {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        axios
            .get("http://localhost:8080/books/categories", {})
            .then((response) => setCategories(response.data))
    },[])

    const categoryIterator =
        categories.map((category, index) => (
            <div key={index}>
                <li>{category}</li>
            </div>
        ));


    return (
        <div>{categoryIterator}</div>
    )

}

export default Categories;