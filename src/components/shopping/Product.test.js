import { render, screen } from "@testing-library/react";
import Product from "./Product";

const product = {
  productName: "T-shirt",
  price: "$18.88",
  isExclusive: true,
  isSale: true,
  productImage: "product-1.jpg",
  size: ["S", "M", "L"],
};

describe("Product", () => {
  it("should correctly show product name as passed in the prop", () => {
    render(
      <Product
        name={product.productName}
        price={product.price}
        image={product.productImage}
        isExclusive={product.isExclusive}
        isSale={product.isSale}
        size={product.size}
      />
    );
    const productNameValue = screen.getByTestId("product-name").textContent;
    expect(productNameValue).toEqual("T-shirt");
  });
  it("should correctly show product price as passed in the prop", () => {
    render(
      <Product
        name={product.productName}
        price={product.price}
        image={product.productImage}
        isExclusive={product.isExclusive}
        isSale={product.isSale}
        size={product.size}
      />
    );
    const productPriceValue = screen.getByTestId("product-price").textContent;
    expect(productPriceValue).toEqual("$18.88");
  });
  it("should show Sale tag if it is truthy in the prop", () => {
    render(
      <Product
        name={product.productName}
        price={product.price}
        image={product.productImage}
        isExclusive={product.isExclusive}
        isSale={product.isSale}
        size={product.size}
      />
    );
    expect(screen.getByText("Sale")).toBeInTheDocument();
  });
  it("should show Exclusive tag if it is truthy in the prop", () => {
    render(
      <Product
        name={product.productName}
        price={product.price}
        image={product.productImage}
        isExclusive={product.isExclusive}
        isSale={product.isSale}
        size={product.size}
      />
    );
    expect(screen.getByText("Exclusive")).toBeInTheDocument();
  });
  it("should not show Sale tag if it is falsey in the prop", () => {
    render(
      <Product
        name={product.productName}
        price={product.price}
        image={product.productImage}
        isExclusive={false}
        isSale={false}
        size={product.size}
      />
    );
    expect(screen.queryByText("Sale")).not.toBeInTheDocument();
  });
  it("should not show Exclusive tag if it is falsey in the prop", () => {
    render(
      <Product
        name={product.productName}
        price={product.price}
        image={product.productImage}
        isExclusive={false}
        isSale={false}
        size={product.size}
      />
    );
    expect(screen.queryByText("Exclusive")).not.toBeInTheDocument();
  });
  it("should not show Available sizes if it is an empty array for size prop", () => {
    render(
      <Product
        name={product.productName}
        price={product.price}
        image={product.productImage}
        isExclusive={false}
        isSale={false}
        size={[]}
      />
    );
    expect(screen.queryByText("Available sizes")).not.toBeInTheDocument();
  });
  it("should show Available sizes if size prop has array elements", () => {
    render(
      <Product
        name={product.productName}
        price={product.price}
        image={product.productImage}
        isExclusive={false}
        isSale={false}
        size={["S", "M"]}
      />
    );
    expect(screen.getByText("Available sizes:")).toBeInTheDocument();
  });
});
