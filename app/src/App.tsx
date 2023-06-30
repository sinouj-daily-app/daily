import './App.css'
import { Home } from './pages/Home';
import {useEffect, useState} from "react";
import { ApiService } from "./shared/ApiService.ts";

function App() {

  const apiService = new ApiService()
  const [categories, setCategories] = useState<any>()

  useEffect(() => {
    const categories = async () => {
      return await apiService.get('categories')
    }

    categories().then(response => {
      setCategories(response)
    })
  }, [])

  console.log(categories)

  return (
    <>
      <Home/>
      <div>
        {categories?.data && categories.data.map((category: any) => <div>{category.attributes.name}</div>)}
      </div>
    </>
  )
}

export default App
