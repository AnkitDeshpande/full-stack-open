import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Container } from 'react-bootstrap';

const Banner = ({ onClose }) => {
    return (
        <Alert
            variant="info"
            className="mb-0"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1050,
            }}
        >
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <strong>Special Offer:</strong> Use code <span style={{ fontWeight: 'bold', color: '#ff5733' }}>SAVE20</span> to get 20% off your order!
                    </div>
                    <Button variant="link" onClick={onClose} style={{ color: '#000' }}>
                        <strong>X</strong>
                    </Button>
                </div>
            </Container>
        </Alert>
    );
};

export default Banner;
