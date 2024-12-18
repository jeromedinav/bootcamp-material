## Ejercicios

### 1. Atributos

Descarga el siguiente archivo `html` y corrige los errores que contiene. Asegúrate de que todos los elementos HTML tienen los atributos correctos y necesarios. Una vez corregidos los errores, valida tu código con el [Validador HTML de W3C](https://validator.w3.org/#validate_by_input).

> Descargar archivo [ej01_semana-1.html](./resources/ej01_semana-1.html)

**Puntos clave a tener en cuenta al corregir el código:**

1. Asegúrate de que todos los atributos estén correctamente escritos.
2. Asegúrate de que los atributos obligatorios estén presentes en los elementos necesarios.
3. Asegúrate de que los atributos que requieren un valor tengan un valor válido.
4. Si es necesario, añade espacios entre los atributos de los elementos.

> **Nota**: A la hora de usar el validador, recuerda que no debe dar ningún error. Además, para este ejercicio, tampoco debe aparecer ningún _warning_.

### Solución

A continuación puedes descargar el ejercicio resuelto para que puedas comparar tu solución:

> Descargar archivo [ej01_semana-1-resuelto.html](./resources/ej01_semana-1-resuelto.html)

[![](./resources/semana-1-solucion-atributos.png)](https://youtu.be/xFguen6uA4M)

---

### 2. Figure y figcaption

Descarga el siguiente archivo `zip`, descomprímelo y sin variar su estructura edita el código HTML para añadirle un elemento `<figure>` que contenga un elemento `<img>` para la imagen y un elemento `<figcaption>` para el nombre de la imagen, utilizando la información proporcionada.

> Descargar archivo [ej02_semana-1.zip](./resources/ej02_semana-1.zip)

- Ruta de la imagen: `/images/cityscape.jpg`
- Texto alternativo: "Una ciudad iluminada de noche con rascacielos brillantes"

Nombre de la imagen: "Ciudad iluminada de noche - Foto de [Pawel Nolbert](https://unsplash.com/@hellocolor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)"

Haz que el nombre del autor funcione como enlace igual que en la lista.

El código resultante no debe dar ningún error en el [validador HTML de la W3](https://validator.w3.org/#validate_by_input).

### Solución

A continuación puedes descargar el `zip` con la solución para que puedas compararla con tu solución:

> Descargar archivo [ej02_semana-1-resuelto.zip](./resources/ej02_semana-1-resuelto.zip)

[![](./resources/semana-1-solucion-figure-y-figcaption.png)](https://youtu.be/ohoFM5R-A38)

---

### 3. Formulario de acceso

Descarga el siguiente código HTML y crea un formulario de inicio de sesión utilizando HTML. Añade el formulario dentro del elemento `<main>`.

> Descargar archivo [ej03_semana-1.html](./resources/ej03_semana-1.html)

Para completar este ejercicio, sigue estos pasos:

1. Crea un formulario mediante la etiqueta `<form>`.
2. Dentro del formulario, crea un elemento `<fieldset>` que servirá como contenedor para los campos. Añade una `<legend>` con el texto "Login" para este `<fieldset>`.
3. Dentro del `<fieldset>`, agrega una lista desordenada `<ul>` que incluirá dos elementos de lista `<li>`, cada uno para un campo del formulario:

   - El primer `<li>` debe contener un campo de entrada para el correo electrónico (requerido, no se puede enviar vacío). Agrega una etiqueta `<label>` con el texto "Email" y un campo de entrada `<input>` con el tipo `email`.
   - El segundo `<li>` debe contener un campo de entrada para la contraseña (requerido, no se puede enviar vacío). Agrega una etiqueta `<label>` con el texto "Contraseña" y un campo de entrada `<input>` con el tipo `password`.

4. Vincula los `<label>` con sus respectivos `<input>` mediante el atributo _for_.
5. Finalmente, añade dos botones al final del `<fieldset>`:

   - El primer botón debe ser un botón de reseteo que limpiará el formulario. El texto del botón debe ser "Limpiar".
   - El segundo botón debe ser un botón de envío que enviará el formulario. El texto del botón debe ser "Enviar".

El resultado final debe ser similar a este:

![Formulario de login](./resources/formulario_login.png)

Además, el código resultante no debe dar ningún error en el [validador HTML de la W3](https://validator.w3.org/#validate_by_input).

### Solución

A continuación puedes descargar el `zip` con la solución para que puedas compararla con tu solución:

> Descargar archivo [ej03_semana-1-resuelto.html](./resources/ej03_semana-1-resuelto.html)

[![](./resources/semana-1-solucion-formulario-de-acceso.png)](https://youtu.be/f6R2QXEYRPg)

---

### 4. Tipos de input

Descarga el siguiente código HTML y completa un formulario de registro para un evento titulado "Evento de Desarrollo Web".

> Descargar archivo [ej04_semana-1.html](./resources/ej04_semana-1.html)

Tu enfoque debe ser exclusivamente el HTML; no necesitas preocuparte por los estilos CSS, pero asegúrate de mantenerlos en el código.

La tarea principal es completar la sección del formulario en la plantilla HTML, añadiendo los campos de entrada (`input`) y sus correspondientes etiquetas (`label`), vinculándolos mediante el atributo _for_. Las indicaciones para cada campo se proporcionan en los comentarios dentro del código HTML.

El código resultante no debe dar ningún error en el [validador HTML de la W3](https://validator.w3.org/#validate_by_input).

### Solución

A continuación puedes descargar el `zip` con la solución para que puedas compararla con tu solución:

> Descargar archivo [ej04_semana-1-resuelto.html](./resources/ej04_semana-1-resuelto.html)

[![](./resources/semana-1-solucion-tipos-de-input.png)](https://youtu.be/kit3CP_SwwE)
