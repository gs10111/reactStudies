import React, { useState, useEffect } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

function Usuarios() {

  const [criado, setCriado] = useState(true)
  const [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    if(criado)
    fetch('https://reqres.in/api/users/?per_page=12',{
      // paramns: JSON.stringify({
      //   per_page:99999
      // })
  })
      .then(resposta => resposta.json())
      .then(dados => {
        const usuariosResponse = dados.data.map(usuario => ({
          id: usuario.id,
          nome: usuario.first_name,
          sobrenome: usuario.last_name,
          email: usuario.email
        }))
        setUsuarios(usuariosResponse)
        setCriado(false)
      })

  },[criado])

  const adicionarUsuario = (usuario) => {
    setUsuarios([usuariosAtuais => [...usuariosAtuais, usuario]])
    setCriado(true)
  }

  const removerUsuario = (usuario) => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      fetch(`https://reqres.in/api/users/${usuario.id}`, {
        method: 'DELETE'
      })
        .then(resposta => {
          if (resposta.ok) {
            setUsuarios(usuarios.filter(x => x.id !== usuario.id))
          }
        })
    }
  }
  return (
    <>
      <AdicionarUsuario adicionarUsuario={adicionarUsuario} />

      {usuarios.map(usuario => (
        <Usuario key={usuario.id}
          usuario={usuario}
          removerUsuario={() => removerUsuario(usuario)}
        />
      ))}
    </>
  )

}

export default Usuarios