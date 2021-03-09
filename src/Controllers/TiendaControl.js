'use strict'

const productos = require('../Models/TiendaModel')

//-------------------- Listar

async function ListarCambios(req = null){
    const ListarCambios = await productos().ListarCambios(req)
    return ListarCambios
}
async function ListarMediosDePago(req = null){
    const ListarMediosDePago = await productos().ListarMediosDePago(req)
    return ListarMediosDePago
}
async function ListarProductos(req = null){
    const ListarProductos = await productos().ListarProductos(req)
    return ListarProductos
}
async function ListarClientes(req = null){
    const ListarClientes = await productos().ListarClientes(req)
    return ListarClientes
}
async function ListarCarrito(req = null){
    const ListarCarrito = await productos().ListarCarrito(req)
    return ListarCarrito
}

// -------------------- Agregar

async function AgregaCambios(req = null){
    const AgregaCambios = await productos().AgregaCambios(req)
    return AgregaCambios
}
async function AgregaMediosDePago(req = null){
    const AgregaMediosDePago = await productos().AgregaMediosDePago(req)
    return AgregaMediosDePago
}

async function AgregaProductos(req = null){
    const AgregaProductos = await productos().AgregaProductos(req)
    return AgregaProductos
}
async function AgregarCarrito(req = null){
    const AgregarCarrito = await productos().AgregarCarrito(req)
    return AgregarCarrito
}

// ----------------------- Modificar

async function ModificaCambios(req = null){
    const ModificaCambios = await productos().ModificaCambios(req)
    return ModificaCambios
}
async function ModificaMediosDePago(req = null){
    const ModificaMediosDePago = await productos().ModificaMediosDePago(req)
    return ModificaMediosDePago
}
async function ModificaCliente(req = null){
    const ModificaCliente = await productos().ModificaCliente(req)
    return ModificaCliente
}
async function ModificarProductos(req = null){
    const ModificarProductos = await productos().ModificarProductos(req)
    return ModificarProductos
}


// ------------------- Eliminar

async function EliminarCambios(req=null){
    const EliminarCambios = await productos().EliminarCambios(req)
    return EliminarCambios
}
async function EliminarProducto(req=null){
    const EliminarProducto = await productos().EliminarProducto(req)
    return EliminarProducto
}
async function EliminarMediosDePago(req=null){
    const EliminarMediosDePago = await productos().EliminarMediosDePago(req)
    return EliminarMediosDePago
}

async function EliminarCliente(req=null){
    const EliminarCliente = await productos().EliminarCliente(req)
    return EliminarCliente
}

async function EliminarCarrito(req=null){
    const EliminarCarrito = await productos().EliminarCarrito(req)
    return EliminarCarrito
}

module.exports = {

    //- listar
    ListarCambios,
    ListarMediosDePago,
    ListarProductos,
    ListarClientes,
    ListarCarrito,

    //- Agregar
    AgregaCambios,
    AgregaMediosDePago,
    AgregaProductos,
    AgregarCarrito,

    //- Modificar
    ModificaCambios,
    ModificaCliente,
    ModificarProductos,
    ModificaMediosDePago,

    //- Eliminar
    EliminarCambios,
    EliminarProducto,
    EliminarMediosDePago,
    EliminarCliente,
    EliminarCarrito,
}