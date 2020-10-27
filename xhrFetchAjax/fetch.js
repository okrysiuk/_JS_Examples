//const url = "https://reqres.in/api/users";
const url = "https://jsonplaceholder.typicode.com/todos";

function sendRequest(method, url, body = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  return fetch(url, {
    method: method,
    /*body: JSON.stringify(body),*/
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((error) => {
      const e = new Error("Something went wrong!");
      e.data = error;
      throw e;
    });
  });
}

const body = {
  name: "morpheus",
  job: "leader",
};

sendRequest("GET", url)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/*sendRequest("POST", url, body)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));*/
