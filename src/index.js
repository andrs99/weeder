import React from "react";
import ReacDom from "react-dom";  

const usuario = {
    nombre: 'Luis Andres',
    apellido: 'Rodriguez Campos',
    edad: 22,
    fechaDeNacimiento: '7 de septiembre de 1999',
    sexo: 'Hombre',
    paisDeOrigen: 'Mexico',
    region: 'Durango',
    municipio: 'Cuencame',
    ciudadActual: 'Cd. Lerdo',
    estado: 'Vivo'

}

function obtenerUsuario(usuario){
    return(
        <div>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Apellido: {usuario.nombre}</li>
                <li>Edad: {usuario.edad}</li>
                <li>Fecha de nacimiento: {usuario.fechaDeNacimiento}</li>
                <li>Sexo: {usuario.sexo}</li>
                <li>Pais de origen: {usuario.paisDeOrigen}</li>
                <li>Region: {usuario.region}</li>
                <li>Municipio: {usuario.municipio}</li>
                <li>Ciudad actual: {usuario.ciudadActual}</li>
                <li>Estado: {usuario.estado}</li>
            </ul>
        </div>
    )
    
} 

function validar(usuario){
    if(usuario){
        return obtenerUsuario(usuario)
    }else{
        return <h1>No mames sacate alv</h1>
    }
}




const nombre = obtenerUsuario(usuario)

const element = <div>{validar(usuario)}</div>
const container = document.getElementById('root')

ReacDom.render(
    element,
    container
)