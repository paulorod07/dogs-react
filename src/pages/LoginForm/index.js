import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../Hooks/useForm';
import { tokenPost, userGet } from '../../service/api';

function LoginForm() {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = userGet(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log('JSON GET', json);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = tokenPost({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
      console.log('JSON POST', json);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
