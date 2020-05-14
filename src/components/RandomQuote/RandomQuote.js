import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import QuoteCard from '../QuoteCard';

function RandomQuote() {
    const [quote, setQuote] = useState({ author: '', en: '' });

    useEffect(() => {
        getNewQuote();
    }, []);
    const getNewQuote = () => {
        fetch(`https://programming-quotes-api.herokuapp.com/quotes/random`)
            .then(response => response.json())
            .then(data => setQuote(data));
    }
    return (
        <div id="quote-box">
            <Container>
                <Row>
                    <Col>
                        <QuoteCard quote={quote} handleClick={getNewQuote} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RandomQuote
