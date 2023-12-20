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
    
   );
   document.head.appendChild(meta);
 });
