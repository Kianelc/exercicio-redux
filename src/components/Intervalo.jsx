import "./Intervalo.css";
import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import {
  alterarNumeroMinimo,
  alterarNumeroMaximo
} from "../store/actions/numeros";

const Intervalo = props => {
  const { min, max } = props;
  return (
    <Card title="Intervalo de Número" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={event => props.alterarMin(+event.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={event => props.alterarMax(+event.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  };
};

const mapDispatchToProp = dispatch => {
  return {
    alterarMin(novoNumero) {
      // action creator -> action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMax(novoNumero) {
      // action creator -> action
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);
