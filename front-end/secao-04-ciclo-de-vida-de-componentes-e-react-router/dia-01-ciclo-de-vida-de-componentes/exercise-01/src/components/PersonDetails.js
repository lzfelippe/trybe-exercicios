import React, { Component } from 'react';
import Loading from './Loading';
import PersonCard from './PersonalCard';

class PersonDetails extends Component {
// estado da aplicação
    state = {
      person: [],
      loading: true
    };

// faz a chamada da função apos montar o componente
  componentDidMount() {
    const url = 'https://api.randomuser.me/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          person: data.results,
          loading: false
        });
      });
  }

// faz a verificação se a idade da pessoa for maior que 50 não é exibida na tela
  shouldComponentUpdate(_nextProps, nextState) {
    console.log(nextState.person[0].dob.age);
    const AGE = 50;
    if (nextState.person[0].dob.age < AGE) return true;
  }

// função para acessar as propriedades especificas do retorno da API
  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.large,
    };
  }

  render() {
    const { loading, person } = this.state; // pega do estado essas propriedades
    console.log(person);
    
    if (loading) return <Loading />;
    return (
      <div>
        <PersonCard 
          person={this.getUserElements(person[0])}/>
      </div>
    );
  }
}

export default PersonDetails;