import Data from "./mock-data.json";
import StarRating from "./StarRating";
import BackButton from "./BackButton";
const BroccoliPestoPasta = () => {
    const current = Data[1];
    const checkList = [
        "1 1/3-lb. head broccoli",

        "2 cloves garlic, smashed",
        
        "3 tablespoons olive oil, divided",
        
        "3/4 teaspoon kosher salt, divided",
        
        "1/4 teaspoon freshly ground black pepper, divided",
        
        "8 ounces whole-grain pasta (such as brown rice, kamut, or whole-wheat)",
        
        "1/4 cup raw almonds",
        
        "2 tablespoons grated pecorino Romano cheese, plus more for serving (optional)",
        
        "1 teaspoon lemon zest plus 1 Tbsp. fresh juice (from 1 lemon)",
        
        "3 cups packed baby arugula, divided"]
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
        <div class="column6">Have you been discarding broccoli stems? This broccoli pesto is the best reason to keep them around. Slice broccoli stalks and roast in the oven mixed with the florets. A handful of florets mingle with the pasta, but the rest goes to making a nutty, cheesy, and zesty pesto.</div>
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
        Preheat oven to 400°F. Cut stalk from broccoli head; peel and thinly slice into rounds. Cut crown into florets and toss with stalk, garlic, 1 tablespoon oil, ¼ teaspoon salt, and ⅛ teaspoon pepper on a rimmed baking sheet. Roast until charred in spots, stirring halfway through, about 20 minutes. 
        <h3>Step 2</h3>
        Meanwhile, bring a large pot of generously salted water to a boil. Add pasta and cook according to package directions. Drain, reserving 1 cup pasta water. Set aside.
        <h3>Step 3</h3>
        Place 1 cup roasted florets in a large bowl; transfer remaining to a food processor. Add reserved pasta water, almonds, cheese, lemon zest, lemon juice, 1 cup arugula, and remaining 2 tablespoons oil, ½ teaspoon salt, and ⅛ teaspoon pepper. Process until pesto is smooth, about 1 minute.
        <h3>Step 4</h3>
        Transfer pasta to bowl with florets. Toss with pesto and remaining 2 cups arugula. Top with more cheese, if desired.
        </div>
    </div>
    <br/>
    <br/>
    <div className="MakeReview"><h2>Rate this Recipe</h2></div>
    <StarRating/>
</div>);
}
 
export default BroccoliPestoPasta;