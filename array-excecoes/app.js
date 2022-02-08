try {
  const listaDeProdutosDisponiveis = [
    'Pao',
    'Leite',
    'Cafe',
    'Laranja',
    'Macarrao',
    'Sabonete',
    'Detergente'
  ];

  const listaDeArgumentos = process.argv.slice(2);

  const listaDeProdutosSolicitadosDisponiveis =
  listaDeProdutosDisponiveis.filter(produto => {
    return listaDeArgumentos.find(argumento => argumento === produto);
  });

  listaDeProdutosSolicitadosDisponiveis.forEach(produto => {
    console.log(`Temos o seguinte produto: ${produto}`);
  });

  /* ------------------------------------------------------------------------ */

  const listaDeProdutosSolicitadosNaoDisponiveis =
  listaDeArgumentos.filter(argumento => {
    return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
  });

  listaDeProdutosSolicitadosNaoDisponiveis.forEach(produto => {
    console.log(`Nao temos o seguinte produto: ${produto}`);
  });

  /* ------------------------------------------------------------------------ */

  const listaDeProdutosOrdenados = listaDeProdutosDisponiveis.sort();

  listaDeProdutosOrdenados.forEach(produto => {
    console.log(`Este produto esta disponivel: ${produto}`);
  });

}
catch (err) {
  console.log('Não foi possível executar pedido de compra');
}
