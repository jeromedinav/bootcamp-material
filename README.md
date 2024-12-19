# Proyecto Bootcamp

Este repositorio contiene los materiales del Bootcamp de desarrollo web y todos los ejercicios relacionados con HTML, CSS, JavaScript, y más.

## Configuración de Automatización

He configurado un script que automatiza el proceso de actualizar y subir los cambios a GitHub. Este script hace lo siguiente:

1. **`git pull origin main`**: Obtiene los últimos cambios del repositorio.
2. **`git add .`**: Añade todos los archivos modificados al área de staging.
3. **`git commit -m "Actualización automática"`**: Realiza un commit con un mensaje de actualización.
4. **`git push origin main`**: Sube los cambios al repositorio remoto en GitHub.

### Programación del Script

Este script se ejecuta automáticamente de lunes a jueves a las **22:00 horas** utilizando **cron**.

Para ver o modificar las tareas cron configuradas, usa:

```bash
crontab -l
```

### ¿Cómo está configurado?

1. **Vinculación con GitHub**: El repositorio local está vinculado a mi repositorio en GitHub, **`https://github.com/jeromedinav/Bootcamp.git`**.
2. **Script creado**: El script **`git_pull_and_push.sh`** está en el directorio `~/git_pull_and_push.sh` y es ejecutable.
3. **Cron configurado**: La tarea cron ejecuta el script en el horario especificado: **de lunes a jueves a las 22:00 horas**.

Este proceso asegura que siempre que haya cambios, estos se suban automáticamente sin tener que intervenir manualmente.

---

### Uso

No necesitas hacer nada para que el proceso funcione automáticamente. Si necesitas realizar alguna modificación o verificar el estado, puedes acceder al script en **`~/git_pull_and_push.sh`** o ver las tareas cron con el comando `crontab -l`.
