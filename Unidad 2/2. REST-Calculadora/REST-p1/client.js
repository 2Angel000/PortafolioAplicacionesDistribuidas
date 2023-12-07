// Define the URL of the REST API you want to query
const apiUrl = "http://192.168.231.106:3000";

// Make an HTTP GET request using Fetch

const sendRequest = (method, body) => {
    let path = apiUrl;

    switch(method) {
        case "add":
            path += "/add";
            break;
        case "subtract":
            path += "/subtract";
            break;
        case "multiply": 
            path += "/multiply";
            break;
        case "divide":
            path += "/divide";
            break;            
    }

    path += "?num1=" + body.num1 + "&num2=" + body.num2;

  fetch(path)
    .then((response) => {
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error("Error making the request: " + response.status);
      }
      return response.json(); // Parse the JSON response
    })
    .then((data) => {
      // Do something with the response data
      console.log("Server Response:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

sendRequest("add", { num1: 10, num2: 20 });
sendRequest("subtract", { num1: 10, num2: 20 });
sendRequest("multiply", { num1: 2, num2: 4 });
sendRequest("divide", { num1: 30, num2: 3 });