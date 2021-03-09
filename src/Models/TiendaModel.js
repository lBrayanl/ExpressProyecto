'use strict'

const pool = require ('../database') 

module.exports = function() {

    //------------------------- Listar

    async function ListarCambios(req) {
        let query = ('SELECT * FROM cambios')
        const data = await pool.query(query)
        return data
    }
    async function ListarMediosDePago(req) {
        let query = ('SELECT * FROM medios_de_pago')
        const data = await pool.query(query)
        return data
    }
    async function ListarProductos(req) {
        let query = ('SELECT * FROM productos')
        const data = await pool.query(query)
        return data
    }
    async function ListarClientes(req) {
        let query = ('SELECT * FROM clientes')
        const data = await pool.query(query)
        return data
    }
    async function ListarCarrito(req) {
        let query = ('SELECT * FROM carrito')
        const data = await pool.query(query)
        return data
    }

    //------------------------- Agregar

    async function AgregaCambios(req,res){
        await pool.query('insert into cambios set ?',[req.body]);
    }
    
    async function AgregaProductos(req,res){
        await pool.query('insert into productos set ?',[req.body]);
    }
    async function AgregaMediosDePago(req,res){
        await pool.query('insert into medios_de_pago set ?',[req.body]);
    }
    async function AgregarCarrito(req,res){
        await pool.query('insert into carrito set ?',[req.body]);
    }

    //--------------------------- Modificar

    async function ModificaCambios(req){
        const {dato} = req.params;
        await pool.query('UPDATE cambios set ? where id_cambios = ? ',[req.body,dato]);
    }
    async function ModificaMediosDePago(req){
        const {dato} = req.params;
        await pool.query('UPDATE medios_de_pago set ? where id_mediosdepago = ? ',[req.body,dato]);
    }
    async function ModificarProductos(req){
        const {dato} = req.params;
        await pool.query('UPDATE productos set ? where id_productos = ? ',[req.body,dato]);
    }
    async function ModificaCliente(req){
        const {dato} = req.params;
        await pool.query('UPDATE clientes set ? where id_clientes = ? ',[req.body,dato]);
    }

    // ----------------------------------------- Eliminar

    async function EliminarCambios(req){
        await pool.query('DELETE FROM cambios where id_cambios = ? ',[req])
    }
    async function EliminarProducto(req){
        await pool.query('DELETE FROM productos where id_productos = ? ',[req])
    }
    async function EliminarMediosDePago(req){
        await pool.query('DELETE FROM medios_de_pago where id_mediosdepago = ? ',[req])
    }
    async function EliminarCliente(req){
        await pool.query('DELETE FROM clientes where id_clientes = ? ',[req])
    }
    async function EliminarCarrito(req){
        await pool.query('DELETE FROM carrito where id_carrito = ? ',[req])
    }
    return{

        //---------------Listar

        ListarCambios,
        ListarMediosDePago,
        ListarProductos,
        ListarClientes,
        ListarCarrito,

        //---------------Agregar
        
        AgregaCambios,
        AgregaProductos,
        AgregaMediosDePago,
        AgregarCarrito,

        //-------------Modificar

        ModificaCambios,
        ModificaMediosDePago,
        ModificarProductos,
        ModificaCliente,

        //-------------Eliminar

        EliminarCambios,
        EliminarProducto,
        EliminarMediosDePago,
        EliminarCliente,
        EliminarCarrito,
    }
}