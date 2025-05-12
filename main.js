import { agregarEmpleado, listarEmpleados } from './modulo1/empleados.js';
import { asignarSalario } from './modulo2/salarios.js';

const formEmpleado = document.getElementById('form-empleado');
const formSalario = document.getElementById('form-salario');
const lista = document.getElementById('lista-empleados');

formEmpleado.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const cedula = document.getElementById('cedula').value;
    const cargo = document.getElementById('cargo').value;
    agregarEmpleado(nombre, cedula, cargo);
    mostrarEmpleados();
    formEmpleado.reset();
});

formSalario.addEventListener('submit', function(event) {
    event.preventDefault();
    const cedula = document.getElementById('cedula-salario').value;
    const salario = parseFloat(document.getElementById('salario').value);
    asignarSalario(cedula, salario);
    mostrarEmpleados();
    formSalario.reset();
});

function mostrarEmpleados() {
    lista.innerHTML = '';
    const empleados = listarEmpleados();
    empleados.forEach(emp => {
        const li = document.createElement('li');
        li.textContent = `Nombre: ${emp.nombre}, Cédula: ${emp.cedula}, Cargo: ${emp.cargo}, Salario: $${emp.salarioBase}`;
        lista.appendChild(li);
    });
}

// Mostrar empleados al cargar la página
mostrarEmpleados();