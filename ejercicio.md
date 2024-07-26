Ejercicio integral

Objetivo general : login de usuario con roles y validaciones front y back.
Va a haber 2 roles, “basic” y “admin”, el rol “admin” al iniciar sesión va a poder realizar CRUD de usuarios, el rol “basic” al logear podrá ver el listado de usuarios mas no realizar ninguna acción respecto a ello.

Paso a paso Backend:

1. Diagramar las entidades.

2. Crear CRUDs y entidades.

3. Validar que el usuario posea un email unico y la contraseña se encuentre encriptada.

4. Desarrollar endpoint  para el inicio de sesión con correo y contraseña, devolver un token válido.

5. Validación de token y verificar el role para limitar al usuario según corresponda.

Paso a paso Front:

1. Pantalla de login, formulario de inicio de sesión con email y contraseña.

2) Una vez iniciada sesión te lleva a la pantalla que mostrará el listado de usuarios y según el rol permitirá crear, Modificar, borrar.

3. Cerrar sesión.

4. mostrar/ocultar usuarios eliminados
