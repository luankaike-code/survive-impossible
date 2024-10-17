const btn_reset = [
  {
    label: 'resetar',
    forKey: 'init'
  }
];

const adicionalTextQuestion = 'Você se esforçou para responder, mas errou. E agora, o preço será cobrado.';
const badEndingHideText = ' O coração bate tão forte que parece querer romper o peito, e cada respiração controlada é uma batalha contra o medo. O som dos passos do assassino se aproxima, lentos, mas certeiros. Você ouve o arranhar da faca nas paredes, como se ele estivesse caçando. De repente, os passos param. Tudo fica em silêncio, o tipo de silêncio que faz o ar ficar denso, quase sufocante. Por um breve momento, você se permite acreditar que ele foi embora, que você escapou. Então você sai do seu esconderijo. Até ouvir'

const blocks = {
	'init': {
		text: 'Você abre os olhos, ainda com a cabeça meio zonza. O último filme foi uma decepção total, nada de assustador. "Que desperdício de tempo", pensa enquanto se levanta do sofá. A sala está iluminada apenas pelo brilho suave da TV, que ainda exibe os créditos rolando. Você decide que a única coisa que pode salvar a noite é mais pipoca, então se arrasta até a cozinha. Mas antes que você possa chegar até lá, o silêncio da casa é interrompido. O telefone começa a tocar. O som ecoa pela sala, cortando a tranquilidade de forma inesperada. "Quem estaria me ligando a essa hora?", você se pergunta, enquanto avança com uma certa impaciência em direção ao telefone fixo e o...',
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
		text: 'Com um suspiro resignado, você pega o telefone, levando-o até o ouvido. “Alô?" sua voz ecoa na escuridão da casa. O silêncio é ensurdecedor por um instante, até que uma respiração pesada se faz ouvir do outro lado da linha. "Gosta de filmes?" a voz sussurra, carregada de um tom ameaçador que faz sua pele arrepiar. Você sente um frio na barriga, tentando identificar quem está falando, mas a voz é estranha e distorcida. Você vai responder ou desligar?',
		chooses: [
			{
				label: 'sim',
				forKey: 'question_2'
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
				forKey: 'house_invaded',
        adicionalText: adicionalTextQuestion
			},
			{
				label: 'Tempo Esgotado',
				forKey: 'house_invaded',
        adicionalText: adicionalTextQuestion
			},
			{
				label: 'Machete Mata',
				forKey: 'house_invaded',
        adicionalText: adicionalTextQuestion
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
				forKey: 'house_invaded',
        adicionalText: adicionalTextQuestion
			},
			{
				label: 'Obi-Wan Kenobi',
				forKey: 'house_invaded',
        adicionalText: adicionalTextQuestion
			},
			{
				label: 'The Bad Batch',
				forKey: 'house_invaded',
        adicionalText: adicionalTextQuestion
			},
			{
				label: 'Episódio IV',
				forKey: 'before_all_questions'
			},
      {
				label: 'Episódio I',
				forKey: 'house_invaded',
        adicionalText: adicionalTextQuestion
			},
		]
	},
  'before_all_questions': {
		text: 'Sua mente correu contra o tempo, mas, contra todas as probabilidades, você conseguiu acertar cada pergunta. Do outro lado da linha, o silêncio que se segue é quase mais aterrorizante do que as palavras da voz distorcida. Por um momento, você mal consegue respirar, esperando o próximo movimento do misterioso assassino. Mas ele não vem. Em vez disso, uma risada baixa e perturbadora ecoa pelo telefone. "Por pouco... Você quase não sobreviveu", diz a voz, carregada de uma estranha mistura de diversão e frustração. "Mas parece que você é mais esperto do que pensei. Vamos ver se terá a mesma sorte da próxima vez...”. O silêncio domina a ligação. "O que ele quer que eu faça?", você se pergunta, Seu coração ainda martela no peito. "Ele espera que eu fale algo?", o que você vai fazer fazer?',
		chooses: [
			{
				label: 'debochar',
				forKey: 'bad_ending',
        adicionalText: 'Você ri, um riso curto e nervoso, mas o suficiente para provocar. “Sabe, você devia se esforçar mais. Não foi tão difícil assim”, você debocha, sentindo a tensão escoar um pouco de seu corpo. “Se isso foi o melhor que você tem, acho que não vou precisar me preocupar tanto da próxima vez.”. Você volta a seu objetivo de fazer pipoca. "Isso foi mais assustador do que aquele film...", seu pensamento é interrompido por'
			},
			{
				label: 'agradecer',
				forKey: 'good_ending'
			},
		]
  },

  'house_invaded': {
		text: 'O silêncio pesado da casa é brutalmente interrompido por um som agudo e inconfundível — o estilhaçar de vidro. Seu corpo se enrijece instantaneamente, o coração acelerando no peito. Uma janela foi quebrada, e você não tem tempo para hesitar. Alguém está aqui. A adrenalina começa a tomar conta de você. Seus olhos correm pela sala em busca de algo para se proteger. O telefone está ao seu lado, mas será que ele pode te ajudar? Na cozinha, uma faca brilha sob a luz fraca. Você lembra também que há uma pistola no armário, mas, em meio ao caos, até uma banana na bancada parece uma boa opção',
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
				forKey: 'bad_ending',
        adicionalText: 'Você, tremendo de pavor, entra debaixo balção.'+badEndingHideText
			},
			{
				label: 'atrás da cortina',
				forKey: 'bad_ending',
        adicionalText: 'Você se esconde atrás da sua cortinha favorita. Mas logo percebe a má escolha de vez. Percebe que não terá como escolher outra.'+badEndingHideText
			},
			{
				label: 'atrás da porta',
				forKey: 'bad_ending',
        adicionalText: 'Você se esconde atrás da porta se lembrando do seu tempo de pique-esconde, "essa ideia é uma idiotice", pensa consigo mesma. "Ela parece muito frágil", você anseia.'+badEndingHideText
			},
			{
				label: 'no armario',
				forKey: 'neutral_ending',
        adicionalText: 'O som de passos se aproximando rapidamente pela casa faz seu corpo congelar. O pavor toma conta, e você sabe que não há tempo para pensar em um plano mirabolante. Sem alternativas, você corre para o armário mais próximo e se esconde dentro dele, segurando a respiração. O silêncio dentro do armário é opressor, quebrado apenas pelo som abafado de seus batimentos cardíacos. Você ouve o assassino entrar no cômodo, a faca arranhando as paredes, como se estivesse saboreando o momento. Ele se move devagar, cada passo ecoando como um martelo na sua mente. Por um instante, parece que ele vai encontrá-lo, como se pudesse sentir sua presença escondida. O tempo se arrasta, e você mal consegue segurar o medo. Mas, para sua surpresa, ele se afasta. O som dos passos se perde na distância, até que o silêncio retorna.'
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
		text: 'um barulho atrás de você. Antes que tenha tempo de reagir, ele já está lá. A figura mascarada aparece, a icônica máscara branca de Pânico está refletindo a luz fraca da sala. Seu coração dispara, mas seu corpo congela de puro terror. O assassino não hesita. A faca em sua mão brilha por um segundo antes de ser levantada e cravar em você com uma força brutal. A dor é intensa e imediata. Você tenta gritar, mas sua voz não sai. O mundo ao seu redor começa a ficar embaçado, o chão parece se afastar enquanto você sente suas forças se esvaindo. Cada movimento do assassino é meticuloso, cruel, e logo o sangue se espalha. Seu corpo desaba no chão. A última coisa que você vê é a máscara do assassino se inclinando sobre você, e a lâmina sendo erguida mais uma vez, enquanto sua visão se apaga. Tudo acaba ali.',
    chooses: btn_reset,
	},
  'neutral_ending': {
		text: 'O perigo imediato passou, mas a sensação de vazio persiste. Você sobreviveu, mas o terror da noite ainda paira no ar. As perguntas permanecem: quem era ele? Por que você? Você deu fim à ameaça, mas o gosto da vitória é amargo. Nada parece realmente resolvido. Com a arma ainda em mãos, você sente o peso do que acabou de fazer. Está tudo acabado, mas ao mesmo tempo, não. Não há glória, apenas um final incerto.',
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

function updateContent(key, adicionalText=''){
	const block = blocks[key];
  block.text = adicionalText+' '+block.text;

  if(block.img){
    getElem('article img').src = block.img.src;
    getElem('article p').textContent = '@'+block.img.copyright;
  }

  const p = getElem('aside p');
  const typing = getElem('.options input#typing');
  p.textContent = '';
  getElem('aside nav').innerHTML = '';

  function addChooses(){
    block.chooses?.forEach(({label, forKey, adicionalText}) => {
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.addEventListener('click', () => updateContent(forKey, adicionalText));
      getElem('aside nav').appendChild(btn);
    });
  }
  function writeText(){
    const i = p.textContent.length;
    if(i >= block.text.length || !typing.checked){
      p.textContent = block.text
      addChooses()
      return;
    }
    p.textContent += block.text[i];
    setTimeout(writeText, 1)
  }
  writeText();
}

updateContent('init')