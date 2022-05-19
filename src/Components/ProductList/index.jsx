import './style.scss';
import React from 'react';
import ProductCard from './ProductCard';
import products from './ProductData';

export default function ProductList() {
    return (
        <div className="product-list">
            {
                products.length?
                    products.map(product => {
                        return (
                            <ProductCard
                                key={product.id}
                                image={product.image}
                                title={product.title}
                                content={product.content}
                            />
                        )
                    })
                    :
                    <span>Ürün yok</span> 
            }
        </div>
    )
}
