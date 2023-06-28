import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from '@mui/material';
import Swal from 'sweetalert2';
import "./App.css";

function App() {
  const [texto, setTexto] = useState('');
  const [cPalabras, setCPalabras] = useState(0);
  const [cCaracteres, setCCaracteres] = useState(0);

  useEffect(() =>{
    const palabras = texto.split(' ');
    setCPalabras(palabras.filter(palabra => palabra !== '').length);
    setCCaracteres(texto.length);

    if(texto.length >= 100){
      Swal.fire({
        icon: 'error',
        title: 'Ops..',
        text: 'Has alcanzado el limite de caracteres!!',
      })
    }
  }, [texto]);

  const handleCambioTexto = (e) => {
    e.preventDefault();
    setTexto(e.target.value);
  }

  const tema = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div>
      <ThemeProvider theme={tema}><CssBaseline/>
        <h1>Contador de caracteres y palabras</h1>
        <TextField inputProps={{ maxLength: 100 }} id="outlined" type="text" variant="outlined" value={texto} onChange={handleCambioTexto} max={100} label="Escribir..."/>
        <p>Cantidad de caracteres: {cCaracteres}</p>
        <p>Cantidad de palabras: {cPalabras}</p>
      </ThemeProvider>
    </div>
  );
}

export default App;
