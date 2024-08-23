import React, { useState, useEffect } from 'react';
import PivotGrid, {
  FieldChooser,
  FieldPanel,
  Export
} from 'devextreme-react/pivot-grid';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import api from '../api'; 

const ExamenesMedicosPivotGrid = () => {
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    api.get('/examenes-medicos') 
      .then(response => {
        console.log('Datos de la API:', response.data);
        const data = response.data;
        const pivotGridDataSource = new PivotGridDataSource({
          fields: [
            {
              caption: 'Departamento',
              dataField: 'paciente.departamento.nombre',
              area: 'row',
            },
            {
              caption: 'Grupo Etario',
              dataField: 'paciente.grupo_etario.nombre',
              area: 'row',
            },
            {
              caption: 'Tipo de Examen',
              dataField: 'tipo_examen_medico.nombre',
              area: 'column',
            },
            {
              caption: 'Resultado',
              dataField: 'resultado',
              area: 'data',
              summaryType: 'count', // Ajusta según lo que desees mostrar (count, sum, avg, etc.)
            }
          ],
          store: data
        });

        setDataSource(pivotGridDataSource);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h3>Exámenes Médicos por Departamento, Grupo Etario y Tipo</h3>
      {dataSource && (
        <PivotGrid
          dataSource={dataSource}
          allowSortingBySummary={true}
          allowFiltering={true}
          showBorders={true}
        >
          <Export enabled={true} />
          <FieldChooser enabled={true} />
          {/* <FieldPanel showColumnFields={true} showDataFields={true} showFilterFields={true} showRowFields={true} /> */}
          <FieldPanel visible={true} />
        </PivotGrid>
      )}
    </div>
  );
};

export default ExamenesMedicosPivotGrid;
