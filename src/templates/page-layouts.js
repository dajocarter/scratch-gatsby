import React from "react";
import styled from "styled-components";
import { postClasses } from "../utilities/functions";
import CardsLayout from "../components/layouts/CardsLayout";
import ColumnsLayout from "../components/layouts/ColumnsLayout";
import HeroLayout from "../components/layouts/HeroLayout";
import ImageBlocksLayout from "../components/layouts/ImageBlocksLayout";
import LogosLayout from "../components/layouts/LogosLayout";
import SliderLayout from "../components/layouts/SliderLayout";
import StaggeredRowsLayout from "../components/layouts/StaggeredRowsLayout";
import TogglesLayout from "../components/layouts/TogglesLayout";
import WysiwygsLayout from "../components/layouts/WysiwygsLayout";

const Article = styled.article``;

const PageLayoutsTemplate = ({ data }) => (
  <Article className={postClasses(data.wordpressPage)}>
    {data.wordpressPage.acf.layouts_page.map((layout, index) => {
      switch (layout.__typename) {
        case "WordPressAcf_cards":
          return <CardsLayout layout={layout} key={index} />;
          break;
        case "WordPressAcf_hero_unit":
          return <HeroLayout layout={layout} key={index} />;
          break;
        case "WordPressAcf_flexible_columns":
          return <ColumnsLayout layout={layout} key={index} />;
          break;
        case "WordPressAcf_image_blocks":
          return <ImageBlocksLayout layout={layout} key={index} />;
          break;
        case "WordPressAcf_logos_section":
          return <LogosLayout layout={layout} key={index} />;
          break;
        case "WordPressAcf_slider":
          return <SliderLayout layout={layout} key={index} />;
          break;
        case "WordPressAcf_staggered_images_with_text":
          return <StaggeredRowsLayout layout={layout} key={index} />;
          break;
        case "WordPressAcf_toggles":
          return <TogglesLayout layout={layout} key={index} />;
          break;
        case "WordPressAcf_wysiwygs":
          return <WysiwygsLayout layout={layout} key={index} />;
          break;
        default:
          return;
          break;
      }
    })}
  </Article>
);

export default PageLayoutsTemplate;

export const pageQuery = graphql`
  query currentLayoutQuery($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      wordpress_id
      title
      content
      slug
      type
      status
      acf {
        layouts_page {
          __typename
          ... on WordPressAcf_cards {
            number_of_columns
            wordpress_2_col_offset
            wordpress_3_col_offset
            flexible_columns
            cards {
              header
              blurb
              add_button
              button_link {
                title
                target
                url
              }
              image {
                localFile {
                  childImageSharp {
                    sizes(maxWidth: 960) {
                      ...GatsbyImageSharpSizes_withWebp
                    }
                  }
                }
              }
            }
          }
          ... on WordPressAcf_hero_unit {
            background_image {
              localFile {
                childImageSharp {
                  sizes(maxWidth: 6000) {
                    ...GatsbyImageSharpSizes_tracedSVG
                  }
                }
              }
            }
            blurb
            add_button
            button_link {
              title
              target
              url
            }
          }
          ... on WordPressAcf_columns {
            number_of_columns
            wordpress_2_col_offset
            wordpress_3_col_offset
            flexible_columns
            columns {
              image {
                localFile {
                  childImageSharp {
                    resize(width: 450) {
                      src
                    }
                  }
                }
              }
              header
              blurb
              add_button
              button_link {
                title
                url
                target
              }
            }
          }
          ... on WordPressAcf_image_blocks {
            offset
            image_blocks {
              background_image {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
              blurb
              add_button
              button_link {
                title
                url
                target
              }
            }
          }
          ... on WordPressAcf_logos_section {
            logo_display
            logos {
              logo {
                localFile {
                  childImageSharp {
                    resolutions(width: 150) {
                      ...GatsbyImageSharpResolutions_withWebp
                    }
                  }
                }
              }
              link
            }
          }
          ... on WordPressAcf_slider {
            slides {
              background {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
              blurb
              add_button
              button_link {
                title
                url
                target
              }
            }
          }
          ... on WordPressAcf_staggered_images_with_text {
            rows {
              image {
                localFile {
                  childImageSharp {
                    resize(width: 550) {
                      src
                    }
                  }
                }
              }
              blurb
              add_button
              button_link {
                title
                target
                url
              }
            }
          }
          ... on WordPressAcf_toggles {
            toggles {
              toggle_header
              toggle_content
            }
          }

          ... on WordPressAcf_wysiwygs {
            offset
            wysiwygs {
              wysiwyg
            }
          }
        }
      }
    }
  }
`;
