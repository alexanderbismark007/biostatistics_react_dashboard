import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';
import api from '../api';

const TotalPacientesPorGrupoEtario = ({ grupoEtario }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    api.get('/pacientes/por-grupo-etario')
      .then(response => {
        const data = response.data.find(item => item.grupo_etario.nombre === grupoEtario);
        if (data) {
          setTotal(data.total);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [grupoEtario]);

  return (
    <MetricCard
      title={`Pacientes en ${grupoEtario}`}
      value={total}
      icon={<i className="fas fa-child"></i>}
    />
  );
};

export default TotalPacientesPorGrupoEtario;
