import React, { Component } from "react";
import Link from "gatsby-link";
import "./StaggeredRowsLayout.scss";

class StaggeredRowsLayout extends Component {
	render() {
		const layout = this.props.layout;
		return (
			<section className="staggered">
				{layout.rows.map((row, index) => (
					<div key={`row-${index}`} className="row">
						<div className="wrap">
							<div className="fivecol first">
								{row.add_button ? (
									<Link
										to={row.button_link.url}
										target={row.button_link.target}
									>
										<div
											className="circle scratch-bg"
											style={{
												backgroundImage: `url(${
													row.image.localFile.childImageSharp.resize.src
												})`
											}}
										/>
									</Link>
								) : (
									<div
										className="circle scratch-bg"
										style={{
											backgroundImage: `url(${
												row.image.localFile.childImageSharp.resize.src
											})`
										}}
									/>
								)}
							</div>
							<div className="sevencol last">
								<div className="content valign">
									{row.add_button ? (
										<Link
											to={row.button_link.url}
											target={row.button_link.target}
										>
											{row.header}
										</Link>
									) : (
										<h3>{row.header}</h3>
									)}
									<div
										className="blurb"
										dangerouslySetInnerHTML={{ __html: row.blurb }}
									/>
									{row.add_button ? (
										<Link
											to={row.button_link.url}
											target={row.button_link.target}
										>
											{row.button_link.title}
										</Link>
									) : null}
								</div>
							</div>
						</div>
					</div>
				))}
			</section>
		);
	}
}

export default StaggeredRowsLayout;
