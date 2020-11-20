import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default ({ clsname }) => {

    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    author,
                    social_links{
                        name,
                        url
                    }  
                }
            }

            SocialIcons: allFile(filter: {relativeDirectory: {eq: "social_icon"}}) {
                nodes {
                    icon:publicURL
                    name
                }
            }
        }
    `);

    const social_links = data.site.siteMetadata.social_links.map(link => {
        let temp = data.SocialIcons.nodes.filter(icon => icon.name === link.name);
        if (temp !== undefined) {
            link.icon = temp[0].icon;
        }
        return link;
    });

    return (
        <ul className="m-social-nav">
            {social_links.map(link =>
                <li key={link.name}>
                    <a href={link.url} target="_blank">
                        <img src={link.icon} alt={link.name} />
                    </a>
                </li>
            )}
        </ul>
    );
}