import {useParams} from "react-router-dom";

export default function ProductView(){
    const { id } = useParams();
    return (
        <h2>Product {id}</h2>
    );
}