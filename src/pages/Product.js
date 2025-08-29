import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Spinner, Button } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4">Our Products</h2>

      {categories.map((cat) => (
        <div key={cat} className="mb-5">
          <h3 className="text-capitalize mb-3">{cat}</h3>
          <Row>
            {products
              .filter((p) => p.category === cat)
              .slice(0, 4) // show only 4 per category
              .map((item) => (
                <Col key={item.id} xs={12} sm={6} md={3} className="mb-4">
                  <Card className="h-100 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{ height: "200px", objectFit: "contain", padding: "15px" }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="fs-6">{item.title.slice(0, 40)}...</Card.Title>
                      <Card.Text className="fw-bold text-primary">${item.price}</Card.Text>
                      <div className="mt-auto">
                        <Button variant="dark" size="sm" className="w-100">
                          Add to Cart
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Products;
