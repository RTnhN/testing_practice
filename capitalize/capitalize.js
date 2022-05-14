function capitalize(string) {
  if (typeof(string[0]) !== 'string') return string 
  return string[0].toUpperCase() + string.slice(1)
}

export default capitalize;