import { actualizarSalario, buscarEmpleado } from '../modulo1/empleados.js';

export function asignarSalario(cedula, salario) {
    if (actualizarSalario(cedula, salario)) {
        alert(`Salario asignado correctamente a la cédula ${cedula}.`);
    } else {
        alert("Empleado no encontrado.");
    }
}

export function obtenerSalario(cedula) {
    const empleado = buscarEmpleado(cedula);
    return empleado ? empleado.salarioBase : null;
}