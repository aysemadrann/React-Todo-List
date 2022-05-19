import React from 'react'

// Props: Image, Title, Content
export default function ProductCard({ image, title, content}) {
    return (
        <div className="product">
            <img src={ image } alt="" />
            <h4>{ title }</h4>
            <p>{ content }</p>
        </div>
    )
}