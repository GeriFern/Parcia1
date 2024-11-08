//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ titulo, autor }) {
  return (
    <div>
      <h2>Esto es un componente</h2>
      <p>Título: {titulo}</p>
      <p>Autor: {autor}</p>
    </div>
  );
}

export default Card;
