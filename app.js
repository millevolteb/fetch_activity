fetch("https://api.github.com/users/millevolteb")
  .then((response) => response.json())
  .then((json) => console.log(json));

// 1. public repo number
fetch("https://api.github.com/users/millevolteb")
  .then((response) => response.json())
  .then((json) => console.log(json.public_repos));

// 2. number of followers
fetch("https://api.github.com/users/millevolteb")
  .then((response) => response.json())
  .then((json) => console.log(json.followers));

// 3. number of followers
fetch("https://api.github.com/users/millevolteb/followers")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((person) => {
      console.log(person.login);
    })
  );

//   Task 2
// 1. The total number of all comments. (Hint: it is 500, but we don’t always know the exact
// number)
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => console.log(json.length));

// 2. The total number of all photos. (Hint: 5000)
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => console.log(json.length));

// 3. Show the name of each user and their email address
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((person) => {
      console.log(person.username, person.email);
    })
  );

// 4. Show the name of each user and their current city
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((person) => {
      console.log(person.name, person.address.city);
    })
  );

// 5. Show the total number of all todos that have completed
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json.length));

// 6. Show the titles and IDs of all todos that have been already completed
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((person) => {
      if (person.completed == true) {
        console.log(person.title, person.id);
      }
    })
  );

// 7. For each incomplete todo, show the name of the user it belongs to (you need to use 2
// collections)

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((person) => {
      if (person.completed == false) {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((json) =>
            json.forEach((user) => {
              if ((user.id = person.id)) {
                console.log(user.name, person.title);
              }
            })
          );
      }
    })
  );

// 8. Show the name of the user who owns the album with the title quidem molestiae enim.
// (you need to use 2 collections)
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((element) => {
      if (element.title == "quidem molestiae enim") {
        id = element.id;
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((json) =>
            json.forEach((element) => {
              if (element.id == id) {
                console.log(element.name);
              }
            })
          );
      }
    })
  );
// Submission:
// 1. Publish your work on Github.
// 2. Upload your work files on Canvas
// 3. Include the link to the public Github repo with your submission in a README.doc file
