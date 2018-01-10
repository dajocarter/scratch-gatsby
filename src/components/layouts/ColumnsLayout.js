import React, { Component } from "react";
import Link from "gatsby-link";
import "./ColumnsLayout.scss";
import "./WysiwygsLayout.scss";

class ColumnsLayout extends Component {
	render() {
		const layout = this.props.layout;
		return (
			<sectional className="flexible-columns">
				<div style={{ maxWidth: 960, marginLeft: "auto", marginRight: "auto" }}>
					<h2 className="layout-header">{layout.header}</h2>
					<div dangerouslySetInnerHTML={{ __html: layout.blurb }} />
					<div className="flex-container">
						{layout.columns.map((column, index) => (
							<div key={`column-${index}`} className="flex-column">
								{column.add_button ? (
									<Link
										to={column.button_link.url}
										target={column.button_link.target}
									>
										<div
											className="circle scratch-bg"
											style={{
												backgroundImage: `url(${
													column.image.localFile.childImageSharp.resize.src
												})`
											}}
										/>
										<h3>{column.header}</h3>
									</Link>
								) : (
									<div>
										<div
											className="circle scratch-bg"
											style={{
												backgroundImage: `url(${
													column.image.localFile.childImageSharp.resize.src
												})`
											}}
										/>
										<h3>{column.header}</h3>
									</div>
								)}
								<div
									className="blurb"
									dangerouslySetInnerHTML={{ __html: column.blurb }}
								/>
								{column.add_button ? (
									<Link
										to={column.button_link.url}
										target={column.button_link.target}
									>
										{column.button_link.title}
									</Link>
								) : null}
							</div>
						))}
					</div>
				</div>
			</sectional>
		);
	}
}

export default ColumnsLayout;
