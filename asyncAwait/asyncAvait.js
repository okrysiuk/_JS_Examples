const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};

//const url = "https://jsonplaceholder.typicode.com/todos";
const url = "https://reqres.in/api/users?page=2";

function fetchTodos() {
  console.log("Fetch todo started");
  return delay(2000).then(() => {
    return fetch(url).then((res) => res.json());
  });
}

fetchTodos()
  .then((data) => {
    console.log("Data: " + data);
  })
  .catch((e) => console.error(e));
