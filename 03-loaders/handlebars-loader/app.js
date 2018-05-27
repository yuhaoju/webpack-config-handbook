import contentTemplate from './content.handlebars';

const div = document.createElement('div');
div.innerHTML = contentTemplate({
	title: 'Title',
	body: 'Your books are due next Tuesday',
});
document.body.appendChild(div);
