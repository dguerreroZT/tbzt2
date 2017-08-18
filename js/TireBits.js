TireBits = new function(){

    var Config = Core.getData("TireBits_Configuracion") || {}
    
    var inicializar = function(){
        Core.setData("TireBits_Configuracion",{})
        //localStorage.setItem("TireBits_Usuarios")
        //localStorage.setItem("TireBits_Usuarios_idx")
        Core.setData("TireBits_Empresas",[])
        Core.setData("TireBits_Empresas_idx",[])
        Core.setData("TireBits_Bases",[])
        Core.setData("TireBits_Bases_idx",[])
        Core.setData("TireBits_Unidades",[])
        Core.setData("TireBits_Unidades_idx",[])
        Core.setData("TireBits_Llantas",[])
        Core.setData("TireBits_Llantas_idx",[])
        Core.setData("TireBits_Mediciones",[])
        Core.setData("TireBits_Mediciones_idx",[])
        Core.setData("TireBits_InitInfo",{lastInit: new Date()})
    }
    
    var guardarConfiguracion = function(){
        Core.setData("TireBits_Configuracion", Config);
    }
    
    if (!Core.getData("TireBits_InitInfo")){
        inicializar()
    }
    
    this.obtenerMarcasVehiculos = function(){
        return Core.request({
            url: urlServer + webMethods.ObtenerMarcasVehiculos,
            data:{}
        })
        .then(function(r){
            var marcas = {}
            rows = r.Result;
            rFields = r.Fields
            for(var row of rows){
                var MarcaID = row[rFields.indexOf("MarcaID")]
                var NombreMarca = row[rFields.indexOf("NombreMarca")]
                marcas[MarcaID] = NombreMarca
            }
            return marcas
        })
        
        //return {abcd:"MarcaMarca1", efgh:"Marca2", ijkl:"Marca3"}
    }
    
    this.obtenerModelosVehiculos = function(){
        return Core.request({
            url: urlServer + webMethods.ObtenerModelosVehiculos,
            data:{}
        })
        .then(function(r){
            var modelos = {}
            rows = r.Result;
            rFields = r.Fields
            for(var row of rows){
                var ModeloID = row[rFields.indexOf("ModeloID")]
                var NombreModelo = row[rFields.indexOf("NombreModelo")]
                modelos[ModeloID] = NombreModelo
            }
            return modelos
        })
        
        //return {abcd:"Modelo1", efgh:"Modelo2", ijkl:"Modelo3"}
    }
    
    this.obtenerTiposVehiculos = function(){
        return Core.request({
            url: urlServer + webMethods.ObtenerTiposVehiculos,
            data:{}
        })
        .then(function(r){
            var tipos = {}
            rows = r.Result;
            rFields = r.Fields
            for(var row of rows){
                var TipoID = row[rFields.indexOf("TipoID")]
                var NombreTipo = row[rFields.indexOf("NombreTipo")]
                tipos[TipoID] = NombreTipo
            }
            return tipos
        })
        
        //return {abcd:"Tipo1", efgh:"Tipo2", ijkl:"Tipo3"}
    }
    
    this.obtenerMarcasLlantas = function(){
        return Core.request({
            url: urlServer + webMethods.ObtenerMarcasLlantas,
            data:{}
        })
        .then(function(r){
            var marcas = {}
            rows = r.Result;
            rFields = r.Fields
            for(var row of rows){
                var MarcaID = row[rFields.indexOf("MarcaID")]
                var NombreMarca = row[rFields.indexOf("NombreMarca")]
                marcas[MarcaID] = NombreMarca
            }
            return marcas
        })
        
        //return {abcd:"MarcaMarca1", efgh:"Marca2", ijkl:"Marca3"}
    }
    
    this.obtenerModelosLlantas = function(){
        return Core.request({
            url: urlServer + webMethods.ObtenerModelosLlantas,
            data:{}
        })
        .then(function(r){
            var modelos = {}
            rows = r.Result;
            rFields = r.Fields
            for(var row of rows){
                var ModeloID = row[rFields.indexOf("ModeloID")]
                var NombreModelo = row[rFields.indexOf("NombreModelo")]
                modelos[ModeloID] = NombreModelo
            }
            return modelos
        })
        
        //return {abcd:"Modelo1", efgh:"Modelo2", ijkl:"Modelo3"}
    }
    
    this.obtenerMedidasLlantas = function(){
        return Core.request({
            url: urlServer + webMethods.ObtenerMedidasLlantas,
            data:{}
        })
        .then(function(r){
            var tipos = {}
            rows = r.Result;
            rFields = r.Fields
            for(var row of rows){
                var TipoID = row[rFields.indexOf("MedidaID")]
                var NombreTipo = row[rFields.indexOf("NombreMedida")]
                tipos[TipoID] = NombreTipo
            }
            return tipos
        })
        
        //return {abcd:"Tipo1", efgh:"Tipo2", ijkl:"Tipo3"}
    }
    
    this.obtenerLugares = function(){
        return Core.request({
            url: urlServer + webMethods.ObtenerLugares,
            data:{
                EmpresaID: Config.EmpresaID,
                BaseID: Config.BaseID,
                Usuario: Config.Usuario
            }
        })
        .then(function(r){
            var lugares = {}
            rows = r.Result;
            rFields = r.Fields
            for(var row of rows){
                var LugarID = row[rFields.indexOf("LugarID")]
                var Nombre = row[rFields.indexOf("Nombre")]
                lugares[LugarID] = Nombre
            }
            return lugares
        })
        
        //return {abcd:"Tipo1", efgh:"Tipo2", ijkl:"Tipo3"}
    }
    
    
    this.Usuarios = {
        ingresar: function(usuario, nip){
            return Core.request({
                url: urlServer + webMethods.Login,
                data: {Usuario:usuario, NIP:nip}
            })
            .then(function(r){
                if (r.Result.length == 0){
                    return false
                }
                var row = r.Result[0];
                var rFields = r.Fields;

                Config.Usuario = usuario;
                Config.Nombre  = row[rFields.indexOf("Nombre")]
                Config.TipoUsuario = row[rFields.indexOf("TipoUsuario")]
                guardarConfiguracion()
                return true
            })
            .catch(function (errorMessage){
                console.log(errorMessage)
                return false
            })
        },
        obtenerAccesoBases: function(){
            return Core.request({
                url: urlServer + webMethods.ObtenerAccesoBases,
                data: {Usuario:Config.Usuario}
            })
            .then(function(r){
                console.log(r)
                var rows = r.Result;
                var rFields = r.Fields;
                
                var Empresas = []
                var ultimaEmpresa = {EmpresaID:""};
                
                for(var row of rows){
                    if (!(row[rFields.indexOf("EmpresaID")] == ultimaEmpresa.EmpresaID)){
                        var Empresa = {
                            EmpresaID: row[rFields.indexOf("EmpresaID")],
                            NombreEmpresa: row[rFields.indexOf("NombreEmpresa")],
                            CorreoElectronico: row[rFields.indexOf("CorreoElectronico")],
                            OtroDato:row[rFields.indexOf("OtroDato")],
                            Bases:[]
                        }
                        Empresas.push(Empresa)
                        ultimaEmpresa = Empresa
                    }
                    var Base = {
                        EmpresaID: row[rFields.indexOf("EmpresaID")],
                        BaseID: row[rFields.indexOf("BaseID")],
                        NombreBase: row[rFields.indexOf("NombreBase")]
                    }
                    ultimaEmpresa.Bases.push(Base)
                }
                
                return Empresas;
            })
            .catch(function (errorMessage){
                console.log(errorMessage)
                return []
            })
        }
    }
    
    this.Empresas = {
        obtener:function(EmpresaID){
            
        }
    }
    
    this.Bases = {
        ingresar:function(EmpresaID, BaseID){
            Config.EmpresaID = EmpresaID
            Config.BaseID = BaseID
            guardarConfiguracion()
        },
        obtener:function(BaseID){
            return Core.request({
                url: urlServer + webMethods.ObtenerBase,
                data: {
                    EmpresaID: Config.EmpresaID,
                    BaseID: BaseID,
                    Usuario: Config.Usuario
                }
            })
            .then(function(r){
                var base
                if (r.RowsCount){
                    base = {}
                    var row = r.Result[0]
                    var fields = r.Fields
                    for (var field of fields){
                        base[field] = row[fields.indexOf(field)]
                    }
                }
                return base
            })
            .catch(function(err){
                console.log(err)
                return false  
            })
        },
        listado: function(){
            return Core.request({
                url: urlServer + webMethods.ListadoBases,
                data: {
                    EmpresaID: Config.EmpresaID,
                    Usuario: Config.Usuario
                }
            })
            .then(function(r){
                var Bases = []
                if(r.OK){
                    var rows = r.Result
                    var fields = r.Fields
                    for(var row of rows){
                        var Base = {}
                        for(var field of fields){
                            Base[field] = row[fields.indexOf(field)]
                        }
                        Bases.push(Base)
                    }
                }else{
                    console.log(r.Message)
                }
                return Bases
            })
            .catch(function(msg){
                console.log(msg)
                return []
            })
            /*
            return [
                {VehiculoID: "abcdef", NoEconomico: "D-135", Marca:"BlackFire", Modelo: "GENERAL", Placas:"GALLEGOS"},
                {VehiculoID: "ghijkl", NoEconomico: "D-135", Marca:"BlackFire", Modelo: "GENERAL", Placas:"GALLEGOS"}
            ]
            */
        }
    }
    
    this.Almacenes = {
        listado: function(){
            return Core.request({
                url: urlServer + webMethods.ListadoAlmacenes,
                data: {
                    EmpresaID: Config.EmpresaID,
                    Usuario: Config.Usuario
                }
            })
            .then(function(r){
                var Almacenes = []
                if(r.OK){
                    var rows = r.Result
                    var fields = r.Fields
                    for(var row of rows){
                        var Almacen = {}
                        for(var field of fields){
                            Almacen[field] = row[fields.indexOf(field)]
                        }
                        Almacenes.push(Almacen)
                    }
                }else{
                    console.log(r.Message)
                }
                return Almacenes
            })
            .catch(function(msg){
                console.log(msg)
                return []
            })
            /*
            return [
                {VehiculoID: "abcdef", NoEconomico: "D-135", Marca:"BlackFire", Modelo: "GENERAL", Placas:"GALLEGOS"},
                {VehiculoID: "ghijkl", NoEconomico: "D-135", Marca:"BlackFire", Modelo: "GENERAL", Placas:"GALLEGOS"}
            ]
            */
        }
    }
    
    this.Vehiculos = {
        listado: function(){
            return Core.request({
                url: urlServer + webMethods.ListadoVehiculos,
                data: {
                    EmpresaID: Config.EmpresaID,
                    BaseID: Config.BaseID
                }
            })
            .then(function(r){
                var Vehiculos = []
                if(r.OK){
                    var rows = r.Result
                    var fields = r.Fields
                    for(var row of rows){
                        var Vehiculo = {}
                        for(var field of fields){
                            Vehiculo[field] = row[fields.indexOf(field)]
                        }
                        Vehiculos.push(Vehiculo)
                    }
                }else{
                    console.log(r.Message)
                }
                return Vehiculos
            })
            .catch(function(msg){
                console.log(msg)
                return []
            })
            /*
            return [
                {VehiculoID: "abcdef", NoEconomico: "D-135", Marca:"BlackFire", Modelo: "GENERAL", Placas:"GALLEGOS"},
                {VehiculoID: "ghijkl", NoEconomico: "D-135", Marca:"BlackFire", Modelo: "GENERAL", Placas:"GALLEGOS"}
            ]
            */
        },
        
        listadoMediciones:function(VehiculoID){
            return Core.request({
                url: urlServer + webMethods.ObtenerMedicionesVehiculo,
                data: {
                    EmpresaID: Config.EmpresaID,
                    BaseID: Config.BaseID,
                    VehiculoID: VehiculoID
                }
            })
            .then(function(r){
                var MedicionesVehiculos = []
                if(r.OK){
                    var rows = r.Result
                    var fields = r.Fields
                    for(var row of rows){
                        var Medicion = {}
                        for(var field of fields){
                            Medicion[field] = row[fields.indexOf(field)]
                        }
                        MedicionesVehiculos.push(Medicion)
                    }
                }else{
                    console.log(r.Message)
                }
                return MedicionesVehiculos
            })
            .catch(function(msg){
                console.log(msg)
                return []
            })
            /*
            return [
                {LlantaID: "abcdef", NoEconomico: "10121 IFR", Marca:"Michelin", Modelo: "XZE2", Presion: "100", Profundidad: "12", Ubicacion: "Montada", Lugar: "def"},
                {LlantaID: "ghijkl", NoEconomico: "10190 IFR", Marca:"BlackFire", Modelo: "XZE3", Presion: "95", Profundidad: "12", Ubicacion: "Base"}
            ]
            */
            
        },
        
        obtener:function(VehiculoID){
            return Core.request({
                url: urlServer + webMethods.ObtenerVehiculo,
                data: {
                    EmpresaID: Config.EmpresaID,
                    BaseID: Config.BaseID,
                    VehiculoID: VehiculoID
                }
            })
            .then(function(r){
                var vehiculo
                if (r.RowsCount){
                    vehiculo = {}
                    var row = r.Result[0]
                    var fields = r.Fields
                    for (var field of fields){
                        vehiculo[field] = row[fields.indexOf(field)]
                    }
                }
                return vehiculo
            })
            .catch(function(){
                return false  
            })
            /*
            return {
                NoEconomico:"D-135",
                Placas:"",
                Marca:"BlackFire",
                Modelo:"General",
                Año:2017,
                TipoVehiculo:"DOLLY",
                Notas:"Vehiculo de Interflet"
            } 
            */
        },
        guardar: function(vehiculo){
            if(vehiculo.VehiculoID == ""){
                vehiculo.VehiculoID = Core.newId(6)
            }
            vehiculo.EmpresaID = Config.EmpresaID
            vehiculo.BaseID = Config.BaseID
            vehiculo.Usuario = Config.Usuario
            console.log(vehiculo)
            
            return Core.request({
                url: urlServer + webMethods.GuardarVehiculo,
                data: vehiculo
            })
            .then(function(){
                return true
            })
            .catch(function(err){
                console.log(err)
                return false
            })
            
        }
    }
    
    this.Llantas = {
        tbName:"TireBits_Llantas",
        tbIndex:"TireBits_Llantas_idx",
        tbStructure:[
            {field:"LlantaID",  defaultValue:""},
            {field:"TimeStamp", defaultValue:0},
            {field:"Marca",     defaultValue:0},
            {field:"Modelo",    defaultValue:0},
            {field:"Medida",    defaultValue:0}
        ],
        
        obtener:function(LlantaID){
            return Core.request({
                url: urlServer + webMethods.ObtenerLlanta,
                data: {
                    EmpresaID: Config.EmpresaID,
                    LlantaID: LlantaID
                }
            })
            .then(function(r){
                var llanta
                if (r.RowsCount){
                    llanta = {}
                    var row = r.Result[0]
                    var fields = r.Fields
                    for (var field of fields){
                        llanta[field] = row[fields.indexOf(field)]
                    }
                }
                return llanta
            })
            .catch(function(err){
                console.log(err)
                return false  
            })
            
            /*
            var dataLlantas = Core.getData(this.tbName)
            for (i in dataLlantas){
                var ll = dataLlantas[i]
                if(ll.LlantaID == LlantaID)
                    return ll;
            }
            */
            //return {data:arrayLlantas, index:indexLlantas}
        },
        
        obtenerUltimaMedicion:function(LlantaID){
            return Core.request({
                url: urlServer + webMethods.ObtenerUltimaMedicionLlanta,
                data: {
                    EmpresaID: Config.EmpresaID,
                    LlantaID: LlantaID
                }
            })
            .then(function(r){
                var medicionLlanta
                if (r.RowsCount){
                    medicionLlanta = {}
                    var row = r.Result[0]
                    var fields = r.Fields
                    for (var field of fields){
                        medicionLlanta[field] = row[fields.indexOf(field)]
                    }
                }
                return medicionLlanta
            })
            .catch(function(err){
                console.log(err)
                return false  
            })
            
            /*
            var dataLlantas = Core.getData(this.tbName)
            for (i in dataLlantas){
                var ll = dataLlantas[i]
                if(ll.LlantaID == LlantaID)
                    return ll;
            }
            */
            //return {data:arrayLlantas, index:indexLlantas}
        },
        
        listado:function(){
            return Core.request({
                url: urlServer + webMethods.ListadoLlantas,
                data: {
                    EmpresaID: Config.EmpresaID,
                    BaseID: Config.BaseID
                }
            })
            .then(function(r){
                var Llantas = []
                if(r.OK){
                    var rows = r.Result
                    var fields = r.Fields
                    for(var row of rows){
                        var Llanta = {}
                        for(var field of fields){
                            Llanta[field] = row[fields.indexOf(field)]
                        }
                        Llantas.push(Llanta)
                    }
                }else{
                    console.log(r.Message)
                }
                return Llantas
            })
            .catch(function(msg){
                console.log(msg)
                return []
            })
            /*
            return [
                {LlantaID: "abcdef", NoEconomico: "10121 IFR", Marca:"Michelin", Modelo: "XZE2", Presion: "100", Profundidad: "12", Ubicacion: "Montada", Lugar: "def"},
                {LlantaID: "ghijkl", NoEconomico: "10190 IFR", Marca:"BlackFire", Modelo: "XZE3", Presion: "95", Profundidad: "12", Ubicacion: "Base"}
            ]
            */
            
        },
        
        listadoMediciones:function(LlantaID){
            return Core.request({
                url: urlServer + webMethods.ObtenerMedicionesLlanta,
                data: {
                    EmpresaID: Config.EmpresaID,
                    LlantaID: LlantaID
                }
            })
            .then(function(r){
                var MedicionesLlantas = []
                if(r.OK){
                    var rows = r.Result
                    var fields = r.Fields
                    for(var row of rows){
                        var Medicion = {}
                        for(var field of fields){
                            Medicion[field] = row[fields.indexOf(field)]
                        }
                        MedicionesLlantas.push(Medicion)
                    }
                }else{
                    console.log(r.Message)
                }
                return MedicionesLlantas
            })
            .catch(function(msg){
                console.log(msg)
                return []
            })
            /*
            return [
                {LlantaID: "abcdef", NoEconomico: "10121 IFR", Marca:"Michelin", Modelo: "XZE2", Presion: "100", Profundidad: "12", Ubicacion: "Montada", Lugar: "def"},
                {LlantaID: "ghijkl", NoEconomico: "10190 IFR", Marca:"BlackFire", Modelo: "XZE3", Presion: "95", Profundidad: "12", Ubicacion: "Base"}
            ]
            */
            
        },
        
        obtenerEstado:function(LlantaID){
            return Core.request({
                url: urlServer + webMethods.ObtenerEstadoLlanta,
                data: {
                    EmpresaID: Config.EmpresaID,
                    LlantaID: LlantaID
                }
            })
            .then(function(r){
                var EstadosLlanta = []
                if(r.OK){
                    var rows = r.Result
                    var fields = r.Fields
                    for(var row of rows){
                        var EstadoLlanta = {}
                        for(var field of fields){
                            EstadoLlanta[field] = row[fields.indexOf(field)]
                        }
                        EstadosLlanta.push(EstadoLlanta)
                    }
                }else{
                    console.log(r.Message)
                }
                return EstadosLlanta
            })
            .catch(function(msg){
                console.log(msg)
                return []
            })
            /*
            return [
                {LlantaID: "abcdef", NoEconomico: "10121 IFR", Marca:"Michelin", Modelo: "XZE2", Presion: "100", Profundidad: "12", Ubicacion: "Montada", Lugar: "def"},
                {LlantaID: "ghijkl", NoEconomico: "10190 IFR", Marca:"BlackFire", Modelo: "XZE3", Presion: "95", Profundidad: "12", Ubicacion: "Base"}
            ]
            */
            
        },
        
        guardar: function(llanta){
            if(llanta.LlantaID == ""){
                llanta.LlantaID = Core.newId(6)
            }
            llanta.EmpresaID = Config.EmpresaID
            llanta.Usuario = Config.Usuario
            console.log(llanta)
            
            return Core.request({
                url: urlServer + webMethods.GuardarLlanta,
                data: llanta
            })
            .then(function(){
                return true
            })
            .catch(function(err){
                console.log(err)
                return false
            })
            
        }
        /*,
        
        insertar:function(llanta){
            var dataLlantas 
            dataLlantas = Core.getData(this.tbName)
            
            llanta.LlantaID = Core.newId()
            llanta.TimeStamp = Core.timeStamp()
            var row = []
            for (var i in this.tbStructure){
                var f = this.tbStructure[i]
                if(llanta[f.field] == undefined || llanta[f.field] == null){
                    row.push(f.defaultValue)
                }else{
                    row.push(llanta[f.field])
                }
            }
            dataLlantas.push(row)
            Core.setData(this.tbName, dataLlantas)
            dataLlantas = null
        }*/
    }
    
    this.Mediciones = {
        obtener:function(MedicionID){
            
        }
    }
}
