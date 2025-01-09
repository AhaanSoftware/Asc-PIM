import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const InventoryForm = () => {
  // Initialize react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // Initialize useNavigate for redirection
  const navigate = useNavigate();

  // OnSubmit function
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    
    // Save the data to localStorage (for demonstration purposes)
    let existingData = JSON.parse(localStorage.getItem('inventoryData')) || [];
    existingData.push(data);
    localStorage.setItem('inventoryData', JSON.stringify(existingData));
    
    // Redirect to the "table" page after successful form submission
    navigate('/table');  // Make sure "/table" is the correct route for your table page
  };

  return (
    <Container style={{ maxWidth: '600px', marginTop: '50px' }}>
      <h1 className="mb-4">Inventory Form</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            {...register("location", { required: "Location is required" })}
          />
          {errors.location && <Form.Text className="text-danger">{errors.location.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="stock">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter stock"
            {...register("stock", { required: "Stock is required", min: { value: 0, message: "Stock cannot be negative" } })}
          />
          {errors.stock && <Form.Text className="text-danger">{errors.stock.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="reserved">
          <Form.Label>Reserved</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter reserved stock"
            {...register("reserved", { required: "Reserved is required", min: { value: 0, message: "Reserved cannot be negative" } })}
          />
          {errors.reserved && <Form.Text className="text-danger">{errors.reserved.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="available">
          <Form.Label>Available</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter available stock"
            {...register("available", { required: "Available is required", min: { value: 0, message: "Available cannot be negative" } })}
          />
          {errors.available && <Form.Text className="text-danger">{errors.available.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="sku">
          <Form.Label>SKU</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter SKU"
            {...register("sku", { required: "SKU is required" })}
          />
          {errors.sku && <Form.Text className="text-danger">{errors.sku.message}</Form.Text>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default InventoryForm;
