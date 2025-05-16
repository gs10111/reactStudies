import logo from './logo.svg';
import './App.css';
import Comentario from './components/Comentario';
import React, { Component } from 'react';



class App extends Component {
  state = {


    comentarios: [{
      nome: 'Joao',
      email: 'aaaa@gmail.com',
      data: new Date(2020, 3, 19),
      mensagem: 'ola tudo bem?'
    },
    {
      nome: 'guilherme',
      email: 'gui@gmail.com',
      data: new Date(2020, 5, 12),
      menssagem: 'blibli'
    },
    ],

    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }

  }


  adicionarComentario = (evento) => {

    evento.preventDefault()
    const novoComentario =  {...this.state.novoComentario, data: new Date()}
    
    console.log('adicionar comentario')

    this.setState({ comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {nome: '', email: '', mensagem: ''}
     })

  }

  removerComentario = comentario =>{
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)

    this.setState({comentarios: lista})

  }
  digitacao = evento => {
    console.log('digitacao')
    const {name, value} = evento.target;
    this.setState({novoComentario : {...this.state.novoComentario, [name]:value}})
  }
  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>
        {this.state.comentarios.map((comentario, indice) =>
          <Comentario
            key={indice}
            name={comentario.nome}
            email={comentario.email}
            data={comentario.data}
            onRemove={this.removerComentario.bind(this,comentario)}
          >
            {comentario.mensagem}

          </Comentario>
        )}

        <form className='NovoComentario' method='post' onSubmit={this.adicionarComentario}>
          <h2>Adicionar Comentario</h2>
          <div>
            <input
              type="text"
              name="nome" 
              placeholder='digite seu nome'
              onChange={this.digitacao}
              required
              value={this.state.novoComentario.nome}>

            </input>
          </div>
          <div>
            <input type="email"
              name="email"
              placeholder='digite seu email'
              onChange={this.digitacao}
              required
              value={this.state.novoComentario.email}>
            </input>
          </div>
          <div>
            <textarea
            type="textarea" 
            name="mensagem" 
            onChange={this.digitacao}
            placeholder='bananasplit'
            value={this.state.novoComentario.mensagem}
            required
            rows="4"></textarea>
          </div>
          <button type="submit" >add comentario</button>

        </form>

      </div>
    );
  }
}
export default App;
