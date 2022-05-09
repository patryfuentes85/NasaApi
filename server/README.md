# NasaApi

Ejercicio de Back - NasaAPI
img

En este proyecto se aplican conceptos de Backend vistos hasta el momento. 

## Requisitos del Trabajo
Tener en cuenta las siguientes consideraciones, que serán imprescindibles para este proyecto:

- Respetar los principios y técnicas de lo que hemos aprendido durante el curso sobre orden de carpetas, buenas prácticas, etc...
- JS: asincronía, módulos, naming de variables, ES6, promesas, fetch/axios, async/await... Utilizar el lenguaje JS con los principios utilizados en clase.
- Se permite el uso de cualquier recurso de terceros (librerías, paquetes npm, etc.) que nos pueda facilitar el desarrollo.
- Gestión del control de versiones con GiHub desde el principio del proyecto. Rama main, develop y ramas feature correspondientes.
- Se prestará especial atención a un código limpio, legible, bien documentado, correctamente versionado y fácil de mantener, así como a la aplicación sobre   el mismo de los principios SOLID
-Despliegue de la API en cloud. Heroku + MongoDB Atlas.

## Respecto a la API
- Todas las rutas de la API deben empezar con localhost:3000/api/
- El ejercicio constará de 2 colecciones totales (landings y neas)

# Colección Landings
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

```
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
```
Ejemplo: /astronomy/landings/create
- PUT Para editar un landing en el sistema. Búsqueda para editar por ID. El objeto a editar tendrá los mismos campos como los documentos proporcionandos en MongoDB como ejemplo.

```
 {
  "name": "Alexandrovsky",
  "id": "465",
  "nametype": "Valid",
  "recclass": "H4",
  "mass": "9251",
  "fall": "Fell",
  "year": "1900-01-01T00:00:00.000",
  "reclat": "50.950000",
  "reclong": "31.816670",
  "geolocation": { "latitude": "50.95", "longitude": "31.81667" }
},
```
Ejemplo: /astronomy/landings/edit
- DELETE Para borrar un landing en el sistema. Búsqueda para borrar por ID.
Ejemplo: /astronomy/landings/delete

# Colección NEAS

Ruta base: http://localhost:3000/api/astronomy/neas​

- GET para obtener la designación y el período anual en base a la clase orbital del asteroide (con query params)​
Ejemplo: /astronomy/neas?class=aten​
- GET para obtener designación, fecha y período anual de todos los asteroides que cumplan el filtro de fechas dadas​
/astronomy/neas?from=2010&to=2015
/astronomy/neas?from=2010
/astronomy/neas?to=2015
- En este caso, además, podremos poner la fecha más específica si quisiéramos:
.. YYYY-MM-DD
.. YYYY-MM
.. YYYY
El endpoint debe ser compatible con los 3 casos
- POST Para crear un nuevo NEA en el sistema. El objeto a crear tendrá los mismos campos como los documentos proporcionandos en MongoDB como ejemplo:
```  {
  "designation": "(2014 CY4)",
  "discovery_date": "2014-02-04T00:00:00.000",
  "h_mag": "21.1",
  "moid_au": "0.042",
  "q_au_1": "0.48",
  "q_au_2": "4.82",
  "period_yr": "4.32",
  "i_deg": "15.02",
  "pha": "Y",
  "orbit_class": "Apollo"
}
```
Ejemplo: /astronomy/neas/create
- PUT Para editar un NEA en el sistema. Búsqueda para editar por designation. El objeto a editar tendrá los mismos campos como los documentos proporcionandos en MongoDB como ejemplo.

```
{
  "designation": "(2010 YD3)",
  "discovery_date": "2010-12-26T00:00:00.000",
  "h_mag": "20",
  "moid_au": "0.195",
  "q_au_1": "1.11",
  "q_au_2": "4.05",
  "period_yr": "4.14",
  "i_deg": "24.61",
  "pha": "N",
  "orbit_class": "Amor"
}
```
Ejemplo: /astronomy/neas/edit
- DELETE Para borrar un NEA del sistema. Búsqueda para borrar por designation.
Ejemplo: /astronomy/neas/delete

![GATO](https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_feb22/raw/master/assets/back/ejercicioNasa/nasa.jpg)

# Importación de datos en MongoDB

Aquí Tienes los [Datos](https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_feb22/tree/master/utils/ejercicioNasa).

## OPCIÓN 1 (la fácil):

En MongoCompass, creamos una colección. En dicha colección aparece el botón add data. Al pulsar en el botón aparecerá la opción de Import File. Pulsada esta opción nos aparecerá un cuadro de texto que nos permite seleccionar el archivo JSON que queremos importar en nuestra colección.

El ejercicio consta de dos colecciones que tenemos que importar.

Los JSON de datos que queremos guardar te los adjuntamos en este ejercicio, en la carpeta utils.

## OPCIÓN 2:

El seeding nos permite importar grandes cantidades de datos a colecciones vacías. En este caso de adjuntamos la carpeta utils con dos JSON, uno referente a landings y otro referente a la colección neas. Para poder guardarlos dentro de nuestra base de datos de mongo, usaremos mongoimport.
```
mongoimport
```

Comprobar si tenemos instalado mongoimport

```
mongoimport --version
```

- Instalación de mongoimport (MongoDB Database Tools)
- Uso
- El comando neccesita que especifiquemos la base de datos, la colección, y la ruta al archivo (csv y json)
```
mongoimport --db=[base-de-datos] --collection=[colección] [ruta/al/archivo]
```
- Si usamos un json que se compone de un array de objetos deberemos pasar también un flag que lo especifique
```
mongoimport --jsonArray --db=[base-de-datos] --collection=[colección] [ruta/al/archivo]
```

