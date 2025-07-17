// Importar las dependencias
import express from "express"
import {connection} from "./mysql/mysql.js"
import { capitalize } from "./funciones.js";

// Obtener el puerto del servidor
process.loadEnvFile()
const PORT = process.env.PORT || 5000
console.log(PORT);

// Crear la aplicación
const app = express()

// Ruta de los ficheros estáticos
app.use(express.static(process.cwd() + "/public"))

// RUTAS
app.get("/", (req, res) => {
res.sendFile("index.html")
})

app.get("/alumnos", (req, res)=>{
    const query = "SELECT * FROM alumno"
    connection.query( query, (err, result) => {
        if (err) throw err
        // console.log(result);
        res.json(result)
    })
})

app.get("/alumnos/:letra", (req, res) => {
    const query = `SELECT * FROM alumno WHERE apellido1 like "${req.params.letra}%";`
    connection.query( query, (err, result) => {
        if (err) throw err
        // console.log(result);
        if(result.length == 0) {
           return  res.status(404).json({"mensaje": "Alumno no encontrado"})
        }
        res.json(result)
    })
})

// /apellidoProfe/nombreProfe -> nombre, apellido, asignaturas

app.get("/profesor/:apellido1/:nombre", (req, res) => {
    let apellido1=capitalize( req.params.apellido1)
    
    const nombre=capitalize( req.params.nombre)
    const query = ` SELECT a.nombre
                    FROM profesor p
                    JOIN impartir i ON p.idProfesor = i.idProfesor
                    JOIN asignatura a ON i.idAsignatura = a.idAsignatura
                    WHERE p.nombre = "${nombre}" AND p.apellido1 = "${apellido1}"`
    let array_asignaturas = []
        
    connection.query( query, (err, result) => {
        if (err) throw err
        console.log(result);
        if(result.length == 0) {
           return  res.status(404).json({"mensaje": "Docente no encontrado"})
        }
        for (let i=0; i<result.length;i++){
            let asignatura = result[i].nombre
            array_asignaturas.push(asignatura)
        }
        console.log(array_asignaturas);
        const resultado = {"nombre" : nombre,"apellido": apellido1,"asignaturas":array_asignaturas }
        
        console.log(resultado);
        res.json(resultado)

    })
})





// Ruta 404
app.use((req,res)=> {
    res.status(404).send("<h1>Ruta no encontrada</h1>")
})


app.listen(PORT, () => console.log(`Servidor abierto en http://localhost:${PORT}`))