import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "react-quill/dist/quill.snow.css";
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
import { FaRegCheckCircle, FaCaravan } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import './MonthlyChart.css';

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Sample sales data for the months
const stocksData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Total Stocks',
      data: [250, 350, 300, 450, 500, 400, 650, 750, 700, 600, 500, 450],
      backgroundColor: '#cbcbcb',
      borderWidth: 0,
      borderRadius: 20,
      barThickness: 10,
    },
    {
      label: 'Available Stocks',
      data: [300, 400, 350, 500, 600, 450, 700, 800, 750, 650, 550, 500],
      backgroundColor: '#F78D1F ',
      borderWidth: 0,
      borderRadius: 20,
      barThickness: 10,
    },
    {
      label: 'Remaining Stocks',
      data: [300, 400, 350, 500, 600, 450, 700, 800, 750, 650, 550, 500],
      backgroundColor: '#283890',
      borderWidth: 0,
      borderRadius: 20,
      barThickness: 10,
    },
  ],
};

const MonthlyChart = () => {
  return (
    <div>
      <Container className="d-flex mt-5">
        <Row className="w-100">
          {/* Chart Column with adjusted padding */}
          <Col xs={12} md={7} className="mb-4" > {/* Adjust top and bottom padding here */}
            <Card className="box-container" style={{ height: '265px' }}> 
              <Card.Body style={{ paddingTop: '0px'}}>
              <Card.Title className="text-center">Monthly Stocks Chart</Card.Title>
                <Bar
                  data={stocksData}
                  options={{
                    responsive: true,
                    plugins: {
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
                  height={100}
                />
              </Card.Body>
            </Card>
          </Col>

          {/* Cards Column */}
          <Col xs={12} md={5} className="mb-4">
            <Row className="g-8 mb-1">
              {/* Income Card */}
              <Col xs={6} md={6}>
                <Card className="box-container" style={{ height: '120px' }}>
                  <Card.Body style={{ paddingTop: '5px', paddingBottom:'5px'}}>
                    <Card.Title className="d-flex justify-content-between align-items-center text-primary">
                      <span className='LuCircleDollarSign'>$67.6k</span>
                      <LuCircleDollarSign size={30} className='LuCircleDollarSign' />
                    </Card.Title>
                    <Card.Text className="text-muted">Revenue</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Completed Card */}
              <Col xs={6} md={6}>
                <Card className="box-container" style={{ height: '120px' }}>
                  <Card.Body style={{ paddingTop: '5px', paddingBottom:'5px'}}>
                    <Card.Title className="d-flex justify-content-between align-items-center text-success">
                      <span className='FaRegCheckCircle'>12.6k</span>
                      <FaRegCheckCircle size={30} className='FaRegCheckCircle' />
                    </Card.Title>
                    <Card.Text className="text-muted">Finalized</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="g-8">
              {/* Pending Card */}
              <Col xs={6} md={6}>
                <Card className="box-container" style={{ height: '120px' }}>
                  <Card.Body style={{ paddingTop: '5px', paddingBottom:'5px'}}>
                    <Card.Title className="d-flex justify-content-between align-items-center text-primary">
                      <span className='IoMdTime'>143</span>
                      <IoMdTime size={30} className='IoMdTime' />
                    </Card.Title>
                    <Card.Text className="text-muted">Pending Work</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Dispatch Card */}
              <Col xs={6} md={6}>
                <Card className="box-container" style={{ height: '120px' }}>
                  <Card.Body style={{ paddingTop: '5px', paddingBottom:'5px'}}>
                    <Card.Title className="d-flex justify-content-between align-items-center text-success">
                      <span className='FaCaravan'>651</span>
                      <FaCaravan size={30} className='FaCaravan' />
                    </Card.Title>
                    <Card.Text className="text-muted">The Dispatch</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MonthlyChart;
