import React from "react";
import Data from "./mock-data.json"
import { useState } from "react";
export default function Recipes (){
    const[searchTerm, setSearchTerm] = useState('')
    return (
        <div className="Search">
            <h2>Find a Recipe</h2>
            <div className="Search1">
            <input type="text" placeholder="Search by title" onChange={event=>{setSearchTerm(event.target.value)}}/>
            {Data.filter((val)=>{
                if(searchTerm==""){
                        return
                        }
                else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val.title;
                }
            }).map((val,key)=>{
                return (
                <div className="recipe">
                        <p1>
                        <p2><a href={val.link}>{val.title}</a></p2>
                        <br/>
                        <img src={val.image} width="300px" height="50%"/>
                        <br/>
                        Rating: {val.rating}/5 | Time: {val.time} min</p1>
                        <br/>
                </div>
                );
            })}
            </div>
            <div class="row">
                <div class="column">
                    <h1>Meal</h1>
                    <p3>Breakfast
                    <br/>
                    <br/>
                    <a href="/recipes/lunch">Lunch</a>
                    <br/>
                    <br/>
                    Dinner
                    <br/>
                    <br/>
                    Dessert</p3></div>
                <div class="column">
                    <h1>Diet</h1>
                    <p3>Vegetarian
                    <br/>
                    <br/>
                    Vegan
                    <br/>
                    <br/>
                    Gluten-Free</p3></div>
                <div class="column"><h1>Experience Level</h1>
                <p3>Beginner
                    <br/>
                    <br/>
                    Intermediate
                    <br/>
                    <br/>
                    Expert
                    <br/>
                    <br/>
                    </p3></div>
            </div>
        </div>
    );}