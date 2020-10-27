// GET request

const url = "https://reqres.in/api/users";

const xhr = new XMLHttpRequest();

xhr.open("GET", url);

xhr.responseType = "json";

xhr.onload = () => {
  if (xhr.status >= 400) {
    console.error(xhr.response);
  } else {
    console.log(xhr.response);
  }
};

xhr.onerror = () => {
  console.log(xhr.response);
};

//xhr.send();

// GET request with promise

function getRequest() {
  return new Promise((resolve, reject) => {
    const url = "https://reqres.in/api/users";

    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.responseType = "json";

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send();
  });
}

/*getRequest().then((data) => {
  console.log(data);
});*/

// Universal request function

const body = {
  name: "morpheus",
  job: "leader",
};

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send(JSON.stringify(body));
  });
}

/*sendRequest("POST", url, body)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));*/
