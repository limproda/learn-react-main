export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    /**
     * Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     */

    const ingredientListItems = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

    function handleOnSubmit(event){
            event.preventDefault()
            console.log("Form submitted!")
            const formData = new FormData(event.currentTarget)
            const newIngredient = formData.get("ingredient")
            // The ingredient is not gonna show on the screen. Waiting until next lesson.
            ingredients.push(newIngredient)
    }

    
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleOnSubmit}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>{ingredientListItems}</ul>
        </main>
    )
}