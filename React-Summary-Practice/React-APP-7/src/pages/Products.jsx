/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const PRODUCTS = [
    {id : 'p1', title : 'Products-1'},
    {id : 'p2', title : 'Products-2'},
    {id : 'p3', title : 'Products-3'},
]

function Products(){


    return(
        <>
            <h1>This is Products</h1>

            <ul>
            {PRODUCTS.map((ele)=>{
                return (
                    <>
                        <li key={ele.id}>
                            <Link to={`/products/${ele.title}`}>{ele.title}</Link>
                        </li>
                    </>
                )
            })}
            </ul>
        </>
    )
}

export default Products;