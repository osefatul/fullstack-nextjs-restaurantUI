# MERN Stack Pizza Ordering Website

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
