import storeSlices from "./*/*.slice.js" // Minimal check to see if imported slice has all properties of an actual slice
const sliceProps = ["actions", "caseReducers", "name", "reducer", "getInitialState"]

const isValid = slice => {
  return Object.keys(slice).every(prop => {
    return sliceProps.includes(prop)
  })
}

export const slices = storeSlices
  .filter(slice => {
    return slice.value.slice && isValid(slice.value.slice)
  })
  .map(slice => slice.value.slice)
  
export const connectors = slices.reduce((acc, slice) => {
  let name = slice.name.charAt(0).toUpperCase() + slice.name.slice(1)
  acc[name] = slice.reducer
  return acc
}, {})
