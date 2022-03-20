# Fetch abort
This is a minimal repository that demonstrates race condition between multiple data fetches and ways to solve it. Every search input update triggers fetch with resolves after a random (2-4) number of seconds. Then redux state is updated and items are shown in the list.

To see the race condition just type "item2" quickly in the search bar. You expect that only one item is left in the list, but in most of the cases you will see the whole list.

# Requirements
- Node.js v16.14.0

# Running
```bash
npm install
npm start
```