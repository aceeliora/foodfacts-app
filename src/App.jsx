import FoodList from './components/FoodList'

function App() {
  const dummy = [
    {
      code: "1",
      product_name: "Banana Chips",
      brands: "Test Brand",
      nutriments: {
        "energy-kcal_100g": 150,
        proteins_100g: 1,
        carbohydrates_100g: 30,
        fat_100g: 8
      },
      image_small_url: ""
    }
  ]

  return (
    <div>
      <h1>🥗 FoodFacts</h1>
      <FoodList products={dummy} />
    </div>
  )
}

export default App