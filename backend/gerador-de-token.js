const jwt = require("jsonwebtoken");

const SECRET_KEY = "3422niuwddsfuoshfiuh4h4i2u34h1i2423jnb";

const nossoToken = jwt.sign(
  {
    name: "Isabela",
  },
  SECRET_KEY,
  {
    expiresIn: "10y",
    subject: "1",
  }
);

const TOKEN_GERADO =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJ1c2VyIl0sImlhdCI6MTY3NzY5MjQ3MywiZXhwIjoxNjc3NjkyNTMzLCJzdWIiOiJTTlk4ZTJUODBpQWk2ODdzIn0.xXllq8lAsdGe9ruMWuF1RchCVCXCmYO8lQE5QhN_eSg";

console.log(jwt.verify(TOKEN_GERADO, SECRET_KEY));
