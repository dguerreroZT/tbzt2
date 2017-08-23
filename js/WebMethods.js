testMode = false;
urlServer = testMode ? '../' : "http://tirebits.mx/ws2/"

webMethods = {
        Login:'General.asmx/Login',
        ObtenerAccesoBases:'Empresa.asmx/ObtenerAccesoBases',
        ListadoBases:'Bases.asmx/Listado',
        ListadoAlmacenes:'Almacenes.asmx/Listado',
        ListadoVehiculos:'Vehiculos.asmx/Listado',
        ListadoLlantas:'Llantas.asmx/Listado',
        ObtenerLlanta:'Llantas.asmx/Obtener',
        GuardarLlanta:'Llantas.asmx/Guardar',
        ObtenerBase:'Bases.asmx/Obtener',
        ObtenerAlmacen:'Almacenes.asmx/Obtener',
        ObtenerMedicionesLlanta:'Llantas.asmx/ObtenerMediciones',
        ObtenerEstadoLlanta:'Llantas.asmx/ObtenerEstado',
        ObtenerUltimaMedicionLlanta:'Llantas.asmx/ObtenerUltimaMedicion',
        ObtenerMedicionesVehiculo:'Vehiculos.asmx/ObtenerMediciones',
        ObtenerMarcasVehiculos:'General.asmx/ObtenerMarcasVehiculos',
        ObtenerTiposVehiculos:'General.asmx/ObtenerTiposVehiculos',
        ObtenerModelosVehiculos:'General.asmx/ObtenerModelosVehiculos',
        ObtenerMarcasLlantas:'General.asmx/ObtenerMarcasLlantas',
        ObtenerModelosLlantas:'General.asmx/ObtenerModelosLlantas',
        ObtenerMedidasLlantas:'General.asmx/ObtenerMedidasLlantas',
        ObtenerLugares:'General.asmx/ObtenerLugares',
        GuardarVehiculo:'Vehiculos.asmx/Guardar',
        ObtenerVehiculo:'Vehiculos.asmx/Obtener'
    }