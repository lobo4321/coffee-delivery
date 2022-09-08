export function convertToReal(number: number) {
  return number.toLocaleString("pt-br", { minimumFractionDigits: 2 });
}
