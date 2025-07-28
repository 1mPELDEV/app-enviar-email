import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [dataCompra, setDataCompra] = useState('');
  const [store, setStore] = useState('');
  const [price, setPrice] = useState('');
  const [descricption, setDescription] = useState('');
  const [comprovante, setComprovante] = useState(null);
  const [mensagem, setMensagem] = useState('');

  function gerarEmail() {
    const email = `Prezado Almir, espero que esteja bem.

Estou enviando o comprovante/ cupom referente a compra feita no dia ${dataCompra}.

${store}
Valor:R$${price}
Descrição de materiais: ${descricption}

Por favor encontre anexado o cupom PDF.

agradeço a atenção.


Atenciosamente,

Pedro Felipe
(74)999105013
pedro.alves@olma.com.br `;
    console.log(email);
    setMensagem(email);
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setComprovante(file);
    }}

  return (
    <>
     <form action="">
      <div>
        <label htmlFor="date">data:</label>
          <input 
           type="date"
           name='data'
           id='data'
           placeholder='data da compra:'
           onChange={(e) => setDataCompra(e.target.value)}
           />
      </div>
      <div>
        <label htmlFor="store">loja:</label>
          <input 
           type="text"
           name='store'
           id='store'
           placeholder='qual foi a loja?'
           onChange={(e) => setStore(e.target.value)}
           />
      </div>
      <div>
        <label htmlFor="price">valor:</label>
          <input 
           type="text"
           name='price'
           id='price'
           placeholder='qual foi o valor?'
           onChange={(e) => setPrice(e.target.value)}           
           />
      </div>
      <div>
        <label htmlFor="descricption">descrição</label>
          <input 
           type="textarea"
           name='descricption'
           id='descricption'
           placeholder='justifique a compra:'
           onChange={(e) => setDescription(e.target.value)}

            />
      </div>
      <div>
        <label htmlFor="file">Comprovante PDF</label>
          <input 
           type="file"
           name='file'
           id='file'
           accept=".pdf,image/*" onChange={handleFileChange}
           />

          {comprovante && (
          <p style={{ color: 'green' }}>
          📎 Arquivo selecionado: <strong>{comprovante.name}</strong>
          </p>
      )}
      </div>
      <button type="button" onClick={gerarEmail}>Gerar Email</button>
      <button onClick={copiarMensagem} disabled={!mensagem}>Copiar mensagem</button>

      {mensagem && (
        <div style={{ marginTop: '1rem', whiteSpace: 'pre-line', border: '1px solid #ccc', padding: '1rem' }}>
          <strong>Mensagem gerada:</strong><br />
          {mensagem}
        </div>)}
        

     </form>
     <p>{mensagem}</p>
    </>
  )
}

export default App
