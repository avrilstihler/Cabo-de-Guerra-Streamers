function jogar() {
  const colegasBase = [
    {
      nome: "Alanzoka",
      descricao: "Aquele streamer lá que fuma cigarro 🚬",
      fala: '"Nextage né, bebê?"',
    },
    {
      nome: "Mount",
      descricao: "Famoso por usar da verdinha 🌿🍃",
      fala: '"Eu não fumo maconha!! Só de vez em quando..."',
    },
    {
      nome: "Cap",
      descricao: "Fundador do Primeiro Comando do Bong 🚬",
      fala: '"Cadê o bong, seus imbecis?!"',
    },
    {
      nome: "Mr. Fall",
      descricao: "Autoproclamado CEO of Sex, seduz até os pixels. 😎🔥",
      fala: '"Vem... Vem Pro Meu Mercado."',
    },
    {
      nome: "Galagol",
      descricao: "Nerd das cartas de Pokémon. 🃏",
      fala: '"Com isso, eu invoco… minha vitória!"',
    },
    {
      nome: "Dino",
      descricao:
        "O laranja do Piko Park. Desastre? Talvez. Essencial? Com certeza.",
      fala: '"Eu JURO que não vou trollar dessa vez!"',
    },
    {
      nome: "Bit",
      descricao: "Narigudo gamer do GTA 5 👃🎮",
      fala: '"Meu nariz vai dar vantagem aerodinâmica."',
    },
    {
      nome: "Calango",
      descricao: "Imitador profissional do caneta azul.",
      fala: '"Não que eu tivesse sabido... soubedo?"',
    },
    {
      nome: "Cellbit",
      descricao: "O mestre do RPG e dos enigmas 🧩📖",
      fala: '"Enigma do medo."',
    },
    {
      nome: "Felps",
      descricao: "Simplesmente… Felps 😎",
      fala: '"Eu sou o Felps."',
    },
  ];

  // Validação de nome
  const nomeJogadores = [];
  for (let i = 1; i <= 3; i++) {
    let nome = prompt(
      `Digite o nome do personagem ${i} do seu time (apenas letras, mínimo 2 caracteres):`
    );
    if (nome === null) return; // Se cancelar, sai
    nome = nome.trim();
    if (!/^[A-Za-zÀ-ÿ\s]{2,}$/.test(nome)) {
      alert("Nome inválido! Use apenas letras e no mínimo 2 caracteres.");
      return;
    }
    nomeJogadores.push({ nome });
  }

  // Escolhendo 3 personagens dos colegas (sem repetir)
  const colegasSelecionados = [];
  while (colegasSelecionados.length < 3) {
    const sorteado =
      colegasBase[Math.floor(Math.random() * colegasBase.length)];
    if (!colegasSelecionados.find((c) => c.nome === sorteado.nome)) {
      colegasSelecionados.push({ ...sorteado });
    }
  }

  // Narração lado 1
  let anuncio1 = `🟥  De um lado da corda temos... os jogadores mortais!\n`;
  nomeJogadores.forEach((j, i) => {
    anuncio1 += `\n- ${j.nome}, desafiando os streamers com seu poder de CLT!`;
  });
  alert(anuncio1);

  // Narração lado 2
  let anuncio2 = `\n🟦  Do outro lado… os temíveis COLEGAS!\n`;
  colegasSelecionados.forEach((c) => {
    anuncio2 += `\n- ${c.nome}: ${c.descricao}\n  ${c.fala}\n`;
  });
  alert(anuncio2);

  // Gerar forças e somar
  nomeJogadores.forEach((j) => (j.forca = Math.floor(Math.random() * 100) + 1));
  colegasSelecionados.forEach(
    (c) => (c.forca = Math.floor(Math.random() * 100) + 1)
  );

  const totalJogador = nomeJogadores.reduce((acc, j) => acc + j.forca, 0);
  const totalColegas = colegasSelecionados.reduce((acc, c) => acc + c.forca, 0);

  alert(
    "💥 A batalha está acontecendo... cordas rangem, músculos tremem, gritos ecoam! 💥"
  );

  // Resultado
  let mensagemFinal = "🔥 RESULTADO FINAL 🔥\n";
  if (totalJogador > totalColegas) {
    const maisForte = nomeJogadores.reduce((a, b) =>
      a.forca > b.forca ? a : b
    );
    mensagemFinal += `\n🏆Os jogadores venceram!🎊\n\n${maisForte.nome}, com sua força exuberante de ${maisForte.forca} 💪, arrastou os colegas pra lama!\n`;
    const azarado = colegasSelecionados.reduce((a, b) =>
      a.forca < b.forca ? a : b
    );
    const falhas = [
      `${azarado.nome} escorregou na hora H e ferrou com tudo! 🫠`,
      `${azarado.nome} tropeçou tentando fazer uma dancinha de TikTok! 😵‍💫`,
      `${azarado.nome} tropeçou no próprio ego e entregou a vitória de bandeja! 🤦`,
    ];
    mensagemFinal += `\n💀 ${falhas[Math.floor(Math.random() * falhas.length)]}`;
  } else if (totalColegas > totalJogador) {
    const maisForte = colegasSelecionados.reduce((a, b) =>
      a.forca > b.forca ? a : b
    );
    mensagemFinal += `\n💀 Os colegas dominaram!🏆\n\n${maisForte.nome}, com poder de ${maisForte.forca} 💪, arrastou o time dos jogadores pro abismo do fracasso!\n`;
    const azarado = nomeJogadores.reduce((a, b) => (a.forca < b.forca ? a : b));
    const falhas = [
      `${azarado.nome} se empolgou tanto que esqueceu de puxar. Imbecil. 🤦`,
      `${azarado.nome} travou bonito. Só ficou olhando. 😶🚩`,
      `${azarado.nome} tropeçou, caiu e entregou tudo pros colegas. 🫠`,
    ];
    mensagemFinal += `\n💥 ${
      falhas[Math.floor(Math.random() * falhas.length)]
    }`;
  } else {
    mensagemFinal +=
      "⚖️ EMPATE! As cordas arrebentaram de tanta força dos dois lados! BOOM 💥";
  }

  alert(mensagemFinal);
}
