export default function Main(){
    return (
        <main>
            <form className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="ejemplo: Lechuga"
                    aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
        </main>
    )
}