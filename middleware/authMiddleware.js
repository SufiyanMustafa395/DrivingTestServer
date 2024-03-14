// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

// Your secret key for signing and verifying JWT
const secretKey = "yourSecretKey";

const authMiddleware = (req, res, next) => {
  // Extract the token from the request header
  const token = req.header("x-auth-token");

  // Check if token is not present
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);

    // Attach the decoded user to the request object
    req.user = decoded;

    // Continue with the next middleware or route handler
    next();
  } catch (error) {
    // If token is invalid
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = authMiddleware;
