import { useParams } from "react-router-dom";
function Product() {
    const {id} = useParams()
    console.log(id)
    return ( 
        <>
            <div>Soy la página product: {id}</div>
        </>
     );
}

export default Product;