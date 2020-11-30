const getBtn = document.getElementById("get-data");
const postBtn = document.getElementById("post-data");

const sendHttpRequest = (method, url) => {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.responseType = "json";

  xhr.onload = () => {
    // const data = JSON.parse(xhr.response);
    const data = xhr.response;
    console.log(data);
  };

  xhr.send();
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users");
};

const sendData = () => {};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
