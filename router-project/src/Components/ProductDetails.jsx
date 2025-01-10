import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { handleValue } = useContext(CartContext);

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(({ data }) => setProduct(data))
            .catch(err => {
                console.error("Error fetching product details:", err);
            });
    }, [id]);

    // Display loading spinner while product details are being fetched
    if (!product) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Spinner animation="border" />
            </div>
        );
    }

    return (
        <div className="d-flex justify-content-center">
            <Card
                style={{
                    width: '18rem',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                key={product.id}
            >
                <Card.Img
                    variant="top"
                    src={`https://picsum.photos/200/200?random=${product.id}`} // Use product image if available
                    alt={product.name}
                    style={{
                        height: '200px',
                        objectFit: 'cover',
                    }}
                />
                <Card.Body style={{ flex: '1' }}>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text style={{ fontWeight: 'bold', fontSize: '18px' }}>
                        ${product.price} {/* Ensure price is available */}
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleValue(1)}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductDetails;
