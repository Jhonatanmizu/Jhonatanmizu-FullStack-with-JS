const aprovados = ['jose', 'jack','juliana', 'bruna']
aprovados.forEach((nome, indice) => {
  console.log(`${indice + 1} ) ${nome}`);

});
aprovados.forEach((nome) => {
  console.log(`${nome}`);
});
aprovados.forEach(nome => console.log(nome))

const exibiraprovador = aprovado => console.log(aprovado);
aprovados.forEach((exibiraprovador) => {
});
