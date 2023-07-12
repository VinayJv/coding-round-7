import { Link } from "react-router-dom";
import { Card } from "../component/Card";
import { data } from "../db/db";

export function Continents(){
    return(
    <div>
        <h1>Welcome to Trip Advisor</h1>
        <h3 style={{color: "#646bff"}}>Top Continents for your next holiday</h3>
        <div className="continents-container">
            {data.continents.map((continent, index)=><Link to={`/${continent.id}`} key={index}><Card data={{id: continent.id,name: continent.name,image: continent.image}}/></Link>)}
        </div>
    </div>);
}