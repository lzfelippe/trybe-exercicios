import { Component } from 'react';

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      time: '',
      nome: '',
      sexo: '',
      texto: '',
      concorda: false

    }
  }

  handleChange = ({target}) => {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }


    render () {
        return (
            <>
            <h1>My form 1.0</h1>
            <form>
              <label>qual time você torce?
                <br/>
                <select 
                name='time'
                value={this.state.time} 
                onChange={this.handleChange}>
                  <option value='corinthians'>Corinthians</option>
                  <option value='sao-paulo'>São Paulo</option>
                  <option value='palmeiras'>Palmeiras</option>
                  <option value='santos'>Santos</option>
                </select>
                <br/>
                <br/>
              </label>

              <label>Qual seu nome?
                <br/>
                <input
                type='text'
                name='nome'
                value={this.state.nome}
                onChange={this.handleChange}
                />
              </label>

              <br/>
              <br/>

              <label 
              name='sexo'
              value={this.state.sexo}
              onChange={this.handleChange}
              >Qual seu sexo?
              <br/>
              <input name='sexo' value='masculino' type='radio'/>Masculino
              <br/>
              <input name='sexo' value='feminino' type='radio'/>Feminino
              </label>

              <br/>
              <br/>
              
              <label>Digite seu texto:
                <br/>
                <textarea
                name='texto'
                value={this.state.texto} 
                onChange={this.handleChange}
                rows='4'
                cols='30'>
                </textarea>
              </label>
              <br/>
              <label>
                <input name='concorda' onChange={this.handleChange} type='checkbox'/>Concorda com os termos?
              </label>
            </form>
            </>
        );
    }
}

export default Form;