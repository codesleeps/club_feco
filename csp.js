app.use(compression());

const csp = {
  defaultSrc: ["'self'"],
  imgSrc: ["'self"],
  childSrc: ["'none'"],
  frameSrc: ["'self'", "https://www.google.com/maps"],
  manifestSrc: ["'self'"],
  mediaSrc: ["'none'"],
  objectSrc: ["'none'"],
  scriptSrc: [
    "'self'",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
  ],
};

module.exports = {
  setSecurityHeaders: (res) => {
    res.setHeader(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains"
    );

    // X-Frame-Options
    res.setHeader("X-Frame-Options", "deny");

    // Worker src
    res.setHeader("Worker-Src", "sw.js");

    // Referrer policy
    res.setHeader("Referrer-Policy", "no-referrer");

    // Feature policy
    res.setHeader(
      "Feature-Policy",
      "camera 'none'; geolocation 'none'; microphone 'none'"
    );

    // Preload
    res.setHeader("Preload", "");
  },
};

res.setHeader("Content-Security-Policy", Object.values(csp).join("; "));
const compression = require("compression");
