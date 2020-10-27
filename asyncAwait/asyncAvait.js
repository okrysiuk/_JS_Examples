const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};

//const url = "https://jsonplaceholder.typicode.com/todos";
const url = "https://reqres.in/api/users?page=2";

/*function fetchTodos() {
  console.log("Fetch todo started");
  const headers = {
    "Content-Type": "application/json",
  };
  return delay(2000)
    .then(() => {
      return fetch(url, {
        method: "GET",
        //body: JSON.stringify(body),
        headers: headers,
      });
    })
    .then((res) => res.json());
}

fetchTodos()
  .then((data) => {
    console.log("Data: ", data);
  })
  .catch((e) => console.error(e));
  */

async function fetchAsyncTodos() {
  console.log("Fetch todo started..");
  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data: ", data);
  } catch (e) {
    console.error(e);
  } finally {
    console.log("Finally block");
  }
}
fetchAsyncTodos().then(() => console.log("Async function return Promise!"));
