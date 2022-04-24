# NasaApi

Ejercicio de Back - NasaAPI
img

En este proyecto se aplican conceptos de Backend vistos hasta el momento. 

# Requisitos del Trabajo
Tener en cuenta las siguientes consideraciones, que serán imprescindibles para este proyecto:

- Respetar los principios y técnicas de lo que hemos aprendido durante el curso sobre orden de carpetas, buenas prácticas, etc...
- JS: asincronía, módulos, naming de variables, ES6, promesas, fetch/axios, async/await... Utilizar el lenguaje JS con los principios utilizados en clase.
- Se permite el uso de cualquier recurso de terceros (librerías, paquetes npm, etc.) que nos pueda facilitar el desarrollo.
- Gestión del control de versiones con GiHub desde el principio del proyecto. Rama main, develop y ramas feature correspondientes.
- Se prestará especial atención a un código limpio, legible, bien documentado, correctamente versionado y fácil de mantener, así como a la aplicación sobre   el mismo de los principios SOLID
-Despliegue de la API en cloud. Heroku + MongoDB Atlas.

# Respecto a la API
- Todas las rutas de la API deben empezar con localhost:3000/api/
- El ejercicio constará de 2 colecciones totales (landings y neas)

## Colección Landings
Ruta base: http://localhost:3000/api/astronomy/landings/mass .. nos muestra todas las landings

- GET para obtener nombre y masa de todos aquellos meteoritos cuya masa sea igual o superior a una masa (gr) dada (con query parameters)​
Ejemplo: /astronomy/landings?minimum_mass=200000
- GET para obtener nombre y masa de uno o más meteoritos cuya masa sea la especificada (route params)
Ejemplo: /astronomy/landings/mass/200000
- GET para obtener los nombres y clase de aquellos meteoritos cuya clase sea la registrada (route params)
Ejemplo: /astronomy/landings/class/L6
- GET para obtener nombre, masa y fecha de todos los meteoritos caídos en determinadas fechas de la siguiente manera:
/astronomy/landings?from=1960&to=1990
/astronomy/landings?from=1960
/astronomy/landings?to=1990
El mismo endpoint deberá ser compatible con las 3 formas
- POST Para crear un nuevo landing en el sistema. El objeto a crear tendrá los mismos campos como los documentos proporcionandos en MongoDB como ejemplo:
{
  "name": "Agen",
  "id": "392",
  "nametype": "Valid",
  "recclass": "H5",
  "mass": "30000",
  "fall": "Fell",
  "year": "1814-01-01T00:00:00.000",
  "reclat": "44.216670",
  "reclong": "0.616670",
  "geolocation": { "latitude": "44.21667", "longitude": "0.61667" }
}




