import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import QuoteCard from '../QuoteCard';

function RandomQuote() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <QuoteCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RandomQuote
