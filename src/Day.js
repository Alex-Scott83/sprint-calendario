import React from 'react';
import './Day.css';


const Day = ({ day, startDate, currentWeek }) => {
  // Calcula la fecha correspondiente al día actual en función de startDate
  const daysToAdd = (currentWeek - 1) * 7 + (day - 1);
  const fechaActual = new Date(startDate);
  fechaActual.setDate(fechaActual.getDate() + daysToAdd);

  // Formatear la fecha en "dd/mm/aaaa"
  //const formattedDate = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;

  // Texto de ejemplo para cada semana
  const weeksData = [

       // Semana 1
    [
      'Diseño de la página.',
      'Diseño de la página.',
      'Seleccionar imágenes /Integrar imágenes.',
      'Crear estructura HTML.',
      'Crear estructura HTML.',
      'Descanso.',
      'Descanso.',
    ],
    // Semana 2
    [
      'Estilos CSS básicos.',
      'Estilos CSS básicos.',
      'Revisión de detalles.',
      'Diseño de la sección de contacto.',
      'Agregar información de contacto / Estilizar la sección contacto.',
      'Descanso.',
      'Descanso.',
    ],
    // Semana 3
    [
      'Ajustes de responsividad /  Pruebas de visualización.',
      'Diseño de la interfaz de inicio de sesión',
      'Diseño de la interfaz de inicio de sesión',
      'Crear formulario de inicio de sesión.',
      'Configuración de rutas y controladores.',
      'Descanso.',
      'Descanso.',
    ],
        // Semana 4
        [
            'Validación de datos de inicio de sesión.',
            'Integración con base de datos de usuarios.',
            'Integración con base de datos de usuarios.',
            'Implementar lógica de autenticación.',
            'Implementar lógica de autenticación.',
            'Estilizar mensajes de error/success.',
            'Descanso.',
          ],
        // Semana 5
        [
            'Pruebas de funcionamiento y seguridad.',
            'Pruebas de funcionamiento y seguridad.',
            'Diseño de la interfaz de gestión de usuarios.',
            'Diseño de la interfaz de gestión de usuarios.',
            'Crear listado de usuarios.',
            'Crear listado de usuarios.',
            'Descanso.',
          ],
     // Semana 6
     [
      'Implementar paginación en la lista.',
      'Crear formulario de edición de usuario. Conectar interfaz con el backend.',
      'Conectar interfaz con el backend.',
      'Conectar interfaz con el backend.',
      'Implementar lógica de edición en el backend.',
      'Implementar lógica de edición en el backend.',
      'Descanso.',
    ],
    // Semana 7
    [
      'Agregar opción de eliminación de usuario.',
      'Implementar lógica de eliminación en el backend.',
      'Estilizar mensajes de éxito/error.',
      'Pruebas de funcionamiento.',
      'Pruebas de funcionamiento.',
      'Descanso.',
      'Descanso.',
    ],
    // Semana 8
    [
      'Diseño de la interfaz de filtros.',
      'Diseño de la interfaz de filtros.',
      'Implementar selector de fechas.',
      'Implementar selector de fechas. Implementar selector de zonas geográficas.',
      'Implementar selector de zonas geográficas.',
      'Descanso.',
      'Descanso.',
    ],
        // Semana 9
        [
            'Configurar comunicación con el backend.',
            'Configurar comunicación con el backend.',
            'Implementar lógica de filtrado en el backend.',
            'Implementar lógica de filtrado en el backend.',
            'Almacenar configuraciones de usuario.',
            'Almacenar configuraciones de usuario.',
            'Descanso.',
          ],
        // Semana 10
        [
          'Realizar pruebas de integración.',
          'Realizar pruebas de integración.',
          'Diseño de la interfaz de gestión de permisos.',
          'Diseño de la interfaz de gestión de permisos.',
          'Crear tabla de usuarios y permisos.',
          'Crear tabla de usuarios y permisos.',
          'Descanso.',
          ],
     // Semana 11
     [
      'Agregar botones de edición de permisos',
      'Implementar lógica de edición de permisos.',
      'Implementar lógica de edición de permisos.',
      'Conectar interfaz con el backend.',
      'Conectar interfaz con el backend. Pruebas de funcionamiento.',
      'Pruebas de funcionamiento.',
      'Descanso.',
    ],
    // Semana 12
    [
      'Diseño de la estructura del dashboard.',
      'Diseño de la estructura del dashboard.',
      'Implementar gadgets en el dashboard.',
      'Implementar gadgets en el dashboard.',
      'Implementar gadgets en el dashboard.',
      'Descanso.',
      'Descanso.',
    ],
    // Semana 13
    [
      'Crear gráficas dinámicas.',
      'Crear gráficas dinámicas.',
      'Crear gráficas dinámicas.',
      'Implementar mapa interactivo.',
      'Implementar mapa interactivo.',
      'Descanso.',
      'Descanso.',
    ],
        // Semana 14
        [
            'Crear tablas de datos.',
            'Crear tablas de datos. Conectar gadgets a datos reales.',
            'Conectar gadgets a datos reales.',
            'Implementar lógica de gráficas.',
            'Implementar lógica de gráficas.',
            'Descanso.',
            'Descanso.',
          ],
        // Semana 15
        [
            'Integrar datos en el mapa.',
            'Integrar datos en el mapa.',
            'Pruebas de funcionamiento y diseño.',
            'Pruebas de funcionamiento y diseño.',
            'Descanso.',
            'Descanso.',
            'Descanso.',
          ],
     // Semana 16
     [
      'Vacaciones.',
      'Vacaciones.',
      'Vacaciones.',
      'Vacaciones.',
      'Vacaciones.',
      'Vacaciones.',
      'Vacaciones.',
    ],
    // Semana 17
    [
      'Vacaciones.',
      'Identificar puntos de entrada.',
      'Identificar puntos de entrada.',
      'Analizar vulnerabilidades conocidas.',
      'Analizar vulnerabilidades conocidas.',
      'Descanso.',
      'Descanso.',
    ],
    // Semana 18
    [
      'Realizar pruebas de inyección SQL.',
      'Realizar pruebas de inyección SQL.',
      'Realizar pruebas de inyección SQL.',
      'Ejecutar escaneo de seguridad automatizado.',
      'Ejecutar escaneo de seguridad automatizado.',
      'Descanso.',
      'Descanso.',
    ],
        // Semana 19
        [
            'Analizar los registros de seguridad.',
            'Analizar los registros de seguridad.',
            'Evaluar la gestión de sesiones.',
            'Evaluar la gestión de sesiones.',
            'Descanso.',
            'Descanso.',
            'Descanso.',
          ],
        // Semana 20
        [
            'Realizar pruebas de denegación de servicio.',
            'Realizar pruebas de denegación de servicio.',
            'Realizar pruebas de denegación de servicio.',
            'Pruebas de seguridad manual.',
            'Pruebas de seguridad manual.',
            'Pruebas de seguridad manual.',
            'Descanso.',
          ],
          // Semana 21
          [
            'Documentar resultados y recomendaciones.',
            'Documentar resultados y recomendaciones.',
            'Revisión y ajustes finales.',
            ' ',
            ' ',
            ' ',
            ' ',
          ],
  ];

  // Obtener el índice de la semana actual
  const currentWeekIndex = currentWeek - 1;

  // Obtener el texto correspondiente a la semana actual y el día actual
  const currentDayText = weeksData[currentWeekIndex][day - 1];

  return (
    <div className="day-container">
      <div className="day-column"> {/* Aplica la clase .day-column */}
      <p>{currentDayText}</p>
      </div>
    </div>
  );
};

export default Day
