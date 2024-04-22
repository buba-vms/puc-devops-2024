import {React, useState} from 'react';

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loginMessage, setLoginMessage] = useState('')
    const emailCorreto = 'eduardo.lino@pucpr.br';
    const senhaCorreta = '123456';
    const [autenticado, setAutenticado] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Senha:', senha);
        // Aqui você pode adicionar lógica para enviar os dados do formulário para o servidor
        email === emailCorreto && senha === senhaCorreta? setLoginMessage('Acessado com sucesso!'): setLoginMessage('Usuário ou senha incorretos!') ;
        email === emailCorreto && senha === senhaCorreta? setAutenticado(true): setAutenticado(false) ;

    };
  return (
    <div>
      <h2>Formulário de Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{'margin-top': '4px' }}>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Acessar</button>
      </form>
      <div style={{'color': autenticado? 'green': 'red', 'margin-top': '10px'}}>
        {loginMessage}
      </div>
    </div>
  );
}

export default LoginComponent;