const express = require("express");
const { securePayload } = require("../src/index");
const { verifyPayload } = require("../src/verify");

const app = express();
app.use(express.json());

const SECRET = "SecretWord1234";

app.post("/secure-payload", verifyPayload, (req, res) => {
  res.json({ message: "Payload verified and accepted", data: req.body });
});

//Simulate Client

const payload = { userId: 1, request: "Build this package" };
const secured = securePayload(SECRET, payload);
console.log("Client side Payload to send:", JSON.stringify(secured, null, 2));

app.listen(9000, () => console.log("Listening to port: 9000"));
