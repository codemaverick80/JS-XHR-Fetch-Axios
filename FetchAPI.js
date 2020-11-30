const getBtn = document.getElementById("get-data");
const postBtn = document.getElementById("post-data");

const sendHttpRequest = (method, url, payload) => {
  return fetch(url, {
    method: method,
    headers: payload ? { "Content-Type": "application/json" } : {},
    body: JSON.stringify(payload),
  }).then((response) => {
    /* This is not so good with fetch api - START*/
    /* but we need to do this for error handling */
    if (response.status >= 400) {
      //!response.ok
      return response.json().then((errorResponseData) => {
        const error = new Error("Oops! something went wrong.");
        error.data = errorResponseData;
        throw error;
      });
    }
    /* This is not so good with fetch api -END */

    return response.json();
  });
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users").then((responseData) => {
    // responseData is the result that we are looking for
    console.log(responseData);
  });
};

const sendData = () => {
  sendHttpRequest("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  })
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.log(error);
      console.log(`${error}, ${JSON.stringify(error.data)}`);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
