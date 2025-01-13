import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { LuCircleDollarSign } from 'react-icons/lu';
import { FaRegCheckCircle, FaCaravan, FaUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GrCube } from "react-icons/gr";

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Sample sales data for the months
const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Base Price',
      data: [250, 350, 300, 450, 500, 400, 650, 750, 700, 600, 500, 450],
      backgroundColor: 'rgba(51, 39, 209, 0.7)',
      borderColor: 'rgba(51, 39, 209, 1)',
      borderWidth: 0,
      borderRadius: 20,
      barThickness: 8,
    },
    {
      label: 'Price',
      data: [300, 400, 350, 500, 600, 450, 700, 800, 750, 650, 550, 500],
      backgroundColor: 'rgba(44, 161, 240, 0.7)',
      borderColor: 'rgba(44, 161, 240, 1)',
      borderWidth: 0,
      borderRadius: 20,
      barThickness: 8,
    },
  ],
};

const stocksData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Total Stocks',
      data: [250, 350, 300, 450, 500, 400, 650, 750, 700, 600, 500, 450],
      backgroundColor: 'rgba(44, 161, 240, 0.7)',
      borderWidth: 0,
      borderRadius: 20,
      barThickness: 8,
    },
    {
      label: 'Available Stocks',
      data: [300, 400, 350, 500, 600, 450, 700, 800, 750, 650, 550, 500],
      backgroundColor: 'rgba(51, 39, 209, 1)',
      borderWidth: 0,
      borderRadius: 20,
      barThickness: 8,
    },
    {
      label: 'Remaining Stocks',
      data: [300, 400, 350, 500, 600, 450, 700, 800, 750, 650, 550, 500],
      backgroundColor: 'rgba(166, 75, 252, 0.7)',
      borderWidth: 0,
      borderRadius: 20,
      barThickness: 8,
    },
  ],
};

const MonthlyChart = () => {
  return (
    <div>
      <Container className="mt-5">
        {/* Row for the two charts and the statistic cards */}
        <Row className="align-items-stretch">
        <Col xs={12} md={12} className="mb-4">
            <Row>
              {/* Income Card */}
              <Col xs={6} md={2}>
                <Card className="shadow-lg rounded">
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center text-primary">
                      <span>$67.6k</span>
                      <LuCircleDollarSign size={30} />
                    </Card.Title>
                    <Card.Text className="text-muted">Income</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Completed Card */}
              <Col xs={6} md={2}>
                <Card className="shadow-lg rounded">
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center text-success">
                      <span>12.6k</span>
                      <FaRegCheckCircle size={30} />
                    </Card.Title>
                    <Card.Text className="text-muted">Completed</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Pending Card */}
              <Col xs={6} md={2}>
                <Card className="shadow-lg rounded">
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center text-primary">
                      <span>143</span>
                      <IoMdTime size={30} />
                    </Card.Title>
                    <Card.Text className="text-muted">Pending</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Dispatch Card */}
              <Col xs={6} md={2}>
                <Card className="shadow-lg rounded">
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center text-success">
                      <span>651</span>
                      <FaCaravan size={30} />
                    </Card.Title>
                    <Card.Text className="text-muted">Dispatch</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Products Card */}
              <Col xs={6} md={2}>
                <Card className="shadow-lg rounded">
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center text-primary">
                      <span>46k</span>
                      <GrCube size={30} />
                    </Card.Title>
                    <Card.Text className="text-muted">Products</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Customers Card */}
              <Col xs={6} md={2}>
                <Card className="shadow-lg rounded">
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center text-success">
                      <span>8.8k</span>
                      <FaUser size={30} />
                    </Card.Title>
                    <Card.Text className="text-muted">Customers</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          {/* First column for the charts */}
          <Col xs={12} md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Monthly Sales Chart</Card.Title>
                <Bar
                  data={salesData}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: 'Base Price vs Price',
                      },
                      tooltip: {
                        mode: 'index',
                        intersect: false,
                      },
                    },
                    scales: {
                      x: {
                        beginAtZero: true,
                        grid: {
                          display: false, // Disable grid lines on x-axis
                        },
                      },
                      y: {
                        beginAtZero: true,
                        grid: {
                          display: false, // Disable grid lines on y-axis
                        },
                      },
                    },
                  }}
                />
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Monthly Stocks Chart</Card.Title>
                <Bar
                  data={stocksData}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: 'Total Stocks vs Available Stocks vs Remaining Stocks',
                      },
                      tooltip: {
                        mode: 'index',
                        intersect: false,
                      },
                    },
                    scales: {
                      x: {
                        beginAtZero: true,
                        grid: {
                          display: false, // Disable grid lines on x-axis
                        },
                      },
                      y: {
                        beginAtZero: true,
                        grid: {
                          display: false, // Disable grid lines on y-axis
                        },
                      },
                    },
                  }}
                />
              </Card.Body>
            </Card>
          </Col>

          {/* Second column for the statistic cards */}
          
        </Row>
      </Container>
    </div>
  );
};

export default MonthlyChart;
