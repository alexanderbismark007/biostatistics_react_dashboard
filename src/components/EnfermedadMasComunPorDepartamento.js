import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';
import api from '../api';

const EnfermedadMasComunPorDepartamento = ({ departamento }) => {
  const [enfermedad, setEnfermedad] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    api.get('/diagnosticos/por-departamento')
      .then(response => {
        const departamentoData = response.data.filter(item => item.departamento === departamento);
        if (departamentoData.length > 0) {
          const enfermedadComun = departamentoData.reduce((prev, current) => (prev.total > current.total) ? prev : current);
          setEnfermedad(enfermedadComun.diagnostico_id);
          setTotal(enfermedadComun.total);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [departamento]);

  return (
    <MetricCard
      title={`Enfermedad Más Común en ${departamento}`}
      value={`${enfermedad} (${total} casos)`}
      icon={<i className="fas fa-virus"></i>}
    />
  );
};

export default EnfermedadMasComunPorDepartamento;
