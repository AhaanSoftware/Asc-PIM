import React, { useState, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "react-quill/dist/quill.snow.css";
import "./AddProduct.css";

const AddProduct = ({ setProductData }) => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      variants: [{ optionName: "", optionValue: "" }],
    },
  });

  const [description, setDescription] = useState("");

  const price = watch("price", 0);
  const costPerItem = watch("costPerItem", 0);
  const trackQuantity = watch("trackQuantity", false);

  const profit =
    price - costPerItem > 0 ? (price - costPerItem).toFixed(2) : "--";
  const margin =
    price > 0 ? (((price - costPerItem) / price) * 100).toFixed(2) + "%" : "--";

  const onSubmit = (data) => {
    const formData = {
      ...data,
      description,
    };
    if (data.variants.some((variant) => variant.optionName.trim() === "")) {
      setError("variants", {
        type: "manual",
        message: "Option name is required.",
      });
      return;
    }
    console.log("Form Data:", formData);
    setProductData((prevData) => [...prevData, formData]); // Save to global state
    navigate("/about");

    if (data.file && data.file[0]) {
      console.log("Uploaded File:", data.file[0].name);
    }
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants",
  });

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container p-4">
        <h5 className="mb-4">Add Product</h5>

        <div className="row">
          <div className="col-md-9">
            <div className="box-container">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <div className="mb-3">
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  placeholder="Title"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <small className="text-danger">{errors.title.message}</small>
                )}
              </div>

              <div className="mb-5">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <ReactQuill
                  id="description"
                  theme="snow"
                  value={description}
                  onChange={(content) => setDescription(content)}
                  style={{ height: "200px" }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="file" className="form-label">
                  Upload File
                </label>
                <input
                  type="file"
                  id="file"
                  className={`form-control ${errors.file ? "is-invalid" : ""}`}
                  {...register("file", { required: "File is required" })}
                />
                {errors.file && (
                  <div className="invalid-feedback">{errors.file.message}</div>
                )}
                <p className="mt-2 text-muted">
                  Accepts images, videos, or other files.
                </p>
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  className="form-control"
                  {...register("category", {
                    required: "Category is required",
                  })}
                  placeholder="Enter a category"
                />
                {errors.category && (
                  <small className="text-danger">
                    {errors.category.message}
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="tags" className="form-label">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  className="form-control"
                  {...register("tags")}
                  placeholder="Add tags (comma-separated)"
                />
              </div>
            </div>

            <div className="box-container">
              <h5 className="mb-4">Pricing</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id="price"
                    className={`form-control ${
                      errors.price ? "is-invalid" : ""
                    }`}
                    placeholder="₹ 0.00"
                    {...register("price", {
                      required: "Price is required",
                      min: { value: 0, message: "Price must be at least 0" },
                    })}
                  />
                  {errors.price && (
                    <div className="invalid-feedback">
                      {errors.price.message}
                    </div>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="compareAtPrice" className="form-label">
                    Compare-at price
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id="compareAtPrice"
                    className="form-control"
                    placeholder="₹ 0.00"
                    {...register("compareAtPrice")}
                  />
                </div>
              </div>

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="chargeTax"
                  {...register("chargeTax")}
                />
                <label className="form-check-label" htmlFor="chargeTax">
                  Charge tax on this product
                </label>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="costPerItem" className="form-label">
                    Cost per item
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id="costPerItem"
                    className={`form-control ${
                      errors.costPerItem ? "is-invalid" : ""
                    }`}
                    placeholder="₹ 0.00"
                    {...register("costPerItem", {
                      required: "Cost per item is required",
                      min: { value: 0, message: "Cost must be at least 0" },
                    })}
                  />
                  {errors.costPerItem && (
                    <div className="invalid-feedback">
                      {errors.costPerItem.message}
                    </div>
                  )}
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="profit" className="form-label">
                    Profit
                  </label>
                  <input
                    type="text"
                    id="profit"
                    className="form-control"
                    value={profit}
                    readOnly
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="margin" className="form-label">
                    Margin
                  </label>
                  <input
                    type="text"
                    id="margin"
                    className="form-control"
                    value={margin}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="box-container">
              <h5 className="mb-4">Inventory</h5>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="trackQuantity"
                  {...register("trackQuantity")}
                />
                <label className="form-check-label" htmlFor="trackQuantity">
                  Track quantity
                </label>
              </div>

              {trackQuantity && (
                <>
                  <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      className={`form-control ${
                        errors.quantity ? "is-invalid" : ""
                      }`}
                      placeholder="0"
                      {...register("quantity", {
                        required:
                          "Quantity is required when tracking is enabled",
                        min: {
                          value: 0,
                          message: "Quantity cannot be negative",
                        },
                      })}
                    />
                    {errors.quantity && (
                      <div className="invalid-feedback">
                        {errors.quantity.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="shopLocation" className="form-label">
                      Shop location
                    </label>
                    <input
                      type="text"
                      id="shopLocation"
                      className="form-control"
                      placeholder="Enter shop location"
                      {...register("shopLocation")}
                    />
                  </div>
                </>
              )}

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="continueSelling"
                  {...register("continueSelling")}
                />
                <label className="form-check-label" htmlFor="continueSelling">
                  Continue selling when out of stock
                </label>
                <p className="small text-muted">
                  This won’t affect Shopify POS. Staff will see a warning but
                  can complete sales when available inventory reaches zero and
                  below.
                </p>
              </div>
            </div>

            <div className="box-container">
              <h5 className="mb-4">Shipping</h5>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="physicalProduct"
                  {...register("physicalProduct")}
                />
                <label className="form-check-label" htmlFor="physicalProduct">
                  This is a physical product
                </label>
              </div>

              <div className="mb-3 row align-items-center">
                <div className="col-6">
                  <input
                    type="number"
                    step="0.1"
                    id="weight"
                    placeholder="Weight"
                    className={`form-control ${
                      errors.weight ? "is-invalid" : ""
                    }`}
                    {...register("weight", {
                      required: "Weight is required",
                      min: { value: 0, message: "Weight cannot be negative" },
                    })}
                  />
                  {errors.weight && (
                    <div className="invalid-feedback">
                      {errors.weight.message}
                    </div>
                  )}
                </div>
                <div className="col-2">
                  <label
                    htmlFor="weightUnit"
                    className="form-label visually-hidden"
                  >
                    Unit
                  </label>
                  <select
                    id="weightUnit"
                    className="form-select"
                    {...register("weightUnit")}
                  >
                    <option value="kg">kg</option>
                    <option value="lb">lb</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="origin" className="form-label">
                  Country/Region of origin
                  <span
                    className="info-icon"
                    title="Select the country or region of origin."
                  >
                    ⓘ
                  </span>
                </label>
                <select
                  id="origin"
                  className={`form-select ${errors.origin ? "is-invalid" : ""}`}
                  {...register("origin", {
                    required: "Country/Region is required",
                  })}
                >
                  <option value="">Select</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="Germany">Germany</option>
                </select>
                {errors.origin && (
                  <div className="invalid-feedback">
                    {errors.origin.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="hsCode" className="form-label">
                  Harmonized System (HS) code
                </label>
                <input
                  type="text"
                  id="hsCode"
                  className={`form-control ${
                    errors.hsCode ? "is-invalid" : ""
                  }`}
                  placeholder="Search by product keyword or code"
                  {...register("hsCode", {
                    required: "HS code is required",
                  })}
                />
                {errors.hsCode && (
                  <div className="invalid-feedback">
                    {errors.hsCode.message}
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>

          <div className="col-md-3">
            <div className="box-container">
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Status
                </label>
                <select
                  id="status"
                  className="form-select"
                  {...register("status", { required: "Status is required" })}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Draft">Draft</option>
                </select>
                {errors.status && (
                  <small className="text-danger">{errors.status.message}</small>
                )}
              </div>
            </div>

            <div className="box-container">
              <h5 className="mb-4">Product Information</h5>

              <div className="mb-3">
                <label htmlFor="productType" className="form-label">
                  Product Type
                </label>
                <input
                  type="text"
                  id="productType"
                  className={`form-control ${
                    errors.productType ? "is-invalid" : ""
                  }`}
                  placeholder="Enter product type"
                  {...register("productType", {
                    required: "Product type is required",
                  })}
                />
                {errors.productType && (
                  <div className="invalid-feedback">
                    {errors.productType.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="vendor" className="form-label">
                  Vendor
                </label>
                <input
                  type="text"
                  id="vendor"
                  className={`form-control ${
                    errors.vendor ? "is-invalid" : ""
                  }`}
                  placeholder="Enter vendor name"
                  {...register("vendor", { required: "Vendor is required" })}
                />
                {errors.vendor && (
                  <div className="invalid-feedback">
                    {errors.vendor.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="collection" className="form-label">
                  Collection
                </label>
                <select
                  id="collection"
                  className={`form-select ${
                    errors.collection ? "is-invalid" : ""
                  }`}
                  {...register("collection", {
                    required: "Collection is required",
                  })}
                >
                  <option value="">Select collection</option>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                </select>
                {errors.collection && (
                  <div className="invalid-feedback">
                    {errors.collection.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="tags" className="form-label">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  className={`form-control ${errors.tags ? "is-invalid" : ""}`}
                  placeholder="Enter tags (comma-separated)"
                  {...register("tags", {
                    required: "Tags are required",
                    validate: (value) =>
                      value.split(",").length > 0 || "Enter at least one tag",
                  })}
                />
                {errors.tags && (
                  <div className="invalid-feedback">{errors.tags.message}</div>
                )}
              </div>
            </div>
            <div className="box-container">
              <h5 className="mb-4">Variants</h5>
              {fields.map((field, index) => (
                <div key={field.id} className="mb-3">
                  <div className="row align-items-center">
                    <div className="col-12">
                      <label className="form-label">Name</label>
                      <input
                        {...register(`variants.${index}.optionName`, {
                          required: true,
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Enter option name"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Values</label>
                      <input
                        {...register(`variants.${index}.optionValue`, {
                          required: true,
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Enter option value"
                      />
                    </div>
                  </div>
                  {fields.length > 1 && (
                    <div className="d-flex justify-content-end mt-2">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => remove(index)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <div className="d-flex justify-content-between mt-4">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => append({ optionName: "", optionValue: "" })}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
