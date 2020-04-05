OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Supprimer",
    "Restrict login to IP addresses" : "Login restreint à des adresses IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Permet aux utilisateurs de restreindre l'authentification à leur instance à des plages IP spécifiques.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Cette application permet aux administrateurs de restreindre la connexion à leur serveur Nextcloud à des plages IP spécifiques. Notez que les sessions existantes resteront ouvertes.\n\nLes plages IP autorisées peuvent être administrées à l'aide de l'interface de ligne de commande OCC ou graphiquement en utilisant les paramètres d'administration. Si vous prévoyez d'utiliser l'outil OCC, vous devez utiliser\nles commandes suivantes..\n\nPour ajouter «127.0.0.0 / 24»  à la liste blanche :\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nPour ajouter «127.0.0.0/24» et «192.168.0.0/24» à la liste blanche :\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Login restreint à des plages d'adresses IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Par défaut, %s autorise la connexion à partir de n'importe quelle adresse IP. Pour limiter la connexion à des plages d'adresses IP spécifiques, vous pouvez les préciser ci-dessous.",
    "Add" : "Ajouter",
    "Not authorized" : "Non autorisé"
},
"nplurals=2; plural=(n > 1);");
