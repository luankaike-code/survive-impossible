const btn_reset = [
  {
    label: 'resetar',
    forKey: 'init'
  }
]

const blocks = {
	'init': {
		text: 'Você abre os olhos, ainda com a cabeça meio zonza. O último filme foi uma decepção total, nada de assustador. "Que desperdício de tempo", pensa enquanto se levanta do sofá. A sala está iluminada apenas pelo brilho suave da TV, que ainda exibe os créditos rolando. Você decide que a única coisa que pode salvar a noite é mais pipoca, então se arrasta até a cozinha. Mas antes que você possa chegar até lá, o silêncio da casa é interrompido. O telefone começa a tocar. O som ecoa pela sala, cortando a tranquilidade de forma inesperada. "Quem estaria me ligando a essa hora?", você se pergunta, enquanto avança com uma certa impaciência em direção ao telefone fixo e o....',
		img: {
			src: 'https://darkside.blog.br/wp-content/uploads/2022/02/panico-telefone-1024x614.png',
			copyright: 'pânico (1996)',
		},
		chooses: [
      {
        label: 'desligar',
        forKey: 'call_off_1'
      },
      {
        label: 'atende',
        forKey: 'question_1'
      }
    ]
	},
  'call_off_1': {
		text: 'Você decide ignorar o telefone, desligando-o com um gesto impaciente. “Deve ser só algum telemarketing", pensa enquanto retoma seu caminho para a cozinha. O objetivo de fazer pipoca retorna a ser a sua única preocupação agora. Mas, antes mesmo de conseguir pegar o saco de milho, o telefone toca novamente, cortando a paz da casa. Você solta um suspiro frustrado e vai até lá. Ao se aproximar do aparelho, o som insistente continua, e a curiosidade se mistura com a irritação. Você hesita por um momento, mas acaba pegando o telefone e o...',
		chooses: [
      {
        label: 'desligar',
        forKey: 'call_off_2'
      },
      {
        label: 'ligar',
        forKey: 'question_1'
      }
    ]
	},
  'call_off_2': {
		text: 'Você desliga o telefone com um movimento rápido, sentindo-se aliviado por não precisar lidar com a interrupção. "Agora, finalmente, posso me concentrar na minha pipoca". Mas, um instantes depois desse pensamento, o telefone toca novamente, cortando a tranquilidade de maneira frustrante. O som parece ecoar pela casa, como se estivesse zombando de sua decisão. Você respira fundo, tentando ignorar a irritação crescente, mas a curiosidade começa a se infiltrar na sua mente. O que será dessa vez? Com um misto de relutância e determinação, você decide...',
		chooses: [
      {
        label: 'desligar',
        forKey: 'house_invaded'
      },
      {
        label: 'ligar',
        forKey: 'question_1'
      }
    ]
	},

	'question_1': {
		text: 'Com um suspiro resignado, você pega o telefone, levando-o até o ouvido. “Alô?" sua voz ecoa na escuridão da casa. O silêncio é ensurdecedor por um instante, até que uma respiração pesada se faz ouvir do outro lado da linha. "Gosta de filmes?" a voz sussurra, carregada de um tom ameaçador que faz sua pele arrepiar. Você sente um frio na barriga, tentando identificar quem está falando, mas a voz é estranha e distorcida.',
		chooses: [
			{
				label: 'sim',
				forKey: 'question_2'
			},
			{
				label: 'não',
				forKey: 'house_invaded'
			},      
      {
				label: 'desligar o telefone',
				forKey: 'house_invaded'
			},
		]
	},
  'question_2': {
		text: '"Ótimo. Então me diga, qual desses filmes Keanu Reeves participou? Espero que você não erre, Fernanda" A voz se torna mais intensa, como se estivesse se divertindo. "Mas como ele sabe meu nome? não tenho nenhum conhecido nos Estados Unidos. Ninguem gas...", seu pensamento é interrompido pela a continuação da pergunta: "Sete Vidas, Tempo Esgotado, Machete Mata ou Toy Story 4?", a voz diz. O coração acelera enquanto você processa a pergunta. A tensão na linha é palpável, "Será que alguem gastaria dinheiro em uma chamada só para fazer um troque?", você se pergunta.',
		chooses: [
			{
				label: 'Sete Vidas',
				forKey: 'house_invaded'
			},
			{
				label: 'Tempo Esgotado',
				forKey: 'house_invaded'
			},
			{
				label: 'Machete Mata',
				forKey: 'house_invaded'
			},
			{
				label: 'Toy Story 4',
				forKey: 'question_3'
			},
		]
	},
  'question_3': {
		text: 'Com um impulso de alívio, você responde corretamente, sabendo que, por enquanto, isso pode ter lhe garantido um tempo extra. Mas a voz misteriosa não para. “Bom trabalho", diz a voz, agora com um tom levemente sarcástico. “Vamos ver se você consegue acertar mais uma. Qual foi o primeiro filme lançado da saga Star Wars?". A pergunta ressoa na sua mente. A adrenalina pulsa nas suas veias enquanto você se lembra do icônico universo que muitos amam. Mas será que deve responder? O que acontece se você errar? Com a respiração pesada e a mente acelerada, você precisa decidir rapidamente. O que você dirá?',
		chooses: [
			{
				label: 'Star Wars Rebels',
				forKey: 'house_invaded'
			},
			{
				label: 'Obi-Wan Kenobi',
				forKey: 1
			},
			{
				label: 'The Bad Batch',
				forKey: 'house_invaded'
			},
			{
				label: 'Episódio IV',
				forKey: 'before_all_questions'
			},
      {
				label: 'Episódio I',
				forKey: 'house_invaded'
			},
		]
	},
  'before_all_questions': {
		text: 'por pouco você não morreu.',
		chooses: [
			{
				label: 'desligar telefone',
				forKey: 'house_invaded'
			},
			{
				label: 'debochar',
				forKey: 'house_invaded'
			},
			{
				label: 'agradecer',
				forKey: 'good_ending'
			},
		]
  },

  'house_invaded': {
		text: 'o que você pega para se defender',
		chooses: [
			{
				label: 'telefone',
				forKey: 'will_to_hide'
			},
			{
				label: 'faca',
				forKey: 'to_hide'
			},
			{
				label: 'pistola',
				forKey: 'neutral_ending'
			},
			{
				label: 'banana',
				forKey: 'will_to_hide'
			},
		]
	},
  'will_to_hide': {
		text: 'você vai te esconder?',
		chooses: [
			{
				label: 'sim',
				forKey: 'to_hide'
			},
			{
				label: 'não',
				forKey: 'to_run'
			},
		]
	},

  'to_hide': {
		text: 'você está na cozinha, aonde você vai de esconder?',
		chooses: [
			{
				label: 'no balção',
				forKey: 'bad_ending'
			},
			{
				label: 'atrás da cortina',
				forKey: 'bad_ending'
			},
			{
				label: 'atrás da porta',
				forKey: 'bad_ending'
			},
			{
				label: 'no armario',
				forKey: 'neutral_ending'
			},
		]
	},
  'to_run': {
		text: 'você está na cozinha, para onde você vai correr?',
		chooses: [
			{
				label: 'para os fundos',
				forKey: 'bad_ending'
			},
			{
				label: 'para a rua',
				forKey: 'bad_ending'
			},
			{
				label: 'para o vizinho',
				forKey: 'neutral_ending'
			},
		]
	},
  
  'bad_ending': {
		text: 'parabens!!! voce conseguiu o final ruim',
    chooses: btn_reset,
	},
  'neutral_ending': {
		text: 'parabens!!! voce conseguiu o final mediocre',
    chooses: btn_reset,
	},
  'good_ending': {
		text: 'parabens!!! você ganhou o final bom',
    chooses: btn_reset,
  },
}

function typeWrite(){

}

function getElem(query){
	return document.querySelector(query);
}

function updateContent(key){
	const block = blocks[key];

  if(block.img){
    getElem('article img').src = block.img.src;
    getElem('article p').textContent = '@'+block.img.copyright;
  }

  const p = getElem('aside p');
  p.textContent = '';
  getElem('aside nav').innerHTML = '';

  function addChooses(){
    block.chooses?.forEach(({label, forKey}) => {
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.addEventListener('click', () => updateContent(forKey));
      getElem('aside nav').appendChild(btn);
    });
  }
  function writeText(){
    const i = p.textContent.length;
    if(i >= block.text.length){
      addChooses()
      return;
    }
    console.log(i, block.text.length)
    p.textContent += block.text[i];
    setTimeout(writeText, 1)
  }
  writeText();
}

updateContent('init')