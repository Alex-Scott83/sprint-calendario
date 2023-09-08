import React from 'react';
import './Notes.css';

const Notes = ({ currentWeek }) => {
  // Texto de ejemplo para cada semana
  const weeksNotes = [
    'HISTORIA: V001 - Como un visitante, quiero ver la página de inicio atractiva.',//sem 1
    'HISTORIA: V001 - Como un visitante, quiero ver la página de inicio atractiva. HISTORIA: V002 - Como un visitante, quiero ver información de contacto en el pie de página.',//sem 2
    'HISTORIA: V002 - Como un visitante, quiero ver información de contacto en el pie de página. HISTORIA: US001 - Como un usuario, quiero poder iniciar sesión en mi cuenta.',//sem 3
    'HISTORIA: US001 - Como un usuario, quiero poder iniciar sesión en mi cuenta.',//sem 4 
    'HISTORIA: US001 - Como un usuario, quiero poder iniciar sesión en mi cuenta. HISTORIA: A001 - Como un administrador, quiero tener un panel para gestionar usuarios.',//sem 5 
    'HISTORIA: A001 - Como un administrador, quiero tener un panel para gestionar usuarios.',//sem 6
    'HISTORIA: A001 - Como un administrador, quiero tener un panel para gestionar usuarios.',//sem 7
    'HISTORIA: US002 - Como un usuario, quiero seleccionar los periodos (fechas) y zonas policiales de representación de la información.',//sem 8
    'HISTORIA: US002 - Como un usuario, quiero seleccionar los periodos (fechas) y zonas policiales de representación de la información.',//sem 9
    'HISTORIA: US002 - Como un usuario, quiero seleccionar los periodos (fechas) y zonas policiales de representación de la información. HISTORIA: A002 - Como un administrador, quiero gestionar los permisos de usuario y personalizar los filtros que usarán los mismos de acuerdo a su nivel de acceso.',//sem 10
    'HISTORIA: A002 - Como un administrador, quiero gestionar los permisos de usuario y personalizar los filtros que usarán los mismos de acuerdo a su nivel de acceso.',//sem 11
    'HISTORIA: US003 - Como un usuario, quiero ver el dashboard actualizado con sus gadgets, gráficas, mapas y tablas.',//sem 12
    'HISTORIA: US003 - Como un usuario, quiero ver el dashboard actualizado con sus gadgets, gráficas, mapas y tablas.',//sem 13
    'HISTORIA: US003 - Como un usuario, quiero ver el dashboard actualizado con sus gadgets, gráficas, mapas y tablas.',//sem 14
    'HISTORIA: US003 - Como un usuario, quiero ver el dashboard actualizado con sus gadgets, gráficas, mapas y tablas.',//sem 15
    'Periodo Vacacional :).',//sem 16
    'HISTORIA: D001 - Como un desarrollador, quiero probar los niveles de seguridad del sistema.',//sem 17
    'HISTORIA: D001 - Como un desarrollador, quiero probar los niveles de seguridad del sistema.',//sem 18
    'HISTORIA: D001 - Como un desarrollador, quiero probar los niveles de seguridad del sistema.',//sem 19
    'HISTORIA: D001 - Como un desarrollador, quiero probar los niveles de seguridad del sistema.',//sem 20
    'HISTORIA: D001 - Como un desarrollador, quiero probar los niveles de seguridad del sistema.',//sem 21
  ];

  // Obtener las notas de la semana actual
  const currentWeekNotes = weeksNotes[currentWeek - 1];

  // Dividir el texto en líneas después de un punto (.)
  const lines = currentWeekNotes.split('.').map((line, index) => (
    <p key={index}>{line.trim()}</p>
  ));

  return (
    <div className="notes-container">
      <h3>Notas de la Semana {currentWeek}</h3>
      <div className="notes-content">
      {lines}
      </div>
    </div>
  );
};

export default Notes;