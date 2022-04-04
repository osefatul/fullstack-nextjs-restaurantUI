# MERN Stack Pizza Ordering Website

We built a MERN full stack pizza ordering web application. We have use different libraries in order to create a professional website as much as possible.
The application has few pages as below:
1- Home page.
2- Cart Page - to check if there are anything pending in the cart.
3- /:productId - to order a specific pizza.
4- /:orderId - This to see an ordered pizza if it has been checked out or not.

#### Libraries

1- antd: we used this library only for importing Carousel
2- react-icons: For sidebar icons.
3- redux: for state management.
4- cookie: for cookie

#### Cleaning and Preparing our Application

1- Clean all unnecessary files that are listed or downloaded with with next.js.
2- Create a component file named Layout. This file should return Navbar, Footer and children props which will be in the middle of mentioned components.
2- Go to \_app.js file and and pass Component component as the Layout children. that children actually refers to index.js file which is our home page

### Server Side Rendering

When we were Fetching data in React we would use useEffect, and in there we fetch our desired data from the API using different requests. But, in NextJs we don't do that, we instead use SSR where it will fetch all those components in to the server side and then when we Ask for data it will just render it as everything is already fetched.

Once we have defined our props and returned it into serverside function, we then will pass the props into the Component we want to render. First we started it off in Index.js(Home page).

##### Pages/Products/[id].js

Here we discuss how we worked on changin prices when we change the size of pizza or add additional ingredients.

Lets create below functions in order:

    1- ChangePrice: a function where it will add up additional price on top of base price. This addition price could extra ingredients or changing the size of pizza.
    2- handleChange: This will handle the change of pizza price if the input it associated with is checked. pass the new price to changePrice funtion.
    3- handleSize: This will calculate the prize action of the different sizes of the pizza. It will calculate the difference in price between the previous and current selected pizza. and send the difference as additional price to changePrice function.
    4- extras useState hook: This is not a function but a hook. We are using this in order to collect all the selected extra ingredients when we add them to carts.

For the Paypal account:

    1- Go to [paypal developer](https://developer.paypal.com/developer/accounts) and login.
    2- Go to Sandbox -> Accounts -> Create account
    3- Create two accounts - a:personal and b:business
    4- Go to My Apps & Credentials -> create an app. choose seller account.
    5- You will get a client ID. Copy that and paste in the Paypal component client-id.
    6- Click on the business account that you just created and get the email and temporary password.

Used Cloudinary for uploading images:
https://cloudinary.com/console/c-b0e788bfa40d7739e85658c5b1ba2b
email:so1@gmail.com
Cloud Name : ddgn3r0t2

Two errors happened:
1- changed the next.config.js to
`module.exports = { async rewrites() { return [ { source: "/api/:path*", destination: "https://api.cloudinary.com/:path*", }, ]; }, }`
as it was blocking CORS

1b- the above didn't work for pizza card, so i changed it back to
`const nextConfig = { reactStrictMode: true, images: { domains: ["res.cloudinary.com"], }, }; module.exports = nextConfig;`

2- Changed the price to parseInt as the value for price was on text in the first place when you enter a value in to the input
