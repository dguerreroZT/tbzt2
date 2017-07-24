IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[spFr_ObtenerAccesoBases]') AND type in (N'P', N'PC'))
DROP PROCEDURE [spFr_ObtenerAccesoBases]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[spFr_Login]') AND type in (N'P', N'PC'))
DROP PROCEDURE [spFr_Login]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_VehiculosMediciones]') AND type in (N'U'))
DROP TABLE [tb_VehiculosMediciones]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_Vehiculos]') AND type in (N'U'))
DROP TABLE [tb_Vehiculos]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_LlantasReparaciones]') AND type in (N'U'))
DROP TABLE [tb_LlantasReparaciones]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_LlantasRenovaciones]') AND type in (N'U'))
DROP TABLE [tb_LlantasRenovaciones]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_LlantasMedicionesEstado]') AND type in (N'U'))
DROP TABLE [tb_LlantasMedicionesEstado]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_LlantasMediciones]') AND type in (N'U'))
DROP TABLE [tb_LlantasMediciones]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_Llantas]') AND type in (N'U'))
DROP TABLE [tb_Llantas]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_Bases]') AND type in (N'U'))
DROP TABLE [tb_Bases]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_Almacenes]') AND type in (N'U'))
DROP TABLE [tb_Almacenes]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_SemaforoVehiculosMediciones]') AND type in (N'U'))
DROP TABLE [rv_SemaforoVehiculosMediciones]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_SemaforoVehiculos]') AND type in (N'U'))
DROP TABLE [rv_SemaforoVehiculos]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_SemaforoLlantasMediciones]') AND type in (N'U'))
DROP TABLE [rv_SemaforoLlantasMediciones]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_SemaforoLlantas]') AND type in (N'U'))
DROP TABLE [rv_SemaforoLlantas]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_RevisionesUsuarios]') AND type in (N'U'))
DROP TABLE [rv_RevisionesUsuarios]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_Revisiones]') AND type in (N'U'))
DROP TABLE [rv_Revisiones]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_PilaDesechoLlantas]') AND type in (N'U'))
DROP TABLE [rv_PilaDesechoLlantas]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_UsuariosPermisos]') AND type in (N'U'))
DROP TABLE [fr_UsuariosPermisos]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_UsuariosEmpresasBases]') AND type in (N'U'))
DROP TABLE [fr_UsuariosEmpresasBases]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_UsuariosEmpresasAlmacenes]') AND type in (N'U'))
DROP TABLE [fr_UsuariosEmpresasAlmacenes]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_Usuarios]') AND type in (N'U'))
DROP TABLE [fr_Usuarios]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_Empresas]') AND type in (N'U'))
DROP TABLE [fr_Empresas]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_ContactosEmpresas]') AND type in (N'U'))
DROP TABLE [fr_ContactosEmpresas]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_Contactos]') AND type in (N'U'))
DROP TABLE [fr_Contactos]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[do_ManifiestosDetalle]') AND type in (N'U'))
DROP TABLE [do_ManifiestosDetalle]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[do_Manifiestos]') AND type in (N'U'))
DROP TABLE [do_Manifiestos]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ca_TiposVehiculos]') AND type in (N'U'))
DROP TABLE [ca_TiposVehiculos]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ca_ModelosVehiculos]') AND type in (N'U'))
DROP TABLE [ca_ModelosVehiculos]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ca_ModelosLlantas]') AND type in (N'U'))
DROP TABLE [ca_ModelosLlantas]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ca_MarcasVehiculos]') AND type in (N'U'))
DROP TABLE [ca_MarcasVehiculos]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ca_MarcasLlantas]') AND type in (N'U'))
DROP TABLE [ca_MarcasLlantas]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ax_MotivosDesecho]') AND type in (N'U'))
DROP TABLE [ax_MotivosDesecho]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ax_EstadosLlanta]') AND type in (N'U'))
DROP TABLE [ax_EstadosLlanta]
GO
IF  EXISTS (SELECT * FROM systypes WHERE name = N'USUARIO')
DROP TYPE [USUARIO]
GO
IF  EXISTS (SELECT * FROM systypes WHERE name = N'SMALL_ID')
DROP TYPE [SMALL_ID]
GO
IF  EXISTS (SELECT * FROM systypes WHERE name = N'LLANTA')
DROP TYPE [LLANTA]
GO
IF  EXISTS (SELECT * FROM systypes WHERE name = N'EMPRESA')
DROP TYPE [EMPRESA]
GO
IF  EXISTS (SELECT * FROM systypes WHERE name = N'BIG_ID')
DROP TYPE [BIG_ID]
GO
IF  EXISTS (SELECT * FROM systypes WHERE name = N'BASE')
DROP TYPE [BASE]
GO
IF NOT EXISTS (SELECT * FROM systypes WHERE name = N'BASE')
CREATE TYPE [BASE] FROM [varchar](4) NULL
GO
IF NOT EXISTS (SELECT * FROM systypes WHERE name = N'BIG_ID')
CREATE TYPE [BIG_ID] FROM [varchar](8) NULL
GO
IF NOT EXISTS (SELECT * FROM systypes WHERE name = N'EMPRESA')
CREATE TYPE [EMPRESA] FROM [varchar](4) NULL
GO
IF NOT EXISTS (SELECT * FROM systypes WHERE name = N'LLANTA')
CREATE TYPE [LLANTA] FROM [varchar](8) NULL
GO
IF NOT EXISTS (SELECT * FROM systypes WHERE name = N'SMALL_ID')
CREATE TYPE [SMALL_ID] FROM [varchar](6) NULL
GO
IF NOT EXISTS (SELECT * FROM systypes WHERE name = N'USUARIO')
CREATE TYPE [USUARIO] FROM [varchar](20) NULL
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ax_EstadosLlanta]') AND type in (N'U'))
BEGIN
CREATE TABLE [ax_EstadosLlanta](
	[EstadoID] [dbo].[SMALL_ID] NOT NULL,
	[Descripcion] [varchar](200) NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkAx_EstadosLlanta] PRIMARY KEY CLUSTERED 
(
	[EstadoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ax_MotivosDesecho]') AND type in (N'U'))
BEGIN
CREATE TABLE [ax_MotivosDesecho](
	[MotivoID] [dbo].[SMALL_ID] NOT NULL,
	[CodigoMotivo] [varchar](5) NULL,
	[Descripcion] [varchar](200) NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkAx_MotivosRetiro] PRIMARY KEY CLUSTERED 
(
	[MotivoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ca_MarcasLlantas]') AND type in (N'U'))
BEGIN
CREATE TABLE [ca_MarcasLlantas](
	[MarcaID] [dbo].[SMALL_ID] NOT NULL,
	[NombreMarca] [varchar](20) NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkCa_MarcasLlantas] PRIMARY KEY CLUSTERED 
(
	[MarcaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ca_MarcasVehiculos]') AND type in (N'U'))
BEGIN
CREATE TABLE [ca_MarcasVehiculos](
	[MarcaID] [dbo].[SMALL_ID] NOT NULL,
	[NombreMarca] [varchar](20) NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkCa_MarcasVehiculos] PRIMARY KEY CLUSTERED 
(
	[MarcaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ca_ModelosLlantas]') AND type in (N'U'))
BEGIN
CREATE TABLE [ca_ModelosLlantas](
	[ModeloID] [dbo].[SMALL_ID] NOT NULL,
	[NombreModelo] [varchar](20) NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkCa_ModelosLlantas] PRIMARY KEY CLUSTERED 
(
	[ModeloID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ca_ModelosVehiculos]') AND type in (N'U'))
BEGIN
CREATE TABLE [ca_ModelosVehiculos](
	[ModeloID] [dbo].[SMALL_ID] NOT NULL,
	[NombreModelo] [varchar](20) NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkCa_ModelosVehiculos] PRIMARY KEY CLUSTERED 
(
	[ModeloID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ca_TiposVehiculos]') AND type in (N'U'))
BEGIN
CREATE TABLE [ca_TiposVehiculos](
	[TipoID] [dbo].[SMALL_ID] NOT NULL,
	[NombreTipo] [varchar](20) NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkCa_TiposVehiculos] PRIMARY KEY CLUSTERED 
(
	[TipoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[do_Manifiestos]') AND type in (N'U'))
BEGIN
CREATE TABLE [do_Manifiestos](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[ManifiestoID] [dbo].[SMALL_ID] NOT NULL,
	[FolioManifiesto] [int] NULL,
	[ConsecutivoCliente] [int] NULL,
	[Base] [dbo].[BASE] NOT NULL,
	[GeneradorNumeroRegistro] [varchar](50) NULL,
	[GeneradorNombre] [varchar](200) NULL,
	[GeneradorDomicilio] [varchar](100) NULL,
	[GeneradorCP] [varchar](10) NULL,
	[GeneradorMunicipio] [varchar](50) NULL,
	[GeneradorEstado] [varchar](50) NULL,
	[GeneradorTelefono] [varchar](50) NULL,
	[InstruccionesEspeciales] [varchar](200) NULL,
	[ResponsableNombre] [varchar](200) NULL,
	[ResponsableFirma] [text] NULL,
	[TransportistaNombre] [varchar](200) NULL,
	[TransportistaDomicilio] [varchar](100) NULL,
	[TransportistaCP] [varchar](10) NULL,
	[TransportistaMunicipio] [varchar](50) NULL,
	[TransportistaEstado] [varchar](50) NULL,
	[TransportistaTelefono] [varchar](50) NULL,
	[AutorizacionSEDUMA] [varchar](50) NULL,
	[ReceptorNombre] [varchar](200) NULL,
	[ReceptorCargo] [varchar](50) NULL,
	[ReceptorFirma] [text] NULL,
	[FechaEmbarque] [datetime] NULL,
	[Ruta] [text] NULL,
	[TipoVehiculo] [varchar](50) NULL,
	[Placa] [varchar](10) NULL,
	[DestinatarioNombre] [varchar](200) NULL,
	[DestinatarioDomicilio] [varchar](100) NULL,
	[DestinatarioCP] [varchar](10) NULL,
	[DestinatarioMunicipio] [varchar](50) NULL,
	[DestinatarioEstado] [varchar](50) NULL,
	[DestinatarioTelefono] [varchar](50) NULL,
	[Cancelado] [bit] NULL,
	[GeneradorDomicilioNum] [varchar](10) NULL,
	[TransportistaDomicilioNum] [varchar](10) NULL,
	[GeneradorDomicilioColonia] [varchar](100) NULL,
	[TransportistaDomicilioColonia] [varchar](100) NULL,
	[Cerrado] [bit] NULL,
	[ResponsableCargo] [varchar](50) NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pk_Manifiestos] PRIMARY KEY CLUSTERED 
(
	[ManifiestoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[do_ManifiestosDetalle]') AND type in (N'U'))
BEGIN
CREATE TABLE [do_ManifiestosDetalle](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[ManifiestoID] [dbo].[SMALL_ID] NOT NULL,
	[Base] [dbo].[BASE] NOT NULL,
	[PartidaID] [int] NOT NULL,
	[Descripcion] [varchar](200) NULL,
	[Capacidad] [varchar](20) NULL,
	[Tipo] [varchar](20) NULL,
	[CantidadTotal] [int] NULL,
	[Unidad] [varchar](10) NULL,
	[TipoLlanta] [varchar](2) NULL,
	[PesoTotal] [numeric](18, 4) NULL,
	[PesoXLlanta] [numeric](9, 4) NULL,
 CONSTRAINT [pk_ManifiestosDetalle] PRIMARY KEY CLUSTERED 
(
	[ManifiestoID] ASC,
	[PartidaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_Contactos]') AND type in (N'U'))
BEGIN
CREATE TABLE [fr_Contactos](
	[ContactoID] [dbo].[SMALL_ID] NOT NULL,
	[Nombre] [varchar](30) NULL,
	[ApellidoPaterno] [varchar](20) NULL,
	[ApellidoMaterno] [varchar](20) NULL,
	[Telefono] [varchar](30) NULL,
	[Celular] [varchar](30) NULL,
	[Fax] [varchar](10) NULL,
	[CorreoElectronico] [varchar](75) NULL,
	[Puesto] [varchar](20) NULL,
	[Notas] [text] NULL,
 CONSTRAINT [pkFr_Contactos] PRIMARY KEY CLUSTERED 
(
	[ContactoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_ContactosEmpresas]') AND type in (N'U'))
BEGIN
CREATE TABLE [fr_ContactosEmpresas](
	[ContactoID] [dbo].[SMALL_ID] NOT NULL,
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
 CONSTRAINT [pkFr_ContactosEmpresas] PRIMARY KEY CLUSTERED 
(
	[ContactoID] ASC,
	[EmpresaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_Empresas]') AND type in (N'U'))
BEGIN
CREATE TABLE [fr_Empresas](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[Nombre] [varchar](250) NULL,
	[DirCalle] [varchar](50) NULL,
	[DirNumero] [varchar](10) NULL,
	[DirColonia] [varchar](50) NULL,
	[DirMunicipio] [varchar](30) NULL,
	[DirEstado] [varchar](30) NULL,
	[DirCodigoPostal] [varchar](10) NULL,
	[Telefono] [varchar](10) NULL,
	[Fax] [varchar](10) NULL,
	[CorreoElectronico] [varchar](75) NULL,
	[SitioWeb] [varchar](75) NULL,
	[Notas] [text] NULL,
 CONSTRAINT [pkFr_Empresas] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_Usuarios]') AND type in (N'U'))
BEGIN
CREATE TABLE [fr_Usuarios](
	[UsuarioID] [dbo].[USUARIO] NOT NULL,
	[Nombre] [varchar](50) NULL,
	[NIP] [varchar](4) NULL,
	[TipoUsuario] [varchar](2) NULL,
	[Contacto] [varchar](10) NULL,
 CONSTRAINT [pkFr_Usuarios] PRIMARY KEY CLUSTERED 
(
	[UsuarioID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_UsuariosEmpresasAlmacenes]') AND type in (N'U'))
BEGIN
CREATE TABLE [fr_UsuariosEmpresasAlmacenes](
	[UsuarioID] [dbo].[USUARIO] NOT NULL,
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[AlmacenID] [dbo].[SMALL_ID] NOT NULL,
 CONSTRAINT [pkFr_UsuariosEmpresasAlmacenes] PRIMARY KEY CLUSTERED 
(
	[UsuarioID] ASC,
	[EmpresaID] ASC,
	[AlmacenID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_UsuariosEmpresasBases]') AND type in (N'U'))
BEGIN
CREATE TABLE [fr_UsuariosEmpresasBases](
	[UsuarioID] [dbo].[USUARIO] NOT NULL,
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[BaseID] [dbo].[BASE] NOT NULL,
 CONSTRAINT [pkFr_UsuariosEmpresasBases] PRIMARY KEY CLUSTERED 
(
	[UsuarioID] ASC,
	[EmpresaID] ASC,
	[BaseID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[fr_UsuariosPermisos]') AND type in (N'U'))
BEGIN
CREATE TABLE [fr_UsuariosPermisos](
	[UsuarioID] [dbo].[USUARIO] NOT NULL,
	[CodigoPermisoID] [varchar](50) NOT NULL,
	[DescripcionPermiso] [varchar](200) NULL,
	[Permitir] [bit] NULL,
 CONSTRAINT [pkFr_UsuariosPermisos] PRIMARY KEY CLUSTERED 
(
	[UsuarioID] ASC,
	[CodigoPermisoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_PilaDesechoLlantas]') AND type in (N'U'))
BEGIN
CREATE TABLE [rv_PilaDesechoLlantas](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[BaseID] [dbo].[BASE] NOT NULL,
	[RevisionID] [dbo].[SMALL_ID] NOT NULL,
	[LlantaID] [dbo].[LLANTA] NOT NULL,
	[NoEconomico] [varchar](20) NULL,
	[Marca] [dbo].[SMALL_ID] NULL,
	[Modelo] [dbo].[SMALL_ID] NULL,
	[Medida] [dbo].[SMALL_ID] NULL,
	[MotivoDesecho] [dbo].[SMALL_ID] NULL,
	[Profundidad] [numeric](16, 4) NULL,
	[Revisada] [bit] NULL,
	[Integrada] [bit] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkRv_PilaDesechoLlantas] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[BaseID] ASC,
	[RevisionID] ASC,
	[LlantaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_Revisiones]') AND type in (N'U'))
BEGIN
CREATE TABLE [rv_Revisiones](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[BaseID] [dbo].[BASE] NOT NULL,
	[RevisionID] [dbo].[SMALL_ID] NOT NULL,
	[Nombre] [varchar](200) NULL,
	[Fecha] [datetime] NULL,
	[TipoRevision] [varchar](5) NULL,
	[ModoDesconectado] [bit] NULL,
	[FechaCierre] [datetime] NULL,
	[UsuarioInicia] [dbo].[USUARIO] NULL,
	[UsuarioCierra] [dbo].[USUARIO] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkRv_Revisiones] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[BaseID] ASC,
	[RevisionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_RevisionesUsuarios]') AND type in (N'U'))
BEGIN
CREATE TABLE [rv_RevisionesUsuarios](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[BaseID] [dbo].[BASE] NOT NULL,
	[RevisionID] [dbo].[SMALL_ID] NOT NULL,
	[UsuarioID] [dbo].[USUARIO] NOT NULL,
	[FechaAcceso] [datetime] NULL,
	[FechaCierre] [datetime] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkRv_RevisionesUsuarios] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[BaseID] ASC,
	[RevisionID] ASC,
	[UsuarioID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_SemaforoLlantas]') AND type in (N'U'))
BEGIN
CREATE TABLE [rv_SemaforoLlantas](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[BaseID] [dbo].[BASE] NOT NULL,
	[RevisionID] [dbo].[SMALL_ID] NOT NULL,
	[LlantaID] [dbo].[LLANTA] NOT NULL,
	[NoEconomico] [varchar](20) NULL,
	[Marca] [dbo].[SMALL_ID] NULL,
	[Modelo] [dbo].[SMALL_ID] NULL,
	[Medida] [dbo].[SMALL_ID] NULL,
	[Notas] [text] NULL,
	[Revisada] [bit] NULL,
	[Integrada] [bit] NULL,
	[ReferenciaIntegracion] [dbo].[LLANTA] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkRv_SemaforoLlantas] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[BaseID] ASC,
	[RevisionID] ASC,
	[LlantaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_SemaforoLlantasMediciones]') AND type in (N'U'))
BEGIN
CREATE TABLE [rv_SemaforoLlantasMediciones](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[BaseID] [dbo].[BASE] NOT NULL,
	[RevisionID] [dbo].[SMALL_ID] NOT NULL,
	[LlantaID] [dbo].[LLANTA] NOT NULL,
	[MedicionID] [dbo].[BIG_ID] NOT NULL,
	[Fecha] [datetime] NULL,
	[Ubicacion] [varchar](2) NULL,
	[Lugar] [dbo].[SMALL_ID] NULL,
	[Posicion] [int] NULL,
	[MedicionVehiculo] [dbo].[BIG_ID] NULL,
	[CondicionPiso] [varchar](5) NULL,
	[Presion] [numeric](16, 4) NULL,
	[Profundidad] [numeric](16, 4) NULL,
	[Notas] [text] NULL,
	[EsMedicionInicial] [bit] NULL,
	[Integrada] [bit] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkRv_SemaforoLlantasMediciones] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[BaseID] ASC,
	[RevisionID] ASC,
	[LlantaID] ASC,
	[MedicionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_SemaforoVehiculos]') AND type in (N'U'))
BEGIN
CREATE TABLE [rv_SemaforoVehiculos](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[BaseID] [dbo].[BASE] NOT NULL,
	[RevisionID] [dbo].[SMALL_ID] NOT NULL,
	[VehiculoID] [dbo].[SMALL_ID] NOT NULL,
	[NoEconomico] [varchar](20) NULL,
	[Placas] [varchar](10) NULL,
	[Marca] [dbo].[SMALL_ID] NULL,
	[Modelo] [dbo].[SMALL_ID] NULL,
	[Año] [int] NULL,
	[TipoVehiculo] [dbo].[SMALL_ID] NULL,
	[Notas] [text] NULL,
	[Revisado] [bit] NULL,
	[Integrado] [bit] NULL,
	[ReferenciaIntegracion] [dbo].[SMALL_ID] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkRv_SemaforoVehiculos] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[BaseID] ASC,
	[RevisionID] ASC,
	[VehiculoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rv_SemaforoVehiculosMediciones]') AND type in (N'U'))
BEGIN
CREATE TABLE [rv_SemaforoVehiculosMediciones](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[BaseID] [dbo].[BASE] NOT NULL,
	[RevisionID] [dbo].[SMALL_ID] NOT NULL,
	[VehiculoID] [dbo].[SMALL_ID] NOT NULL,
	[MedicionID] [dbo].[BIG_ID] NOT NULL,
	[Fecha] [datetime] NULL,
	[Kilometraje] [bigint] NULL,
	[Notas] [text] NULL,
	[EsMedicionInicial] [bit] NULL,
	[Integrada] [bit] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkRv_SemaforoVehiculosMediciones] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[BaseID] ASC,
	[RevisionID] ASC,
	[VehiculoID] ASC,
	[MedicionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_Almacenes]') AND type in (N'U'))
BEGIN
CREATE TABLE [tb_Almacenes](
	[EmpresaID] [dbo].[SMALL_ID] NOT NULL,
	[AlmacenID] [dbo].[SMALL_ID] NOT NULL,
	[Nombre] [varchar](250) NULL,
	[DirCalle] [varchar](50) NULL,
	[DirNumero] [varchar](10) NULL,
	[DirColonia] [varchar](50) NULL,
	[DirMunicipio] [varchar](30) NULL,
	[DirEstado] [varchar](30) NULL,
	[DirCodigoPostal] [varchar](10) NULL,
	[Telefono] [varchar](10) NULL,
	[Fax] [varchar](10) NULL,
	[CorreoElectronico] [varchar](75) NULL,
	[Notas] [text] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkTb_Almacenes] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[AlmacenID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_Bases]') AND type in (N'U'))
BEGIN
CREATE TABLE [tb_Bases](
	[EmpresaID] [dbo].[SMALL_ID] NOT NULL,
	[BaseID] [dbo].[SMALL_ID] NOT NULL,
	[Nombre] [varchar](250) NULL,
	[DirCalle] [varchar](50) NULL,
	[DirNumero] [varchar](10) NULL,
	[DirColonia] [varchar](50) NULL,
	[DirMunicipio] [varchar](30) NULL,
	[DirEstado] [varchar](30) NULL,
	[DirCodigoPostal] [varchar](10) NULL,
	[Latitud] [decimal](18, 0) NULL,
	[Longitud] [decimal](18, 0) NULL,
	[Telefono] [varchar](10) NULL,
	[Fax] [varchar](10) NULL,
	[CorreoElectronico] [varchar](75) NULL,
	[Notas] [text] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkTb_Bases] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[BaseID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_Llantas]') AND type in (N'U'))
BEGIN
CREATE TABLE [tb_Llantas](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[LlantaID] [dbo].[LLANTA] NOT NULL,
	[NoEconomico] [varchar](20) NULL,
	[Marca] [dbo].[SMALL_ID] NULL,
	[Modelo] [dbo].[SMALL_ID] NULL,
	[Medida] [dbo].[SMALL_ID] NULL,
	[Costo] [money] NULL,
	[Desechada] [bit] NULL,
	[MotivoDesecho] [dbo].[SMALL_ID] NULL,
	[Notas] [text] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkTb_Llantas] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[LlantaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_LlantasMediciones]') AND type in (N'U'))
BEGIN
CREATE TABLE [tb_LlantasMediciones](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[LlantaID] [dbo].[LLANTA] NOT NULL,
	[MedicionID] [dbo].[BIG_ID] NOT NULL,
	[Fecha] [datetime] NULL,
	[Base] [dbo].[BASE] NULL,
	[Motivo] [varchar](5) NULL,
	[Ubicacion] [varchar](2) NULL,
	[Lugar] [dbo].[SMALL_ID] NULL,
	[Posicion] [int] NULL,
	[MedicionVehiculo] [dbo].[BIG_ID] NULL,
	[Destino] [varchar](2) NULL,
	[LugarDestino] [dbo].[SMALL_ID] NULL,
	[PosicionDestino] [int] NULL,
	[MedicionVehiculoDestino] [dbo].[BIG_ID] NULL,
	[CondicionPiso] [varchar](5) NULL,
	[Presion] [numeric](16, 4) NULL,
	[Profundidad] [numeric](16, 4) NULL,
	[Notas] [text] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkTb_LlantasMediciones] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[LlantaID] ASC,
	[MedicionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_LlantasMedicionesEstado]') AND type in (N'U'))
BEGIN
CREATE TABLE [tb_LlantasMedicionesEstado](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[LlantaID] [dbo].[LLANTA] NOT NULL,
	[MedicionID] [dbo].[BIG_ID] NOT NULL,
	[EstadoID] [dbo].[SMALL_ID] NOT NULL,
	[Semaforo] [int] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkTb_LlantasMedicionesEstados] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[LlantaID] ASC,
	[MedicionID] ASC,
	[EstadoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_LlantasRenovaciones]') AND type in (N'U'))
BEGIN
CREATE TABLE [tb_LlantasRenovaciones](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[LlantaID] [dbo].[LLANTA] NOT NULL,
	[RenovacionID] [dbo].[SMALL_ID] NOT NULL,
	[Fecha] [datetime] NULL,
	[Proveedor] [varchar](50) NULL,
	[Marca] [varchar](50) NULL,
	[Modelo] [varchar](50) NULL,
	[Costo] [money] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkTb_LlantasRenovaciones] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[LlantaID] ASC,
	[RenovacionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_LlantasReparaciones]') AND type in (N'U'))
BEGIN
CREATE TABLE [tb_LlantasReparaciones](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[LlantaID] [dbo].[LLANTA] NOT NULL,
	[ReparacionID] [dbo].[SMALL_ID] NOT NULL,
	[Fecha] [datetime] NULL,
	[TipoReparacion] [varchar](20) NULL,
	[Descripcion] [varchar](200) NULL,
	[Proveedor] [varchar](50) NULL,
	[Importancia] [int] NULL,
	[Costo] [money] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkTb_LlantasReparaciones] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[LlantaID] ASC,
	[ReparacionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_Vehiculos]') AND type in (N'U'))
BEGIN
CREATE TABLE [tb_Vehiculos](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[BaseID] [dbo].[BASE] NOT NULL,
	[VehiculoID] [dbo].[SMALL_ID] NOT NULL,
	[NoEconomico] [varchar](20) NULL,
	[Placas] [varchar](10) NULL,
	[Marca] [dbo].[SMALL_ID] NULL,
	[Modelo] [dbo].[SMALL_ID] NULL,
	[Año] [int] NULL,
	[TipoVehiculo] [dbo].[SMALL_ID] NULL,
	[Notas] [text] NULL,
	[Descontinuado] [bit] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkTb_Vehiculos] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[BaseID] ASC,
	[VehiculoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[tb_VehiculosMediciones]') AND type in (N'U'))
BEGIN
CREATE TABLE [tb_VehiculosMediciones](
	[EmpresaID] [dbo].[EMPRESA] NOT NULL,
	[BaseID] [dbo].[BASE] NOT NULL,
	[VehiculoID] [dbo].[SMALL_ID] NOT NULL,
	[MedicionID] [dbo].[BIG_ID] NOT NULL,
	[Fecha] [datetime] NULL,
	[Kilometraje] [bigint] NULL,
	[Notas] [text] NULL,
	[added] [datetime] NULL,
	[lastUpdate] [datetime] NULL,
	[quien] [dbo].[USUARIO] NULL,
 CONSTRAINT [pkTb_VehiculosMediciones] PRIMARY KEY CLUSTERED 
(
	[EmpresaID] ASC,
	[BaseID] ASC,
	[VehiculoID] ASC,
	[MedicionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[spFr_Login]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [spFr_Login] AS' 
END
GO
ALTER PROCEDURE [spFr_Login](
	@UsuarioID USUARIO,
	@NIP VARCHAR(4)
)
AS

	SELECT 
		Nombre,
		TipoUsuario
	FROM
		fr_Usuarios
	WHERE
		UsuarioID = @UsuarioID AND
		NIP = @NIP
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[spFr_ObtenerAccesoBases]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [spFr_ObtenerAccesoBases] AS' 
END
GO
---spFr_ObtenerAccesoBases 'Super'

ALTER PROCEDURE [spFr_ObtenerAccesoBases](
	@UsuarioID USUARIO
)
AS

	IF(@UsuarioID = 'SUPER') --- CUANDO EL USUARIO ES SUPER Tiene acceso a todas las empresas.
	BEGIN
		SELECT 
			e.EmpresaID,
			NombreEmpresa = e.Nombre,
			CorreoElectronico = ISNULL(e.CorreoElectronico, ''),
			b.BaseID,
			NombreBase = b.Nombre
		FROM
			fr_Empresas e 

		LEFT JOIN tb_Bases b ON
			b.EmpresaID = e.EmpresaID 

		ORDER BY NombreEmpresa, NombreBase
	END
	ELSE
	BEGIN
		SELECT 
			e.EmpresaID,
			NombreEmpresa = e.Nombre,
			CorreoElectronico = ISNULL(e.CorreoElectronico, ''),
			b.BaseID,
			NombreBase = b.Nombre
		FROM
			fr_Empresas e 

		INNER JOIN tb_Bases b ON
			b.EmpresaID = e.EmpresaID 

		INNER JOIN fr_UsuariosEmpresasBases ueb ON
			ueb.UsuarioID = @UsuarioID AND
			ueb.EmpresaID = b.EmpresaID AND
			ueb.BaseID = b.BaseID 
		ORDER BY NombreEmpresa, NombreBase

	END


GO
