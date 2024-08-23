import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';
import api from '../api';

const TotalPacientesPorDepartamento = ({ departamento }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    api.get('/pacientes/por-departamento')
      .then(response => {
        const data = response.data.find(item => item.departamento.nombre === departamento);
        if (data) {
          setTotal(data.total);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [departamento]);

  return (
    <MetricCard
      title={`Total Pacientes en ${departamento}`}
      value={total}
      icon={<i className="fas fa-user-injured"></i>}
    />
  );
};

export default TotalPacientesPorDepartamento;
