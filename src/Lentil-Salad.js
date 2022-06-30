import Data from "./mock-data.json";
import StarRating from "./StarRating";
import BackButton from "./BackButton";
const LentilSalad = () => {
    const current = Data[0];
    const checkList = [
        "1 large bunch Tuscan kale (about 10 oz.)",
        "Kosher salt",
        "½ cup raw almonds",
        "3 scallions",
        "4 garlic cloves",
        "1 lemon",
        "½ cup extra-virgin olive oil",
        "1½ cups black beluga or French green lentils",
        "1 Tbsp. cumin seeds",
        "½ tsp. crushed red pepper flakes",
        "5 oz. feta",
        "1 cup Castelvetrano olives"]
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
        <div class="column6">Be sure to use black or French green lentils. Brown or red lentils will get too soft—you’ll end up with a stew rather than a salad.</div>
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
        Strip leaves off stems from 1 large bunch Tuscan kale; discard stems or save for later! Stack leaves, then roll into fat cigars. Slice crosswise into ¼" strips to long, thin ribbons. Unfurl ribbons and run your knife through them just once or twice more to shorten any very long strips. Transfer to a large bowl, season with salt, and massage until kale is silkier, softer, and darker in color, 1–2 minutes. 
        <h3>Step 2</h3>
        Bring a large pot of heavily salted water to a boil over high heat. While you're waiting, prep the spiced oil. Coarsely chop ½ cup raw almonds; set aside. Trim 3 scallions and separate white and green parts (save the green parts for later in the recipe); thinly slice white parts and transfer to a small skillet. Smash and peel 4 garlic cloves. Add those to same skillet, too. Using a vegetable peeler or paring knife, remove three 3" strips of lemon peel (avoiding white pith); reserve rest of the lemon for your salad dressing. Add peels to skillet. Pour ½ cup extra-virgin olive oil into skillet and stir so that all of the elements are coated in oil.
        <h3>Step 3</h3>
        Add 1½ cups black beluga or French green lentils to now-boiling water, reduce heat to medium, and simmer, uncovered, until lentils are tender but still al dente, 20–25 minutes (they'll turn mushy if overcooked). We love to cook lentils like pasta—that is, in an abundant amount of salted water—so that we can monitor their doneness as they cook and make sure they don't get too soft.
        <h3>Step 4</h3>
        While lentils cook, heat skillet with scallion mixture over medium. Cook, stirring occasionally, until garlic starts to brown and lemon peel starts to curl, about 3 minutes. Add almonds and cook, stirring frequently, until almonds are browned, about 3 more minutes. Remove from heat and stir in 1 Tbsp. cumin seeds and ½ tsp. crushed red pepper flakes—the residual heat from the oil will bloom those spices and bring out their flavors.
        <h3>Step 5</h3>
        Strain mixture through a fine-mesh sieve into a small bowl, shaking to help oil drain; reserve oil (that's the base of your salad dressing). Spread almond mixture (don't forget those cumin seeds!) on a paper towel-lined plate or baking sheet. Season with salt and let cool (the nuts will get crunchier as they sit).
        <h3>Step 6</h3>
        Crumble 5 oz. feta into bowl with kale. Smash 1 cup Castelvetrano olives with the back of your knife; remove pits. Tear olives into large pieces and add to bowl. Thinly slice reserved scallion greens and add most to bowl (save some for serving). Add juice of reserved lemon and ½ tsp. salt.
        <h3>Step 7</h3>
        Drain lentils well, shaking to get rid of excess moisture, and add to bowl with kale; season with salt. Add infused oil and half of nuts and toss to combine.
        <h3>Step 8</h3>
        Divide salad among bowls. Garnish with remaining nuts and scallion greens. (If you’re taking this to work, just throw all of the scallions and nuts in at once—or bring them to work in separate containers and be that person garnishing your desk salad. You're worth it.) Eat around the lemon peels and garlic slices, which are edible but intense.
        </div>
    </div>
    <br/>
    <br/>
    <div className="MakeReview"><h2>Rate this Recipe</h2></div>
    <StarRating/>
</div>);
}
 
export default LentilSalad;