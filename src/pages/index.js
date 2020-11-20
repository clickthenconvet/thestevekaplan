import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {

  const data = useStaticQuery(graphql`{

    content:contentYaml{
      testimonial_title
    }

    clientImage:file(relativePath: { eq: "client.jpg" }) {
      childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
        }
      }
    }

  }`);


  return (
    <Layout>
      <SEO title="Steve Kaplan" />


      <div className="l-testimonial">
        <div className="g-container">

          <div className="l-testimonial_first">
            <Img
              fluid={data.clientImage.childImageSharp.fluid}
              className="l-testimonial_img"
            />
          </div>

          <div className="l-testimonial_second">
           {/* <p className="l-testimonial_title">{data.content.testimonial_title}</p>*/}
          </div>

        </div>
      </div>{/* end of l-testimonial */}
      <div className="l-temp"></div>
    </Layout>
  );

};
