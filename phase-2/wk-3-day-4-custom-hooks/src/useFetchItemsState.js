import { useState, useEffect } from 'react'

function useFetchItemsState(url) {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])

  return [ items, setItems ]
}

export default useFetchItemsState
