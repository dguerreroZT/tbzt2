SELECT * FROM db_Tirebits_20170327.dbo.InterfletLlantas
SELECT * FROM db_Tirebits_20170327.dbo.InterfletVehiculos
SELECT * FROM db_Tirebits_20170327.dbo.MarcasVehiculos
SELECT * FROM db_Tirebits_20170327.dbo.MarcasLlantas
SELECT * FROM db_Tirebits_20170327.dbo.ModelosLlantas
SELECT * FROM db_Tirebits_20170327.dbo.MedidasLlantas
SELECT * FROM db_Tirebits_20170327.dbo.Llantas
SELECT * FROM db_Tirebits_20170327.dbo.LlantasMediciones
SELECT * FROM db_Tirebits_20170327.dbo.Clientes
SELECT * FROM db_Tirebits_20170327.dbo.Bases
SELECT * FROM db_Tirebits_20170327.dbo.Unidades



--SELECT * FROM db_Tirebits_20170327.dbo.Llantas WHERE CLienteID = 

--INSERT INTO fr_Empresas(EmpresaID, Nombre)
--VALUES (RIGHT(NEWID(),4),'Interflet') 


--INSERT INTO tb_Bases(EmpresaID, BaseID, Nombre)
--VALUES ('2795', RIGHT(NEWID(),4),'Altamira') 

--INSERT INTO tb_Bases(EmpresaID, BaseID, Nombre)
--VALUES ('2795', RIGHT(NEWID(),4),'Manzanillo') 

--INSERT INTO tb_Bases(EmpresaID, BaseID, Nombre)
--VALUES ('2795', RIGHT(NEWID(),4),'Veracruz') 

--BEGIN TRAN
--INSERT INTO ca_MarcasLlantas (MarcaID, NombreMarca)
--SELECT MarcaID = RIGHT(NEWID(),6), MarcaLlanta FROM  db_Tirebits_20170327.dbo.MarcasLlantas
--SELECT * FROM ca_MarcasLlantas ORDER BY NombreMarca
--ROLLBACK

--BEGIN TRAN
--INSERT INTO ca_ModelosLlantas (ModeloID, NombreModelo)
--SELECT ModeloID = RIGHT(NEWID(),6), ModeloLlanta FROM  db_Tirebits_20170327.dbo.ModelosLlantas GROUP BY ModeloLlanta
--SELECT * FROM ca_ModelosLlantas ORDER BY NombreModelo
--ROLLBACK

--BEGIN TRAN
--INSERT INTO ca_MedidasLlantas (MedidaID, NombreMedida)
--SELECT MedidaID = RIGHT(NEWID(),6), MedidaLlanta FROM  db_Tirebits_20170327.dbo.MedidasLlantas GROUP BY MedidaLlanta
--SELECT * FROM ca_MedidasLlantas ORDER BY NombreMedida
--ROLLBACK


--BEGIN TRAN
--INSERT INTO tb_Llantas(EmpresaID,LlantaID, NoEconomico, Marca, Modelo, Medida, Costo, Notas)
--SELECT 
--	EmpresaID = '2795',
--	LlantaID = RIGHT(NEWID(),8),
--	NoEconomico = Llanta,
--	Marca = tb_ma.MarcaID,
--	Modelo = tb_mo.ModeloID,
--	Medida = tb_me.MedidaID,
--	Costo = 0.0,
--	Notas = ''
--FROM 
--	db_Tirebits_20170327.dbo.Llantas l
--LEFT JOIN db_Tirebits_20170327.dbo.MarcasLlantas ma ON
--	l.MarcaLlantaID = ma.MarcaLlantaID
--LEFT JOIN ca_MarcasLlantas tb_ma ON
--	tb_ma.NombreMarca = ma.MarcaLlanta

--LEFT JOIN db_Tirebits_20170327.dbo.ModelosLlantas mo ON
--	l.MarcaLlantaID = mo.MarcaLlantaID AND
--	l.ModeloLlantaID = mo.ModeloLlantaID
--LEFT JOIN ca_ModelosLlantas tb_mo ON
--	tb_mo.NombreModelo = mo.ModeloLlanta

--LEFT JOIN db_Tirebits_20170327.dbo.MedidasLlantas me ON
--	l.MedidaLlantaID = me.MedidaLlantaID
--LEFT JOIN ca_MedidasLlantas tb_me ON
--	tb_me.NombreMedida = me.MedidaLlanta

--	WHERE l.ClienteID = 30020

--ROLLBACK


--BEGIN TRAN
--INSERT INTO ca_MarcasVehiculos (MarcaID, NombreMarca)
--SELECT MarcaID = RIGHT(NEWID(),6), MarcaVehiculo FROM  db_Tirebits_20170327.dbo.MarcasVehiculos 
--	WHERE MarcaVehiculo NOT IN (SELECT NombreMarca FROM ca_MarcasVehiculos)
--SELECT * FROM ca_MarcasVehiculos ORDER BY NombreMarca
--ROLLBACK


--BEGIN TRAN
--INSERT INTO ca_ModelosVehiculos (ModeloID, NombreModelo)
--SELECT ModeloID = RIGHT(NEWID(),6), Modelo FROM  db_Tirebits_20170327.dbo.Unidades 
--	WHERE 
--		Modelo IS NOT NULL AND 
--		Modelo NOT IN (SELECT NombreModelo FROM ca_ModelosVehiculos)
--	GROUP BY Modelo
--SELECT * FROM ca_ModelosVehiculos ORDER BY NombreModelo
--ROLLBACK


--BEGIN TRAN
--INSERT INTO ca_TiposVehiculos(TipoID, NombreTipo)
--SELECT TipoID = RIGHT(NEWID(),6), TipoVehiculo FROM  db_Tirebits_20170327.dbo.TiposVehiculos
--	WHERE 
--		TipoVehiculo NOT IN (SELECT NombreTipo FROM ca_TiposVehiculos)
--	GROUP BY TipoVehiculo
--SELECT * FROM ca_TiposVehiculos ORDER BY NombreTipo
--ROLLBACK




SELECT 
	EmpresaID = '2795',
	BaseID = CASE u.BaseID 
		WHEN 20048 THEN 'CF34'
		WHEN 20049 THEN '74AB'
		WHEN 20050 THEN 'FF81'
		END,
	VehiculoID = RIGHT(NEWID(),6),
	NoEconomico = u.Economico,
	Placas = u.Placas,
	Marca = tb_ma.MarcaID,
	Modelo = tb_mo.ModeloID, 
	Año = u.Año,
	TipoVehiculo = tb_tv.TipoVehiculo,
	Notas u.Notas,
	Descontinuado = 0
FROM
	db_Tirebits_20170327.dbo.Unidades u
LEFT JOIN MarcasVehiculos ma ON
	ma.MarcaVehiculoID = u.MarcaVehiculoID
LEFT JOIN ca_MarcasVehiculos tb_ma ON
	tb_ma.NombreMarca = ma.MarcaVehiculo

LEFT JOIN TiposVehiculos tv ON 
	u.TipoVehiculoID = tv.TipoVehiculoID

LEFT JOIN ca_ModelosVehiculos tb_mo ON
	tb_mo.NombreModelo = u.Modelo



---INSERT INTO tb_LlantasMediciones

--SELECT 
--	EmpresaID = '2795',
--	LlantaID = tb_l.LlantaID,
--	MedicionID = RIGHT(NEWID(),8),
--	Fecha = GETDATE(),
--	Base = CASE lm.BaseID 
--		WHEN 20048 THEN 'CF34'
--		WHEN 20049 THEN '74AB'
--		WHEN 20050 THEN 'FF81'
--		END,
--	Motivo = 'MED',
--	Ubicacion = CASE WHEN lm.UnidadID > 0 THEN 'V' ELSE 'B' END,
--	Lugar = CASE WHEN lm.UnidadID > 0 THEN lm.UnidadID ELSE NULL END,
--	Posicion = CASE WHEN lm.UnidadID > 0 THEN lm.Posicion ELSE NULL END,
--	Destino = CASE WHEN lm.UnidadID > 0 THEN 'V' ELSE 'B' END,
--	LugarDestino = CASE WHEN lm.UnidadID > 0 THEN lm.UnidadID ELSE NULL END,
--	PosicionDestino = CASE WHEN lm.UnidadID > 0 THEN lm.Posicion ELSE NULL END,
--	Presion = lm.Presion,
--	Profundidad = lm.Profundidad,
--	Notas = 'Prueba de migración'
	
-- FROM 
--db_Tirebits_20170327.dbo.LlantasMediciones lm
--LEFT JOIN db_Tirebits_20170327.dbo.Llantas l ON
--	l.LlantaID =  lm.LlantaID
--LEFT JOIN tb_Llantas tb_l ON 
--	tb_l.NoEconomico = l.Llanta
--WHERE l.ClienteID = 30020


medida
tb_llantas

SELECT * FROM tb_Bases WHERE EmpresaID = '2795' 

---- Empresa Interflet ---- 2795
---- Base Altamira ----CF34 --- 20048
---- Base Manzanillo ----74AB --- 20049
---- Base Veracriz ----FF81 --- 20050




