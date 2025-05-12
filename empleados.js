const empleados = [];

export function agregarEmpleado(nombre, cedula, cargo) {
    const empleado = { nombre, cedula, cargo, salarioBase: 0 };
    empleados.push(empleado);
    alert(`Empleado ${nombre} agregado correctamente.`);
}

export function listarEmpleados() {
    return empleados;
}

export function buscarEmpleado(cedula) {
    return empleados.find(emp => emp.cedula === cedula) || null;
}

export function actualizarSalario(cedula, salario) {
    const empleado = buscarEmpleado(cedula);
    if (empleado) {
        empleado.salarioBase = salario;
        return true;
    }
    return false;
}