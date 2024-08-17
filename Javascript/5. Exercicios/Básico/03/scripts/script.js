let listaAtores = [

    {
  
      nome: 'Keanu Reeves',
  
      personagem: 'Neo',
  
      filme: 'The Matrix',
  
    },
  
    {
  
      nome: 'David Prowse',
  
      personagem: 'Darth Vader',
  
      filme: 'Star Wars Episódios IV-VI',
  
    },
  
    {
  
      nome: 'Bruce Wayne',
  
      personagem: 'Batman',
  
      filme: 'Batman - O Início'
  
    },
  
  ]

  listaAtores[1].nome


  for(let contador = 0; contador < 3; contador++) {
  document.write(`
    <div class="div">
        <h1>${listaAtores[contador].nome} </h1>
        <h2>Interpreta o personagem ${listaAtores[contador].personagem} no filme ${listaAtores[contador].filme}</h2>
    </div>
  `) 
}
