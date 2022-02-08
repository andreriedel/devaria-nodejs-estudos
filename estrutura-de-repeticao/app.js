const listaArgumentos = process.argv.slice(2);

console.log('--- EXECUTANDO UM FOR ---\n');

for (let i = 0; i < listaArgumentos.length; i++) {
  console.log(`Posicao ${i} valor lido = ${listaArgumentos[i]}`);
}

console.log('\n');

/* -------------------------------------------------------------------------- */

console.log('--- EXECUTANDO UM WHILE ---\n');

let i = 0;

while (i < listaArgumentos.length) {
  console.log(`Posicao ${i} valor lido = ${listaArgumentos[i]}`);
  i++;
}

console.log('\n');

/* -------------------------------------------------------------------------- */

console.log('--- EXECUTANDO UM DO WHILE ---\n');

i = 0;

do {
  console.log(`Posicao ${i} valor lido = ${listaArgumentos[i]}`);
  i++;
} while (i < listaArgumentos.length)

console.log('\n');

/* -------------------------------------------------------------------------- */

console.log('--- EXECUTANDO UM FOR OF ---\n');

for (const argumento of listaArgumentos) {
  console.log(`Valor lido = ${argumento}`);
}
