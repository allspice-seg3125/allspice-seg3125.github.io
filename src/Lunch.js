import Data from "./mock-data.json"
import { React, useState } from "react";
import BackButton from "./BackButton";
const Lunch = () => {
    const data = Data;
    const [sortState, setSortState] = useState("none");
    const sortMethods = {
      none: { method: (a, b) => null },
      ascending: { method: (a, b) => (a.time < b.time ? -1 : 1) },
      descending: { method: (a, b) => (a.time > b.time ? -1 : 1) },
      ascending1: { method: (a, b) => (a.rating < b.rating ? -1 : 1) },
      descending1: { method: (a, b) => (a.rating > b.rating ? -1 : 1) }
    };
    return ( 
    <div className="alllunch">
        <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
        <option value="DEFAULT" disabled>Order By</option>
        <option value="ascending">Time - Low to High</option>
        <option value="descending">Time - High to Low</option>
        <option value="ascending1">Rating - Low to High</option>
        <option value="descending1">Rating - High to Low</option>
      </select>
        <p1><BackButton/></p1>
    <div className="lunch">
        <h2>Lunch Recipes</h2>
        <ul>
        {data.sort(sortMethods[sortState].method).filter((recipe) => {if(recipe.meal=="Lunch"){return recipe}}).map((recipe) => (
                          <div className="lunchrecipe">
                          <a href={recipe.link}>{recipe.title}</a>
                          <image><img src={recipe.image} width="450px" height="35%"/></image>
                          <p3>Rating: {recipe.rating}/5 | Time: {recipe.time} min</p3>
                          <br/>
                          <br/>
                  </div>
        ))}
      </ul>
    </div> 
    </div>);
}
 
export default Lunch;