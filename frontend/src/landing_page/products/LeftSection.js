import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5 mt-md-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} className="product-link-inline">
              Try Demo <i className="fa fa-arrow-right-long"></i>
            </a>
            <a href={learnMore} className="product-link-inline product-link-spaced">
              Learn More <i className="fa fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} className="product-link-inline">
              <img src="\media\images\googlePlayBadge.svg" alt="Get it on Google Play" className="img-fluid" style={{ maxWidth: "160px" }} />
            </a>
            <a href={appStore} className="product-link-inline product-link-spaced">
              <img src="\media\images\appstoreBadge.svg" alt="Download on the App Store" className="img-fluid" style={{ maxWidth: "160px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
