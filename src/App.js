import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import TotalPacientesPorDepartamento from "./components/TotalPacientesPorDepartamento";
import EnfermedadMasComunPorDepartamento from "./components/EnfermedadMasComunPorDepartamento";
import TotalPacientesPorGrupoEtario from "./components/TotalPacientesPorGrupoEtario";
import PorcentajePacientesConEnfermedad from "./components/PorcentajePacientesConEnfermedad";
import DepartamentosBarChart from "./components/DepartamentosBarChart";
import GrupoEtarioPieChart from "./components/GrupoEtarioPieChart";
import ExamenesMedicosTable from "./components/ExamenesMedicosTable";
import ExamenesMedicosPivotGrid from "./components/ExamenesMedicosPivotGrid";
import DiagnosticosLineChart from "./components/DiagnosticosLineChart";
import DiagnosticosPorDepartamento from "./components/DiagnosticosPorDepartamento";
import PacientesPivotGrid from "./components/PacientesPivotGrid";

function App() {
  return (
    <Container fluid>
      {/* Primera Fila: Cuatro cards en una fila */}
      <Row className="my-4">
        <Col xs="12" md="3">
          <TotalPacientesPorDepartamento departamento="La Paz" />
        </Col>
        <Col xs="12" md="3">
          <EnfermedadMasComunPorDepartamento departamento="La Paz" />
        </Col>
        <Col xs="12" md="3">
          <TotalPacientesPorGrupoEtario grupoEtario="Adultez" />
        </Col>
        <Col xs="12" md="3">
          <PorcentajePacientesConEnfermedad enfermedad="Diabetes" />
        </Col>
      </Row>

      {/* Segunda Fila: Dos dashboards por fila */}
      <Row className="my-4">
        <Col xs="12" md="6">
          <DepartamentosBarChart />
        </Col>
        <Col xs="12" md="6">
          <GrupoEtarioPieChart />
        </Col>
      </Row>

      <Row className="my-4">
        <Col xs="12" md="6">
          <DiagnosticosLineChart />
        </Col>
        <Col xs="12" md="6">
          <ExamenesMedicosPivotGrid />
        </Col>
      </Row>

      {/* Tercera Fila: Un componente que ocupa toda la fila */}
      <Row className="my-4">
        <Col xs="12" md="6">
          <PacientesPivotGrid />
        </Col>
        <Col xs="12" md="6">
          <DiagnosticosPorDepartamento />
        </Col>
      </Row>

      <Row className="my-4">
        <Col xs="12">
          <ExamenesMedicosTable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
