import styles from './CardAtivo.module.css';

export function CardAtivo(props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.titulo}>{props.titulo}</h3>
      <div className={styles.conteudo}>
        {props.children} {/* Aqui entra o preço, variação, etc. */}
      </div>
    </div>
  );
}