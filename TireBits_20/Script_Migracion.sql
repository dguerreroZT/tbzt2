--SELECT * FROM db_TireBits_20170327.dbo.Clientes
--SELECT RIGHT(NEWID(),4),* FROM db_TireBits_20170327.dbo.RazonesSociales

---BEGIN TRAN

DELETE FROM fr_Empresas
DELETE FROM tb_Bases
DELETE FROM ca_MarcasLlantas
DELETE FROM fr_Usuarios

INSERT INTO fr_Usuarios (UsuarioID, Nombre, NIP, TipoUsuario)
VALUES ('SUPER','Super Administrador del Sistema','9999','S')

SELECT EmpresaID = RIGHT(NEWID(),4),Nombre, RazonSocialID INTO #tmpEmpresas FROM db_TireBits_20170327.dbo.RazonesSociales

SELECT EmpresaID, BaseID = RIGHT(NEWID(),4), Nombre = b.Base, b.RazonSocialID, BaseID_Old = b.BaseID INTO #tmpBases FROM db_TireBits_20170327.dbo.Bases b INNER JOIN  #tmpEmpresas e ON b.RazonSocialID  = e.RazonSocialID
/*
SELECT 
	MarcaID = RIGHT(NEWID(),4),
	Marca = ISNULL(MarcaLlanta, MarcaRenovado),
	IdMarca = ml.MarcaLlantaID,
	IdRenovado = mr.MarcaRenovadoID
INTO #tmpMarcas
	FROM 
		MarcasLlantas ML 
	FULL JOIN MarcasRenovados MR ON
		ml.MarcaLlanta = mr.MarcaRenovado

		*/
SELECT EmpresaID, LlantaID = RIGHT(NEWID(),8), NoEconomico = Llanta, MarcaLlantaID FROM 
	#tmpEmpresas e
	INNER JOIN db_TireBits_20170327.dbo.Llantas l ON
		l.RazonSocialID = e.RazonSocialID 

--- tb_Llantas


INSERT INTO fr_Empresas (EmpresaID, Nombre)
SELECT EmpresaID, Nombre FROM #tmpEmpresas

INSERT INTO tb_Bases (EmpresaID, BaseID, Nombre)
SELECT EmpresaID, BaseID, Nombre FROM #tmpBases

SELECT * FROM fr_Empresas ORDER BY Nombre
SELECT * FROM tb_Bases ORDER BY Nombre






DROP TABLE #tmpEmpresas 
DROP TABLE #tmpBases 
--DROP TABLE #tmpMarcas
--ROLLBACK