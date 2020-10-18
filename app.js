let images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'images/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'images/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'images/beast.jpg'
	}
};

let arr = [images.man, images.wizard, images.beast];

window.onload = () => {

	arr.forEach(function (image) {

		let imageContent = document.querySelector('#image-content');

		imageContent.innerHTML += '<div class="col-sm-12 col-md-12 col-lg-4">' +
			'<div class="wrapper">' +
			'<img src =' + '"' + image.path + '"' + 'class="image">' +
			'<div class="image-text"' +
			'<h3>' + image.heading + '</h3>' +
			'<h4>' + image.description + '</h4>' +
			'</div>' + '</div>';

	});

}







