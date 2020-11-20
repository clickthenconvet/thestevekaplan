import React, { useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import SocialNav from '../SocialNav';
import FeatureBullets from '../FeatureBullets';
import logo from '../../images/logo.svg';


export default () => {

  const data = useStaticQuery(graphql`{
    site {
      siteMetadata {
        author,
        description
      }
    }

    content:contentYaml{
      name,
      title,
      calltoaction_title,
      calltoaction_btn
    }

    steveImage:file(relativePath: { eq: "steve.png" }) {
      childImageSharp {
        id,
          fluid{
            ...GatsbyImageSharpFluid
        }
      }
    }

  }`);


  useEffect(() => {
    const navbar = document.querySelector(".l-header_top");

    window.onscroll = () => {
      if (window.pageYOffset >= 69) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

  }, []);



  return (
    <header className="l-header">
      <div className="l-header_top">
        <div className="g-container">
          <div className="l-header_top_left">
            <img className="m-logo" src={logo} alt={data.site.siteMetadata.author} />
          </div>

          <div className="l-header_top_right">
            <ul className="m-navigation">
              <li><a href="">Services</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>

            <a href="" className="btn btn-warning"><span className="g-desktopOnly">Get a </span>free audit</a>
          </div>
        </div>
      </div> {/* End of  l-header_top*/}

      <div className="l-header_body">

        <div className="l-header_body_first">

          <div className="l-header_body_first_line"></div>
          <SocialNav />
        </div>  {/* End of l-header_body_first */}

        <div className="l-header_body_second">
          <div className="left">
            <Img
              fluid={data.steveImage.childImageSharp.fluid}
              className="l-header_body_second_img"
              alt="Steve Kaplan"
            />
          </div>
          <div className="right">
            <p className="l-header_body_second_name">{data.content.name}</p>
            <p className="l-header_body_second_title">{data.content.title}</p>
            <div className="l-header_body_second_features">
              <FeatureBullets />
            </div>
          </div>

        </div> {/* End of l-header_body_second */}

        <div className="l-header_body_third">
          <div>
            <p className="l-header_body_third_title" dangerouslySetInnerHTML={{ __html: data.content.calltoaction_title }}></p>
            <a href="" className="btn btn-warning">{data.content.calltoaction_btn}</a>

          </div>
        </div>{/* End of l-header_body_third */}


        <div className="l-header_body_fourth">
          <FeatureBullets />
        </div>

      </div> {/* End of l-header_body */}

    </header>  /* End of l-header */
  );
}