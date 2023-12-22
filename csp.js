// Add the Strict-Transport-Security header
 document.addEventListener("DOMContentLoaded", function () {
   let meta = document.createElement("meta");
   meta.setAttribute("http-equiv", "strict-transport-security");
   meta.setAttribute("content", "max-age=31536000; includeSubDomains");
   document.head.appendChild(meta);
 });
 
// Add the Content-Security-Policy header
 document.addEventListener("DOMContentLoaded", function () {
   let meta = document.createElement("meta");
   meta.setAttribute("http-equiv", "Content-Security-Policy");
   meta.setAttribute(
     "content",
     "default-src 'self'; img-src 'self'; script-src 'self' https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css 'unsafe-inline'; style-src 'self' https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css 'unsafe-inline'; font-src 'self' ; connect-src 'self';"
   );
   document.head.appendChild(meta);
 });
