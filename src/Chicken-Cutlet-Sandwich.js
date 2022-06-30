import Data from "./mock-data.json";
import StarRating from "./StarRating";
import BackButton from "./BackButton";
const ChickenCutletSandwich = () => {
    const current = Data[2];
    const checkList = ["1/4 red onion, thinly sliced",
    "Kosher salt",
    "1/4 head of savoy cabbage, cored, thinly sliced",
    "3 tablespoons white wine vinegar",
    "4 tablespoons (or more) olive oil, divided",
    "Freshly ground black pepper",
    "4 skinless, boneless chicken thighs",
    "1/4 cup cornstarch",
    "2 large eggs",
    "2 tablespoons Dijon mustard",
    "1 teaspoon cayenne pepper",
    "2 cups panko (Japanese breadcrumbs)",
    "1/3 cup mayonnaise",
    "8 slices white Pullman bread, toasted"]
    return ( 
    <div className="individualrecipe">
        <p1><BackButton/></p1>
        <h1>{current.title}</h1>
        <div class="row1">
        <div class="column1"><img src={current.image} width="80%" height="50%"/></div>
        <div class="column2"><h3>{current.time} min</h3>Time</div>
        <div class="column3"><h3>{current.rating}/5</h3>Rating</div>
        <div class="column4"><h3>{current.author}</h3>Author</div>
        <div class="column5"><h3>{current.experience}</h3>Experience Level</div>
        <div class="column6">The quick route to awesome crispy chicken sandwiches: pound the chicken, dredge in panko, cook just a few minutes, and pair with a vinegary slaw.</div>
    </div>
    <br/>
    <hr/>
    <div class="row2">
        <div className="ingredients">
            <h3>Ingredients</h3>
            <div className="checklist">
            {checkList.map((item, index) => (
   <div key={index}>
    <br/>
   <input value={item} type="checkbox" />
   <span>{item}</span>
 </div>
))}
            </div>
            <form>
  <label>
  <textarea id="subject" name="subject" placeholder="Extra notes (Optional)"></textarea>
  </label>
</form>
            </div>
        <div className="steps">
        <h3>Step 1</h3>
        Toss red onion and a pinch of salt in a small bowl to coat; let sit 5 minutes to allow onion to soften slightly. Rinse under running water, then shake off excess water. Place onion in a medium bowl and add cabbage, vinegar, and 2 tablespoons oil. Toss to combine and season slaw with salt and pepper.
        <h3>Step 2</h3>
        Pound chicken thighs with a meat mallet or a rolling pin between 2 pieces of plastic wrap to 1/4" thick. Place cornstarch in a shallow bowl. Whisk eggs, mustard, and cayenne in another shallow bowl.
        <h3>Step 3</h3>
        Place panko in a third shallow bowl. Working with 2 thighs at a time, season chicken with salt and pepper. Dredge in cornstarch, shaking off excess. Dip in egg mixture, letting excess drip back into bowl, then coat in panko, shaking off excess.
        <h3>Step 4</h3>
        Heat remaining 2 tablespoons oil in a large skillet over medium-high. Working in batches and adding more oil to skillet between batches if needed, cook chicken thighs until golden brown and cooked through, about 2 minutes per side. Transfer to paper towels to drain.
        <h3>Step 5</h3>
        Spread mayo over one side of bread slices and build sandwiches with cutlets and slaw.
        </div>
    </div>
    <br/>
    <br/>
    <div className="MakeReview"><h2>Rate this Recipe</h2></div>
    <StarRating/>
</div>);
}
 
export default ChickenCutletSandwich;