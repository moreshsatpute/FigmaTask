import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form,} from 'react-bootstrap';
import "./CreateGRN.css"
import ItemsInformation from '../ItemInformation/ItemInformation';


function CreateGRN() {
  const navigate = useNavigate();
  const [supplierName, setSupplierName] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [dateOfReceipt, setDateOfReceipt] = useState('');
  const [purchaseOrderNumber, setPurchaseOrderNumber] = useState('');
  const [purchaseOrderDate, setPurchaseOrderDate] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [store, setStore] = useState('');
  const [qualityCheckStatus, setQualityCheckStatus] = useState('');

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h3>
        <IoArrowBack className='m-2' onClick={handleBackClick} style={{ cursor: 'pointer' }} />
        Create GRN
      </h3>
      <Form>
        <Container >
          <Row >
            {/* Left Side - Two Cards */}
            <Col md={6}>
              <Card className="mb-3 rounded">
                <Card.Header className="bg-light">Supplier’s Information</Card.Header>
                <Card.Body>
                  <Form.Group controlId="supplierName" className="mb-3">
                    <Form.Label>Supplier's Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={supplierName}
                      onChange={(e) => setSupplierName(e.target.value)}
                    />
                  </Form.Group>
                  <Row>
                    <Col md={9}>
                      <Card.Title>Address of Buyer</Card.Title>
                      <div>
                        26/3, 30, Nanik Niwas, Dr.D.D Sathe Marg,<br />
                        Near Girgaon Church, Opera House,<br />
                        Mumbai (Maharashtra), India - 400000
                      </div>
                    </Col>
                    <Col md={3}>
                      <Form.Group controlId="gstn">
                        <Form.Label>GSTN</Form.Label>
                        <Form.Control
                          type="text"
                        // value and onChange should be added here
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="mb-3 rounded">
                <Card.Header className="bg-light">Buyer’s Information</Card.Header>
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Text>Rohit Sharma</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Right Side - One Card */}
            <Col md={6}>
              <Card className="rounded">
                <Card.Header className="bg-light">Primary Document Details</Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="documentNumber">
                        <Form.Label>Document Number</Form.Label>
                        <Form.Control
                          type="text"
                          value={documentNumber}
                          onChange={(e) => setDocumentNumber(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="dateOfReceipt">
                        <Form.Label>Date of Receipt</Form.Label>
                        <Form.Control
                          type="date"
                          value={dateOfReceipt}
                          onChange={(e) => setDateOfReceipt(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="purchaseOrderNumber">
                        <Form.Label>Purchase Order #</Form.Label>
                        <Form.Control
                          type="text"
                          value={purchaseOrderNumber}
                          onChange={(e) => setPurchaseOrderNumber(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="purchaseOrderDate">
                        <Form.Label>Purchase Order Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={purchaseOrderDate}
                          onChange={(e) => setPurchaseOrderDate(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="deliveryDate">
                        <Form.Label>Delivery Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={deliveryDate}
                          onChange={(e) => setDeliveryDate(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="store">
                        <Form.Label>Store</Form.Label>
                        <Form.Control
                          type="text"
                          value={store}
                          onChange={(e) => setStore(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group controlId="qualityCheckStatus">
                        <Form.Label>Quality Check Status</Form.Label>
                        <div>
                          <div className="radio-button-container">
                            <Form.Check
                              inline
                              type="radio"
                              label="Passed"
                              value="Passed"
                              name="qualityCheckStatus"
                              checked={qualityCheckStatus === 'Passed'}
                              onChange={(e) => setQualityCheckStatus(e.target.value)}
                            />
                          </div>
                          <div className="radio-button-container">
                            <Form.Check
                              inline
                              type="radio"
                              label="Failed"
                              value="Failed"
                              name="qualityCheckStatus"
                              checked={qualityCheckStatus === 'Failed'}
                              onChange={(e) => setQualityCheckStatus(e.target.value)}
                            />
                          </div>
                          <div className="radio-button-container">
                            <Form.Check
                              inline
                              type="radio"
                              label="Needs Inspection"
                              value="Needs Inspection"
                              name="qualityCheckStatus"
                              checked={qualityCheckStatus === 'Needs Inspection'}
                              onChange={(e) => setQualityCheckStatus(e.target.value)}
                            />
                          </div>
                        </div>
                      </Form.Group>



                    </Col>
                  </Row>
                </Card.Body>
              </Card>

            </Col>
              <Row>
                <Col md={12} className="mb-3" >
                      <ItemsInformation/>
                </Col>
              </Row>
          </Row>
          
        </Container>
      </Form>
    </div>
  );
}

export default CreateGRN;
