import React from 'react';

export default function FeatureItem({ title, description, image }) {
    return (
        <div className="feature__item">
            <img
                src={`/assets/${image}`}
                alt={title}
                className="feature__icon"
            />
            <h3 className="feature__item-title">{title}</h3>
            <p>{description}</p>
        </div>
    )
}