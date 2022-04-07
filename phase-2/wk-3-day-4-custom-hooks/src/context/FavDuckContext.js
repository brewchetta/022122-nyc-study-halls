import { createContext } from 'react'

export const defaultDuck = {id: 1, name: "Duckelberry Finn", image: "https://images.splitcoaststampers.com/data/gallery/500/2009/07/22/Duckleberry_Finn_by_Mothermark.jpg?ts=1248271923"}

export const FavDuckContext = createContext(defaultDuck)
