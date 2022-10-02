import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

interface MealsContextData {
  meals: Meal[]
  mealsInDietPercentage: number
  addMeal: (meal: Meal) => void
  editMeal: (meal: Meal) => void
  deleteMeal: (id: string) => void
}

const MealsContext = createContext({} as MealsContextData)

interface MealsContextProviderProps {
  children: ReactNode
}

type Meal = {
  id: string
  name: string
  description: string
  date: Date
  isInDiet: boolean
}

export function MealsContextProvider({ children }: MealsContextProviderProps) {
  const [meals, setMeals] = useState<Meal[]>([])

  const mealsInDietPercentage =
    meals.length === 0 ?
      100
      : meals.filter(meal => meal.isInDiet).length / meals.length * 100

  async function addMeal(meal: Meal) {
    try {
      setMeals([...meals, meal])
      await AsyncStorage.setItem("@meals", JSON.stringify([...meals, meal]))
    } catch (err) {
      console.log(err)
    }
  }

  async function editMeal(meal: Meal) {
    try {
      const newMeals = meals.map((item) => item.id === meal.id ? meal : item)
      setMeals(newMeals)
      AsyncStorage.setItem("@meals", JSON.stringify(newMeals))
    } catch (err) {
      console.log(err)
    }
  }

  async function deleteMeal(id: string) {
    try {
      const newMeals = meals.filter((item) => item.id !== id)
      setMeals(newMeals)
      AsyncStorage.setItem("@meals", JSON.stringify(newMeals))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    async function loadMeals() {
      const meals = await AsyncStorage.getItem("@meals")
      if (meals) {
        setMeals(JSON.parse(meals))
      }
    }

    loadMeals()
  }, [])

  const providerProps = {
    meals,
    addMeal,
    editMeal,
    deleteMeal,
    mealsInDietPercentage
  }

  return (
    <MealsContext.Provider value={providerProps}>
      {children}
    </MealsContext.Provider>
  )
}

export const useMealsContext = () => useContext(MealsContext)
