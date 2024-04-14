export const uniqueAndFilteredActors = (arr) => {
  const uniqueActors = arr.filter((obj) => obj.enProfession === 'actor')

  const getUniqueObjects = (arr) => {
    const uniqueIds = new Set()
    return arr.filter((obj) => {
      if (uniqueIds.has(obj.id)) {
        return false
      } else {
        uniqueIds.add(obj.id)
        return true
      }
    })
  }

  return getUniqueObjects(uniqueActors)
}
