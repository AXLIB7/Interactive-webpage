function scrollSection(sectionId, direction) {
	var section = document.getElementById(sectionId);
	var scrollLeft = section.scrollLeft;
	var pageWidth = window.innerWidth;
	var pages = section.querySelectorAll('.page');
	var numPages = pages.length;
	var currentPage = Math.round(scrollLeft / pageWidth);
	if (direction === 'prev' && currentPage > 0) {
		currentPage--;
	} else if (direction === 'next' && currentPage < numPages - 1) {
		currentPage++;
	}
	section.scroll({
		left: currentPage * pageWidth,
		behavior: 'smooth'
	});
};

//const openai = new OpenAI(api_key="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");
/*const headers = {
	'Content-Type': 'application/json',
	'Authorization': `Bearer ${api_key}`
};*/
	    
const form = document.querySelector('form');
const prompt = document.querySelector('#prompt');
const output = document.querySelector('#output');

form.addEventListener('submit', (event) => {
	/*event.preventDefault();
	const api_url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
	const data = {
		prompt: prompt.value,
		max_tokens: 50,
		n: 1,
		temperature: 0.7,
	};
	fetch(api_url, {
		method: 'POST',
		 headers: headers,
		 body: JSON.stringify(data),
		})
		.then(response => response.json())
		.then(responseData => {
			output.innerHTML = responseData.choices[0].text;
		})
		.catch(error => {console.error(error);}
	);*/
	window.alert(`Unable to get API key to work for OpenAI, so this is unforunatly still not working at the moment :(`);
});
	

let homebutton = document.getElementById("home");

window.onscroll = function() {scrollFunction()};

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};
