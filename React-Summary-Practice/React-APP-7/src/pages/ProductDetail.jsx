import { Link, useParams } from "react-router-dom";


function ProductDetail(){

    const params = useParams();

    const param = params.productId
    console.log(typeof param)

    return(
        <>
            <h1>Product DetailPage!</h1>
            <p>{param}</p>
            <Link to=".." relative="path">Back</Link>
        </>
    )
}

export default ProductDetail;