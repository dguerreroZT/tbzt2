BEGIN TRAN


DECLARE @EmpresaID EMPRESA
SET @EmpresaID = '2795'

DECLARE @BaseID BASE
SET @BaseID = 'CF34'


---- Obtener la ultima medicion
SELECT 
	* 
INTO #tmpUltimasMediciones
FROM (
   SELECT 
        LlantaID,
        MedicionID,
        Fecha,
		Base,
		Presion,
		Profundidad,
        ROW_NUMBER() OVER (PARTITION BY LlantaID ORDER BY Fecha DESC) AS ROW_ID
    FROM 
        tb_LlantasMediciones
	WHERE
		EmpresaID = @EmpresaID 
	) TB
WHERE ROW_ID = 1


SELECT 
	l.LlantaID,
	l.NoEconomico,
	Marca = ISNULL(ma.NombreMarca,''),
	Presion = ISNULL(me.Presion,0),
	Profundidad = ISNULL(me.Presion,0)
FROM tb_Llantas l
LEFT JOIN ca_MarcasLlantas ma ON 
	ma.MarcaID = l.Marca
LEFT JOIN #tmpUltimasMediciones me ON
	me.LlantaID = l.LlantaID
WHERE 
	l.EmpresaID = @EmpresaID AND
	(me.Base = @BaseID OR me.Base IS NULL)

ROLLBACK

--- tb_Vehiculos