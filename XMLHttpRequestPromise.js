//https://www.youtube.com/watch?v=4K33w-0-p2c
const getBtn = document.getElementById("get-data");
const postBtn = document.getElementById("post-data");

const sendHttpRequest = (method, url, payload) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    // we will json as response from api call when we do GET request
    xhr.responseType = "json";

    if (payload) {
      // we will send json as payload to api when we do POST request
      xhr.setRequestHeader("Content-Type", "application/json");
    }
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    //// Error : Network error, Technical issues
    xhr.onerror = () => {
      reject("Oops! something went wrong...");
    };

    xhr.send(JSON.stringify(payload));
  });
  return promise;
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users").then((responseData) => {
    console.log(responseData);
  });
};

const sendData = () => {
  sendHttpRequest("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    // password: "pistol",
  })
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.log("catching error..");
      console.log(error);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
