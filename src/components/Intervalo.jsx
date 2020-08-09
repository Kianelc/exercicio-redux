import "./Intervalo.css";
import React from "react";

import Card from "./Card";

export default props => {
  const { min, max } = props;
  return (
    <Card title="Intervalo de Número" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={event => props.onMinChange(+event.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={event => props.onMaxChange(+event.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};
