import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 
import "./AddCollection.css";

const AddCollection = () => {
   const {
      register,
      handleSubmit,
      watch,
      setValue,
      reset,
      formState: { errors },
    } = useForm();
    const [description, setDescription] = useState("");
    const [isManual, setIsManual] = useState(false);
  
    // Watch the radio selection
    const radioValue = watch("mode");
  
    const onSubmit = (data) => {
      console.log(data);
      alert("Form Submitted!");
      reset();
    };
  
    const handleQuillChange = (value) => {
      setValue("description", value, { shouldValidate: true });
    };
  
    return (
      <div className="container mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="form-container p-4">
          <h5 className="mb-4">Collections</h5>
  
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
  
                <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <ReactQuill
                  id="description"
                  className={`form-control ${
                    errors.description ? "is-invalid" : ""
                  }`}
                  theme="snow"
                  onChange={handleQuillChange}
                />
                {errors.description && (
                  <div className="invalid-feedback">{errors.description.message}</div>
                )}
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
              </div>
            </div>
  
            <div className="col-md-3">
              <div className="box-container">
                <div className="mb-3">
                  <label className="form-label">Add Product</label>
                  <div>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="automatic"
                        className="form-check-input"
                        value="automatic"
                        {...register("type")}
                        onClick={() => setIsManual(false)}
                        defaultChecked
                      />
                      <label htmlFor="automatic" className="form-check-label">
                        Automatic
                      </label>
                    </div>
  
                    <div className="form-check">
                      <input
                        type="radio"
                        id="manual"
                        className="form-check-input"
                        value="manual"
                        {...register("type")}
                        onClick={() => setIsManual(true)}
                      />
                      <label htmlFor="manual" className="form-check-label">
                        Manual
                      </label>
                    </div>
                  </div>
                </div>
  
                {isManual && (
                  <div className="mb-3">
                    <label htmlFor="searchProduct" className="form-label">
                      Search by Product
                    </label>
                    <input
                      type="text"
                      id="searchProduct"
                      className="form-control"
                      placeholder="Enter product name"
                      {...register("searchProduct", { required: isManual })}
                    />
                  </div>
                )}
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };

export default AddCollection