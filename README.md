# Fetch abort
This is a minimal repository that demonstrates race condition between multiple data fetches and ways to solve it. Every search input update triggers fetch with resolves after a random (2-4) number of seconds. Then redux state is updated and items are shown in the list.

# Requirements
- Node.js v16.14.0

# Running
```bash
npm install
npm start
```