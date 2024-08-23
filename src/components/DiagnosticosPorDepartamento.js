import React, { useState, useEffect } from 'react';
import { Chart, Series, ArgumentAxis, ValueAxis, Legend, Tooltip } from 'devextreme-react/chart';
import api from '../api';

const DiagnosticosPorDepartamento = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/diagnosticos/por-departamento')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h3>Diagnósticos por Departamento</h3>
      <Chart dataSource={data}>
        <ArgumentAxis />
        <ValueAxis />
        <Series
          valueField="total"
          argumentField="departamento"
          name="Diagnósticos"
          type="bar"
          color="#ffaa66"
        />
        <Legend verticalAlignment="bottom" horizontalAlignment="center" />
        <Tooltip enabled={true} />
      </Chart>
    </div>
  );
};

export default DiagnosticosPorDepartamento;
