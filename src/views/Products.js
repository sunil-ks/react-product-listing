import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getShoppingProducts } from "../redux/modules/shoppingSlice";

// Reusable component imports
import LoadingIndicator from "../components/common/LoadingIndicator";
import Product from "../components/shopping/Product";
import ProductFilters from "../components/shopping/ProductFilters";

const Shopping = () => {
  // using the useEffect hook from react to dispatch getShoppingProducts action when this component loads
  // Passing empty array as the second parameter to the call back function to trigger this action only when page loads and not on every re-render
  useEffect(() => {
    dispatch(getShoppingProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();

  // Getting all the global state variables here to use in this component
  const { products, filteredData, isFetchingProducts } = useSelector(
    (state) => state.shopping
  );

  // Check if filteredData array contains products.
  // If yes, display filtered data based on sizeOptions.
  // If no, display all products by default.
  const productsList = filteredData.length ? filteredData : products;

  // Display the loading indicator to the user when API call is in progress
  // (based on the boolean value from the global state variable)
  if (isFetchingProducts) {
    return (
      <div className="m-5 d-flex justify-content-center align-items-center text-center">
        <div>
          <LoadingIndicator />
          <p className="mt-3">Loading products. Please wait...</p>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      {/* UI as per the psd design attached in the assignment zip file */}
      <Container className="mt-5 mb-5">
        <div className="d-flex flex-justify-between p-2 background--cyan mb-3">
          <h3 className="mb-0">
            <strong>Women's tops</strong>
          </h3>
          <div>
            <p className="mb-0">
              <small>Filter by size</small>
            </p>
            <ProductFilters />
          </div>
        </div>
        <Row>
          {/* Display the products list once we have got the data from backend */}
          {productsList ? (
            productsList.map((product) => (
              // Loop through all the products using the js map function and reuse the Product component to display in the DOM
              // Have considered the 'index' key from the JSON response as it was found to be unique

              // Used the bootstrap grid system to make the page responsive
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={3}
                className="mb-3"
                key={product.index}
              >
                {/* Passing the relevant props to the reusable component */}
                <Product
                  name={product.productName}
                  price={product.price}
                  image={product.productImage}
                  isExclusive={product.isExclusive}
                  isSale={product.isSale}
                  size={product.size}
                />
              </Col>
            ))
          ) : (
            <div>
              <p className="text-center p-5">No results found</p>
            </div>
          )}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Shopping;
