Imports System.Web.Services
Imports System.Web.Services.Protocols
Imports System.ComponentModel
Imports System.Data.SqlClient
Imports TireBits_20.General

' Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente.
<System.Web.Script.Services.ScriptService()>
<System.Web.Services.WebService(Namespace:="http://tempuri.org/")>
<System.Web.Services.WebServiceBinding(ConformsTo:=WsiProfiles.BasicProfile1_1)>
<ToolboxItem(False)>
Public Class Llantas
    Inherits System.Web.Services.WebService

    <ConfigurationProperty("maxJsonLength", DefaultValue:=Long.MaxValue)>
    Public Property maxJsonLength As Long

    <WebMethod()>
    Public Function HelloWorld() As String
        Return "Hola a todos"
    End Function

    <WebMethod()>
    Public Function Listado(EmpresaID As String, BaseID As String) As Response
        Dim con As New SqlConnection(strCon)

        Dim cmd As SqlCommand = New SqlCommand("spTb_ListadoLlantas", con)
        cmd.CommandType = CommandType.StoredProcedure
        cmd.Parameters.Add("@EmpresaID", SqlDbType.VarChar).Value = EmpresaID
        cmd.Parameters.Add("@BaseID", SqlDbType.VarChar).Value = BaseID

        Return getData(con, cmd)

    End Function

    <WebMethod()>
    Public Function Guardar(EmpresaID$, BaseID$, VehiculoID$, NoEconomico$, Placas$, Marca$, Modelo$, Año$, TipoVehiculo$, Notas$, Usuario$) As Response
        'Dim con As New SqlConnection(strCon)

        'Dim cmd As SqlCommand = New SqlCommand("spTb_GuardarVehiculo", con)
        'cmd.CommandType = CommandType.StoredProcedure
        'cmd.Parameters.Add("@EmpresaID", SqlDbType.VarChar).Value = EmpresaID
        'cmd.Parameters.Add("@BaseID", SqlDbType.VarChar).Value = BaseID
        'cmd.Parameters.Add("@VehiculoID", SqlDbType.VarChar).Value = VehiculoID
        'cmd.Parameters.Add("@NoEconomico", SqlDbType.VarChar).Value = NoEconomico
        'cmd.Parameters.Add("@Placas", SqlDbType.VarChar).Value = Placas
        'cmd.Parameters.Add("@Marca", SqlDbType.VarChar).Value = Marca
        'cmd.Parameters.Add("@Modelo", SqlDbType.VarChar).Value = Modelo
        'cmd.Parameters.Add("@Año", SqlDbType.VarChar).Value = Año
        'cmd.Parameters.Add("@TipoVehiculo", SqlDbType.VarChar).Value = TipoVehiculo
        'cmd.Parameters.Add("@Notas", SqlDbType.VarChar).Value = Notas
        'cmd.Parameters.Add("@Usuario", SqlDbType.VarChar).Value = Usuario

        'Return getData(con, cmd)

    End Function

    <WebMethod()>
    Public Function Obtener(EmpresaID$, BaseID$, LlantaID$) As Response
        'Dim con As New SqlConnection(strCon)

        'Dim cmd As SqlCommand = New SqlCommand("spTb_ObtenerVehiculo", con)
        'cmd.CommandType = CommandType.StoredProcedure
        'cmd.Parameters.Add("@EmpresaID", SqlDbType.VarChar).Value = EmpresaID
        'cmd.Parameters.Add("@BaseID", SqlDbType.VarChar).Value = BaseID
        'cmd.Parameters.Add("@VehiculoID", SqlDbType.VarChar).Value = VehiculoID

        'Return getData(con, cmd)

    End Function


End Class
