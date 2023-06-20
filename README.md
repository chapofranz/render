# pano

a [Sails v1](https://sailsjs.com) application

Anmerkungen zur Aufgabe 4 : 
1.	„Implementieren Sie einen Use Case Transaction mit der Hilfe von Vue“ 

Bitte Account erstellen, dann über Navbar -> Ressourcen -> Studiengang wählen -> Wirtschaftsinformatik (für andere Studiengänge noch nicht implementiert) -> Skripte/Anleitungen anklicken Bewertung abgeben. 

Im Code: wirtschaftsinfortmatik/show.ejs, dazugehörigen Controller werden dort in Vue aufgerufen! 


2.	„Implementieren Sie Authentifizierung/Autorisierung, d.h. für die implementierten Use Cases sollen jeweils nur die in der Spezifikation definierten Akteure Zugriff haben“ 
 
->	Authentifizierung/Autorisierung selbsterklärend. 
->	CRUD Funktionalitäten, sind nur auf der Admin Dashboard Seite verfügbar die als zusätzliche Navbar-Komponente erscheint (if user.isSuperAdmin).
->	Hier ist User und Studiengang Verwaltung möglich. Grundbasis zur Verwaltung von Modulen, Skripten und Anleitungen ist außerdem vorhanden, Routes müssen hierfür noch angepasst werden.
->	VALIDIERUNG DER INPUT FELDER IM ADMIN DASHBOARD NOCH NICHT IMPENTIERT! -> Endabgabe!

3.	„Implementieren Sie Validierung für alle Eingabenformulare.“

->	Implementiert für Anmelde/Registrierungs Formular, sowie für Upload Formular! Außerdem für Profil bearbeiten, sowie Passwort bearbeiten!

Im Code: 

entrance/signup.ejs 

entrance/login.ejs 

ressources/upload.ejs   + uploadController.js 

account/edit-profile.ejs 

account/edit-password.ejs

Für Backendüberprüfung des userNames oder der Email beim sigunup oder edit profile:
->	api/controllers/check/email-exists.js  & api/controllers/check/user-name-exists.js 
->	außerdem für Fehlerbehandlung api/responses/conflict.js



### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Wed Apr 12 2023 10:10:38 GMT+0200 (Central European Summer Time) using Sails v1.5.4.

<!-- Internally, Sails used [`sails-generate@2.0.7`](https://github.com/balderdashy/sails-generate/tree/v2.0.7/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

