import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Electronics = () => {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(({ data }) => setProducts(data));
  }, []);

  const viewProduct = (id) => {
    console.log("hi from : electronics")
    navigate(`/product/${id}`);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '20px',
        marginTop: '20px',
        padding: '0 20px',
      }}
    >
      {products.map(product => {
        return (
          <Card
            style={{
              width: '18rem',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
            key={product.id}
          >
            <Card.Img variant="top" src={`https://picsum.photos/200/200?random=${product.id}`} style={{
              height: '200px',
              objectFit: 'cover',
            }} />
            <Card.Body style={{ flex: '1' }}>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Button variant="primary" onClick={() => viewProduct(product.id)}>View product</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Electronics