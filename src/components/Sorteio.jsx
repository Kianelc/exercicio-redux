import "./Intervalo.css";
import React from "react";

import Card from "./Card";

export default props => {
  const { min, max } = props;
  const aleatorio = Math.floor(Math.random() * (max - min)) + min;
  return (
    <Card title="Sorteio de um Número" purple>
      <div className="Intervalo">
        <span>
          <span>Resultado: </span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );
};
