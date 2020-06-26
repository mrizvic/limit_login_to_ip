OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Ištrinti",
    "Restrict login to IP addresses" : "Apriboti prisijungimą iki IP adresų",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Leidžia administratoriams apriboti prisijungimus prie konkrečių IP adresų rėžių.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : " Ši programa leidžia administratoriams apriboti prisijungimą tik prie jų „Nextcloud“ serverio konkrečių IP diapazonų. Esamos sesijos bus \natviros.\n\nLeistini IP diapazonai gali būti administruojami naudojant OCC komandinės eilutės sąsają\n arba naudojant grafinius administratoriaus nustatymus. Jei planuojate naudoti OCC įrankį,\nturi būti pritaikytos šios komandos.\n\n Į \"baltąjį sąrašą\" „127.0.0.0 / 24“:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`",
    "Restrict login to IP ranges" : "Apriboti prisijungimą iki IP rėžių",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Pagal numatymą, %s leidžia prisijungti iš bet kurio IP adreso. Norėdami apriboti prisijungimus iki tam tikrų IP rėžių, galite nurodyti juos žemiau.",
    "Add" : "Pridėti",
    "Not authorized" : "Neleidžiama"
},
"nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);");
