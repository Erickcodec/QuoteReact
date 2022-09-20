import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export function useQuotes() {
 const [quotes, setQuotes] = useState([]);

 useEffect(() => {
    (async function(){
      const res = await fetch('./quotes.json');
      const data = await res.json();

      setQuotes(data)
    })()
 }, [])
  
  return {
    quotes
  }
}
