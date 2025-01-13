import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LuCircleDollarSign } from 'react-icons/lu';
import { FaRegCheckCircle, FaCaravan, FaUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GrCube } from "react-icons/gr";

const Grid = () => {
  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col xs={12} md={4}>
          <Card className="shadow-lg rounded">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center text-primary">
                <span>$67.6k</span>
                <LuCircleDollarSign size={30} />
              </Card.Title>
              <Card.Text className="text-muted">
                Income
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="shadow-lg rounded">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center text-success">
                <span>12.6k</span>
                <FaRegCheckCircle size={30} />
              </Card.Title>
              <Card.Text className="text-muted">
                Completed
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={12} md={4}>
          <Card className="shadow-lg rounded">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center text-primary">
                <span>143</span>
                <IoMdTime size={30} />
              </Card.Title>
              <Card.Text className="text-muted">
                Pending
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="shadow-lg rounded">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center text-success">
                <span>651</span>
                <FaCaravan size={30} />
              </Card.Title>
              <Card.Text className="text-muted">
                Dispatch
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Card className="shadow-lg rounded">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center text-primary">
                <span>46k</span>
                <GrCube size={30} />
              </Card.Title>
              <Card.Text className="text-muted">
                Products
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="shadow-lg rounded">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center text-success">
                <span>8.8k</span>
                <FaUser size={30} />
              </Card.Title>
              <Card.Text className="text-muted">
                Customers
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Grid;
