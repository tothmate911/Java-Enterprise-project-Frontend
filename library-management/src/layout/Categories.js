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

    /*   const categoryIterator =
           categories.map((category, index) => (
               <Link class="col-sm-3" key={index}>{category}</Link>

           ));*/

    const categoryIterator =
        Object.entries(categories).map(([key, value], index) => (
            <div key={index}>
                <div className="letter">{key}</div>
                <div key={index}>{value.map(element => (
                    <Link to={`/categories/${element}`}>
                        <div className="pt-1 pr-3">{element}</div>
                    </Link>
                ))}
                </div>
            </div>
        ))

    return (
        <div class="container">
            <div class="row">{categoryIterator}</div>
        </div>
    )
}

export default Categories;