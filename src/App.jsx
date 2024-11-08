import { useState } from 'react';
import Card from './Card';

function App() {
  const [formData, setFormData] = useState({
    titulo: '',
    autor: ''
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const tituloValid = formData.titulo.trim().length >= 3 && formData.titulo.charAt(0) !== ' ';
    const autorValid = formData.autor.length >= 6;

    if (!tituloValid || !autorValid) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    setSubmitted(true);
    setError('');
  };

  return (
    <div className="App">
      <h1>Registro de Libro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Título del Libro:
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="Ingresa el título"
              style={{ display: 'block', margin: '10px 0' }}
            />
          </label>
        </div>

        <div>
          <label>
            Autor:
            <input
              type="text"
              name="autor"
              value={formData.autor}
              onChange={handleChange}
              placeholder="Ingresa el autor"
              style={{ display: 'block', margin: '10px 0' }}
            />
          </label>
        </div>

        {error && (
          <div style={{ color: 'red', margin: '10px 0' }}>
            {error}
          </div>
        )}

        <button type="submit" style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Enviar
        </button>
      </form>

      {submitted && (
        <Card 
          titulo={formData.titulo.trim()} 
          autor={formData.autor}
        />
      )}
    </div>
  );
}

export default App;
