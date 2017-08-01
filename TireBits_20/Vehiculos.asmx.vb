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
Public Class Vehiculos
    Inherits System.Web.Services.WebService

    <WebMethod()>
    Public Function HelloWorld() As String
        Return "Hola a todos"
    End Function

    <WebMethod()>
    Public Function Listado(EmpresaID As String, BaseID As String) As Response
        Dim con As New SqlConnection(strCon)

        Dim cmd As SqlCommand = New SqlCommand("spTb_ListadoVehiculos", con)
        cmd.CommandType = CommandType.StoredProcedure
        cmd.Parameters.Add("@EmpresaID", SqlDbType.VarChar).Value = EmpresaID
        cmd.Parameters.Add("@BaseID", SqlDbType.VarChar).Value = BaseID

        Return getData(con, cmd)

    End Function

    <WebMethod()>
    Public Function Guardar(EmpresaID$, BaseID$, VehiculoID$, NoEconomico$, Placas$, Marca$, Modelo$, Año$, TipoVehiculo$, Notas$) As Response
        Dim con As New SqlConnection(strCon)

        Dim cmd As SqlCommand = New SqlCommand("spTb_GuardarVehiculo", con)
        cmd.CommandType = CommandType.StoredProcedure
        cmd.Parameters.Add("@EmpresaID", SqlDbType.VarChar).Value = EmpresaID
        cmd.Parameters.Add("@BaseID", SqlDbType.VarChar).Value = BaseID
        cmd.Parameters.Add("@VehiculoID", SqlDbType.VarChar).Value = VehiculoID
        cmd.Parameters.Add("@NoEconomico", SqlDbType.VarChar).Value = NoEconomico
        cmd.Parameters.Add("@Placas", SqlDbType.VarChar).Value = Placas
        cmd.Parameters.Add("@Marca", SqlDbType.VarChar).Value = Marca
        cmd.Parameters.Add("@Modelo", SqlDbType.VarChar).Value = Modelo
        cmd.Parameters.Add("@Año", SqlDbType.VarChar).Value = Año
        cmd.Parameters.Add("@TipoVehiculo", SqlDbType.VarChar).Value = TipoVehiculo
        cmd.Parameters.Add("@Notas", SqlDbType.VarChar).Value = Notas

        Return getData(con, cmd)

    End Function


End Class
