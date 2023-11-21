var express = require("express");
var app = express();
var port = process.env.port || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Addition endpoint
app.get("/add/:num1/:num2", (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is: ${result}`);
});

app.listen(port, () => {
  console.log("App listening to: " + port);
});
