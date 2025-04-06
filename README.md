# Batalha Épica: Jogadores vs. Os Colegas

Essa aplicação JavaScript é um mini-jogo interativo onde você forma um time com 3 personagens personalizados para enfrentar um grupo aleatório dos "colegas" da internet em uma disputa de força no Cabo de Guerra.

## 🎮 Como funciona

A função `jogar()` executa a lógica principal do jogo. Aqui está um resumo das etapas:

### 🧍‍♂️ Seleção de Jogadores:

- O usuário insere o nome de 3 personagens do seu time.
- Os nomes são validados para conter apenas letras (incluindo acentuação) e no mínimo 2 caracteres.
- Nomes inválidos encerram o jogo com um alerta.

### 🎲 Sorteio dos Colegas:

- O código seleciona aleatoriamente 3 personagens de uma base de dados dos "colegas" da noitada.
- Cada colega possui uma descrição cômica e uma fala característica, dando mais personalidade ao jogo.

### 🎤 Apresentação dos times:

- Um anúncio dramático e teatral apresenta os dois lados:
  - Os **Jogadores mortais**, criados pelo usuário.
  - Os **Colegas streamers**, sorteados aleatoriamente.

### 💪 Força Aleatória:

- Todos os personagens (jogadores e colegas) recebem uma força aleatória entre 1 e 100.
- Essa força define o resultado da batalha.

## ⚔️ Batalha e Resultado:

- As forças dos dois times são somadas e comparadas.
- O time com maior força total vence.
- O mais forte e o azarado de cada time recebem destaque na história.

## ✨ Exemplos de Colegas

- **Alanzoka**: *Aquele streamer lá que fuma cigarro 🚬*
  
  `"Nextage né, bebê?"`

- **Mount**: *Famoso por usar da verdinha 🌿🍃*
  
  `"Eu não fumo maconha!! Só de vez em quando..."` 

- **Cap**: *Fundador do Primeiro Comando do Bong 🚬*
  
  `"Cadê o bong, seus imbecis?!"`

- **Mr. Fall**: *Autoproclamado CEO of Sex 😎🔥*
  
  `"Vem... Vem Pro Meu Mercado."` 

- **Cellbit**: *O mestre do RPG e dos enigmas 🧩📖*
  
  `"Enigma do medo."`  

## 🧠 Tecnologias utilizadas

- **JavaScript, Html e CSS**
- Funções nativas do navegador:
  - `prompt()` para entrada de nomes
  - `alert()` para narração e resultado
- **Regex** simples para validação de nomes
- **Math.random()** para sorteio e geração da força

---

🧪 Esse jogo é um ótimo exemplo de como usar lógica básica de JavaScript para criar interações divertidas com o usuário. Ideal para quem está aprendendo programação de forma leve e criativa!
