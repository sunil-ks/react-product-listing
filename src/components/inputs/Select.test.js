import { render, screen, fireEvent } from "@testing-library/react";
import Select from "./Select";
import { sizeOptions } from "../../utils";

describe("Select", () => {
  it("should correctly set default option (first element of the array)", () => {
    render(
      <Select
        id="1"
        name="dropdown"
        handleChange={() => true}
        options={sizeOptions}
      />
    );
    expect(screen.getByRole("option", { name: "All Sizes" }).selected).toBe(
      true
    );
  });
  it("should display correct number of options", () => {
    render(
      <Select
        id="1"
        name="dropdown"
        handleChange={() => true}
        options={sizeOptions}
      />
    );
    expect(screen.getAllByRole("option").length).toBe(6);
  });
  it("should allow user to change size options", () => {
    render(
      <Select
        id="1"
        name="dropdown"
        handleChange={() => true}
        options={sizeOptions}
      />
    );
    // initial val
    expect(screen.getByText("All Sizes")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("select"), {
      target: { value: "S" },
    });
    // selected-val
    expect(screen.getByText("Small")).toBeInTheDocument();
  });
});
