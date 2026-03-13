export function Heading({ children }) {
  let corFinal = 'black';

  if (children.includes('Lucro')) {
    corFinal = 'blue';
  } else if (children.includes('Prejuízo')) {
    corFinal = 'red';
  }

  return <h2 style={{ color: corFinal }}>{children}</h2>;
}