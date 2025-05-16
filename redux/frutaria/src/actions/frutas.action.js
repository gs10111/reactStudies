import { actionsTypes } from '../constants/frutas';

const actions = {
  //acao
  adicionar: fruta => ({
    //tipo
    type: actionsTypes.ADICIONAR_FRUTA,
    //dado
    payload: fruta,
  }),
  remover: fruta => ({
    type: actionsTypes.REMOVER_FRUTA,
    payload: fruta,
  }),
};

export { actions };
