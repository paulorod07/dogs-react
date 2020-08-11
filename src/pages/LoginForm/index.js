import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../Hooks/useForm';

// import { Container } from './styles';

function LoginForm() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => console.log(json));
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {/* <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        /> */}
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
