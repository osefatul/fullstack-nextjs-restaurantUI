# MERN Stack Pizza Ordering Website

### Server Side Rendering

When we were Fetching data in React we would use useEffect, and in there we fetch our desired data from the API using different requests. But, in NextJs we don't do that, we instead use SSR where it will fetch all those components in to the server side and then when we Ask for data it will just render it as everything is already fetched.

Once we have defined our props and returned it into serverside function, we then will pass the props into the Component we want to render. First we started it off in Index.js(Home page).
