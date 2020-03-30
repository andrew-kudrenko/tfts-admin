import React, { useState, useEffect } from 'react'
import AlertDismissible from '../components/AlertDismissible'
import { url } from '../utils/api'


export default Component => () => {
  const [categories, setCategories] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!categories.length) {
      fetch(url.concat('/categories'))
        .then(response => response.json())
        .then(data => setCategories(data))
        .then(_ => setHasError(false))
        .catch(_ => setHasError(true))
    }
  }, [hasError, categories])

  return (
    hasError
    ? <AlertDismissible title="Ошибка!">
        Произошла ошибка при получении данных с сервера
      </AlertDismissible>
    : <Component categories={categories} />
  )
}