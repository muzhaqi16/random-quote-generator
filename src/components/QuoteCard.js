import React from 'react'
import { Card, Button } from 'react-bootstrap';
function QuoteCard(props) {
    const { author, en } = props.quote;
    return (
        <>
            <Card className="text-center">
                <Card.Header>Random Programming Quote Generator</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p id="text">
                            {en}
                        </p>
                        <footer className="blockquote-footer" id="author">
                            <cite title="Author"> {author}</cite>
                        </footer>
                    </blockquote>
                    <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(en + " ~ " + author)}`} id="tweet-quote">Tweet</a>
                </Card.Body>
                <Card.Footer className="text-muted"><Button id="new-quote" variant="primary" onClick={props.handleClick}>Get a new quote</Button></Card.Footer>
            </Card>
        </>
    )
}

export default QuoteCard
