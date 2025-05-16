import react from 'react';
import "./Comentario.css"
import imagemUsuario from "./user.png"
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';



const Comentario = props => {
   const estilo = {
      color: "red",
      backgroundColor: "cyan",
      padding: "10px",
      margin: "10px",
      fontSize: "20px"
   }




   return (
      <div className='Comentario'>
         <img className='avatar' src={imagemUsuario} alt="{props.imagemUsuario}" />
         <div className='conteudo'>
            <h2 className='name'>{props.name}</h2>
            <p className='email'>{props.email}</p>
            <p className='mensagem'>{props.children}</p>
            <p className='data'>{formatRelative(props.data,new Date(),{locale:ptBR})}</p>
            <button onClick={props.onRemove}>X</button>
         </div>
      </div>
   )


}






export default Comentario;