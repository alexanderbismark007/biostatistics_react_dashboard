import React, { useState, useEffect } from 'react';
import { PieChart, Series, Label, Connector, Size } from 'devextreme-react/pie-chart';
import api from '../api';

const GrupoEtarioPieChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/pacientes/por-grupo-etario')
      .then(response => {
        // Transformar los datos para que grupo_etario.nombre esté en el primer nivel
        const transformedData = response.data.map(item => ({
          nombre: item.grupo_etario.nombre,
          total: item.total,
        }));
        //console.log(transformedData); // Verificar los datos transformados en la consola
        setData(transformedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h3>Pacientes por Grupo Etario</h3>
      <PieChart dataSource={data} type="doughnut" palette="Bright">
        <Series argumentField="nombre" valueField="total">
          <Label visible={true}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Size width={500} />
      </PieChart>
    </div>
  );
};

export default GrupoEtarioPieChart;
