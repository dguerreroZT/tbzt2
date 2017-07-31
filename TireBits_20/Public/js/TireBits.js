TireBits = new function(){
    var testMode = true;
    var urlServer = testMode ? '../' : "tirebits.mx/TireBits20"

    var webMethods = {
        Login:'General.asmx/Login',
        ObtenerAccesoBases:'Empresa.asmx/ObtenerAccesoBases',
        ListadoVehiculos:'Vehiculos.asmx/ListadoVehiculos'
    }
    
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
    
    if (!Core.getData("TireBits_InitInfo")){
        inicializar()
    }
    
/*    localStorage.getItem("TireBits_Configuracion")
    //localStorage.getItem("TireBits_Usuarios")
    //localStorage.getItem("TireBits_Usuarios_idx")
    localStorage.getItem("TireBits_Empresas")
    localStorage.getItem("TireBits_Empresas_idx")
    localStorage.getItem("TireBits_Bases")
    localStorage.getItem("TireBits_Bases_idx")
    localStorage.getItem("TireBits_Unidades")
    localStorage.getItem("TireBits_Unidades_idx")
    localStorage.getItem("TireBits_Llantas")
    localStorage.getItem("TireBits_Llantas_idx")
    localStorage.getItem("TireBits_Mediciones")
    localStorage.getItem("TireBits_Mediciones_idx")
    */
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
                let row = r.Result[0];
                let rFields = r.Fields;

                Config.Usuario = usuario;
                Config.Nombre  = row[rFields.indexOf("Nombre")]
                Config.TipoUsuario = row[rFields.indexOf("TipoUsuario")]
                Core.setData("TireBits_Configuracion", Config);
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
                let rows = r.Result;
                let rFields = r.Fields;
                
                let Empresas = []
                var ultimaEmpresa = {EmpresaID:""};
                
                for(let row of rows){
                    if (!(row[rFields.indexOf("EmpresaID")] == ultimaEmpresa.EmpresaID)){
                        let Empresa = {
                            EmpresaID: row[rFields.indexOf("EmpresaID")],
                            NombreEmpresa: row[rFields.indexOf("NombreEmpresa")],
                            CorreoElectronico: row[rFields.indexOf("CorreoElectronico")],
                            OtroDato:row[rFields.indexOf("OtroDato")],
                            Bases:[]
                        }
                        Empresas.push(Empresa)
                        ultimaEmpresa = Empresa
                    }
                    let Base = {
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
        obtener:function(BaseID){
            
        }
    }
    
    this.Vehiculos = {
        listado: function(BaseID){
            return [
                {NoEconomico: "D-135", Marca:"BlackFire", Modelo: "GENERAL", Placas:"GALLEGOS"}
            ]
        },
        obtener:function(UnidadID){
            
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
            var dataLlantas = Core.getData(this.tbName)
            for (i in dataLlantas){
                var ll = dataLlantas[i]
                if(ll.LlantaID == LlantaID)
                    return ll;
            }
            //return {data:arrayLlantas, index:indexLlantas}
        },
        
        listado:function(){
            var dataLlantas = Core.getData(this.tbName)
            ////quihubole
            return dataLlantas
        },
        
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
        }
    }
    
    this.Mediciones = {
        obtener:function(MedicionID){
            
        }
    }
    
}