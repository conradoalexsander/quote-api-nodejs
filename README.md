<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the Error-Central-API and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** conradoalexsander, Error-Central-API, twitter_handle, email
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


A Quote generator API 
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/conradoalexsander/quote-api-node">
    <img src="sample/quote-logo.png" alt="Logo" width="15%" height="15%">
  </a>

  <h1 align="center">Quote API</h1>

  <h2 align="center">
    > "Be quoted..."
  </h2>
    <br />
 
</p>

<!-- ABOUT THE PROJECT -->
## <h2 id="about-the-project"> :mortar_board: &nbsp; &nbsp; About The Project </h2>
This project is a possible solution to the [Quote API](https://www.codecademy.com/courses/learn-express/lessons/learn-express-routers/exercises/this-file-is-too-big) from Codeacademy, as part of the studies I did at SWO academy.

It focus on learning and exploring the Node Js express concepts, through a Quote API. 

<!-- BUILT WITH -->
## <h2 id="built-with">:rocket: &nbsp; &nbsp; Built With</h2> 
* []() Javascript
* []() Node.js 
* []() Express 

## <h2 id="project-requirements">:heavy_check_mark: Project Requirements </h2>

- [ ] You’ve been given some starter code in the form of a front-end site and some Express.js boilerplate. You’ll use this to build several route handlers to serve up interesting quotes. As you build out your app, test out the functionality either using our front-end or with a tool like Postman. Make sure to re-run node server.js as you make changes to the server, and visit localhost:4001 in the browser to interact with the front-end.

As you work, your server at any point with Ctrl + C in the terminal, and then restart it to see new changes in its behavior.

In server.js, we’ve provided you with some imported helper functions and data:

A quotes array with some pre-populated quotes about technology. Each quote in the array has a person and quote property. You can use our array or write your own, but make sure to have at least the person and quote properties, as the front-end that we’ve provided expects each quote to have them.
The getRandomElement() function, which takes an array and returns a random element from that array.

- [ ] Set your server to listen on the PORT variable.

- [ ] Your API should have a GET /api/quotes/random route. This route should send back a random quote from the quotes data. The response body should have the following shape:

```JSON
{
  quote: {/* quote object */}
}
```


- [ ] Your API should have a GET /api/quotes route. This route should return all quotes from the data if the request has no query params.
        The response body should have the following shape for all GET /api/quotes requests:

```JSON
{
    quotes: [ /* Array of requested quotes */ ]
}
```

- [ ] Your API should have a POST /api/quotes route for adding new quotes to the data. New quotes will be passed in a query string with two properties: quote with the quote text itself, and person with the person who is credited with saying the quote.

This route should verify that both properties exist in the request query string and send a 400 response if it does not. If all is well, this route handler should add the new quote object to the data array and send back a response with the following shape:

{
  quote: {/* new quote object */}
}

### Solution Code & Extensions

If you’d like to extend your app, here are some ideas to try, but you can also try out your own:

- [ ] Add a PUT route for updating quotes in the data. This might require adding some sort of unique ID for each quote in the array in data.js.
- [ ] Add a DELETE route for deleting quotes from the data array. As with PUT, this might require adding IDs to the data array and using req.params. For both of these ideas, you’ll be able to interact via Postman.
- [ ] Add other data to the array, such as the year of each quote, and try to display it on the front-end.
- [ ] Add another resource to your API in addition to quotes, such as biographical blurbs (you’ll need to find your own data for this new resource)- [ ] Use Express Routers to keep your code simple and separated into different files for each router.

<!-- Disclaimer -->
## <h2 id="license"> :scroll: &nbsp; &nbsp; Disclaimer </h2>

<h3>I do not own any images in this projects, they are used just for context </h3>


<!-- CONTACT -->
## <h2 id="contact"> :telephone_receiver: &nbsp; &nbsp; Contact </h2>

Github: [https://github.com/conradoalexsander](https://github.com/conradoalexsander) </br>

<!-- ACKNOWLEDGEMENTS -->
## <h2 id="acknowledgements"> :thumbsup: &nbsp; &nbsp; Acknowledgements </h2>

* []() <a href="https://www.codecademy.com/learn">Codeacademy</a>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/conradoalexsander/Error-Central-API.svg?style=flat-square
[contributors-url]: https://github.com/conradoalexsander/Error-Central-API/graphs/contributors

[forks-shield]:  https://img.shields.io/github/forks/conradoalexsander/Error-Central-API.svg?style=flat-square

[forks-url]: https://github.com/conradoalexsander/Error-Central-API/network/members

[stars-shield]: https://img.shields.io/github/stars/conradoalexsander/Error-Central-API.svg?style=flat-square
[stars-url]: https://github.com/conradoalexsander/Error-Central-API/stargazers
[issues-shield]: https://img.shields.io/github/issues/conradoalexsander/Error-Central-API.svg?style=flat-square
[issues-url]: https://github.com/conradoalexsander/Error-Central-API/issues
[license-shield]: https://img.shields.io/github/license/conradoalexsander/Error-Central-API.svg?style=flat-square
[license-url]: https://github.com/conradoalexsander/Error-Central-API/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/conrado-alexsander
[product-screenshot]: images/screenshot.png
