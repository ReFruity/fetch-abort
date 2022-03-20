const items = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
]

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const getDelay = (minSeconds, maxSeconds) => {
  return (getRandomInt(maxSeconds - minSeconds + 1) + minSeconds) * 1000;
}

export const fetchItems = async (name) => {
  const delay = getDelay(2, 4);
  const filteredItems = items.filter(i => i.name.includes(name));
  return new Promise((resolve, reject) => setTimeout(() => resolve(filteredItems), delay));
}