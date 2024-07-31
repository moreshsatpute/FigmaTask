// ItemsInformation.js
import React from 'react';
import { Table, Form, Row, Col, Card, Button, Container } from 'react-bootstrap';
import "./ItemInformation.css"

const ItemsInformation = () => {
    return (
        <Container className='p-2 m-2'>

            <Card className=' m-2'>
                <Card.Header>Items Information</Card.Header>
                <Table striped bordered hover className='table-responsive'>
                    <thead>
                        <tr>
                            <th>Item Code</th>
                            <th>Description</th>
                            <th>Qty Ordered</th>
                            <th>Qty Received</th>
                            <th>Qty Accepted</th>
                            <th>Qty Rejected</th>
                            <th>UoM   </th>
                            <th>Batch/Lot#</th>
                            <th>Exp. Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SKU0021</td>
                            <td>Lorem Ipsum dolor sit</td>
                            <td>100</td>
                            <td>100</td>
                            <td>

                                <Row>
                                    <Col md={2}>
                                        <Form.Control type="number" defaultValue={0} />
                                    </Col>

                                </Row>

                            </td>
                            <td>

                                <Row>
                                    <Col md={3}>
                                        <Form.Control type="number" defaultValue={0} />
                                    </Col>

                                </Row>

                            </td>
                            <td>Kg    </td>
                            <td>#12345</td>
                            <td>--</td>
                        </tr>
                    </tbody>
                </Table>

            </Card>

            <Row>
                <Col md={5}>
                    <Card className="m-2 rounded">
                        <Card.Header className="bg-light">Upload Invoice</Card.Header>
                        <Card.Body>
                            <div className="upload-container">
                                <Form.Control type="file" id="uploadInvoice" className="d-none" />
                                <label htmlFor="uploadInvoice" className="upload-label">
                                    <i className="bi bi-cloud-upload upload-icon"></i>
                                    <div className="upload-text">Drop files here or click to upload</div>
                                </label>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="m-2 rounded">
                        <Card.Header className="bg-light">Comment</Card.Header>
                        <Card.Body>
                            <Form.Group controlId="comment">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="d-flex flex-column justify-content-end position-relative">
                    <Row className="mt-3 position-absolute bottom-0 w-100">
                        <Col className="d-flex justify-content-start">
                            <Button
                                variant="secondary"
                                className="rounded-pill"
                                style={{ borderRadius: '20px', width:"80%" }} 
                            >
                                Cancel
                            </Button>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Button
                                variant="primary"
                                className="rounded-pill"
                                style={{ borderRadius: '20px ', width:"80%" }}
                            >
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
</Container>
    );
};

export default ItemsInformation;
