async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Hotel Transilvânia
•	(O filme começa no ano de 1895 e com Drácula prestes a acordar sua filha, Mavis, ainda bebê.)
•	Drácula : Esconde-esconde!
•	Mavis (Acorda e começa a chorar)
•	Drácula: Não, não, não, não, não. Eu não queria te assustar, meu bebezinho. Shh, shh, shh. (Cantando) ♪ Silêncio, pequeno vampiro, não diga uma palavra, Papai vai morder a cabeça de um pássaro. ♪ (Mavis começa a rir) (Sem cantar) Um pouco de goo-bah! Eu quero beijar sua bunda. Eu quero beijar sua bunda! (Drácula troca a fralda de Mavis)
•	(Alguns anos depois)
•	Drac: [Verificando o projeto] Legal, mas talvez um pouco mais de metragem quadrada. Quero muitos monstros aqui.
•	[Mavis rasteja na parede.]
•	[40 anos depois, Drácula estava brincando com Mavis.]
•	Drac: Eu vou te pegar, pequena Mavis. Eu vou te pegar! Oy.
•	Mavis: O que há lá fora?
•	Drac: [Agarra Mavis] Ah, nós nunca saímos lá, nunca. [fecha a porta]
•	[Em 1982, Drácula estava lendo uma história de ninar para Mavis]
•	Drac: "E então os monstros fugiram e foram forçados a se esconder. Mas Harry, o Humano, os encontrou e pulou de debaixo da cama deles."
•	Mavis: Estou com medo!
•	Drac: "E queimaram suas roupas, e morderam seus dedos dos pés! E pegaram seus doces!"
•	Mavis: Não pegue meus doces.
•	Drac: Babyclaws, você não precisa ter medo. Eu prometi à sua mamãe que te protegeria para sempre. (Tocando ukulele) ♪ Minha linda May-vay ♪ Deixe-me limpar todo o seu cocô ♪ Esses humanos são desagradáveis ♪ Então com o papai você ficará ♪ E se um humano tentar te machucar ♪ Eu simplesmente direi... (ROSNANDO.) ♪ Porque você é a menina do papai ♪ Menina do papai ♪ Eu sou seu Vlad-y papai... ♪ Apenas dobre as pernas e empurre. Confie em mim, rato. Ha-ha!
•	Mavis: (vira morcego.) Eu posso voar! Eu posso voar!
•	Drac: Olha só você! Mais rápido, baby! Mais rápido! Uhuu! Você conseguiu, minha bonequinha de vodu! (Risos.)
•	Construtor: Com licença, senhor.
•	Drac: O quê? O quê?
•	Mavis: Ai. Estou bem.
•	Construtor: Está pronto.
•	Drac: Parece bom. Só monstros podem entrar?
•	Construtor: Ah, com certeza. Está bem escondido. Você tem 400 acres de floresta assombrada na sua frente. Você tem a Terra dos Mortos-Vivos nos perímetros. Qualquer humano que ousar olhar para lá vai fugir bem rápido. (Gemendo.) Mas, claro, seja esperto. Nada de fogueiras, nada de shows de fogos de artifício.
•	Drac: Sim, sim, não, não. Não, fogo, eu entendi, eu entendi.
•	Drac: Está na hora, minha querida Martha. O lugar que sempre falamos para Mavis. Ninguém nunca vai machucá-la aqui.
•	Wayne: (Crianças gritando.) É, está uma bagunça lá atrás.
•	Drac: (Encara a gente.) Bem-vindos ao Hotel Transilvânia! Livre de humanos desde 1898. Seu destino mais seguro. Faça um itinerário. Eu pessoalmente criei uma programação espetacular de eventos, todos levando à extravagância do aniversário da minha filha amanhã.
•	Estamos sempre ansiosos para vir todos os anos, Conde.
•	Nós gostamos muito da segurança.
•	Drac: Claro. É por isso que o construímos. Sim, boa noite.
•	Marty: (Babalbuciando.)
•	Drac: Obrigado, Marty. Você também parece pálido.
•	Suit of Armor: Senhor, senhor, senhor! Temos um problema urgente de encanamento.
•	Drac: Encanamento? Pronto. Sr. Ghouligan!
•	(Gemendo.)
•	Armadura: Há um banheiro entupido no quarto 348.
•	Pé Grande: (Rugindo.)
•	Drac: Tudo bem. Todos nós temos dores de estômago, Sr. Pé Grande.
•	(Gemidos.) (Crianças aplaudindo.)
•	Wayne: Ei, crianças, controlem-se. Vocês só deveriam deixar a mamãe e o papai infelizes.
•	Drac: Ora, ora, isso é jeito de se comportar? Isto é um hotel, não um cemitério.
•	Filho de Wayne: Desculpe, tio Drac.
•	Wayne: Drac! Como vai?
•	Drac: Wayne, meu velho amigo!
•	Wayne: Mal podia esperar por esse fim de semana. É sempre ótimo ficar fora das sombras por alguns dias.
•	Drac: A família está linda. Deixe-me só limpar a sujeira deles. Limpeza!
•	Esponja senciente: (rindo.)
•	Drac: Frankie, meu garoto! Olha só você! Ainda viajando pelo correio, Sr. Cheapo, hein? Não é uma questão de dinheiro.
•	Frank: Eu tenho fobia de avião, ok? Quer dizer, a qualquer momento, esses motores podem pegar...
•	Wayne: Fogo! Sim, sim. "Fogo ruim." Nós sabemos.
•	Drac: Augustus, Porridge Head, vamos lá! Isso parece a cabeça do Frankenstein?
•	Wayne: Ei, Drac, amigo, o que está acontecendo com sua capa aí?
•	Drac: O que você quer dizer? Oh! Quem me beliscou?
•	Griffin: Culpado. Você é irresistível.
•	Drac: Sim, muito divertido, Homem Invisível. Olá. Ótimo "ver" você. (Risos)
•	Griffin: Ahh, nunca envelhece. (Tapa!) Ho-ho-ho. Sentiu minha falta. Sentiu minha falta, sentiu minha falta, sentiu minha falta.
•	Drac: Ok, você venceu. Segure esse bacon.
•	Griffin: Por que estou segurando isso de t... Ahh! Não! Tire-os! Awww!!
•	(Risos) ( cobre a areia de forma chocante)
•	Murray: Aí vem a festa! Olá, Murray! Drac, o que foi, amigo?
•	Drac: A areia, Murray, a areia! Sempre com a areia.
•	Murray: Uau! Wolfie! Frank! Eu amo esse cara. Ele sempre traz tudo a todo vapor. Você também está parecendo magro. Agora que você é só uma cabeça.
•	Frank: Certo, você vai pagar por isso.
•	Murray: Então, o que foi, Drac? O hotel está parecendo fora de questão.
•	Frank: Ei, pessoal, assistam isso.
•	Murray: A propósito, você estava certo sobre essas instruções.
•	Drac: Ah, ótimo, ótimo.
•	Murray: Sim, peguei o Tigre pelo Nilo e não havia absolutamente nenhum trânsito.
•	( Frank peida alto na parte inferior do corpo )
•	Drac: Você tá brincando comigo. Bem no meu lobby?
•	Murray: Drac, eu juro, cara, eu não corro assim.
•	Drac: (RISANDO) Limpeza!
•	Murray: Eu não fui a causa disso.
•	Aranha: Estamos prontos!
•	Wanda: Se ao menos Martha estivesse aqui para ver isso.
•	Drac: Ela está sempre aqui, Wanda. Certo, amigos, estou tão feliz que vocês estão aqui para comemorar. Outro aniversário para minha doce pequena Mavis, e outro ano bem-sucedido de refúgio deles! Estas são imagens humanas recentes que nossa vigilância descobriu. Eles estão ficando mais gordos para nos dominar. E eles estão usando menos roupas, permitindo mais movimento para nos estrangular ou cortar nossas cabeças e colocar doces nelas. Mas eles nunca nos encontrarão aqui. Vilão maligno, você nunca vencerá! Ok, doke. A diversão começa em 30 minutos. Agora, tenho que ver minha garotinha.
•	Frank: Ela não é mais tão pequena!
•	Drac: Sim, ela é! ( rosnando)
•	Eunice: O que está acontecendo aí? Estamos no hotel? Frank, você nos reservou uma massagem tandem? Você nos conseguiu uma mesa no Hunchback's? Você fez alguma coisa?
•	Griffin: De nada.
•	Eunice: O que está acontecendo?
•	Mavis: Pai, você disse que quando eu fizesse 118 anos, eu poderia sair para o mundo como qualquer outro adulto que entra e sai deste hotel. "Mas, Mavey Wavey, não é seguro, bleh bleh bleh." Pai, 30 anos atrás, você prometeu. Eu lembro, nós dois estávamos comendo ratos, e você disse especificamente que me deu sua palavra.
•	Cabeças encolhidas: Não perturbe. Não perturbe. Não perturbe. Não perturbe. Não perturbe. Não perturbe. Não perturbe. Bom dia, Eminência.
•	Drac: Empregada, limpe este quarto!
•	[Drácula está na porta do quarto de Mavis]
•	Cabeça encolhida: Ah, é você. Que bom que você conseguiu vir.
•	Drac: Ela já acordou?
•	Cabeça encolhida: Ah, ela está de pé. Ela está pronta para ir. E por "ir", quero dizer ir . Como em, ir dar uma olhada no mundo. O que você vai fazer? O que você vai dizer?
•	Drac: Eu cuido disso. Por favor, relaxe. Apenas faça seu trabalho. [Ele abre a porta] Bom dia, Mavey-Wavey! Feliz aniversário, meu ratinho!
•	Mavis: [sem expressão] Obrigada, pai. Eu sei que é meu aniversário.
•	Drac: Eu tenho tanta diversão planejada! Uhuuu! Mas primeiro, vamos pegar alguns escorpiões juntos, só nós dois, sim, Dead-ums?
•	Mavis: Pai, por favor, deixe-me falar. Há algo que precisamos conversar.
•	Drac: Você quer sair para o mundo. Você pode.
•	Mavis: Aha! Eu sabia que você ia dizer isso. Mas, pai, você me deu sua palavra, você sabe que eu sei que a palavra de um Drácula é sagrada. Que nossa confiança é o cerne da nossa-- Espera, o quê?
•	Drac: Eu disse que você pode ir.
•	Mavis: Você só está brincando comigo.
•	Drac: Não, não, não, não. Você tem idade suficiente para dirigir um carro funerário agora, você tem idade suficiente para fazer suas próprias escolhas. Você pode ir.
•	Mavis: Santa Raiva. Santa Raiva! [ Ela o abraça, então corre para o armário e arruma sua mala. Ela se transforma em forma de morcego e começa a voar para fora da janela, mas... ]
•	Drac: Whoa, whoa, whoa, whoa. Pare. Espere um segundo, sweetfangs, onde você está indo?
•	Mavis: Ah, bem, estou indo para o paraíso, e essas são apenas algumas coisas que pensei que precisaria.
•	Drac: Paraíso?
•	Mavis: (volta para a forma humana.) É, você sabe. É o lugar lá fora onde você e a mamãe se conheceram. A tia Wanda disse que vocês dois eram tipo, Zing!
•	Drac: Não sei do Zing . Onde você achou esse cartão?
•	Mavis: Em uma das suas gavetas. Por que você nunca me conta como vocês se conheceram?
•	Drac: Na verdade é o Havaí.
•	Mavis: (confusa.) Ha-o que-o que?
•	Drac: Olha, querida, eu sei que você está animada, mas todo mundo fez um grande esforço para vir te ver no seu aniversário.
•	Mavis: Eu sei. Elas sempre fazem isso. [ Ela se transforma de volta em forma de morcego ] Mas eu não estou ficando um pouco velha para essas festas? Eu as amo, mas, eu realmente quero ver coisas novas. Talvez conhecer alguém da minha idade.
•	[Mavis começa a fazer beicinho]
•	Drac: Vamos lá. Não, não, não faça isso. Não me faça essa cara de morcego.
•	[Mavis começa a chorar baixinho]
•	Drac: Certo, tem uma vila humana um pouco depois do cemitério. Você pode ir lá e voltar em, tipo, 30 minutos ou mais. Deve ser o bastante para sua primeira vez.
•	Mavis: (suspira.) Bem, não é Ha-wee-wee, mas acho que ainda está tecnicamente lá fora. Ok, ok, ok! (Ela voa de volta pela janela e se transforma em forma humana e abraça seu pai.) Obrigada por confiar em mim.
•	Drac: Claro, pequena, eu te dei minha palavra.
•	Ei, querida! Olha isso! Ei, pessoal.
•	Mavis: Você está animada para amanhã? Não tão animada quanto eu estou agora. Você não vai acreditar, mas papai está me deixando sair sozinha para ver uma vila humana! O quê? Não!
•	Eunice: Com licença. Drac! Você perdeu o controle? Deixando sua própria filha lá fora com aqueles humanos horríveis dos quais você sempre nos fala? É por isso que você construiu este lugar. Eles nos odeiam. Eles são cruéis. E são muito barulhentos!
•	Mavis: Tia Eunice, talvez eles tenham mudado. Vou voar pela rua e ver como vai ser.
•	Eunice: Ok, querida, fique segura. Traga roupas quentes e uma espada.
•	E cuidado com os forcados.
•	Não deixe ninguém tirar seus miolos também.
•	Talvez fique nas sombras.
•	É mais divertido simplesmente observar debaixo de uma casa.
•	Frank: Gente, gente. Ela aguenta. Ela é um Drácula, pelo amor de Deus. Mas, falando sério, cuidado com o fogo. Fogo ruim.
•	Mavis: Tchau, pessoal.
•	Frank: Uhuu! Uhuu! Drac, não acredito em quão calmo você está sobre ela ir embora. Estou orgulhoso de você. Drac? Drac? Para onde Drac foi?
•	Mavis: Uhuu! Isso é demais! Ali está o cemitério, como o papai disse. Uhuu! Uh… Alô? Alguém aí?
•	Zumbis: (disfarçados de humanos) Vampiros. Mordem os dedos dos pés!
•	Oh! Olá, humanos. Tudo bem? Meu nome é Mavis Dracula, e eu…
•	Zumbis: (disfarçados de humanos) Vampiros. Queimam roupas.
•	Mavis: Queimar minhas roupas? Sério? Hum…
•	Zumbis: Vampiro! Nós pegamos seus doces.
•	Mavis: Candy! Eu sou amigável. Eu realmente sou. Calma, agora.
•	Zumbis: Doces.
•	Mavis: Eu só queria dizer oi.
•	Zumbis: (GEMENDO) (RISANDO)
•	Mavis: Por favor. Eu nunca machuquei ninguém. Sou educada em casa. Isso é alho? (SUSPIRO) Raiva sagrada, você está pegando fogo. Posso fazer alguma coisa? Posso ajudar? Papai estava certo. Papai estava certo.
•	Drac: Funcionou. Agora meu bebê estará seguro para sempre. Tudo bem, pessoal, voltem ao trabalho agora. Ei. Você não precisa de um manequim. Deixe o manequim aqui. Vamos.
•	Zumbis: (Grunhindo.)
•	Onde você esteve? Por que você está se esgueirando?
•	Drac: Shh. Silêncio.
•	Drac: Querida, você voltou tão cedo?
•	Mavis: Ah. Entre, pai.
•	Drac: Como foi? Como foi o mundo grande? Como foi lá fora?
•	Mavis: Estava tudo bem, pai.
•	Drac: O quê? Qual é o problema?
•	Mavis: Pai, você estava certo. Humanos são horríveis. Eles eram tudo o que você disse. Eles queriam morder meus dedos.
•	Drac: Seus dedos dos pés?
•	Mavis: E eles tinham alho no pão.
•	Drac: O quê? Olhe para mim. Estou ficando arrepiado, estou com tanto medo. Sinto muito, querida. Odeio que você tenha que ver isso.
•	Mavis: Sinto muito por ter duvidado de você. Nunca mais vou sair daqui.
•	Drac: Certo. Certo. Olha, o papai vai fazer o melhor aniversário de todos. Olha o que eu trouxe para você. Seus bolinhos de minhoca. Não fique mais triste. Lembre-se, este é o ano em que abrimos o presente da mamãe para você.
•	Mavis: O que ela me deu?
•	Drac: Vamos ver. Ela disse para nunca abrir até você ter 118. Nós esperamos esse tempo todo. Você come seus bolinhos de minhoca. Você desce quando estiver pronta, querida.
•	Ufa.
•	Ah, sim.
•	Cabeça encolhida: O que você fez?
•	Drac: O que eu tinha que fazer.
•	Cabeça encolhida: Mm-hmm.
•	Drac: Ela vai me agradecer um dia.
•	Cabeça encolhida: Sim, foi o que o cara que encolheu minha cabeça disse.
•	Ahh.
•	Drac: Sim, o que você quer, um biscoito? Você fez tudo certo, cara. Vai logo.
•	Jonathan : (Gemendo.) Ufa! Sim.
•	Mobs: ( na cabeça de Drac ) Vampiro! Vampiro!
•	Drac: Um humano. Quem é você? E como você encontrou esse lugar?
•	Johnny: Ah, eu sou Jonathan. E eu estava escalando uma montanha com alguns caras... e ouvi uma história sobre uma floresta assustadora. (em flashback; ele imagina alguém.) E quem não vai entrar em uma floresta assustadora, certo? Então, eu vejo esses caras de aparência pateta pegando fogo. E eu meio que os segui até esse castelo incrível.
•	Construtor: ( na cabeça de Drac ) Mas, é claro, seja inteligente. Nada de fogueiras, nada de shows de fogos de artifício.
•	Drac: Quantos de vocês são?
•	Johnny: Só eu. Gosto de ir sozinho. Você conhece muita gente incrível nos albergues da juventude. Ei, falando em incrível, essa coisa da capa está arrasando. Tem, tipo, uma festa à fantasia aqui?
•	Drac: O que eu fiz?! Isso é tudo culpa minha! Você tem que ir embora! [passa o mouse sobre Jonathan] Oh, não.
•	Gremlin lady: Com licença. Uma das suas piranhas no lago é muito rude. Ele comeu minha cunhada.
•	Já estou com você.
•	Hydra: Sr. Drácula, pedimos um quarto com vista para a piscina.
•	Hydra: O quarto está ótimo. Queremos marcar uma massagem.
•	Hydra: Sim, sueco.
•	Hidra: Shiatsu.
•	Hydra: Aromaterapia.
•	Hidra: Parte inferior das costas.
•	Hydra: Você tem pedra quente? Queremos uma massagem.
•	Drac: Já volto a falar com você, Sr. Hydraberg.
•	Hydra: Espero que sim.
•	Hydra: Duvido.
•	Drac: Veja se você faz isso.
•	Hydra: Essa é a Srta. Hydraberg.
•	Obrigado.
•	Sim, é bom ver você.
•	Johnny: Cara, sério, o que foi? É meio estranho respirar aqui embaixo.
•	Drac. Ei, Drac. Como foi com Mavey? Ei. Aonde você foi?
•	Johnny: Uau! Este quarto é meio pequeno para um castelo grande. Não tem cama, mas olha essas pás de lixo incríveis que eles te dão.
•	Drac: Quieto, seu idiota! Que armas você está guardando neste contêiner? Seus forcados...? [funga] Oh! Não consigo respirar. Isso está me matando!
•	Johnny: Sim, definitivamente vale a pena afofar e dobrar.
•	Drac: O que é isso? Um dispositivo de tortura? Um controlador mental secreto!? Você não vai ler meus pensamentos. Eu não vou deixar!
•	Johnny: Cara, é só música. Aqui, tenta. [Ele consegue colocar seus fones de ouvido nas orelhas do Drácula e toca "Sexy And I Know It" ]
•	Drac: Ohh! Está tomando meu tãããããão! Aaaahh!!!
•	Johnny: O quê?! Mas é uma boa jam! Não seja um avô.
•	Drac: Você precisa ir. Nenhum humano jamais entrou neste castelo. E se alguém te visse, a segurança do hotel, o santuário, ninguém jamais voltaria !
•	Johnny: Ah sim! Vai fundo! "Ever come again" ! Adoro sua voz de Drácula. É tão exagerada!
•	Drac: E Mavis... Se ela visse você, ela saberia que eu menti. Não !
•	Johnny: Quem é Mavis? Este é o quarto dela? Eu sou bom com um colega de quarto. Eu tinha seis irmãos quando criança, então eu podia dividir totalmente.
•	Drac: Não posso matá-lo. Isso faria os monstros retrocederem centenas de anos.
•	Johnny: Uma vez, em Hamburgo, dividi um quarto com um cara que peguei roubando meu xampu. Eu disse: "Uau, cara", e ele jogou um vaso de flores em mim, mas ele foi legal.
•	Drac: Sobre o que você está tagarelando?
•	Johnny: O quê? Uau! Olha só essas fantasias incríveis.
•	Drac: Trajes.
•	Johnny: O que é isso? Desculpa, cara. Eu simplesmente não consigo ficar sem minha mochila. Sabe, tudo o que eu tenho está lá.
•	Drac: Vai estar bem aqui.
•	Johnny: Ok, é que... eu adoro minha mochila.
•	Johnny: Uau. Ei, o que você está fazendo? O que você-- O que você está fazendo com meu cabelo? Pare! Oh, espere, isso faz cócegas! Vamos, cara.
•	[mais tarde Drácula aparece com Johnny agora vestido como um Frankenstein.]
•	Johnny, olha só, eu sou um Franken-homie!
•	Drac: Sim, olá.
•	Johnny: Olhe para mim!
•	Drac: Isso é totalmente normal, não é um problema aqui. Isso é só um monstro comigo.
•	Johnny: Cara, todo mundo se esforçou hoje à noite. Espera, por que estamos indo para a porta da frente? Estamos indo embora?
•	Quasimodo: Bom dia, Drácula!
•	Johnny: Ei, Sniffy. O que está acontecendo?
•	Drac: Agora não, Quasimodo.
•	Quasi: O quê? Não. Não seja absurdo. Não é um humano, mas Monsieur Drácula.
•	Drac: Que ridículo. Sou eu.
•	Quasi: Monsieur. São dedos de lagarto diabólicos!
•	Drac: Dedos de lagarto diabólicos?! Eu pedi baços em cobertores!
•	Quasi: Seu idiota feio! Eu te disse , ele não gosta dos dedos de lagarto!
•	Garçom Gárgula: Mas você disse... [Quasimodo bate o prato em cima da cabeça]
•	Johnny: [vê Skeleton Wife e se aproxima dela] Uau! Olha só essa fantasia! Nossa, sério, eu só tenho que perguntar: como você está fazendo isso? Quer dizer, parece tão real, tipo, [Ele coloca a mão no peito dela] Eu poderia simplesmente colocar a mão e...
•	[Esposa Esqueleto grita e dá um tapa em Jonathan]
•	Marido Esqueleto: [aparece; irritado para Jonathan] O que você pensa que está fazendo?!
•	Johnny: [assustado com a realização] Uh-- Ela é... Ela é real! Você é real!
•	Marido Esqueleto: É, e eu vou te dar uma surra de verdade! Tire as mãos da minha esposa! [Ele dá um tapa em Johnny e ele esbarra no Pé Grande, então ele olha para cima para ver seu rosto e começa a gritar]
•	Drac: [ouve Jonathan gritando e se vira para ver que ele não está mais atrás dele] Oh, não. [Ele sai para encontrá-lo]
•	Johnny: [percebe que os monstros ao seu redor são reais; histericamente] AAAAAAAAHH!!!
•	Ay-yi-yi-yi! (MÚSICA MARIACHI TOCANDO) (GRITANDO)
•	Wanda: Querida, eu simplesmente não sabia onde você estava. Achamos que você ainda estava fora.
•	Mavis: Ah, não. Não sei por que eu quis ir embora. Os humanos são tão chatos.
•	[Jonathan colide com Mavis, então eles olham nos olhos um do outro e sentem um " zumbido "; Drácula entra no caminho ]
•	Drac: Mavis, querida, você está bem?
•	Mavis: Sim, acho que sim. Isso foi estranho.
•	Johnny: [gemendo] Ohh... Minha cabeça está doendo.
•	Mavis: Hum, quem é?
•	Drac: [nervoso] Quem é o quê? Oh! Oh, isso? Isso é um ninguém.
•	Mavis: Sério, pai?
•	Johnny: [histérico] "Pai"?
•	Mavis: Sim, eu sei. A filha do Drácula. Todo mundo surta no começo.
•	Johnny: "Drácula"?!
•	Drac: Certo, temos que ir.
•	[ele rapidamente leva Johnny embora, deixando Mavis completamente desconfiada. Drácula abre a porta de seu quarto e Jonathan grita de horror]
•	Johnny: Por favor, não me mate! Eu sou tão jovem! Tenho tantos lugares que quero ver! Tenho ingressos para 6 shows da Dave Matthews Band! Vou sair daqui!
•	[Johnny abre a porta do porão e Glen, fora da tela, ruge para Johnny, potencialmente para fazê-lo gritar e forçá-lo a voltar para cima]
•	Drac: [para Johnny] Cale a boca, já. É impossível para mim pensar com todo esse barulho. Desculpe, Glen! Volte a dormir! [Ele fecha a porta do porão e Glen ruge lá embaixo em resposta]
•	Johnny: Espera. Você não vai sugar meu sangue?
•	Drac: Paranoia humana clássica. O sangue humano é tão gorduroso, e você nunca sabe onde ele esteve.
•	Johnny: Então, Drácula não bebe sangue?
•	Drac: Não, eu uso um substituto de sangue. Ou Near Blood ou Blood Beaters. Não dá para notar a diferença.
•	Johnny: Então, uau, você é, tipo, o verdadeiro Conde Drácula. Tipo, "Eu sou o Drácula, bleh bleh bleh."
•	Drac: Eu nunca disse isso na minha vida. "bleh bleh bleh." Não sei de onde isso veio.
•	Johnny: Ah, posso perguntar, o que exatamente é esse lugar?
•	Drac: O que é esse lugar? [Ele vai até a janela, abre e fala de forma dramática] É um lugar que eu construo para todos aqueles monstros lá fora espreitando nas sombras, se escondendo da perseguição da humanidade. Um lugar para eles e suas famílias virem e se libertarem. Um lugar sem tochas, forcados e multidões furiosas! Um lugar de paz, relaxamento e tranquilidade.
•	Johnny: Legal, então é como um hotel para monstros?
•	Drac: [pausa; levemente irritado] Sim, exatamente. Um hotel para monstros. Que maneira de resumir. Certo, suba nas minhas costas, estamos indo.
•	Johnny: Ah, cara, você é um morcego agora. Eu sempre quis voar. Como é? Isso é loucura. Espera. Espera, eu quero ficar. O Frankenstein pode autografar minha fantasia? Posso conhecer o Homem Invisível? Ei, se eu colocasse minha mão na boca do Homem Invisível, ela desapareceria?
•	[Drac, em forma de morcego, está carregando Jonathan e sai pela janela]
•	Mavis: [aparece de repente] Olá!
•	Drac: [surpreso] Mavey! O-O que você está fazendo, minha doce laranja sanguínea? Nosso amigo estava saindo.
•	Johnny: Sim, ele estava me jogando pela janela.
•	Drac: [ri nervosamente, então leva Johnny de volta para dentro] Esse cara é tão engraçado. [Ele se transforma em humano e afasta Jonathan da janela] Oh, olha, tem algo no seu rosto. [para Johnny, em um tom suave e tenso] Entre na brincadeira se quiser ver sua mochila preciosa. [Mavis voa pela janela e volta à sua forma humana]
•	Johnny: [espantado] Uau. Então, espera, você não tinha nenhuma roupa quando era um morcego? Ou elas eram do tamanho de um morcego?
•	Mavis: [parecendo um pouco assustada] Quem é exatamente ?
•	Drac: Mmmmmmm... [pensando em uma mentira] Querida morcego, veja bem, é seu aniversário, e, você sabe, eu quero que você tenha a melhor festa especializada da sua vida. Então... bem... eu... precisava de ajuda.
•	Mavis: Você precisava de ajuda?
•	Drac: Bem, olha, eu sou muito bom, mas pensei que seria ainda melhor e mais especializado se alguém mais próximo da sua idade ajudasse a planejar a festa.
•	Mavis: [animada, para Johnny] Você tem a minha idade?
•	Johnny: Claro! Uh, bem, quantos anos você tem?
•	Mavis: Cento e dezoito.
•	Johnny: [surpreso] Cento e--?! [Drácula dá uma cotovelada nele] Uh! [tenso] É... Tenho 121.
•	Mavis: [animada] Sério?
•	Johnny: [acena com a cabeça] Mm-hmm.
•	Drac: [para Mavis] Você vê? Tudo é muito, muito normal. Estou dando uma festa e ele está ajudando.
•	Armadura: Senhor, há uma emergência!
•	Drac: Agora não. Não vê que estamos no meio de algo muito normal aqui?
•	Mavis: Espera, o que está acontecendo aqui? Há uma emergência no seu precioso hotel, e você não está correndo para consertar? Por quê? É por causa dele?
•	Johnny: Uau, olha a minha cara! [tirando sarro do Suit of Armor]
•	Drac: Não, meus preciosos ossos, não é por causa dele.
•	Mavis: Ótimo. Então vá verificar a emergência. E eu lhe farei companhia.
•	Drac: Não! Qualquer coisa menos isso!
•	Mavis: O quê?
•	Drac: Quero dizer... porque ele precisa de tempo para planejar. E se você está fazendo companhia a ele, então ele não está planejando. Ele está, uh, fazendo companhia. E então o plano, ele não é planejado.
•	Shrunken Head: Mm-hmm. Boa.
•	Drac: Cale a boca!
•	Mavis: Certo. Então, talvez se você não estiver planejando mais tarde, podemos sair.
•	Johnny: Parece bom!
•	Drac: Sim. Ouviu isso? Parece bom. Então você vai sair. Vejo você depois, meu amor. Amo você. Ok, você não vai sair. Porque você está indo embora.
•	Johnny: Mas o oposto, você disse.
•	Armadura: Mas senhor, a emergência!
•	Drac: Siga-me. [Ele e Johnny saem correndo]
•	Armadura: Cara, esse garoto fedia.
•	Johnny: Para onde estamos indo?
•	Drac: Só estou me livrando de você por um túnel secreto para que ela não nos veja.
•	Johnny So, posso te fazer uma pergunta? Isso é real, sobre a coisa do alho?
•	Drac: Sim, não posso ter. Minha garganta incha.
•	Johnny: Hein. Estaca de madeira no coração?
•	Drac: Sim, bem, quem isso não mataria?
•	Drac: Ah. Aqui vamos nós. Oh, desculpe. Estou um pouco perdido. Sim, eu sei que é sua lua de mel. Peço desculpas. Volte a fazer o que estava fazendo.
•	Drac: Não fico muito aqui embaixo. É para ser uma saída se os humanos invadirem.
•	Johnny: Então, eu sou, tipo, o primeiro humano aqui, hein? Isso é muito legal.
•	[Drac e Johnny estão nas catacumbas, e Drácula vê outra porta]
•	Drac: Oh, cara. Acho que é isso. [Ele abre a porta e mostra a Skeleton Wife tomando banho]
•	Esposa Esqueleto: [percebe-os] Ahhh! O que está acontecendo?
•	Drac: [suspiros] Sinto muito! Uh, meu erro!
•	Marido Esqueleto: [interrompe] O que há de errado com vocês?! [Ele joga uma bucha no Drácula e fecha a porta]
•	[ Drac e Johnny estão caminhando nas catacumbas tentando encontrar uma saída ]
•	Johnny: Nossa, esse lugar é incrível!
•	Drac: Certo, eu realmente gostaria de um pouco de silêncio agora.
•	Drac: Tudo bem, a terceira vez é…
•	Frankenstein: Drácula.
•	Drac: Sim, Frankie?
•	Frank: Ei, amigo, o que você anda fazendo?
•	Drac: [ para Jonathan ] Não se mova. [ para Frankenstein ] Não se preocupe com isso. O que você anda fazendo?
•	Wayne: Queríamos ensaiar nosso grande número para a festa da Mavis, e aí esses perdedores não sairiam do coreto.
•	Drac: Certo. Largue Zombie Mozart, Bach e Beethoven agora mesmo.
•	[ Frank, Murray e Wayne jogam ]
•	Drac: [ para Zumbi Beethoven ] Você chegou a ensaiar, Zumbi Beethoven?
•	Zumbi Beethoven: Eh eh eh eh .
•	Wayne: Escute, Drac, queríamos tocar alguma coisa, como nos velhos tempos. Até pensamos que talvez você cantasse conosco.
•	Drac: Vamos lá, rapazes. Vocês sabem que eu não canto em público desde Martha.
•	Frank: Sim, mas nós pensamos o quanto, você sabe, Mavis amaria isso.
•	Drac: Eu disse não! [ Ele ruge com sua cara de monstro ] Não me pergunte de novo! Certo. Agora, vamos abraçar os zumbis. Vamos todos fazer as pazes.
•	Wayne: [ para Frank ] Uau. Ele realmente te assustou.
•	Frank: Eu não estava assustado. Eu estava sendo educado, ok?
•	[Mavis aparece.]
•	Mavis: Ei. O que você está fazendo aqui? Pensei que estivesse planejando.
•	Johnny: Nunca ouvi seu nome.
•	Mavis: Meu nome é Mavis.
•	Johnny: Mavis? Esse é um nome bem legal.
•	Mavis: Sim, minha mãe escolheu. Então, você vai me dizer seu nome?
•	Johnny: Eu? Meu nome? Boa pergunta. Bem, obviamente, eu sou Frankenstein.
•	Mavis: Não, você não é. Frankenstein é meu tio ali. O cavalheiro abraçando o Mozart Zumbi.
•	Johnny: Certo. Claro, ele é seu tio. Bem, veja, eu não sou "o" Frankenstein. Eu sou primo dele... Johnnystein?
•	Mavis: Johnnystein?
•	Aranha: Ei, Mavis!
•	[Johnnystein grita enquanto sai da abertura. Frank avista Johnnystein e avança ameaçadoramente em sua direção, e Drácula fica em seu caminho]
•	Frank: [para Drac] Quem é esse? [Ele aponta para Johnny]
•	Johnny: [sussurrando para Drac] Esses monstros vão me matar?
•	Drac: [sussurrando para Johnny] Não enquanto eles acharem que você é um monstro.
•	Johnny: Hein? Isso é meio racista.
•	Drac: Conversamos mais tarde.
•	[Jonathan, em seu disfarce de Johnnystein, está imitando Frankenstein]
•	Frank: Ele está tirando sarro de mim?
•	Drac: Não, não! Claro que não, porque ele é... [ impede Johnny de imitar ]
•	Mavis: Ele é seu primo, - Johnnystein.
•	Drac: [ Brincando ] Sim, sim, sim!
•	Frank: Eu não tenho nenhum primo.
•	Drac: Não, não, você tem. Ele é seu primo de 6º grau; 3 vezes removido.
•	Johnny: [ Levanta o braço direito ] Do lado do seu braço direito.
•	Frank: [ para o braço direito ] Você tem um primo?
•	Drac: Frank, se seu braço pudesse falar, isso lhe diria que o dono original do seu braço tinha um irmão...
•	Johnny: ...Que se casou com uma mulher...
•	Drac: ...Quem era... [ Faz gesto de matar ]
•	Johnny: ...Por estrangular um porco.
•	Frank: Eu tenho sangue de estrangulamento de porco no meu braço?! Isso é meio legal. Bem, Cuz, ótimo conhecer você. [ aperta a mão de Johnny, mas seu corpo inteiro treme várias vezes ao bater no chão ]
•	Mavis: [ Risos ]
•	Griffin: [ se aproxima de Johnny ] Então, o que te traz aqui, Johnny?
•	Johnny: [ assustado ] Uau! O que foi isso?!
•	Griffin: Ah, desculpe. Eu realmente deveria limpar minha garganta quando falo. De qualquer forma, o que te traz aqui?
•	Johnny: [ nervoso ] Ah, uh... Organizador de festas?
•	Drac: Sim! Eu recrutei o Sr., uh... Stein aqui para me ajudar com a festa de aniversário da Mavis.
•	Murray: Espere um minuto. Você pediu para alguém te ajudar ?
•	Wayne: Capitão Maníaco por Controle?
•	Drac: É "Conde"... [ zomba ] E sim, pensei que ter um contemporâneo de Mavis seria útil.
•	Johnny: Sim, ele precisava totalmente de uma perspectiva mais nova. [ Drácula olha para ele ]
•	Wayne: Certo, Johnny, o Sr. Tight Coffin aqui estava planejando fazer esses idiotas empoeirados tocarem na festa.
•	[ Zumbis suspiram ]
•	Frank: Então, de qualquer forma, pensamos que poderíamos animar um pouco as coisas.
•	Johnny: Uau! Vocês todos tocam? Vamos dar uma olhada em vocês!
•	[ Frank e Murray estão cantando ]
•	Frank: Garota, não acredito que é sua grande noite.
•	[ Griffin está tocando bateria ]
•	Murray: Parece que foi ontem que você estava comendo mosquitos.
•	Wayne e Griffin: Mas agora vocês estão comendo sapos e ratos.
•	Frank: Devorando-os como se fossem Doritos.
•	Todos: Diga-me para onde foi o tempo, garota
•	Johnny: Whoa, whoa, whoa. Calma, rapazes. Parem. Isso é fofo, mas meio old school.
•	Drac: Sim, obrigado, Johnny.
•	Johnny: Você tem que acelerar as coisas totalmente. Aqui, deixa eu te mostrar. Homem-lobo, me dá uma jam!
•	[ Wayne dá uma "geléia" em Johnny ]
•	Johnny: Dois, três, quatro! [cantando] Garota vampira com presas afiadas
•	Cabelo muito fofo com franja larga
•	A princesinha vai ser uma rainha
•	Mulher morcego legal completa 118 anos
•	Público: 118!
•	Johnny: Diga 118!
•	Público: 118!
•	Johnny: Sim! Mergulho no palco! [ mergulho no palco para o chão ] Incrível!
•	Mavis: Estou impressionada agora!
•	Frank: Acho que meu primo vai fazer desta... [ gritando ] ...a melhor festa de todas!
•	Murray: Sim! Talvez ele consiga um jeito de me arranjar umas garotas.
•	Público: Deveríamos fazer um concurso de dança.
•	Drac: Não vamos fazer nada disso! Temos que manter o cronograma. Certo?
•	Mavis: [Para Drac] Tudo bem, pai! Tudo bem. [Para Johnny] Johnny, você também vem?
•	Johnny: Não sei. É legal com Drácula?
•	Todos: Johnny, venha conosco.
•	Esqueleto: N-27.
•	Gremlin Idoso: N-27.
•	Esqueleto: G-61.
•	Gremlin Idoso: G-61.
•	Eunice: Bingo! Bingo! Como você ousa! Você sabe qual médico me fez ?
•	Gremlin Idoso: Eu não fiz isso.
•	Círculos? Mosca? Mãos? Filme.
•	Vomitar.
•	O Vômito? O Vomito.
•	Fly: Não. Isso não era uma pista.
•	Hydra: Nada? Vazio? Óculos? Óculos? Óculos tremendo? Óculos tremendo de lado! Através do Espelho?
•	Griffin: Eu sou péssimo nisso.
•	(SUSPIROS) (MÚSICA OTIMISTA TOCANDO) Eu não fiz isso.
•	Fly: E puxe para trás. E para cima. E empurre.
•	E torcer. E voltar.
•	E para cima. E torcer.
•	E empurre.
•	Não. Não copie isso.
•	E para trás. E para cima. E torcer.
•	Deixe-me comer uma omelete de nariz de alce com pasta de barata e geleia de rato.
•	E com claras de ovos.
•	Quasi: Bonjour, Monsieur Drácula! Posso fazer uma omelete para você?
•	Drac: Não, não, não, não. Não estou com fome.
•	Quasi: O quê? Esmeralda, você sente o cheiro de novo?! Humano!!
•	Drac: Estou com fome. [dá um tapa em Esmeralda]
•	Eunice: Johnny, você já foi ao Taj Mahal?
•	Murray: Vamos lá. Nenhum monstro esteve no Taj.
•	Mavis: Cara, eu queria poder ir lá.
•	Drac: Sabe de uma coisa? Vou levar 50 omeletes.
•	Quasi: Você ouviu o homem! Faça-os!
•	Mavis: Como você lidou com as multidões?
•	Johnny: Sim, fica bem louco no verão, mas você sabe, você tem que aproveitar.
•	Ele só rola. Que legal que ele rola.
•	Sim, sim, legal.
•	Drac: Olha, amor, eu trouxe um bagel com seu queijo favorito.
•	(GRITANDO)
•	Mavis: Santa raiva! Obrigada, pai! Johnny, experimente um pouco de queijo gritado, é demais.
•	Johnny: Ah, legal. Mas eu sou intolerante a queijo gritado. Então, passe educado.
•	Drac: [para Johnny] Sim, claro que você é. Johnny, podemos conversar sobre o plano de festa por um minuto? [sussurrando] O que você está fazendo? Se eles descobrirem que você é humano, eles vão fazer cocô de morcego!
•	Johnny: Relaxa! Ninguém desconfia de nada. A única coisa que parece estranha é o quanto você está sussurrando.
•	Drac: Só para acabar logo com isso! Você vai dizer que vai entrar na piscina e agir animado. E então vai dizer que machucou as costas e que tem que ir embora!
•	Johnny: Aí vêm os bons tempos! UAU! Oh, caras--! Oh, minhas costas.
•	Monstro nº 1: Estou nas suas costas!
•	Drac: Não, não, ele disse: "Ah, minhas costas"!
•	Monstro nº 2: Suba nas minhas costas!
•	Mavis: Vamos lá.
•	Johnny: Ah, aqui vamos nós. Briga de galinha! Te empurro para longe.
•	Monstros: [exceto Drácula] Briga de galinhas!
•	Mavis: Nós pegamos você, Johnny. Você vai cair.
•	Johnny: Ah, sim, veremos, "Mavey Wavey"!
•	Drac: Ok, acalmem-se com as galinhas de briga! Todos, parem com a briga!
•	Eunice: Frank, se você se machucar…
•	Frankenstein: Entendi, querida. Os garotos Stein são criados para esse tipo de coisa. GERONIMO!
•	Wayne: [se esgueirando] Eh-heh-heh. [tira o maiô de Griffin como uma brincadeira]
•	Grifo: AAH!
•	Wayne: Crianças, por que vocês fizeram isso?
•	Griffin: Eu estava na piscina! A água está fria. Não me julgue! [sai correndo]
•	Drac: Johnny! Sua maquiagem. Sua maquiagem! Tempo limite. Agora.
•	Johnny: Nossa! Acho que o Conde queria dar um mergulho.
•	Johnny: Bala de canhão!
•	[Drácula suga a água e congela Johnny. Ele então coloca Blobby no chão e descongela Johnny e ele cai em segurança em Blobby. Ele então faz um sinal de positivo e Drácula franze a testa. A cena corta para o cemitério.]
•	Drac: Ah, você estragou tudo, cara. Você estragou tudo feio. Eu disse para você tirar isso. Você vai arruinar meu hotel se eles descobrirem.
•	Johnny: Bem, talvez você esteja com inveja porque as pessoas finalmente estão tirando sarro deste lugar.
•	Drac: Ah, isso? Não foi divertido. Todo mundo correndo, pulando, nadando sem ordem. Isso foi o oposto de divertido.
•	Johnny: Você sabe o que é diversão?
•	Drac: Eu inventei a diversão!
•	Johnny: Cara, as pessoas erradas se tornam imortais.
•	Drac: Olhe para mim. Você não se lembra de nada deste encontro. Você não tem memória deste lugar ou dos monstros que conheceu. Agora vá e nunca mais volte.
•	Johnny: Espera, nunca mais voltar para o hotel?
•	Drac: O quê? Você deveria ter esquecido o hotel. Acabei de usar meus poderes para apagar sua memória. Olhei direto nos seus olhos!
•	Johnny: Hum. Ah, talvez sejam as lentes de contato.
•	Drac: O quê?!
•	Johnny: Esses pequenos enfeites de plástico que me ajudam a enxergar melhor. Aqui, deixa eu tentar tirá-los bem rápido.
•	Drac: Nossa, essa é a coisa mais nojenta que eu já vi!
•	Johnny: Quase consegui.
•	Drac: Pare de fazer isso! Por favor, pare de fazer isso! Dedos longe dos globos oculares! Chega! Escute-me. Você nunca deve retornar aqui. Você deve ficar longe e nunca contar aos humanos sobre este lugar. Ou eu vou te rastrear e sugar cada gota de sangue do seu corpo até você parecer uma almofada de pum murcha! Vá embora.
•	[Drácula apenas forçou Johnny a sair e então ele desaparece]
•	Johnny: [ Zomba ] Não acredito que estou indo embora, cara. Eu poderia ter sido tão legal! Cara, você estragou tudo! Chupar meu sangue...? Deveria ter dito: "Vou ficar, velho!" Dê um chute de Bruce Lee nele. Bum! Bem no-- [ Um morcego aparece ] Aah! Oh, meu Deus! Conde Drácula! Por favor, não me mate! Estou indo, estou indo! [ Olha para cima e o morcego acabou sendo Mavis, que agora está em forma humana ] Oh.
•	Mavis: [suavemente] Siga-me.
•	Johnny: Oh... não... Não, Mavis. Não posso. Tenho que ir.
•	Mavis: Tem certeza? Vai ser divertido.
•	Johnny: Certo.
•	Johnny: Ele não vai me ver, vai? Uau.
•	Johnny: Uau, olha só a vista daqui de cima! Quase dava para ver Budapeste.
•	Mavis: Quem-é-praga? Isso é perto do Ha-wi-fi?
•	Johnny: Hein? Ah, você quer dizer Havaí. É, esse lugar é um arraso. Acabei de ir a um festival de música lá.
•	Mavis: Um festival de música humana?
•	Johnny: Ah, acredito que sim.
•	Mavis: Então, todos eles morderam seus dedos do pé e enfiaram pão de alho na sua cara?
•	Johnny: Não. Bem, um cara deu uma mordida maior na minha barra energética do que eu esperava, mas a culpa é do calor.
•	Mavis: É incrível. Você esteve em todos os lugares.
•	Johnny: Bem, você sabe, qual é a alternativa? Ficar em casa, nunca explorar, nunca ver o que há lá fora? Só vou ter 121 anos uma vez, certo? Tenho que viver isso.
•	Mavis: Sim.
•	Johnny: Nossa, cara. O nascer do sol daqui deve ser incrível--
•	Mavis: Ai!
•	Johnny: Ah, desculpe. Cara, você provavelmente nunca viu um nascer do sol, viu?
•	Mavis: Não, na verdade não. Por quê?
•	Joãozinho: Vamos lá. Eu tenho uma ideia. Observe.
•	[ O sol nasce na frente de Mavis e Johnny ]
•	...
•	[ Drácula e seus amigos estão relaxando na sauna conversando entre si ]
•	Drac: Eu não disse a vocês que nos divertiríamos aqui? Não é o máximo?
•	Wayne: Sim, estou suando bastante. Quando é que aquele garoto Johnny vai terminar de planejar a festa? Ele é um cara legal.
•	Frank: Sim, ele é um animal. E foi tão legal ver Mavis rindo e se dando bem com ele.
•	Drac: [em negação] Quem está se dando bem com o quê? Por favor! Mavis nunca poderia estar com... alguém da sua espécie.
•	Frank: Desculpe? "A espécie dele?" Você está dizendo que nossa espécie não é boa o suficiente para você? [Levando para o lado pessoal] "Vossa Senhoria? "
•	Drac: Não, não, não! Frank, eu não... Eu quis dizer que ela não gostaria de alguém com... uh... cabelo tão vermelho e cacheado.
•	Griffin: [ficando chateado] Uh... O que há de errado com cabelo ruivo e cacheado?
•	Drac: Por que você está ficando chateado?
•	Griffin: [com raiva] Eu tenho cabelo ruivo e cacheado!
•	Drac: Bem, como eu poderia saber disso?!
•	[ Lá fora; Jonathan e Mavis estão observando o sol nascer ]
•	Mavis: Essa é a coisa mais incrível que já vi. [ Jonathan então pisa em um telhado e cai lá dentro ] ...Johnny?!
•	Drac: [ Em uma cena posterior; Nervoso ] Olha, acalmem-se, rapazes. Isso tudo é um ponto discutível. Veja, Johnny... Ele foi embora.
•	Murray: [ insultado ] Espere um minuto, ele foi embora?
•	Drac: Sim! Ele decidiu que não gostava de Mavis, nem de nenhum de nós.
•	[Johnnystein cai do telhado depois de ter uma cena romântica com Mavis, e pousa no colo de Drácula; Drácula fica assustado no começo, depois dá um olhar furioso para Jonathan; sorri nervosamente ]
•	Johnny: Oi...
•	Frank: Hmm. Acho que Johnny pensou melhor.
•	Drac: Não acredito que você ficou aqui, cara. Você não entendeu! Coisas ruins estão vindo em sua direção. Preciso organizar meus pensamentos! [ em alívio ] Certo. Você vê essas mesas? Você pode passar o dia inteiro tirando-as e colocando-as, planejador de festas .
•	Johnny: Bem, fantástico. Estou preso aqui. Agora sei como sua filha se sente.
•	[Jonathan empurra a mesa com um arranhão alto]
•	Drac: Chega! Chega! Pare! Vá para o seu canto, você está em um tempo limite!
•	Johnny: Tempo limite?! Sou um homem adulto!
•	[Drácula joga Jonathan para o canto, coloca o polegar na boca de Jonathan, gira Jonathan para olhar para a parede e faz Jonathan se sentar]
•	Drac: Certo. [bate palmas] Mesa 57, por favor, vá para a posição 23. [mesa 57 voa]
•	Johnny: Uau! Isso. É. Legal.
•	Drac: [fora da tela] De frente para a parede. [de volta à tela] 17 a 48. 16 a 47. 19 a 50.
•	Johnny: Incrível.
•	Drac: Deixe-me fazer meu trabalho logo! 29 a 35. 42 a 18. 10 a 44. 39 a 24.
•	Johnny: 17, 18, 19, 20, 21, 22, 23...? 36 para cima!
•	Drac: 29 a 35.
•	Johnny: Uau! Ha-ha! Uau! Ha-ha-ha!
•	Drac: 31 a 19.
•	[Johnny cai e pousa na outra mesa]
•	Johnny: 24 para cima!
•	Drac: Sete a 25. 14 a 30.
•	Johnny: Ah, onde você foi, vovô?
•	Drac: Não surte, cara da gravidade.
•	Johnny: Coma minha poeira, cara cinza!
•	Drac: 56 e 43, ao meu lado.
•	Johnny: Uau!
•	Drac: Prepare-se para chorar, Billy Backpack.
•	Johnny: É assim que fazemos um half-pipe, baby!
•	Drac: [sarcástico] Tanto faz.
•	Quasi: Sim. Continue cheirando. Você pega o humano, e então eu farei torta humana!
•	Drac: 27, 45, 65, 76, 48, bloqueiem o caminho dele. Bloqueiem o caminho dele! (DRÁCULA RISANDO) Whoa-ho! Oh, vamos lá, cara! Legal! (MURMURANDO) Haha! Whoa-ho-ho! Peguei você, parceiro.
•	Não perturbe! Pessoas tentando dormir aqui! (GRITA)
•	Drac: (RISOS) Você viu isso? Quem é esse cara, Sir Breaks-a-lot? Nossa, eu tenho que dizer... ISSO foi divertido. Certo? A diversão que você estava falando antes? Acertou em cheio! Johnny?... Quasimodo! [corre atrás de Mavis] Mavis?? Por que você ainda está acordada? O sol está brilhando. Poderia te matar, meu bem.
•	Mavis: Eu não conseguia dormir. Você sabe para onde Johnny foi?
•	Drac: Eu não sei. Ele… Por que você quer saber?
•	Mavis: Ah! Uh…
•	Drac: Você gosta dele?
•	Mavis: O quê? Pfft! Não! Vamos lá, pai. Ele é tão estranho e desajeitado. É tipo, você é um idiota, ou você sabe que é adorável?
•	Drac: Eh… Espera aí. Você tem uma localização em Quasimodo? Sim, senhor.
•	Eles estão indo pelo saguão em direção à cozinha.
•	Drac: Preciso que parem imediatamente. Está claro?
•	Sim, bastante. Estamos nisso.
•	Quasi: Ha-ha! Perdi! Qual é o significado disto? Deixe-me passar!
•	Quasimodo Wilson, você vem conosco. ( leva um chute nas bolas ) Por que isso me machucou?
•	Drac: Olha, querida, não tem como se apaixonar na sua idade.
•	Mavis: Mamãe tinha a minha idade. Eunice disse que mamãe te beijou primeiro porque você estava com muito medo de dar o primeiro passo.
•	Drac: Sim, sim, sim, sim, sim.
•	Mavis: Esqueça de mim, da mamãe e dos beijos. Pai, em algum momento, eu vou me casar. Não posso ficar aqui para sempre.
•	Drac: O quê? Por que não? Você mal saiu das suas presas de treinamento.
•	Quasi: (ROSNANDO) Ha-ha! Quasi vence de novo! Quando você bate na corcova, você cai de bunda!
•	Drac: Mas por que todo esse interesse repentino? Toda vez que falávamos sobre amor, era sempre, "Ooh, pai, isso é nojento" e "Ooh, pai, não quero saber sobre isso".
•	Mavis: (SUSPIRA) Não sei.
•	Senhor, ele conseguiu chegar à cozinha.
•	Drac: Ele o quê? Para que eu te pago? Desculpa, querida. Eu tenho que ir.
•	Ele não me paga.
•	Johnny: [suspira histericamente] Antes de me matar, posso implorar pela minha mochila mais uma vez? Não quero deixar nada sem solução.
•	Quase: Bonjour, Monsieur Drácula!
•	Drac: Cale a boca.
•	Quasi: Agora você está ajudando ele? O que há com você e esse humano?
•	Drac: Ele não é um humano. Ele é um Stein!
•	Johnny: É isso mesmo, homenzinho, eu sou um Stein!
•	Quasi: Se ele é um monstro, que assuste Esmeralda!
•	Drac: O rato? Pfft! Sem dúvida.
•	Johnny: Certo. Aqui vamos nós. Blargh! Bleegh! Blargy-bliggy-blargh!
•	Quasi: (GRITA) (GRITA) Um humano! Um humano! Monsieur Drácula trouxe um humano para o... ( fica congelado por Drac ) (ABAFADO) Esmeralda, me ajude.
•	Johnny: Ei, obrigado por me salvar lá atrás. Aquele cara é louco! Tentando me comer. Isso só aconteceu comigo uma vez. Um cara estranho em um show do Slipknot.
•	Drac: Tem uma coisa que preciso te mostrar.
•	Johnny: Uau. Ei, estamos em um funeral agora? Oh, espere, não, é sua cama. Tão assustador e legal. ( SUSPIROS ) Uau! Eu a conheço! Eu vi aquela foto nas ruínas de Lubov. Esse é meu castelo favorito. Há uma lenda inteira em torno daquela senhora.
•	Drac: Uma lenda?
•	Johnny: A Lady Lubov. A história é que um conde solitário a conheceu por acaso, e eles dizem que nunca duas almas foram mais destinadas uma à outra. Eventualmente, eles se estabeleceram no Castelo Lubov e tiveram um filho. Mas então, uma tragédia horrível aconteceu. Um incêndio começou misteriosamente uma noite, e matou os dois. Quando eu estava no castelo, eu ainda podia sentir seu amor poderoso. Eles dizem que é como se uma alma ainda estivesse presa nas próprias ruínas.
•	Drac: A lenda está errada. Foi só a esposa que morreu. [ puxar uma cortina ]
•	Johnny: Ah.
•	Drac: E não foi mistério quem a matou. Ela foi morta por sua espécie!
•	[ início do flashback ]
•	Multidão: Vampiro!
•	Martha: Querida?
•	Drac: Vá se esconder. Eu cuido disso.
•	Multidão: Vampiro!
•	[ Martha gritando ]
•	Drac: Martha!
•	[ Mavis chorando ]
•	[ fim do flashback ]
•	Drac: Eles são os verdadeiros monstros. Eu construí este lugar para o meu amor, para proteger o filho dela. Como pai, você faz de tudo para manter sua família segura, mesmo que tenha que quebrar a confiança deles. Mas agora, Mavis tem sentimentos por você.
•	Johnny: O quê? Eu só… Incrível.
•	Drac: Está tudo bem. Você é um bom sujeito. Se o mundo fosse diferente, talvez fosse possível.
•	Johnny: Drac, estamos no século 21. As pessoas não são as mesmas de antigamente.
•	Drac: Você pode me dizer com certeza que se nós nos apresentássemos, todos nos aceitariam? Todos?
•	Johnny: Não. Você está certo. Eu vou para o bem dessa vez. Você pode simplesmente dizer que tive alguma emergência, ou que a senhora gremlin me comeu ou algo assim.
•	Drac: Não, não, não, não, não. Não quero estragar a festa de aniversário dela. Você pode sair escondido depois que tudo estiver pronto.
•	Johnny: Sinto muito. A última coisa que eu queria era machucá-la. Ou a você.
•	Drac: Sabe, você não é o Frankenstein mais tranquilo, mas seria um ótimo vampiro.
•	Johnny: Sério? Porque acho que consegui capturar seus olhos hipnotizados.
•	Drac: Oh, cara, aqui vamos nós. Deixe-me ver.
•	Johnny: Cuidado! Pois você está em meu poder. Eu ordeno que você seja o homem-lobo!
•	Drac: (UIVA) Eu tenho filhos demais. Alguém me arranhe, eu tenho pulgas.
•	Porque ele é um lobo, ele pegaria essas.
•	Drac: É, não, não explique. Não é engraçado quando você faz isso.
•	(TODOS RONCANDO) (GRITANDO) (TODOS UIVANDO) Eu não pedi um chamado para acordar.
•	MULHER: O Conde Drácula providenciou isso para todos os quartos.
•	(GRITA) Onde está o botão de soneca? Não haverá soneca. A festa é hoje.
•	(GRITA) Ooh, sim, perfeito.
•	(DANÇA BATIDA TOCANDO
•	Murray: ♪ Garota ♪ Não acredito que é sua grande noite ♪ Você comeu seus sapos, agora a festa está ótima ♪ Para onde foi o tempo, garota? ♪ E, garota, você costumava chupar uma chupeta ♪ Olhe para você agora ♪ Você está sugando sangue direto da vaca ♪
•	Johnny: Uau. Você está linda.
•	Mavis: Obrigada. Obrigada pela festa.
•	Johnny: É, você gosta dos meus pequenos toques?
•	Mavis: É incrível.
•	Festa fantástica.
•	Você realmente se superou, Drac.
•	Deve ser o melhor que já fui nos últimos 500 anos.
•	??: (MÚSICA DANÇANTE TOCANDO) (RUGINDO)
•	Johnny: [para o Sr. Pé Grande] Desculpe, grandão! [para Mavis, que está se aproximando dele para poder beijá-lo] Hum, Mavis, estou loucamente assustado agora.
•	Mavis: [amorosamente] Talvez isso seja uma coisa boa. [beija-o]
•	Drac: [Uma armadura o alerta sobre Mavis beijando Jonathan, e ele fica furioso; então rapidamente os separa] Como você pôde?! Depois que eu compartilhei minha dor com você?!
•	Johnny: [assustado] Mas-- Não--
•	Mavis: Pai, foi só um beijo.
•	Drac: Não, vocês não têm permissão para beijar!
•	Mavis: Pai, eu tenho permissão para fazer coisas. Não tenho mais 83 anos. Tenho permissão para gostar de pessoas ou ir ver o mundo novamente.
•	Drac: O quê?! Você viu! Você-você disse que não gostou!
•	Mavis: Talvez eu queira dar outra chance à vila. Preciso aprender, sabe, a lidar com isso como Johnny faz.
•	Drac: Não, não, você não pode ir para a vila novamente!
•	Mavis: Talvez você possa fazê-los ver que podemos ser amigos.
•	Drac: Não, isso não é possível!
•	Mavis: Bem, você não pode ter certeza. Tudo depende de como você se apresenta!
•	Drac: Não, isso não fará diferença!
•	Mavis: Como você sabe?
•	Drac: Porque isso não vai acontecer!
•	Mavis: Por que, por que não?!
•	Drac: PORQUE AQUELA VILA NÃO EXISTE REALMENTE! [ A música para e Mavis e os outros monstros agora estão em estado de choque; uma corda da guitarra de Frank se rompe. ]
•	Mavis: O que você quer dizer com... "não existe"?
•	Frank: [ Ele e os outros se aproximam do Drácula ] O que você fez?!
•	Drac: Eu-- [ definitivamente ] eu fiz o que tinha que fazer.
•	Mavis: [ exigente ] O que foi? O que exatamente você teve que fazer? Me diga !
•	Drac: Eu-- eu construí a cidade, a equipe montou tudo, os... os zumbis se vestiram como os moradores da cidade. [ os zumbis grunhem, 'Uh-oh'. Mavis vagueia de coração partido, e Drácula a segue ] Por favor, se você realmente fosse lá e algo acontecesse com você, eu... eu simplesmente não conseguiria viver comigo mesmo!
•	Mavis: Mas você conseguiria viver com isso? Mentir para mim? Me enganar? Me manter aqui para sempre quando você sabia que meu sonho era ir?
•	[Drácula abre a boca para dizer algo, mas um ruído abafado é ouvido]
•	Quasi: [ entra no salão de baile ] Mentiroso-! Mentiroso-!
•	[Drácula faz uma cara de Uh-oh]
•	Murray: ... Óleo?
•	Quasi: Uh-uh-uh-! [ Fala abafada ]
•	Eunice: Inglês, por favor. Sua voz é realmente irritante.
•	Fly: Espere. Eu falo Frozen. Ele diz: "Drácula trouxe um humano para o hotel."
•	[ A multidão suspira ]
•	Esposa Gremlin: Uma humana?!
•	Marido Gremlin: [ abraça-a ] Fique por perto, Pookie!
•	[ Quasimodo tem outro discurso abafado ]
•	Fly: Ele diz: "Lá está o humano." Ele tem sotaque francês.
•	[ Johnny começa a sair pelas portas, mas elas se fecham e ele vê Esmeralda rosnando como um cachorro na frente dele; Johnny, Drácula e outros monstros ficam boquiabertos ]
•	Frankenstein: Johnny não é humano. Ele é primo do meu braço direito. Ele está mentindo!
•	Grifo: Sim. E por que ele está cutucando o nariz?
•	[ Quasimodo tem outro discurso abafado ]
•	Fly: Ele diz: "É uma longa história."
•	Johnny: [ para Esmeralda, que está correndo loucamente em seu rosto e cabelo ] Ei! Espere! Não! Sai de cima de mim! Eca! [Esmeralda grita, enquanto limpa a maquiagem de Johnny, acabando completamente com seu disfarce.]
•	[Quasimodo tem outro discurso abafado]
•	Mosca: Ele diz: "Eis o humano!"
•	[ A multidão inteira grita e corre em pânico ]
•	Frankenstein: [horrorizado] Não acredito.
•	[Entre os monstros em pânico, Mavis se aproxima dele, enquanto ele faz uma expressão preocupada e arrependida]
•	Mavis: É verdade? Você é humano?
•	Johnny: [culpado] Simmmmm... Sinto muito.
•	Mavis: [o abraça amorosamente] Eu não me importo! Eu ainda quero ficar com você.
•	Johnny: [ suspira aliviado e quer abraçá-la de volta até ver Drácula parecendo realmente preocupado, e ele se lembra do que disse a ele antes ] Uh... Bem, difícil! Porque eu não quero ficar com você. Porque... você é um monstro! [ Mavis suspira em choque ] E eu odeio monstros! [ Vai até a porta ] Adeus! [ Quando ele sai, ele assusta Murray ao tentar dar-lhe um chute de Bruce Lee ]
•	Murray: Por favor, não me machuque!
•	[ Jonathan dá a Mavis um último olhar de ódio e desgosto e sai pela porta. Drácula tenta confortar a desolada Mavis, mas ela se vira furiosamente e o encara ]
•	Mavis: A culpa é toda sua!
•	[ Ela se transforma em um morcego e foge da sala, deixando Drácula se sentindo mal por ela. Os outros monstros, também bravos com Drácula por suas mentiras, saem da sala, assim como ]
•	Monstro nº 1: Vamos sair daqui!
•	Monstro #2: Nunca mais volto aqui!
•	Monstro #3: "Sem humanos"?! Que rasgo!
•	Monstro #4: Achei que senti o cheiro de um humano.
•	Monstro #5: Ah sim, máquina de gelo? Também quebrada!
•	(MÚSICA TRISTE DE MARIACHI TOCANDO)
•	Cabeça encolhida: Oh. Lá vem ele. Conde Crock-ula. Só estou feliz que meus olhos estejam costurados, porque eu nem quero...
•	Drac: Mavis, querida, você está aí? Mavis? Mavis? Mavis, onde você está? Mavis?
•	Mavis: Pai, você pode me fazer um favor?
•	Drac: Sim, sim, claro, querida. Qualquer coisa.
•	Mavis: Você vai apagar minha mente?
•	Drac: Não, não, não, não. Não, não farei isso. Há muita coisa que quero que você se lembre.
•	Mavis: Você estava certo, pai. Os humanos nos odeiam.
•	Drac: Querida, há tantos monstros elegíveis por aí. Você é tão jovem para... O que é? O que você está lendo?
•	Martha: "Dois morcegos solitários caíram na noite.
•	"Eles sentiram um Zing. Amor à primeira vista.
•	"Eles souberam naquele momento que seriam marido e mulher.
•	"Porque um Zing só acontece uma vez na vida.
•	"Seu Zing vai chegar, meu amor.
•	"Aprecie isso.
•	"Amor, mamãe."
•	Mavis: Achei que tivéssemos feito Zing, pai.
•	Drac: (SUSPIRO) Você e Johnny?
•	Mavis: Acho que foi só eu. Mas você deveria estar feliz, pai. Não há razão para eu ir embora. Não tenho mais sonhos. Sou igual a você agora.
•	Drac: Martha, o que eu fiz?
•	Onde está minha conta? Aqui. Sou o próximo.
•	Vou fazer o checkout.
•	Pegue minha chave! Pegue minha chave! O que é essa cobrança do minibar? Querida, as crianças jogaram o minibar pela janela.
•	E isso é culpa nossa? Bem…
•	Com licença! Com licença, sim.
•	Com licença, tenho algumas pessoas para entregar correspondência expressa.
•	Drac: Amigos, por favor, parem.
•	É tarde demais, seu rato-morcego!
•	Drac: Por favor, eu estou te implorando. Preciso que você me ajude a encontrar Johnny.
•	O humano? Ele poderia ter nos matado!
•	Murray: Ele tocou na minha guitarra!
•	Griffin: Ele colocou a mão na minha boca para ver se ela desaparecia.
•	Gremlin Idoso: Ele me deixou comer sua SCOOTER!
•	Drac: Eu sei que menti. Eu estava errado. Mas você tem que acreditar nisso: Johnny não era um cara mau. A verdade é que eu nem sei se os humanos são maus ainda. Frank, vamos lá, amigo. Você entende.
•	Eunice: Ele não está falando com você. Primeiro você nos diz que os humanos são maus, agora eles são bons. O que mais? Cima é baixo, frio é quente, gremlins não cheiram.
•	Homem Gremlin: Ei!
•	Frank: Eu realmente gostava do Johnny, primo ou não. Ele contava histórias divertidas.
•	Drac: Acho que eles fizeram Zing.
•	AMBOS: Eles vibraram?
•	Drac: Mas eu atrapalhei.
•	Você só faz Zing uma vez na vida.
•	Nossa, agora você está causando um curto-circuito.
•	Eu não ligo!
•	Griffin: Bem, o que estamos fazendo? Vamos pegar o Johnny. Vamos! Sim, vamos fazer isso! Vamos! Sim! Ok, ok, para onde estou indo?
•	Drac: O mundo humano, antes de Johnny partir para sempre.
•	Mas e o sol?
•	Drac: Não sei. Vou ter que ir.
•	Ele simplesmente rola. Rolagem.
•	Drac: Então seguimos as pegadas dele. Quando elas acabam, é aí que você entra, Wayne.
•	Wayne: Eu? Ali!
•	Drac: Sim, eu sabia que algo cairia daquela mochila. Uau! Isso fede! Faça sua mágica.
•	Wayne: Espera, você quer que eu rastreie o cheiro? Não. Meus dias de rastreamento de cheiros já ficaram para trás. Você sabe quantas fraldas eu troquei? Quantos número dois destruíram essa coisa? Mas... ( assobios )
•	(INAUDÍVEL)
•	Wayne: Ei! Calma! Cuidado! Sente-se. Cheire. Eu disse cheire. Não eu, a camisa! A camisa!
•	Drac: Algum dos seus filhos ainda respeita você?
•	Wayne: Mm, me dê um segundo. Ah, sim. Winnie! Na frente e no centro!
•	Winnie: Ele entrou em um carro. Um Fiat 86. Precisa de um pequeno trabalho na transmissão, mas, de resto, está tudo bem. Ele passou pela cidade até o aeroporto. Voo 497. Partida às 8:00 da manhã.
•	Drac: Isso é em 15 minutos.
•	Winnie: Assento 23A. Ele pediu a refeição vegetariana.
•	Ok, obrigada, gatinha.
•	Agora, todos vocês, voltem para sua mãe! Ovelhas!
•	Griffin: Toca aqui! Não me deixe esperando.
•	Murray: Muitas ovelhas!
•	Wayne: Eu entendi essa.
•	(WAYNE ROSNA E COMENDO)
•	Wayne: O quê? Agora não tem nenhuma ovelha na estrada. Vamos lá.
•	Murray: Isso foi muito irado, cara.
•	Wayne: Você come costeletas de cordeiro, é a mesma coisa. Não temos tempo para isso. Vamos, vamos logo!
•	Olha, um humano.
•	Bem-vindo à Transilvânia! (UIVA) Isso foi alucinante.
•	Wayne: Festival de Monstros? O que é um Festival de Monstros? Eles sabiam que estávamos chegando? (GEMENDO) Eles gostam de nós? Sério? Com licença? Você sabe qual é o melhor caminho para o aeroporto? Sim, companheiro Drácula. Só tem um caminho, bleh bleh bleh.
•	Mas está tudo bloqueado. Nunca chegaremos a tempo.
•	Você deveria ter saído uma hora mais cedo, blá blá blá.
•	Drac: Eu não digo "bleh bleh bleh"! Tudo bem, vamos correr por ele a pé.
•	Drac, isso vai te proteger.
•	Bl-bl-bl.
•	Imagine se esse cara soubesse que estava falando com o verdadeiro Drácula.
•	Ele correria para as colinas! Espere, agora. Espere, agora.
•	Isso parece perfeito.
•	Mas a única maneira de eles nos conhecerem de verdade é se mostrarmos quem somos de verdade.
•	Isso pode funcionar.
•	Você quer dizer, tipo, assustá-los? Não assustamos as pessoas há séculos.
•	Acho que nem tenho mais forças para isso.
•	(GEMENDO) Não tenho nada. Realmente não tenho nada.
•	Griffin: Vamos logo com isso.
•	(GRITA) Fogo! Fogo! Fogo! (RUGINDO)
•	Frankenstein: Estou tentando te assustar! O verdadeiro Frankenstein!
•	Homem: Nós sabemos! Nós te amamos! Você pode autografar minha tocha?
•	Frankenstein: Escute, antes de mais nada, lá embaixo está o verdadeiro Drácula!
•	Homem 2: Prove. Tudo bem. Continue.
•	A filha de Drac está apaixonada, e ele tem que ir para o aeroporto! E ele não consegue passar por essa multidão! Por que ele não voa? O sol, seu idiota. Ele é um vampiro.
•	Isso mesmo. Obrigado, Monster Nerd.
•	Então, pessoal, se vocês realmente são nossos amigos, abram caminho para o homem! Certo. Todos os Dráculas, alinhem-se. Bleh, bleh-bleh.
•	Todos os outros, levantem as capas. Protejam nosso amigo, bleh bleh bleh.
•	É tudo para você, amigo.
•	Vá em frente.
•	Boa sorte! Vá pegá-los! Vai, Drac, vai! Vai, Drac! Vai, Drac! Vai, Drac! Vai, Drac! Vai, Drac! Vai pegá-los! Vai, Drac, vai! Nós te amamos, Drácula! Não há escolha.
•	Ai. Ai, ai, ai.
•	Certo. Certo, preciso fazer isso.
•	Drac: Jonathan! Jonathan, você pode me ouvir?! [vê um filme de Crepúsculo no avião]
•	Edward: Diga-me, você sonha em ser um vampiro?
•	Drac: É assim que somos representados. Inacreditável. Jonathan! Jonathan, você consegue me ouvir?!
•	Jonathan: [percebe] Uau, morcego! Espera, ele está falando. Drácula, é você?
•	Drac: [falando do outro lado] Sinto muito!
•	Jonathan: Hein? Drácula-- [do lado do Drácula] Não consigo entender você!
•	Drac: O quê, "minha mão está em um sapato bege"?
•	Jonathan: [do seu lado] O quê, "o Japão está comendo ensopado de cordeiro"? [Drácula abaixa os ombros e faz uma cara irritada. Isso não está funcionando] Ei, você sabia que está fumando?
•	[Drácula voa em direção ao para-brisa do avião para fazer um anúncio para Jonathan]
•	Piloto: Que diabos? Como um morcego chegou tão alto? Pessoal, vou ligar o sinal do cinto de segurança só por precaução enquanto nós- [ Drácula usa seus poderes mágicos para dizer ao piloto que ele quer assumir sua voz ] Enquanto ouvimos um anúncio especial para meu querido amigo Jonathan.
•	Jonathan: Drácula?
•	Piloto ( Drácula ): Meu querido garoto, cometi um erro terrível. Eu estava tentando manter meu bebê para mim, porque eu sabia que sempre a protegeria... mas agora percebo que as crianças precisam descobrir as coisas por si mesmas. Elas tropeçarão e cairão, rirão e chorarão, mas a vida é assim. A verdade é... você e Mavis foram feitos um para o outro. Você arrasou! Se ela deve confiar em outra pessoa, sou grato por ser você, Jonathan. Espero que você possa me ouvir e me perdoar.
•	Multidão do Avião: [vê Drácula em forma de morcego do lado de fora da janela] Ahhhhh! [ Jonathan vê Drácula do lado de fora da janela também, e lhe dá um sorriso e um sinal de positivo para mostrar sua aceitação do pedido de desculpas de Drácula; Drácula também sorri ]
•	Piloto: [ainda manipulado por Drácula] Certo, pessoal, vamos dar uma volta rápida para... reabastecer, e então voltaremos ao nosso caminho. [a multidão geme com raiva] Parem de choramingar! Estou queimando aqui fora!
•	Mavis: Pai? (GEME)
•	Drácula: Estou bem. Só estou um pouco queimado de sol.
•	Querida, sempre pensei que a pior coisa seria ver você partir.
•	Mas o pior é ver você infeliz.
•	Mavey, quero que você viva sua vida.
•	(SUSPIRA) Não sei como vou fazer isso.
•	Drac: Sabe, a mamãe já te deu o presente de aniversário dela. Posso te dar o meu agora? [mostra para Mavis uma mochila preta e rosa com o logotipo do hotel]
•	Mavis: [confusa] Para que preciso disso?
•	Drac: Ah, vem com um acessório. [vira a mochila e revela um Jonathan sorridente]
•	Mavis: [chocada] Você?
•	Jonathan: [amorosamente] Você.
•	Mavis: Por que você voltou?
•	Jonathan: Porque você é minha alegria, Mavis.
•	Mavis: [surpresa] Eu sou seu zing? Mas... você me disse que odeia monstros.
•	Jonathan: Sim, bem, eu estava com medo de que seu pai sugasse todo o sangue do meu corpo se eu não dissesse isso.
•	Drac: [ri nervosamente] Eu não teria! Eu– [derrotado] Não, ele está certo, eu teria feito isso...
•	Mavis: Pai!
•	Drac: Eu estava errado, Devil-chops.
•	Mavis: Você realmente fala sério, pai?
•	Drac: Vá criar seu próprio paraíso.
•	Jonathan: Podemos tentar aquele beijo de novo?
•	Mavis: [risos] Acho que podemos.
•	[Mavis e Jonathan se inclinam para se beijar, mas são interrompidos por Drácula rosnando com sua cara de monstro e os dois o encaram sem expressão]
•	Drac: [parecendo envergonhado] Desculpe! Eu– eu só... eu tenho que me acostumar com isso. Agora vá. Faça... faça o que tem que fazer. [sai apressadamente enquanto Mavis e Jonathan dão seu melhor beijo]
•	(ABAFADO) Pare! Pare!
(TOCANDO BATIDA DE HIP HOP)
Johnny: ♪ Eu pensei que tinha encontrado um amor, mas ela era apenas uma aventura
♪ E então eu conheci uma garota e senti algo diferente
♪ É como se você fosse atingido no ringue Como se você fosse puxado por uma corda
♪ Não consigo respirar como se estivesse engasgado com uma asa de frango
♪ Era uma coisa chamada Zing e eu queria cantar
♪ E ouvir baladas do homem chamado Sting
♪ A moça olha nos seus olhos e de repente é primavera
♪ Como quando Nala olhou para Simba em O Rei Leão ♪

♪ Zingando no ar e eu não me importo
♪ Estou voando do Zing que compartilhamos
♪ Zingando na chuva Agora não estou sentindo dor
♪ É um momento real para comemorar
♪ Porque você é meu Zing
•	Johnny: Drac, você está pronto para lutar?
•	Drac: Não, não, eu só cheguei mais perto para te ouvir melhor.
•	Joãozinho: Vamos lá, experimente.
•	Drac: Tudo bem, talvez só um pouco.
Drac: ♪ Então ouçam todos vocês, Zingers, daqui até Pequim
♪ É melhor vocês quebrarem a caixa de molas Preparem-se para se agarrar
♪ Porque se amor fosse dinheiro vocês estariam gritando cha-ching
♪ Ao lado de um Zing, a flecha do cupido é uma pequena picada de abelha
♪ Era um Zing e um zang e um zingidy-dee
♪ E só havia uma mulher no Zing para mim
♪ Porque quando você é atingido pelo Zing É melhor você saber de uma coisa
♪ O único brilho que você vai atirar ♪ É uma aliança de casamento

♪ Zingando no ar
♪ Agora eu não me importo
♪ Estou voando do Zing que compartilhamos
♪ Zingando na chuva Agora não estou sentindo dor
♪ É um momento real para comemorar
♪ Porque você é meu Zing

Drac: ♪ Sintam o Zing, pessoal, Ba-da-bing, pessoal
♪ Vou tirar vocês do ringue, pessoal
♪ É melhor trazerem, pessoal, Happenin', pessoal
♪ Prestem atenção no rei morto-vivo, pessoal! ♪

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
