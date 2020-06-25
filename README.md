---
title: "asdrome.digital README.md file"
date: "2020-06-25"
path: "/readme"
---
# asdrome.digital

Esta es una página sobre tecnología, estilo de vida y conexión con la era digítal. Esta basada en la idea de hacer accesible la tecnología para todos. 
> "Educación, comunidad, igualdad y diversión."

Esta disponible con la licencia MIT, así que eres libre de clonar el repositorio.

## Página

Puedes visitar la página en [asdrome.digital][webpage] para ver las últimas novedades.

Sí te interesa saber cómo fue hecha puedes analizar los paquetes disponibles en [GitHub][repositorio].

También puedes jugar con ella al clonarla con (previa instalación de [Git](https://git-scm.com)):

```bash
git clone https://github.com/asdromundo/asdrome.digital
```
Vas a necesitar las siguientes herramientas:

* [Gatsby.js][gatsby]
* Gatsby, a su vez, funciona sobre [nvm][nvm] y [node][node].
* Un navegador web compatible con HTML5.
* Un gestor de paquetes de node: [yarn](https://yarnpkg.com) o [npm](https://www.npmjs.com). Me gusta más yarn.
* Un editor de texto. Puede ser desde Block de notas hasta un IDE. Personalmente usé [Visual Studio Code][vscode].
* Mucha curiosidad.

## Uso

Así que valientemente decidiste intentar correr esta página por tu cuenta, muy bien.
Para asegurarte de que tienes lo necesario puedes revisar el tutorial de [Gatsby](https://www.gatsbyjs.org/tutorial/part-zero/) por lo menos en lo referente a instalación.
Asumiremos en lo consecuente que la instalación de las herramientas fue correcta.

En una terminal (de aquí en adelante CMD, BASh o cualquier otra será denominada terminal sencillamente) muévete al directorio que clonaste.

En sistemas UNIX, eso se ve así:

```bash
cd [RUTA_AL_DIRECTORIO_DONDE_USASTE_EL_COMANDO]/asdrome.digital
```
Puedes ver los archivos existentes en el directorio con _ls_ o sí estas un directorio arriba:

```bash
ls asdrome.digital/
```

Asumiendo que instalaste _yarn_ (sí preferiste npm, pensaré que sabes lo que haces) es necesario actualizar los módulos de la carpeta con lo que debería incluir:
```bash
yarn
```
Va a descargar los paquetes necesarios según el archivo _yarn.lock_ o package.json (sí usas npm) en la carpeta _node_modules_.

Ahora al usar _ls_ deberías tener lo siguiente:

```bash
$ ls -1
gatsby-browser.js
gatsby-config.js
gatsby-node.js
LICENSE
netlify.toml
node_modules
package.json
README.md
src
yarn.lock
```

Con eso deberías estar listo para correr la página localmente con:
```bash
gatsby develop
```
¿Funcionó? Sí es así la consola debería mostrarte que Gatsby esta corriendo en _localhost:8000_. ¿Qué significa eso? Abre tu navegador e ingresa eso en la barra de búsqueda.
Al dar enter deberías ver exactamente lo mismo que la página principal de [asdrome.digital][webpage].

¡Felicidades! Ahora puedes modificar los archivos para hacer que [asdrome.digital][webpage] quede a tu gusto.

## Modificando la página
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Licencia MIT][MIT]

[nvm]: https://github.com/nvm-sh/nvm
[gatsby]: https://www.gatsbyjs.org
[MIT]: https://choosealicense.com/licenses/mit/
[repositorio]: https://github.com/asdromundo/asdrome.digital
[webpage]: https://asdrome.digital
[node]: https://nodejs.org/es
[vscode]: https://code.visualstudio.com