### Introducción al uso de comandos

Los comandos están compuestos por el nombre del comando seguido en ocasiones de una serie de argumentos: los argumentos que no empiezan por guión son argumentos que requiere el programa para trabajar, por ejemplo `cp test.txt final.txt` en ese caso cp es el comando y recibe dos argumentos "test.txt" y "final.txt", lo que hará será copiar el fichero test.txt en final.txt (creándolo si no existe).

\
Si los argumentos empiezan por un guión determinan una serie de opciones del comando: `ls -l -a -h` que también se pueden combinar en uno sólo, por lo tanto el comando anterior sería equivalente que `ls -lah`. Ese comando listaría los ficheros del directorio actual, para ver qué hace cada argumento podemos ejecutar `man nombre-del-comando` en este caso `man ls`.

\
Hay otro tipo de opciones que empiezan por dos guiones y normalmente son versiones largas de las opciones de una letra, por ejemplo el comando sort ordena las lineas de texto de un fichero: `sort test.txt --output=ordenado.txt` ordenará las líneas del fichero test.txt y escribirá el resultado en ordenado.txt.

\
Hay que tener en cuenta que los sistemas Unix (como Linux) son **case sensitive** por lo que `ls` es diferente a `LS`.

\
Si queremos ver una lista de los comandos ejecutados recientemente podemos usar el comando `history`.

\
## Terminal

### Moviéndose por el sistema de archivos

* `pwd`: nos dice la ruta absoluta del directorio en el que estamos.
* `cd`:  seguido de una ruta (relativa o absoluta), permite movernos entre carpetas en la terminal.
* `ls`: muestra la lista de directorios y archivos en la ubicación actual. El argumento `-a` hace que muestre también los archivos ocultos.

\
### Manipulando ficheros y directorios

* `mkdir`: crea uno o más directorios. Si usamos la opción `-p` los creará recursivamente. Ej: `mkdir -p dir1/dir2/dir3`
* `rmdir`: borra un directorio (si está vacío).
* `cp`: copia un fichero en otro (creándolo si no existe) o en otro directorio. Se le debe indicar como primer argumento la ruta al archivo original y como segundo argumento la ruta en la que queremos tener la copia (nombre de archivo incluido).
* `mv`: mueve un fichero a otra localización. Se indica primero la ruta del fichero que queremos mover y después el directorio de destino.
* `rm`: seguido de una ruta, borra el archivo o directorio en cuestión. Para poder borrar directorios con archivos dentro, hay que añadir el argumento `-r` (recursivo).
* `cat`: muestra en pantalla el contenido del fichero o fichero que le pasemos como argumento.
* `touch`: crea un archivo en la ruta que indiquemos (hay que incluir el nombre y la extensión).
* `nano`: seguido de la ruta a un archivo, abre dicho documento en un editor de texto directamente en la terminal.
* `code`: si lo tenemos instalado, abre el directorio que indiquemos en Visual Studio Code.

\
En general cuando los argumentos son ficheros o directorios podemos usar wildcards (\*) para representar "todo", por lo que `cp ~/Downloads/*.txt ~/Documents` copiará todos los ficheros con la extensión .txt que existan en el directorio Downloads del directorio raíz del usuario al directorio Documents.

\
**Importante: cuidado con borrar cosas en el terminal ya que aquí no hay “Papelera de Reciclaje” y en general no se puede recuperar nada de lo borrado**

\
### Manejo de procesos

* `ps`: muestra lista de procesos que hay ejecutandose en ese momento esa terminal. Con el argumento `-a` vemos todos los procesos iniciados por el usuario, y usando `ps -ef` vemos todos los procesos que están corriendo en el sistema.
  * La primera columna en el output de ps es el PID, un identificador numérico del proceso que que nos servirá para referirnos a el. Otra forma de encontrar el PID de un proceso es usando el comando `pgrep`, por ejemplo si tenemos ejecutando el editor de texto `nano` y queremos encontrar su número de proceso podemos hacer `pgrep nano`.
* `kill`: seguido del PID de un proceso, para manualmente ese proceso.
* `killall`: seguido del nombre de un proceso parará todos los procesos con ese nombre.

\
Estos dos últimos comandos intentarán parar los procesos de forma segura, comunicándole al programa que el sistema tiene intención de cerrarlos y dándole tiempo para que el programa haga cosas como guardar datos, hacer un backup o cualquier otra cosa. Existen ocasiones que los procesos están en un estado anómalo y no atienden esta petición de cierre y siguen ejecutándose, en estos casos podemos ejecutar `kill -9` seguido del PID lo cual forzará el cierre sin darle oportunidad al proceso de hacer nada.

\
## Git básico

\
### Clonar un repositorio remoto

* `git clone` seguido de la url al repositorio. Este comando creará una carpeta nueva que será el repositorio.
  * Si el repositorio es privado o vamos a querer hacer cambios en él, lo recomendable es usar la **url SSH** (especialmente en GitHub). Para ello tendremos que tener la clave SSH correctamente configurada.
  * Lo ideal es ejecutarlo donde en la carpeta en la que queremos que se cree el repositorio, pero no hay ningún problema por moverlo de sitio o cambiarle el nombre después (siempre y cuando no lo metamos dentro de otro repositorio).

\
### Actualizar un repositorio local

Si el repositorio remoto tiene cambios que no tenemos en local, solo tendremos que ejecutar `git pull` dentro del repositorio local para que se actualice.

\
### Guardar el estado actual y actualizar el repositorio remoto

* `git add`: seguido de la ruta a un directorio o archivo, añade el archivo/directorio indicado a la *staging area*, de forma que git tendrá en cuenta los cambios realizados en él.
  * En lugar de una ruta se puede usar `*` para incluir todos los archivos y directorios del repositorio, o `.` para incluir toda la carpeta en la que se ejecuta el comando, incluidos subdirectorios y archivos.
* `git commit`: crea un commit (un "punto de guardado") con el estado actual del proyecto. Solo tendrá en cuenta lo que esté en la *staging area*.
  * Con el argumento `-m`, podemos incluir directamente el mensaje del commit (entre comillas). En caso de no hacerlo, se abrirá un editor de texto para escribir el mensaje y el commit no se realizará hasta que cerremos dicho editor.
* `git push`: actualiza el repositorio remoto con los commits que tenemos en local.

\
### Otros comandos de git

* `git status`: nos permite ver el estado actual del repositorio (si hay cambios, si esos cambios se tendrán en cuenta…).
* `git log`: permite ver el historial de commits. Con el argumento `--oneline` lo mostrará de una forma más cómoda y concisa.
* `git revert`: seguido del código de un commit, eliminará todos los cambios aplicados en ese commit y posteriores, de forma que el código quedará como estaba en el commit anterior al indicado.
  * En lugar de indicar un código, tambien podemos usar `HEAD` si lo que queremos es eliminar los cambios aplicados por el último.
  * Esto no elimina los commits en sí, solo deshace los cambios creando un commit nuevo. De esta forma, podemos "deshacer el deshacer" y evitamos problemas de sincronización con repositorios remotos.

\
### Trabajando con ramas

* `git branch`: muestra las ramas que hay en el repositorio y marca en cuál nos encontramos.
  * Añadiendo un nombre como parámetro, creará una rama con ese nombre a partir de la rama actual.
* `git checkout`: seguido del nombre de una rama, cambia a esa rama.
  * Añadiendo el argumento `-b` y proporcionando un nombre de rama que aún no existe, creará la rama.
* `git rebase`: seguido del nombre de la rama original (en principio *main* o *master*) aplicará los cambios realizados en la rama original a la rama actual.

\
\
