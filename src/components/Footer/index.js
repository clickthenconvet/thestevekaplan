import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SocialNav from '../SocialNav';

export default () => {

    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `).site.siteMetadata;



    return (
        <div className="l-footer">

            <div className="g-container">
                <div className="l-footer_copyright">
                    All rights reserved - Copyright © {(new Date()).getFullYear()} {data.author}
                </div>

                <div className="l-footer_socialnav">
                    <SocialNav />
                </div>
            </div>

        </div>
    );
}


