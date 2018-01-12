import React from "react";
import { postClasses } from "../utilities/functions";
import CardsLayout from "../components/layouts/CardsLayout";
import ColumnsLayout from "../components/layouts/ColumnsLayout";
import HeroLayout from "../components/layouts/HeroLayout";
import ImageBlocksLayout from "../components/layouts/ImageBlocksLayout";
import ImagesWithTextLayout from "../components/layouts/ImagesWithTextLayout";
import LogosLayout from "../components/layouts/LogosLayout";
import SliderLayout from "../components/layouts/SliderLayout";
import StaggeredRowsLayout from "../components/layouts/StaggeredRowsLayout";
import TogglesLayout from "../components/layouts/TogglesLayout";
import VideoLayout from "../components/layouts/VideoLayout";
import WysiwygsLayout from "../components/layouts/WysiwygsLayout";

const PageLayoutsTemplate = props => (
	<article className={postClasses(props.data.wordpressPage)}>
		<h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.title }} />
		{props.data.wordpressPage.acf.layout_page.map((layout, index) => {
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
				case "WordPressAcf_multiple_images_with_text":
					return <ImagesWithTextLayout layout={layout} key={index} />;
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
				case "WordPressAcf_video":
					return <VideoLayout layout={layout} key={index} />;
					break;
				case "WordPressAcf_wysiwygs":
					return <WysiwygsLayout layout={layout} key={index} />;
					break;
				default:
					return;
					break;
			}
		})}
	</article>
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
				layout_page {
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
							button_text
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
									original {
										src
									}
								}
							}
						}
						bg_image_pos_x
						bg_image_pos_y
						text_align
						text_margin
						header
						blurb
						add_button
						button_text
					}
					... on WordPressAcf_flexible_columns {
						number_of_columns
						wordpress_2_col_offset
						wordpress_3_col_offset
						flexible_columns
						header
						blurb
						columns {
							image {
								localFile {
									childImageSharp {
										resize(width: 350) {
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
							button_text
						}
					}
					... on WordPressAcf_image_blocks {
						offset
						post_animate
						post_animation
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
							header
							blurb
							animate
							animation
							add_button
							button_text
						}
					}
					... on WordPressAcf_logos_section {
						header
						logo_display
						logos {
							logo {
								localFile {
									childImageSharp {
										resolutions(width: 400) {
											aspectRatio
											width
											height
											src
											srcSet
											srcWebp
											srcSetWebp
											originalName
										}
									}
								}
							}
							link
						}
					}
					... on WordPressAcf_multiple_images_with_text {
						image_side
						images {
							localFile {
								childImageSharp {
									resolutions(width: 400) {
										aspectRatio
										width
										height
										src
										srcSet
										srcWebp
										srcSetWebp
										originalName
									}
								}
							}
						}
						header
						content
						add_button
						button_text
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
							header
							blurb
							add_button
							button_text
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
							header
							blurb
							add_button
							button_link {
								title
								target
								url
							}
							button_text
						}
					}
					... on WordPressAcf_toggles {
						header
						blurb
						toggles {
							toggle_header
							toggle_content
						}
					}
					... on WordPressAcf_video {
						video_fallback_image {
							localFile {
								childImageSharp {
									resolutions(width: 400) {
										aspectRatio
										width
										height
										src
										srcSet
										srcWebp
										srcSetWebp
										originalName
									}
								}
							}
						}
						video_attributes
						video_mp4_file
						video_webm_file
						video_ogv_file
						header
						blurb
						add_button
						button_text
					}
					... on WordPressAcf_wysiwygs {
						header
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
