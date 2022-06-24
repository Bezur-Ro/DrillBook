import React, { Component } from 'react';


class Image extends Component {


	render() {
		return (
			<div className="image-wrapper">
				<div className="image">
					<img src={this.props.image.Image} alt={this.props.alt || 'load failed'} onClick={(event) => {
						this.props.onImageClick && this.props.onImageClick(event.target.src)
					}} />
					
					
				</div>
			</div>
		);
	}
}

export default Image;
