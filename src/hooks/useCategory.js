import { useEffect, useState } from 'react'

const useCategory = (serverUrl, refetch) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch(`${serverUrl}/api/v1/categories/get-categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data.categories))
    }, [serverUrl, refetch])
    return [categories]
}

export default useCategory
