import React, { useState, useEffect } from 'react';
import { Chart, Series, ArgumentAxis, ValueAxis, Legend, Tooltip } from 'devextreme-react/chart';
import api from '../api';

const DiagnosticosLineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/diagnosticos/por-tipo')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h3>Diagnósticos por Tipo</h3>
      <Chart dataSource={data}>
        <ArgumentAxis>
          <ValueAxis />
        </ArgumentAxis>
        <Series
          valueField="total"
          argumentField="diagnostico" 
          name="Diagnósticos"
          type="line"
          color="#ffaa66"
        />
        <Legend verticalAlignment="bottom" horizontalAlignment="center" />
        <Tooltip enabled={true} />
      </Chart>
    </div>
  );
};

export default DiagnosticosLineChart;
