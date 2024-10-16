const blocks = [
	{
		text: "alguem liga",
		img: {
			src: "https://cinepop.com.br/wp-content/uploads/2020/07/scary-movie.jpg",
			copyright: {
				text: "cinepop",
				link: "https://cinepop.com.br"
			}
		},
		chooses: [
			{
				label: "desligar",
				forIndex: 0
			},
			{
				label: "ligar",
				forIndex: 1
			}
		]
	},
	{
		text: "quem interpetou rose no filme titanic",
		img: {
			src: "https://cinepop.com.br/wp-content/uploads/2020/07/scary-movie.jpg",
			copyright: {
				text: "cinepop",
				link: "https://cinepop.com.br"
			}
		},
		chooses: [
			{
				label: "Vivien Leigh",
				forIndex: 0
			},
			{
				label: "Kate Winslet",
				forIndex: 1
			},
			{
				label: "Elizabeth Taylor",
				forIndex: 0
			},
			{
				label: "Marlene Dietrich",
				forIndex: 0
			}
		]
	}
]

function getElem(query){
	return document.querySelector(query)
}

function updateContent(idx){
	const block = blocks[idx];

	getElem('article img').src = block.img.src;
	getElem('article a').textContent = '@'+block.img.copyright.text;
	getElem('article a').href = block.img.copyright.link;

	getElem('aside p').textContent = block.text;

	getElem('aside div').innerHTML = '';
	block.chooses.forEach(({label, forIndex}) => {
		const btn = document.createElement('button');
		btn.textContent = label;
		btn.addEventListener('click', () => updateContent(forIndex));
		getElem('aside div').appendChild(btn);
	});
}

updateContent(0)