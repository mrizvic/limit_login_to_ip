OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Borrar",
    "Restrict login to IP addresses" : "Limitar inicio de sesión a direcciónes IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Permite a los administradores restringir inicios de sesión a rangos de IPs específicos.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphical using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Esta aplicación le permite a los adminsitradores restringir el inicio de sesión a sus servidores Nextcloud a rangos de IP específicos. Consider que las sesiones existentes se mantendrán\nabiertas.\n\nLos rangos de IPs permitidos pueden ser adminsitrados usando la interfase de línea de comandos OCC \no graficamente usando la configuración de adminsitracipon. Si planeas usar la herramienta OCC, los siguientes comandos aplicarían.\n\nPara meter a lista blanca `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nPara meter a lista blanca `127.0.0.0/24`  y también `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Limitar inicio de sesión a rangos de IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Por omisión, %s te permite iniciar sesión desde cualquier dirección IP. Acontinuación puedes especificar rangos de IP¨s para limitar el inicio de sesión.",
    "Add" : "Agregar",
    "Not authorized" : "No autorizado"
},
"nplurals=2; plural=(n != 1);");
