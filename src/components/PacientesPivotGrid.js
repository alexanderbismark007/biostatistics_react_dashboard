import React, { useState, useEffect } from 'react';
import PivotGrid, {
  FieldChooser,
  Export,
  FieldPanel
} from 'devextreme-react/pivot-grid';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import api from '../api';

const PacientesPivotGrid = () => {
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    api.get('/pacientes/por-grupo-etario')
      .then(response => {
        const data = response.data;
        const pivotDataSource = new PivotGridDataSource({
          fields: [
            {
              caption: 'Grupo Etario',
              width: 120,
              dataField: 'grupo_etario.nombre',
              area: 'row',
            },
            {
              caption: 'Total',
              dataField: 'total',
              dataType: 'number',
              summaryType: 'sum',
              area: 'data',
            },
          ],
          store: data,
        });
        setDataSource(pivotDataSource);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h3>Pacientes por Grupo Etario - Pivot Grid</h3>
      {dataSource && (
        <PivotGrid
          dataSource={dataSource}
          allowSortingBySummary={true}
          allowFiltering={true}
          showBorders={true}
          height={440}
        >
          <Export enabled={true} />
          <FieldChooser enabled={true} />
          {/* <FieldPanel visible={true} /> */}
          <FieldPanel showColumnFields={true} showDataFields={true} showFilterFields={true} showRowFields={true} /> 
        </PivotGrid>
      )}
    </div>
  );
};

export default PacientesPivotGrid;
