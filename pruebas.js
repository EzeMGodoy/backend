const sumar = (a, b) => a + b;

const resultado = (a, b, operacion) => {
  return operacion(a, b);
};

const resultadoSuma = resultado(5, 5, sumar);

console.log(resultadoSuma);
