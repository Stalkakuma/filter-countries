# Filter Countries

## Description

A Web-app designed to get a list of countries using [restcountries](https://restcountries.com/) API and search through that list for a specific country. Additionally filters and sorting can be applied. Includes pagination for easier navigation.

This app is deployed using Vercel and can be inspected [here](https://filter-countries.vercel.app/)

### Things Implemented
  
1. Fetch, cache and display data from the API
2. List to display data
3. Make the list sortable alphabetically by name (ascending, descending).
4. Implement a filter(s) that filters countries: 
   - That are smaller/larger than Lithuania by area.
   - That of several regions
5. Implemented Pagination

Pagination uses a helper function called range(), which is used for populating and Array from 1 to the number of pages for pagination. 

### Things to do

1. Filter and Sort buttons need indication that they are applied or not.
2. Pagination and Filters should have a more consistent layout.
3. Light and Dark mode.
4. More color in the UI.

## Installation

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

