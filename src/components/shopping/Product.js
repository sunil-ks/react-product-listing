import Card from "react-bootstrap/Card";

const Product = ({ name, price, image, isExclusive, isSale, size }) => {
  return (
    // Used alt and title attributes in multiple places to handle basic level of accessibility

    // Used Card component from Bootstrap 5 to display every product
    <Card className="p-2 product-card">
      {/* Added alt attribute to the images if images fail to display by any chance */}
      <Card.Img
        variant="top"
        loading="lazy"
        title={name}
        src={require("../../assets/images/products/" + image)}
        alt={name || "product-image"}
        className="object-fit-cover"
      />

      <Card.Body>
        <div>
          {/* Show the Sale tag when isSale value is truthy */}
          {isSale && (
            <p className="mb-0">
              <span className="background--red text--white p-2">Sale</span>
            </p>
          )}

          {/* Show the Exclusive tag when isExclusive value is truthy */}
          {isExclusive && (
            <p className="mb-0">
              <span className="background--green text--white p-2">
                Exclusive
              </span>
            </p>
          )}

          {/* When both isSale and isExclusive are falsey values,
          then add some padding for better look and feel in the product cards */}
          {!isSale && !isExclusive && (
            <p className="mb-0">
              <span className="p-2"></span>
            </p>
          )}
        </div>

        {/* Create a flex container to display the product name and price as per the psd design */}
        <div className="mt-3 mb-2 flex-justify-between">
          {/* Adding 60% width here for better look and feel so that text does not go very near to the price */}
          <h6 style={{ width: "60%" }} title={name} className="mb-0">
            {/* Basic error handling if in case 'name' value is falsey from the api response, then display NA (Not Available) */}
            {name || "NA"}
          </h6>
          <h5 title={price} className="mb-0">
            {/* Basic error handling if in case 'price' value is falsey from the api response, then display NA (Not Available) */}
            {price || "NA"}
          </h5>
        </div>

        {/* Display the available sizes for this specific product
            which is helpful for the end-user */}
        {size.length && (
          <small className="mb-0">
            Available sizes:&nbsp;
            {size.map((item, index) => (
              <span key={index}>
                {item}
                {index !== size.length - 1 && <span>, </span>}
              </span>
            ))}
          </small>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
