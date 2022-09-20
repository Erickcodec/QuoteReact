import React from 'react'
import { ChevronRightIcon as Chevron, ChatBubbleOvalLeftEllipsisIcon as ChatBubble } from "@heroicons/react/20/solid"
import './index.css'

export default function QuoteBox({ quote, author, color, onClick}) {
  return <div className='card' style={{ color }}>
    <div className="card__content">
      <div>
        <ChatBubble className='card__img' />
      </div>
      <div>
        <div className="card__text">{quote}</div>
        <div className="card__author">{author}</div>
      </div>
    </div>
    <div className="card__actions">
      <Chevron className="card__btn" onClick={onClick}/>
    </div>
  </div>
}
