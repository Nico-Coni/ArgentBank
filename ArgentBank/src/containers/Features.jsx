import featuresData from '../data/data.json';
import FeatureItem from '../components/FeatureItem';

import React from 'react';

export function Features() {
    return (
        <section className="features">
            <h2 className="sr__only">Features</h2>
            {featuresData.features.map((feature) => (
                <FeatureItem
                    key={feature.id}
                    title={feature.title}
                    description={feature.description}
                    image={feature.image}
                />
            ))}
        </section>
    )
}