export const fetchItems = async (name) => {
  return fetch(`/fakeApi/items?name=${name}`).then(response => response.json())
}