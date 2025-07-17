// Obtener el formulario
const formApellidoLetra = document.getElementById('formApellidoLetra')
const formApellidoNombreProfesor = document.getElementById('formApellidoNombreProfesor')

formApellidoLetra.addEventListener('submit',(e) => {
    e.preventDefault()
    let iniciales = document.getElementById('letras-apellido').value
    // alert(iniciales)
    iniciales = "/alumnos/" + iniciales
    window.location.href = iniciales
})

formApellidoNombreProfesor.addEventListener('submit',(e) => {
    e.preventDefault()
    let apellido = document.getElementById('letras-apellido-profe').value
    let nombre = document.getElementById('letras-nombre-profe').value
    // alert(iniciales)
    let apellido1_nombre = `/profesor/${apellido}/${nombre}` 
    window.location.href = apellido1_nombre
})