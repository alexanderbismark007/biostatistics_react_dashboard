import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';
import api from '../api';

const PorcentajePacientesConEnfermedad = ({ enfermedad }) => {
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    api.get(`/diagnosticos/por-tipo`)
      .then(response => {
        const totalPacientes = response.data.reduce((acc, curr) => acc + curr.total, 0);
        const enfermedadData = response.data.find(item => item.diagnostico === enfermedad);
        if (enfermedadData) {
          setPorcentaje(((enfermedadData.total / totalPacientes) * 100).toFixed(2));
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [enfermedad]);

  return (
    <MetricCard
      title={`Porcentaje con ${enfermedad}`}
      value={`${porcentaje}%`}
      icon={<i className="fas fa-procedures"></i>}
    />
  );
};

export default PorcentajePacientesConEnfermedad;
