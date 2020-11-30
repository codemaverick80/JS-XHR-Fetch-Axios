const getBtn = document.getElementById("get-data");
const postBtn = document.getElementById("post-data");

const getData = () => {
  axios.get("https://reqres.in/api/users").then((responseData) => {
    console.log(responseData);
  });
};

const sendData = () => {
  axios
    .post(
      "https://reqres.in/api/register",
      {
        email: "eve.holt@reqres.in",
        password: "pistol",
      }
      // ,
      // {
      //   header: { "Content-Type": "application/json" },
      // }
    )
    .then((responseData) => {
      console.log(responseData.data);
    })
    .catch((error) => {
      console.log(error, error.response);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
