import { Link } from "react-router-dom";

export function Card({ data:{ id, name, image } }){

    return(
    <div className="continent-card">
            <img src={image}></img>
            <div className="text-over-image">{name}</div>
</div>);
}