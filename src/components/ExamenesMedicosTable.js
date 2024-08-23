import React, { useState, useEffect } from 'react';
import DataGrid, { Column, Pager, Paging } from 'devextreme-react/data-grid';
import api from '../api';

const ExamenesMedicosTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/examenes-medicos')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h3>Exámenes Médicos</h3>
      <DataGrid dataSource={data} keyExpr="id" showBorders={true}>
        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} allowedPageSizes={[10, 50, 100, 1000]} />
        <Column dataField="paciente.nombre" caption="Paciente" />
        <Column dataField="tipo_examen_medico.nombre" caption="Tipo de Examen" />
        <Column dataField="paciente.genero" caption="Genero" />
        <Column dataField="fecha" caption="Fecha" dataType="date" />
      </DataGrid>
    </div>
  );
};

export default ExamenesMedicosTable;
