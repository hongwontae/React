import { Link } from "react-router-dom";

const ProductItem = [
    {
        id : 1,
        title : 'Product-1'
    },
    {
        id : 2,
        title : 'Product-2'
    },    {
        id : 3,
        title : 'Product-3'
    },
]

function Product() {
  return (
    <>
      <h1>The Product Page!</h1>
      <ul>
        {ProductItem.map((ele, idx, arr)=>{
            return <li key={ele.id}>
                <Link to={`/products/${ele.id}`}>{ele.title}</Link>
            </li>
        })}
      </ul>
    </>
  );
}

export default Product;
