
# **StudieConnect**


*Nicolas Quilitzsch , Charalampos Papadakis* - WIN 4

a [Sails v1](https://sailsjs.com) application


- [**StudieConnect**](#studieconnect)
    - [Links](#links)
  - [1. Spezifikation und Design](#1-spezifikation-und-design)
    - [1.1. Design](#11-design)
      - [1.1.1. Style Tile](#111-style-tile)
      - [1.1.2. Wireframes \& MockUp](#112-wireframes--mockup)
        - [DESKTOP ANSICHT](#desktop-ansicht)
        - [MOBILE ANSICHT](#mobile-ansicht)
    - [1.2. Projektziele](#12-projektziele)
    - [1.3. Personas](#13-personas)
    - [1.4. Kontext Diagramm](#14-kontext-diagramm)
    - [1.5 ER-Diagramm](#15-er-diagramm)
    - [1.6. Aktoren und Use Cases](#16-aktoren-und-use-cases)
    - [1.7. Use Cases](#17-use-cases)
      - [Use-Case Diagramm](#use-case-diagramm)
      - [Beschreibung der wichtigsten Use Cases](#beschreibung-der-wichtigsten-use-cases)
        - [**UC Info**](#uc-info)
        - [**UC CRUD**](#uc-crud)
        - [**UC Search**](#uc-search)
        - [**UC Transaction**](#uc-transaction)
  - [2. Implementierung](#2-implementierung)
    - [**UC CRUD, UC Transaction, UC Info \& UC Search Funktionalität:**](#uc-crud-uc-transaction-uc-info--uc-search-funktionalität)
      - [**UC Seach**](#uc-seach)
      - [**UC Transaction Bewertung abgeben**](#uc-transaction-bewertung-abgeben)
      - [**UC Transaction Materialien hochladen**](#uc-transaction-materialien-hochladen)
      - [**UC CRUD**](#uc-crud-1)
      - [**Zusätzliche Implentierungsdetails**](#zusätzliche-implentierungsdetails)
        - [**Kurze beschreibung des Kontaktformulars**](#kurze-beschreibung-des-kontaktformulars)
        - [**Anmerkung zu den Social Media Icons**](#anmerkung-zu-den-social-media-icons)
  - [3. Bereitstellung](#3-bereitstellung)
  - [4. Optimierung](#4-optimierung)

### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)

</br>

## 1. Spezifikation und Design

</br>

### 1.1. Design 

</br>

#### 1.1.1. Style Tile


![](/assets/images/styleTile.png)

</br>

#### 1.1.2. Wireframes & MockUp 

</br>

##### DESKTOP ANSICHT

</br>

![](/assets/images/MockupDesktop.jpg)

</br>

##### MOBILE ANSICHT

</br>

![](/assets/images/MockupMobile.jpg)

</br>

### 1.2. Projektziele 

</br>

**Vorwort:**

Studierende haben grundsätzlich keinen einfachen Start ins Studium. Als Master-Student weiß man sich ggfls. zu helfen, aber bis man dahin gekommen ist, ist es für viele oft sehr viel neues auf einmal.
Skripte und Anleitungen für Studierende sind teilweise nicht verfügbar.
Die Links zu informativen/nützlich online Ressourcen sind verstreut und nicht gesammelt, was die Beschaffung deutlich erschwert.
Grundsätzlich ist der Zugang zu Altklausuren und ergänzendem Material beschränkt und vor allem nicht übersichtlich.
Auch für benötigte Software, ob in der Fakultät Informatik oder nicht, fehlen oft detaillierte Betriebssystem-unabhängige Installationsanleitungen.

</br>

**Lösungsansatz und damit verbundene Projektziele:**

Unsere Projektziele bestehen darin den Studenten durch unsere Website das Leben so weit wie möglich zu erleichtern. Konkret möchten wir, durch den einfachen und schnellen Zugang zu sämtlich Lernmaterialien, die Informationssuche für Studieninhalte wesentlich effizienter gestalten. Wir möchten eine Austauschplattform für Studierende anbieten, wo man mit seinen Kommilitonen oder auch mit seinen Professoren Vorlesungsinhalte, Klausuren, Teamprojekte, Skripte Anleitungen usw. austauschen kann. 


### 1.3. Personas 

![](/assets/images/persona1.png)

![](/assets/images/persona2.png)

![](/assets/images/persona3.png)



### 1.4. Kontext Diagramm 

![](/assets/images/kontext-diagramm.drawio.png)


### 1.5 ER-Diagramm 

![](/assets/images/ER-DiagrammStudieConnect.drawio.png)

### 1.6. Aktoren und Use Cases

| User                                                                                    | Mitarbeiter (Admin)                                                                                        | Besucher                                                              |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Regristrierter Benutzer, der Uploads und Downloads machen kann. Außerdem diese bewerten | Selben Funktionen wie der Registriere Benutzer. Zusätzlich, User/Studiengänge/Anleitungen/Module verwalten | Durch Startseite navigieren, anzeigen von "Learn about our Conecepts" |

</br>

### 1.7. Use Cases

</br>

#### Use-Case Diagramm

![](/assets/images/use-case-diagramm-studie-connect.drawio.png)


</br>

#### Beschreibung der wichtigsten Use Cases

</br>

##### **UC Info** 

| use case name | Kontaktdaten von Dozenten einsehen                                          |
| ------------- | --------------------------------------------------------------------------- |
| description   | Über Dozenten Ansicht, die öffentlichen Kontaktdaten der Dozenten einsehen. |
| actors        | User, Admin                                                                 |


| use case name | Durschnitsbewertung anzeigen lassen                                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| description   | Beim einsehen der Anleitungen und Skripte, können die Durchschnittsbewertungen angezeigt werden. Die passt  sich nach Abgabe der eigenen Bewertung an |
| actors        | User, Admin                                                                                                                                           |

</br>

##### **UC CRUD**

| use case name | Nutzer/Studiengänge/Anleitungen/Skripte/Module verwalten                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| description   | Dazu gehört: Studiengängen editieren, Studiengänge löschen. Nutzer editieren, löschen. Module editieren, löschen. Anleitungen editieren, löschen. |
| actors        | Admin                                                                                                                                             |

| use case name | Porfil verwalten                                         |
| ------------- | ------------------------------------------------------- |
| description   | Dazu gehört: Daten anpassen, oder auch passwort ändern. |
| actors        | User, Admin                                             |

</br>

##### **UC Search**

| use case name | Anleitungen/Skripte suchen                                                                                                                                                 |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| description   | Mit der Suchleiste kann der User (und Admin) Anleitungen und Skripte problemlos finden. Wobei hier auch die Professoren und Module nach den Schlagwörtern dursucht werden. |

| use case name | Module filtern                                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| description   | Durch Filtern der Module können Besucher, User und Admins bestimmte Anleitungen und Skripte herausfiltern, um so  spezifischere Ergebnisse zu erzielen. |
| actors        | User, Admin                                                                                                                                             |

</br>

##### **UC Transaction**


| use case name | Materialen hochladen                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| description   | Benutzer können direkt über die Suchleiste auf die Upload funktion (oder über den Homepage button) und hier ihre Ressourcen hochladen |
| actors        | User, Admin                                                                                                                           |


| use case name | Materialen runterladen                                                                                                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| description   | Benutzer können direkt über die Suchleiste auf die Ressourcen Anischt, dann von Top Downloads oder Neuste Ressourcen, Ressourcen runterladen. Auch gibt es die Möglichkeit einen Studiengang auszuwählen und so spezifischere Ressourcen runterzuladen |
| actors        | User, Admin                                                                                                                                                                                                                                            |

| use case name | Bewertung abgeben                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| description   | Benutzer haben die Möglichkeit, Skripte oder Anleitungen zu mithilfe einer Sterne Funktion, eine Bewertung von 1-5 zu geben |
| actors        | User, Admin                                                                                                                 |




</br>

## 2. Implementierung

</br>

### **UC CRUD, UC Transaction, UC Info & UC Search Funktionalität:**

</br>

#### **UC Seach**

</br> 

In unserer Anwendung haben wir eine Suchfunktion implementiert, die es den Nutzern ermöglicht, sowohl nach Skripten als auch nach Anleitungen zu suchen. Wir haben dafür eine Server-Client-Architektur genutzt, bei der Sails.js auf der Serverseite und JavaScript zusammen mit dem EJS-Template auf der Clientseite zum Einsatz kommen.

Im Backend findet die Suchlogik in der search-Funktion unseres SearchController statt. Wenn eine Suchanfrage eingegangen ist, extrahieren wir das Suchwort aus der Anfrage und setzen es in Kleinbuchstaben um. Anschließend führen wir zwei getrennte Suchen in den Datenbanktabellen Skript und Anleitung aus. Für jede dieser Tabellen prüfen wir, ob der Suchbegriff im Namen, in der Beschreibung oder im Autor des Skripts bzw. der Anleitung enthalten ist. Danach geben wir die gefundenen Skripte und Anleitungen sowie alle Module zurück an den Client.

Auf der Clientseite verwenden wir die zurückgegebenen Daten, um die Suchergebnisse darzustellen und zu filtern. In der Datei search-results.ejs wird zunächst eine Liste aller Module erstellt, die als Filterkriterien dienen können. Jedes Modul wird als interaktives Element dargestellt, das bei einem Klick die Funktion filterByModul() auslöst und damit die Suchergebnisse nach dem entsprechenden Modul filtert.

Anschließend erstellen wir für die Skripte und Anleitungen jeweils eine Tabelle, die die relevanten Daten (Name, Modul, Beschreibung, Autor, Downloadlink) anzeigt. Zudem gibt es für beide Tabellen ein Auswahlmenü, mit dem die Nutzer die angezeigten Suchergebnisse nach Namen oder Autor sortieren können. Wenn eine Sortierung ausgewählt wird, wird die Funktion filterAndUpdateLists() aufgerufen, die die Suchergebnisse entsprechend filtert und sortiert.

Die genaue Filter- und Sortierlogik findet im Frontend-JavaScript statt. Die Funktion filterItems() filtert und sortiert die Suchergebnisse basierend auf dem gewählten Filter und der Sortierreihenfolge. Sie wird sowohl von filterByModul() als auch von filterAndUpdateLists() aufgerufen. Die Funktion updateList() aktualisiert anschließend die angezeigten Suchergebnisse auf der Seite. Sie erstellt für jedes Item (Skript oder Anleitung) eine neue Tabellenreihe und fügt diese der Tabelle hinzu.

Dies ist also die grundlegende Struktur und Funktionsweise der Such- und Filterfunktionen in unserer Anwendung. Sie ermöglichen es den Nutzern, effektiv nach Skripten und Anleitungen zu suchen und die Suchergebnisse nach Modulen zu filtern sowie nach Namen oder Autor zu sortieren.


</br>

#### **UC Transaction Bewertung abgeben** 

</br>

Im Frontend, was durch die Datei show.ejs repräsentiert wird, nutzen wir Vue.js, um eine dynamische, reaktive Benutzeroberfläche zu erstellen. Wir haben zwei verschiedene Ansichten: eine für die neuesten Ressourcen und eine für die am meisten heruntergeladenen Ressourcen. In beiden Ansichten, haben wir eine Sternbewertung für jedes Element (Skript oder Anleitung), die der Nutzer durch Klick auf die Sterne abgeben kann.

Die Sternebewertung selbst wird durch die Klasse "star" repräsentiert, und wir haben einige Event-Listener für Mausklicks, Mouseover und Mouseout hinzugefügt, um das Benutzererlebnis zu verbessern. Wenn ein Nutzer einen Stern anklickt, wird die Funktion updateRating() aufgerufen. Diese Funktion sendet eine Anfrage an unseren Server, um die Bewertung zu speichern oder zu aktualisieren.

Die Bewertung, der Nutzer und das bewertete Item (Skript oder Anleitung) werden dabei an den Server gesendet. Wir loggen diese Daten sowohl auf dem Client (Vue.js) als auch auf dem Server (Sails.js), um sicherzustellen, dass alles korrekt abläuft.

Im Backend, repräsentiert durch den BewertungsController, nehmen wir die von Vue.js gesendeten Daten entgegen. Zuerst überprüfen wir, ob der Nutzer bereits eine Bewertung für das Item abgegeben hat. Wenn das der Fall ist, aktualisieren wir die bestehende Bewertung. Wenn nicht, erstellen wir eine neue Bewertung.

Anschließend berechnen wir die durchschnittliche Bewertung für das bewertete Item. Wir finden alle Bewertungen, die für dieses Item abgegeben wurden, und berechnen den Durchschnitt. Diesen aktualisierten Durchschnitt speichern wir dann im entsprechenden Item (entweder Skript oder Anleitung).

Zuletzt senden wir den neuen Durchschnitt zurück an den Client, damit Vue.js die angezeigte durchschnittliche Bewertung aktualisieren kann.

Das ist im Grunde genommen, wie unsere Bewertungsfunktion implementiert ist. Es ist ein einfaches aber effektives System, das uns erlaubt, Feedback von unseren Nutzern zu sammeln und es auf unserer Seite anzuzeigen.

</br>

#### **UC Transaction Materialien hochladen** 


</br>

Das Hochladen von Materialien wie Skripten und Anleitungen ist ein Mehrschichtprozess, der aus einer Benutzeroberfläche, Backend-Controllern und Modellen besteht, die zusammenarbeiten, um den Hochlade- und Speicherungsprozess zu erleichtern.

Die Benutzeroberfläche (upload.ejs) ist der sichtbare Teil für den Benutzer. Sie enthält ein Formular mit Feldern für den Namen des Materials, die Kategorie (Skript oder Anleitung), den Studiengang, das Modul, die Beschreibung, den Autor und die zu hochladende Datei.

Ein wichtiger Aspekt der Benutzeroberfläche ist das Dropdown-Menü für die Module. Dieses Menü wird dynamisch aktualisiert, basierend auf dem vom Benutzer ausgewählten Studiengang. Wenn ein Benutzer einen Studiengang aus dem Dropdown-Menü auswählt, wird ein Ereignis ausgelöst, das eine Funktion aufruft, die die entsprechenden Module für diesen Studiengang anfordert. Die Daten werden dann als Optionen in das Modul-Dropdown-Menü geladen. Im Fehlerfall wird das Modul-Dropdown-Menü geleert und eine Option hinzugefügt, die den Benutzer darüber informiert, dass die Module nicht geladen werden konnten.

Die Daten des Formulars werden an die Route /upload/new gesendet, sobald der Benutzer auf "Hochladen" klickt.

Der UploadController verwaltet die eingehenden Anfragen und leitet sie an den entsprechenden Controller (entweder SkriptController oder AnleitungController) weiter, basierend auf der vom Benutzer gewählten Kategorie. Diese Controller sind dafür verantwortlich, die hochgeladene Datei zu empfangen und sie in der Datenbank zu speichern.

SkriptController und AnleitungController handhaben spezifische Anfragen, die mit Skripten bzw. Anleitungen zusammenhängen. Beide verfügen über eine uploadData-Funktion, die die hochgeladene Datei empfängt und auf dem S3-Speicherdienst speichert. Nachdem die Datei hochgeladen wurde, erstellt der Controller einen neuen Eintrag in der Datenbank, der die Metadaten des Materials sowie den Pfad zur Datei auf S3 enthält.

Der Benutzer erhält schließlich eine Erfolgsmeldung und das Formular wird zurückgesetzt.

Zusammenfassend verläuft der Prozess des Hochladens von Materialien folgendermaßen:

- Der Benutzer füllt das Formular aus und wählt dabei einen Studiengang aus. Basierend auf dieser Auswahl werden die zugehörigen Module im Modul-Dropdown-Menü angezeigt.
- Der Benutzer klickt auf "Hochladen".
- Die Formulardaten werden an die Route /upload/new gesendet.
- Der UploadController leitet die Anfrage an den passenden Controller weiter, basierend auf der gewählten Kategorie.
- Der entsprechende Controller (entweder SkriptController oder AnleitungController) lädt die Datei auf S3 hoch und speichert die Metadaten in der Datenbank.
- Der Benutzer erhält eine Erfolgsmeldung/Fehlermeldung und das Formular wird zurückgesetzt.


</br>

#### **UC CRUD** 

</br>

In unserem Admin-Dashboard haben wir die Möglichkeit, verschiedene Elemente wie Nutzer, Studiengänge, Module, Skripte und Anleitungen zu verwalten. Dazu erstellen wir eine Vue.js-Anwendung, die diese Elemente gruppiert und dynamisch darstellt.

Jede Gruppe von Elementen wird in einer Tabelle mit den Spalten "ID", "Name" und "Aktionen" angezeigt. Für jedes Element in der Gruppe können wir die entsprechenden Daten einsehen und Bearbeiten- oder Löschen-Aktionen ausführen.

Wir können auch neue Elemente hinzufügen. Dafür haben wir spezielle Schaltflächen für verschiedene Elementtypen, wie "Anleitung hinzufügen", "Skript hinzufügen", "Modul hinzufügen" und "Studiengang hinzufügen", implementiert. Wenn wir auf eine dieser Schaltflächen klicken, werden wir auf die entsprechende Seite zur Erstellung des Elements weitergeleitet.

Wenn wir uns speziell auf die Funktion **"Modul bearbeiten"** konzentrieren, bemerken wir die Verarbeitung einer *n:m-Beziehung*. Das Modul wird mit verschiedenen Studiengängen in Verbindung gebracht. Beim Hinzufügen eines neuen Moduls können wir einen oder *mehrere Studiengänge* auswählen, die mit diesem Modul verknüpft werden sollen.

Die Funktionen create und update im ModulController sind dafür verantwortlich, die CRUD-Operationen für das Modul zu verarbeiten.

Die create-Funktion erstellt zuerst ein neues Modul und fügt es dann den ausgewählten Studiengängen hinzu. Sie nimmt die Anforderungsparameter, erstellt ein neues Modul mit diesen Parametern und verknüpft es dann mit den ausgewählten Studiengängen durch die Studiengang_modul.create-Funktion.

Die update-Funktion ändert ein bestehendes Modul und aktualisiert seine Beziehung zu den Studiengängen. Sie aktualisiert zuerst das Modul mit den gegebenen Parametern, löscht dann alle existierenden Beziehungen dieses Moduls zu den Studiengängen und erstellt schließlich neue Beziehungen zu den ausgewählten Studiengängen.

Zusammengefasst ermöglicht unser Admin-Dashboard die Verwaltung von Nutzern, Studiengängen, Modulen, Skripten und Anleitungen, mit einer besonderen Betonung auf der Modulverwaltung, die die Bearbeitung von n:m-Beziehungen ermöglicht.

</br>


#### **Zusätzliche Implentierungsdetails** 

</br>

**Beschreibung der Username und Email Validierung, sowohl auf der Signup als auch auf der edit-profile Ansicht**

</br>

Die checkEmailExists und checkUserNameExists Funktionen sind Vue.js Methoden, die innerhalb des Anmeldeformulars definiert sind. Sie sind dafür verantwortlich, asynchrone Anfragen an Ihre serverseitigen Routen zu senden, um zu überprüfen, ob eine E-Mail-Adresse oder ein Benutzername bereits in der Datenbank existieren.

Die Funktion checkEmailExists sendet eine HTTP-POST-Anfrage an den /check-email-exists Endpunkt mit der im Formular eingegebenen E-Mail-Adresse als Daten. Die Funktion prüft dann den Statuscode der Antwort. Wenn der Statuscode 409 ist, wird die Variable invalidEmail auf true gesetzt, was auf der Benutzeroberfläche anzeigt, dass die E-Mail-Adresse bereits verwendet wird.

Ähnlich funktioniert die checkUserNameExists Funktion, aber sie sendet eine HTTP-POST-Anfrage an den /check-username-exists Endpunkt mit dem im Formular eingegebenen Benutzernamen. Wenn die Antwort einen Statuscode von 409 zurückgibt, wird die Variable invalidUserName auf true gesetzt, was auf der Benutzeroberfläche anzeigt, dass der Benutzername bereits verwendet wird.

Auf der Serverseite haben wir zwei Sails.js-Aktionen (email-exists.js und username-exists.js), die die Datenbank überprüfen, um festzustellen, ob der angegebene Benutzername oder die E-Mail-Adresse bereits existiert. Wenn dies der Fall ist, wird ein Statuscode 409 zurückgegeben, was einen Konflikt anzeigt. Wenn der Benutzername oder die E-Mail-Adresse nicht gefunden wird, wird ein Statuscode 404 zurückgegeben.

Insgesamt verwenden wir diese Funktionen, um eine sofortige Rückmeldung auf der Benutzeroberfläche zu geben, ob eine E-Mail-Adresse oder ein Benutzername bereits verwendet wird. Dies ist ein nützliches Merkmal für die Verbesserung der Benutzererfahrung während des Anmeldevorgangs. Außerdem stellen wir so sicher, dass der *Benutzer vor antippen des buttons* benachrichtigt wird, dass Email oder eben Username schon vergeben ist.

</br>

##### **Kurze beschreibung des Kontaktformulars** 

In unserem Webprojekt haben wir ein Kontaktformular implementiert, um die Kommunikation mit den Benutzern zu erleichtern. Dieses Formular befindet sich auf einer dedizierten Seite, die in unserem contact.ejs-Template erstellt wird.
 
Das Kontaktformular selbst besteht aus drei Hauptteilen - dem Namen, der E-Mail-Adresse und der Nachricht des Benutzers. Jedes dieser Felder ist als obligatorisch gekennzeichnet, um sicherzustellen, dass wir alle notwendigen Informationen erhalten, um auf die Anfrage des Benutzers reagieren zu können.

Ein spezieller Aspekt unseres Formulars ist die Feedback-Mechanik, die wir eingebaut haben. Nachdem das Formular abgeschickt wurde, wird eine Benachrichtigung generiert und dem Benutzer angezeigt, um ihn über den Erfolg oder Misserfolg des Versands zu informieren.

Schauen wir uns nun unseren ContactController genauer an. Die Logik für das Verarbeiten der eingegebenen Formulardaten und das Senden der E-Mail wird hier abgewickelt. Insbesondere die create-Methode spielt eine zentrale Rolle in unserem E-Mail-Versandprozess.

Wenn die create-Methode aufgerufen wird, extrahiert sie zunächst die Daten aus dem abgeschickten Formular. Sie prüft, ob alle Felder korrekt ausgefüllt sind, und wenn ja, versucht sie, eine E-Mail mit den gesammelten Daten zu senden.

Dieser E-Mail-Versandprozess wird durch die Bibliothek "nodemailer" ermöglicht. Wir nutzen deren sendMail-Funktion, um eine E-Mail mit den Daten des Benutzers zu erstellen und an einen vordefinierten Empfänger zu senden.

Wenn der E-Mail-Versand erfolgreich ist, generieren wir eine Erfolgsmeldung, die auf der Kontaktseite angezeigt wird. Sollte jedoch etwas schiefgehen und der Versand fehlschlagen, wird stattdessen eine Fehlermeldung generiert und angezeigt.

Zusammengefasst haben wir ein effizientes System für unser Kontaktformular entwickelt, das nicht nur Benutzerdaten sammelt und verarbeitet, sondern auch in Echtzeit Feedback gibt, um den Benutzern den Stand ihrer Anfrage mitzuteilen.



</br>

##### **Anmerkung zu den Social Media Icons** 


Die Links verweisen aktuell nicht auf ein konkretes Profil von Studie Connect, sondern einfach auf die jeweiligen Social Media Webseiten.
Falls die Webseite dauerhaft online gehen würde, würde das natürlich angepasst werden. 

</br>

**Auf Beschreibung der Implementierung des UC INFO, sowie auf den UC-"Profil verwalten" wird nicht weiter im Detail eingegangen**

</br>

## 3. Bereitstellung

[studieconnect.onrender.com](https://studieconnect.onrender.com)

**Admin:**

*Email:* admin@admin.com     
*Passwort:* pass

**User:**

*Email:*   test@user.com  
*Passwort:* pass

</br>

## 4. Optimierung

</br>

Folgender Lighthouse Test wurde vor der Optimiertun erstellt, wobei hier zu erwähnen ist, dass der Code schon aufgeräumt wurde, unnötige Files in den Dependecies entfernt wurden, und Skripte nur dort geladen werden wo sie gebraucht werden und nicht bei der Layout.ejs.  

</br>

![](/assets/images/lighthouse_vorOptimierung.png)

</br>

Zur Optimierung der Performance wurden folgende Änderungen vorgenommen:

+ Ersetzen von PNG durch WebP-Dateien: Um die Ladezeiten zu reduzieren und die Effizienz der Datenübertragung zu verbessern 
  

</br>

Die oben genannten Maßnahmen haben dazu beigetragen, die Performance etwas steigern und somit eine benutzerfreundlichere Nutzung zu ermöglichen. 

</br>


![](/assets/images/lighthouse_nachOptimierung.png)


