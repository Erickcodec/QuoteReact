import React from "react"
import QuoteBox from "../QuoteBox"
import { useState, useEffect } from 'react';
import { useQuotes } from '../../hooks/useQuotes'
import './index.css'

const initialQuote = { quote: '', author: ''};

const colors = [
    'dodgerblue',
    'darkviolet',
    'firebrick',
    'forestgreen',
    'gold',
    'navy',
    'orangered',
    'teal',
    'tomato'
]

export default function Container() {
    const { quotes } = useQuotes(); // custom hooks
    const [quote, setQuote] = useState(initialQuote)
    const [color, setColor] = useState('')

    const randQuote = () => {
        const index = Math.floor(Math.random() * (quotes.length));
        setQuote(quotes[index]);
    }

    const randColor = () => {
        const index = Math.floor(Math.random() * (colors.length));
        setColor(colors[index]);
    }
    
    useEffect(() => {
        if(quotes) {
            randQuote()
            randColor()
        }
    }, [quotes])

    const handleRandQuote = () => {
        randQuote();
        randColor()
    }

    return (
        <div className="container" style={{ backgroundColor: color }}>
            <QuoteBox author={quote?.author} quote={quote?.quote} onClick={handleRandQuote} color={color} />
        </div>
    )
}
