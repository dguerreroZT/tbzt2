Imports System.Web.Services
Imports System.Web.Services.Protocols
Imports System.ComponentModel
Imports System.Data.SqlClient

' Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente.
<System.Web.Script.Services.ScriptService()>
<System.Web.Services.WebService(Namespace:="http://tempuri.org/")>
<System.Web.Services.WebServiceBinding(ConformsTo:=WsiProfiles.BasicProfile1_1)>
<ToolboxItem(False)>
Public Class General
    Inherits System.Web.Services.WebService

    Shared testMode As Boolean = True

    Public Shared Function strCon() As String
        If testMode Then Return "Data Source=zafiro\sql2012;Initial Catalog=db_tirebits2_20170713;User ID=sa;Password=N0bba21" 'Este es el de Zafiro
        Return "Data Source=www.llantera.mx\LLANTERA;Initial Catalog=LTS;User ID=sa;Password=ImeA3848" 'Este es el de llantera
    End Function



    <WebMethod()>
    Public Function HelloWorld() As String
        Return "Hola a todos"
    End Function

    Public Shared Function getData(con As SqlConnection, cmd As SqlCommand) As Response
        Dim r As New Response
        Dim tb As New DataTable
        Try
            con.Open()
            tb.Load(cmd.ExecuteReader)

            For Each column As DataColumn In tb.Columns
                r.Fields.Add(column.ColumnName)
            Next

            For Each row As DataRow In tb.Rows
                Dim record As New List(Of Object)
                For Each field As String In r.Fields
                    record.Add(row(field))
                Next
                r.Result.Add(record)
            Next

            r.RowsCount = tb.Rows.Count

        Catch ex As Exception
            'Return ex.Message
            r.OK = False
            r.Message = ex.Message & ";" & vbNewLine
        Finally
            con.Close()
        End Try

        Return r
    End Function



    <WebMethod()>
    Public Function Login(Usuario As String, NIP As String) As Response
        Dim con As New SqlConnection(strCon)

        Dim cmd As SqlCommand = New SqlCommand("spFr_Login", con)
        cmd.CommandType = CommandType.StoredProcedure
        cmd.Parameters.Add("@UsuarioID", SqlDbType.VarChar).Value = Usuario
        cmd.Parameters.Add("@NIP", SqlDbType.VarChar).Value = NIP

        Return getData(con, cmd)

    End Function

    <WebMethod()>
    Public Function ObtenerMarcasVehiculos() As Response
        Dim con As New SqlConnection(strCon)

        Dim cmd As SqlCommand = New SqlCommand("spCa_ObtenerMarcasVehiculos", con)
        cmd.CommandType = CommandType.StoredProcedure

        Return getData(con, cmd)

    End Function

    <WebMethod()>
    Public Function ObtenerModelosVehiculos() As Response
        Dim con As New SqlConnection(strCon)

        Dim cmd As SqlCommand = New SqlCommand("spCa_ObtenerModelosVehiculos", con)
        cmd.CommandType = CommandType.StoredProcedure

        Return getData(con, cmd)

    End Function

    <WebMethod()>
    Public Function ObtenerTiposVehiculos() As Response
        Dim con As New SqlConnection(strCon)

        Dim cmd As SqlCommand = New SqlCommand("spCa_ObtenerTiposVehiculos", con)
        cmd.CommandType = CommandType.StoredProcedure

        Return getData(con, cmd)

    End Function


End Class

Public Class Response
    Public Property Result As New List(Of Object)
    Public Property Fields As New List(Of String)
    Public Property OK As Boolean = True
    Public Property Message As String = ""
    Public Property RowsCount As Long = 0


End Class
