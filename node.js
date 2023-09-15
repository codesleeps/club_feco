// Import security headers
const { setSecurityHeaders } = require("./csp.js");

// Create an Express.js app
const express = require("express");
const app = express();

// Middleware to set security headers
app.use((req, res, next) => {
  // Set security headers using the setSecurityHeaders function
  setSecurityHeaders(res);
  next();
});

// Import and use CORS middleware to handle cross-origin requests
const cors = require("cors");
app.use(cors());

// Allow requests from any origin using CORS
// Note: This code block is not needed because CORS is already configured above.
// res.setHeader("Access-Control-Allow-Origin", "*");

// Define allowed request methods using CORS
// Note: This code block is not needed because CORS is already configured above.
// res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

// Define allowed request headers using CORS
// Note: This code block is not needed because CORS is already configured above.
// res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

// Allow credentials using CORS
// Note: This code block is not needed because CORS is already configured above.
// res.setHeader("Access-Control-Allow-Credentials", true);

// Define an OPTIONS route for "/api" to handle preflight CORS requests
app.options("/api", (req, res) => {
  // Set CORS headers for the preflight request
  res.header("Access-Control-Allow-Origin", "*");
  // ...add other headers as needed for the preflight request
  res.send();
});

// Set CORS for a specific origin (example.com)
res.setHeader("Access-Control-Allow-Origin", "https://example.com");

// Define the port for the Express.js server
const PORT = 3000;

// Start the Express.js server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
