import React from "react";

function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        
        <h2 className="mt-5">404</h2>
        <br/>
        <h1>Kiaan couldn’t find that page</h1>
        <p style={{fontSize:"1.4rem"}}>
          We couldn’t find the page you were looking for. Visit <a href="/" style={{textDecoration:"none"}}>Zerodha’s home page</a>
        </p>
      </div>
    </div>
  );
}
export default NotFound;
