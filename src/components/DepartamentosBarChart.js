import React, { useState, useEffect } from 'react';
import { Chart, Series, ArgumentAxis, Label, ValueAxis } from 'devextreme-react/chart';
import api from '../api';

const DepartamentosBarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/pacientes/por-departamento')
      .then(response => {
        const transformedData = response.data.map(item => ({
          departamento: item.departamento.nombre,
          total: item.total,
        }));
        //console.log(transformedData); // Verifica los datos transformados en la consola
        setData(transformedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h3>Pacientes por Departamento</h3>
      <Chart dataSource={data}>
        <ArgumentAxis>
          <Label rotationAngle={45} />
        </ArgumentAxis>
        <ValueAxis>
          <Label />
        </ValueAxis>
        <Series
          valueField="total"
          argumentField="departamento" 
          name="Pacientes"
          type="spline"
          color="#6b71c3"
        />
      </Chart>
    </div>
  );
};

export default DepartamentosBarChart;
