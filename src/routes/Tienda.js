const express= require('express');
const TiendaControl = require('../Controllers/TiendaControl');
const pool = require('../database');
const router = express.Router();
const path = require('path');
const app = express();

//-------------- Vistas Inicio


router.get('/', async(req,res)=>{
    const Productos = await TiendaControl.ListarProductos(req.body);
    res.render('Tienda/Home',{Productos});
});

// ------------- Parte Admin

//cambios

router.get('/Section-Admin!Express', async(req,res)=>{
    const Productos = await TiendaControl.ListarCambios(req.body);
    res.render('Tienda/Admin/InicioAdmin',{Productos});
});

router.post('/Section-Admin!Express!AgregaCambios', async (req,res)=>{
    await TiendaControl.AgregaCambios(req);
    res.redirect('/Tienda/Section-Admin!Express');
});

router.get('/Section-Admin!Express!EliminarCambios/:dato', async (req,res)=>{
    const {dato} = req.params;
    await TiendaControl.EliminarCambios(dato,req);
    res.redirect('/Tienda/Section-Admin!Express');   
});

router.post('/Section-Admin!Express!ModificaCambios/:dato', async (req,res)=>{
    await TiendaControl.ModificaCambios(req);
    res.redirect('/Tienda/Section-Admin!Express')
})

//productos

router.get('/Section-Admin!Express!Productos', async (req,res)=>{
    const Productos = await TiendaControl.ListarProductos(req.body);
    res.render('Tienda/Admin/Productos/VistaProductos',{Productos});
});

router.post('/Section-Admin!Express!AgregaProductos', async (req,res)=>{
    await TiendaControl.AgregaProductos(req);
    res.redirect('/Tienda/Section-Admin!Express!Productos');
});

router.get('/Section-Admin!Express!EliminarProductos/:dato', async (req,res)=>{
    const {dato} = req.params;
    await TiendaControl.EliminarProducto(dato,req);
    res.redirect('/Tienda/Section-Admin!Express!Productos');   
});

router.post('/Section-Admin!Express!ModificaProductos/:dato', async (req,res)=>{
    await TiendaControl.ModificarProductos(req);
    res.redirect('/Tienda/Section-Admin!Express!Productos')
})

//Medios de Pago

router.get('/Section-Admin!Express!MediosDePago', async (req,res)=>{
    const Productos = await TiendaControl.ListarMediosDePago(req.body);
    res.render('Tienda/Admin/MediosDePagos/VistaMediosDePago',{Productos});
});

router.post('/Section-Admin!Express!AgregaMediosDePago', async (req,res)=>{
    await TiendaControl.AgregaMediosDePago(req);
    res.redirect('/Tienda/Section-Admin!Express!MediosDePago');
});

router.post('/Section-Admin!Express!ModificaMediosDePago/:dato', async (req,res)=>{
    await TiendaControl.ModificaMediosDePago(req);
    res.redirect('/Tienda/Section-Admin!Express!MediosDePago')
})

router.get('/Section-Admin!Express!EliminarMediosDePago/:dato', async (req,res)=>{
    const {dato} = req.params;
    await TiendaControl.EliminarMediosDePago(dato,req);
    res.redirect('/Tienda/Section-Admin!Express!MediosDePago');   
});

//Cliente

router.get('/Section-Admin!Express!Cliente', async (req,res)=>{
    const Productos = await TiendaControl.ListarClientes(req.body);
    res.render('Tienda/Admin/Clientes/VistaClientes',{Productos});
});
//----------------------------------------------------------------------------
router.post('/Section-Admin!Express!AgregaMediosDePago', async (req,res)=>{
    await TiendaControl.AgregaMediosDePago(req);
    res.redirect('/Tienda/Section-Admin!Express!MediosDePago');
});
//---------------------------------------------------------------------------

router.post('/Section-Admin!Express!ModificaCliente/:dato', async (req,res)=>{
    await TiendaControl.ModificaCliente(req);
    res.redirect('/Tienda/Section-Admin!Express!Cliente')
})

router.get('/Section-Admin!Express!EliminarCliente/:dato', async (req,res)=>{
    const {dato} = req.params;
    await TiendaControl.EliminarCliente(dato,req);
    res.redirect('/Tienda/Section-Admin!Express!Cliente');   
});

// ---------------------- Carrito

router.get('/Carrito', async (req,res)=>{
    const Productos = await TiendaControl.ListarCarrito(req.body);
    res.render('Tienda/Carrito/VistaCarrito',{Productos});
});

router.post('/AgregarCarrito', async (req,res)=>{
    await TiendaControl.AgregarCarrito(req);
    res.redirect('/Tienda/');
});

router.get('/EliminarCarrito/:dato', async (req,res)=>{
    const {dato} = req.params;
    await TiendaControl.EliminarCarrito(dato,req);
    res.redirect('/Tienda/Carrito');   
});

module.exports= router;

