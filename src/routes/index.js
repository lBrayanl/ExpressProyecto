const express= require('express');
//const ProyectoControl = require('../Controllers/ProyectoControl');
const pool = require('../database');
const router = express.Router();
const path = require('path');
const app = express();

//-------------- Vistas Inicio

router.get('/',(req,res)=>{
    res.render('vistas/principal');
});
router.get('/inicio',(req,res)=>{
    res.render('vistas/inicio');
});

//---------- Trabajadores

router.get('/trabajadores', async (req, res) => {
    const productos = await ProyectoControl.listAll(req.body);
    res.render('vistas/CrudTrabajadores/trabajadores',{productos});
});
router.post('/ModificarTrabajadores/:dato',async(req,res)=>{
    await ProyectoControl.modificarTrabajador(req);
    res.redirect('/trabajadores');
});
router.get('/agregar_t',(req,res)=>{
    res.render('vistas/CrudTrabajadores/agregar_T');
});
router.post('/AgregaTrabajador',async(req,res)=>{
    await ProyectoControl.AgregaTrabajador(req);
    res.redirect('/trabajadores');
});
router.post('/EliminarTrabajador/:dato',async(req,res)=>{
    const {dato} = req.params;
    await ProyectoControl.EliminarTrabajador(dato,req);
    res.redirect('/trabajadores');   
});


//------------ Ver Registros

router.get('/ver_registros', async (req, res) => {
    const productos = await ProyectoControl.listAll(req.body);
    res.render('vistas/VerRegistros/ver_registros',{productos});
});
router.get('/ver_fechas/:dato', async (req,res)=>{
    const productos = await ProyectoControl.listaFecha(req);
    res.render('vistas/VerRegistros/fechas',{productos});
});
router.get('/vista_fecha_x',(req,res)=>{
    res.render('vistas/VerRegistros/vista_fecha_x');
});

//------------ Ingresa Kilos

router.get('/ingreso_kilos', async (req, res) => {
    const productos = await ProyectoControl.listAlla(req.body);
    res.render('vistas/IngresarKilos/ingreso_kilos',{productos});
});

router.get('/ingresa_kilos',(req,res)=>{
    res.render('vistas/IngresarKilos/ver_trabajadores');
});


//------------------ Realizar pagos

router.get('/vista_pago', async (req, res) => {
    const productos = await ProyectoControl.listAll(req.body);
    res.render('vistas/RealizarPagos/vista_pago',{productos});
});
router.post('/Modificarkilos/:dato',async(req,res)=>{
    await ProyectoControl.modificarTrabajador(req);
    res.redirect('/vista_pago');
});
//-------------------- Notas

router.get('/calendario', async (req,res)=>{
    const productos = await ProyectoControl.listAllC(req.body);
    res.render('vistas/Notas/calendario',{productos});
});
router.post('/AgregaNotas',async(req,res)=>{
    await ProyectoControl.AgregarNotas(req);
    res.redirect('/calendario');
});
router.get('/EliminarNotas/:dato',async(req,res)=>{
    const {dato} = req.params;
    await ProyectoControl.EliminarNotas(dato,req);
    res.redirect('/calendario');   
});

//------------------------ Encargos

router.get('/encargos', async (req,res)=>{
    const productos = await ProyectoControl.listAllE(req.body);
    res.render('vistas/Encargos/encargos',{productos});
});
router.post('/AgregaEncargos',async(req,res)=>{
    await ProyectoControl.AgregaEncargos(req);
    res.redirect('/encargos');
});
router.post('/ModificarEncargos/:dato',async(req,res)=>{
    await ProyectoControl.ModificarEncargos(req);
    res.redirect('/encargos');
});
router.get('/EliminarEncargos/:dato',async(req,res)=>{
    const {dato} = req.params;
    await ProyectoControl.EliminarEncargos(dato,req);
    res.redirect('/encargos');   
});

//----------------------- Insumos

router.get('/insumos', async (req,res)=>{
    const productos = await ProyectoControl.listAllIn(req.body);
    res.render('vistas/Insumos/insumos',{productos});
});
router.post('/AgregaInsumos',async(req,res)=>{
    await ProyectoControl.AgregaInsumos(req);
    res.redirect('/insumos');
});
router.post('/ModificarInsumos/:dato',async(req,res)=>{
    await ProyectoControl.ModificarInsumos(req);
    res.redirect('/insumos');
});
router.get('/EliminarInsumos/:dato',async(req,res)=>{
    const {dato} = req.params;
    await ProyectoControl.EliminarInsumos(dato,req);
    res.redirect('/insumos');   
});

//--------------------------- Contaduria ------------------------------------------------

router.get('/contaduria', async (req,res)=>{
    const productos = await ProyectoControl.listAllCon(req.body);
    res.render('vistas/Contaduria/contaduria',{productos});
});
router.post('/AgregaContaduria',async(req,res)=>{
    await ProyectoControl.AgregaContaduria(req);
    res.redirect('/contaduria');
});
router.post('/ModificarContaduria/:dato',async(req,res)=>{
    await ProyectoControl.ModificarContaduria(req);
    res.redirect('/contaduria');
});
router.get('/EliminarContaduria/:dato',async(req,res)=>{
    const {dato} = req.params;
    await ProyectoControl.EliminarContaduria(dato,req);
    res.redirect('/contaduria');   
});

//----------------------------- Cafe Seco

router.get('/cafe_seco', async (req,res)=>{
    const productos = await ProyectoControl.listAllCafe(req.body);
    res.render('vistas/CafeSeco/cafe_seco',{productos});
});
router.post('/AgregaCafe_seco',async(req,res)=>{
    await ProyectoControl.AgregaCafe_seco(req);
    res.redirect('/cafe_seco');
});
router.post('/ModificarCafe_seco/:dato',async(req,res)=>{
    await ProyectoControl.ModificarCafe_seco(req);
    res.redirect('/cafe_seco');
});
router.get('/EliminarCafe_seco/:dato',async(req,res)=>{
    const {dato} = req.params;
    await ProyectoControl.EliminarCafe_seco(dato,req);
    res.redirect('/cafe_seco');   
});

//--------------------------------- Muestras

router.get('/muestras', async (req,res)=>{
    const productos = await ProyectoControl.listAllMu(req.body);
    res.render('vistas/Muestras/muestras',{productos});
});
router.post('/AgregaMuestras',async(req,res)=>{
    await ProyectoControl.AgregaMuestras(req);
    res.redirect('/muestras');
});
router.post('/ModificarMuestras/:dato',async(req,res)=>{
    await ProyectoControl.ModificarMuestras(req);
    res.redirect('/muestras');
});
router.get('/EliminarMuestras/:dato',async(req,res)=>{
    const {dato} = req.params;
    await ProyectoControl.EliminarMuestras(dato,req);
    res.redirect('/muestras');   
});

module.exports= router;

