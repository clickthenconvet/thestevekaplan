import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';



export default () => {

    const bullets = useStaticQuery(graphql`{
        bullets:contentYaml {
            feature_bullets {
                name,
                value
            }
        }
            
    }`).bullets.feature_bullets;

    return (
        <ul className="m-feature_bullet">
            {bullets.map((bullet, i) =>
                <li key={i}>
                    <div className="value"> {bullet.value}</div>
                    <div className="name" dangerouslySetInnerHTML={{ __html: bullet.name }}></div>

                </li>
            )}
        </ul>
    );
}