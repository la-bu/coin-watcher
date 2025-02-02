# Disclaimer: This file was automatically converted from .docx to .md using pandoc. Formatting may be corrupted.

# Erstellung einer Softwareanwendung zur Live-Anzeige von
  Kryptowährungs-Kursen zu internen Lernzwecken

## IHK-Projektdokumentation\
  Sommer 2023

**Autor:** Lars Buck

**Geboren am:** 16.06.1998

**Ausbildungsberuf:** Fachinformatiker für Anwendungsentwicklung

**Ausbildungsbetrieb:** Novatec Consulting GmbH

**IHK-Identnummer:** 2306702

**IHK-Prüflingsnummer:** 40096

**Abgabedatum:** 01.06.2023

Inhalt

[1 Einleitung [5](#einleitung)](#einleitung)

[1.1 Ausgangssituation [5](#ausgangssituation)](#ausgangssituation)

[1.2 Projektbeschreibung
[5](#projektbeschreibung)](#projektbeschreibung)

[1.2.1 Projektabgrenzung [6](#projektabgrenzung)](#projektabgrenzung)

[1.3 Ist-/ Soll-Analyse [6](#ist--soll-analyse)](#ist--soll-analyse)

[2 Planung [6](#planung)](#planung)

[2.1 Projektziel [6](#projektziel)](#projektziel)

[2.2 Abweichung zum Projektantrag
[7](#abweichung-zum-projektantrag)](#abweichung-zum-projektantrag)

[2.3 Projektaufgaben [7](#projektaufgaben)](#projektaufgaben)

[2.4 Projektschnittstellen
[7](#projektschnittstellen)](#projektschnittstellen)

[2.5 Projektphasenplanung
[8](#projektphasenplanung)](#projektphasenplanung)

[2.6 Ressourcenplanung [10](#_Toc132975811)](#_Toc132975811)

[2.6.1 Entwicklungsumgebung/ Tools
[10](#entwicklungsumgebung-tools)](#entwicklungsumgebung-tools)

[2.6.2 Technologien [10](#technologien)](#technologien)

[2.7 Kostenplanung [10](#kostenplanung)](#kostenplanung)

[2.7.1 Fertigungskosten [10](#fertigungskosten)](#fertigungskosten)

[2.7.2 Materialkosten [11](#materialkosten)](#materialkosten)

[2.7.3 Gesamtkosten [11](#gesamtkosten)](#gesamtkosten)

[2.8 Technische Umsetzung
[11](#technische-umsetzung)](#technische-umsetzung)

[2.8.1 Was ist gRPC [11](#_Toc132975819)](#_Toc132975819)

[2.8.2 Protobuf [11](#_Toc132975820)](#_Toc132975820)

[2.9 Softwarearchitektur
[12](#softwarearchitektur)](#softwarearchitektur)

[2.10 Technologien [13](#_Toc132975822)](#_Toc132975822)

[2.10.1 gRPC [13](#_Toc132975823)](#_Toc132975823)

[2.10.2 Envoy [13](#_Toc132975824)](#_Toc132975824)

[2.10.3 Java [13](#_Toc132975825)](#_Toc132975825)

[2.10.4 Lombok [13](#_Toc132975826)](#_Toc132975826)

[2.10.5 Quarkus [13](#_Toc132975827)](#_Toc132975827)

[2.10.6 Mutiny [13](#_Toc132975828)](#_Toc132975828)

[2.10.7 Typescript [13](#_Toc132975829)](#_Toc132975829)

[2.10.8 React [13](#_Toc132975830)](#_Toc132975830)

[2.10.9 MongoDB [13](#_Toc132975831)](#_Toc132975831)

[2.10.10 Git [13](#_Toc132975832)](#_Toc132975832)

[2.10.11 Docker [13](#_Toc132975833)](#_Toc132975833)

[3 Durchführung [13](#durchführung)](#durchführung)

[3.1 Erstellen eines Prototypen
[13](#erstellen-eines-prototypen)](#erstellen-eines-prototypen)

[3.2 Dockerisierung des gesamten Projekts
[13](#containerisierung-der-dienste)](#containerisierung-der-dienste)

[3.3 Aufsetzen einer Datenbank zum speichern von Kryptowährungsdaten zur
historisierung
[15](#aufsetzen-einer-datenbank-zum-speichern-von-kryptowährungsdaten)](#aufsetzen-einer-datenbank-zum-speichern-von-kryptowährungsdaten)

[3.4 Implementieren eines Rest Clients in Quarkus um Daten von der
öffentlichen Binance API abzufragen
[16](#implementieren-eines-rest-clients-zur-abfrage-von-kryptowährungs-daten-der-einer-öffentlichen-api)](#implementieren-eines-rest-clients-zur-abfrage-von-kryptowährungs-daten-der-einer-öffentlichen-api)

[3.5 Implementierung einer Datenbankverbindung im Backend
[16](#implementierung-einer-datenbankverbindung-im-backend)](#implementierung-einer-datenbankverbindung-im-backend)

[3.6 Implementierung eines Schedulers zur automatisierten Abfrage von
neuen Kryptowährungsdaten
[18](#implementierung-eines-schedulers-zur-automatisierten-abfrage-von-neuen-kryptowährungsdaten)](#implementierung-eines-schedulers-zur-automatisierten-abfrage-von-neuen-kryptowährungsdaten)

[3.7 Implementieren des gRPC Services
[19](#implementierung-des-grpc-services)](#implementierung-des-grpc-services)

[3.7.1 Implementierung Unary Endpunkt
[19](#implementierung-unary-endpunkt)](#implementierung-unary-endpunkt)

[3.7.2 Implementierung Serverseitiger Stream
[21](#implementierung-serverseitiger-stream)](#implementierung-serverseitiger-stream)

[3.8 Aufsetzen eines Reverse-Proxy's zur Kommunikation zwischen
Frontent-Client und Backend-Service
[24](#aufsetzen-eines-reverse-proxys-zur-kommunikation-zwischen-frontent-client-und-backend-service)](#aufsetzen-eines-reverse-proxys-zur-kommunikation-zwischen-frontent-client-und-backend-service)

[3.9 Implementieren des Frontend-Clients
[26](#implementieren-des-frontend-clients)](#implementieren-des-frontend-clients)

[3.9.1 Implementieren der Backend Kommunikation
[27](#implementieren-der-backend-kommunikation)](#implementieren-der-backend-kommunikation)

[4 Verwendete Design Patterns
[28](#verwendete-design-patterns)](#verwendete-design-patterns)

[4.1 Observer Pattern [28](#observer-pattern)](#observer-pattern)

[4.1.1 Implementierung Observable
[29](#implementierung-observable)](#implementierung-observable)

[4.1.2 Implementierung Observer Interface
[30](#implementierung-observer-interface)](#implementierung-observer-interface)

[4.1.3 Implementierung Observer
[30](#implementierung-observer)](#implementierung-observer)

[4.2 Builder Pattern [31](#builder-pattern)](#builder-pattern)

[5 Projektabschluss [32](#projektabschluss)](#projektabschluss)

[5.1 Rückbetrachtung [32](#rückbetrachtung)](#rückbetrachtung)

[5.1.1 Soll-/ Ist-Analyse [32](#soll--ist-analyse)](#soll--ist-analyse)

[5.1.2 Zielerreichung [32](#zielerreichung)](#zielerreichung)

[5.1.3 Nachkalkulation [33](#nachkalkulation)](#nachkalkulation)

[5.2 Ausblick in die Zukunft
[33](#ausblick-in-die-zukunft)](#ausblick-in-die-zukunft)

[5.3 Reflexion Projektverlauf
[33](#reflexion-projektverlauf)](#reflexion-projektverlauf)

[5.3.1 Fazit Projektverlauf
[33](#fazit-projektverlauf)](#fazit-projektverlauf)

[5.4 Inhaltliche Reflexion
[34](#inhaltliche-reflexion)](#inhaltliche-reflexion)

[5.4.1 gRPC vs. Rest [34](#grpc-vs.-rest)](#grpc-vs.-rest)

[5.4.2 Fazit gRPC vs. Rest
[35](#fazit-grpc-vs.-rest)](#fazit-grpc-vs.-rest)

[6 Glossar [35](#_Toc132975864)](#_Toc132975864)

[7 Anlagen [35](#anlagen)](#anlagen)

[*7.1* Ansicht *"Home"* [35](#ansicht-home)](#ansicht-home)

[*7.2* Ansicht *"Current Price"*
[36](#ansicht-current-price)](#ansicht-current-price)

[*7.3* Ansicht *"Price History"*
[36](#ansicht-price-history)](#ansicht-price-history)

[8 Entwicklerdokumentation
[37](#entwicklerdokumentation)](#entwicklerdokumentation)

[8.1 Versionsübersicht [37](#versionsübersicht)](#versionsübersicht)

[8.1.1 Anwendung [37](#anwendung)](#anwendung)

[8.1.2 Entwicklerdokumentation
[37](#entwicklerdokumentation-1)](#entwicklerdokumentation-1)

[8.2 Verwendete Technologien
[37](#verwendete-technologien)](#verwendete-technologien)

[8.3 Systemvoraussetzungen
[38](#systemvoraussetzungen)](#systemvoraussetzungen)

[8.4 Starten der Anwendung
[38](#starten-der-anwendung)](#starten-der-anwendung)

[8.5 Änderungen vornehmen
[38](#änderungen-vornehmen)](#änderungen-vornehmen)

[8.5.1 Service lokal starten
[38](#service-lokal-starten)](#service-lokal-starten)

Tabellen

[Tabelle 1: Ist-/ Soll-Analyse [6](#_Toc132975878)](#_Toc132975878)

Abbildungen

[Abbildung 1: Softwarearchitektur [12](#_Toc132975879)](#_Toc132975879)

#  Einleitung

## Ausgangssituation

Der Ausbildungsbetrieb ist die Novatec Consulting GmbH, ein
mittelständisches IT-Beratungs-Unternehmen das aktuell ca. 350
Mitarbeiter beschäftigt. Die Kernarbeitsbereiche der Novatec Consulting
GmbH sind die Softwareentwicklung, die Beratung rund um Software-Systeme
sowie die Beratung im Bezug auf agile Arbeitsmethoden.

Die Berufsausbildung absolviert man in der NT\* im Talent Hub - eine
Abteilung, bestehen aus Auszubildenden, Umschülern, Praktikanten,
Werksstudenten aber auch Festangestellten.

Die Arbeit im "Talent Hub", zielt darauf ab Entwickler\*innen auf das
Berufsleben vorzubereiten, daher soll jeder Mitarbeiter die Möglichkeit
bekommen neue Technologien erlernen zu können.

Die bisherige Arbeit beschränkt sich dabei zu großen Teilen auf
Spring-Boot Anwendungen mit REST-API's.

## Projektbeschreibung

Um auch anderen API-Technologien einen Platz im Lernumfeld des Talent
Hub's zu geben soll eine Demo-Anwendung unter Verwendung von gRPC und
Quarkus erstellt werden.

Dabei sollen die verschiedenen Verbindungs-Typen die gRPC anbietet
erprobt und implementiert werden.

Die Demo-Anwendung soll zur Veranschaulichung eines Unary-Verbindung
sowie eines serverseitigen Streams eine Verbindung zwischen
Frontend-Client und Backend Server beinhalten. Dabei sollen im Backend
die aktuellen Kurs-Daten von verschiedenen Krypto-Währungen von einer
öffentlichen API abgerufen und in eine Datenbank gespeichert werden.

Der Frontend-Client soll die Funktionalität bieten den aktuellen Preis
einer Kryptowährung abzufragen, sowie die Historischen Daten einer
Kryptowährung in einem Graphen darzustellen, der sich nach dem Erhalt
von neuen Daten automatisch aktualisiert.

Zur Veranschaulichung eines bidirektionalen Streams sollen zwei
Backend-Clients miteinander verbunden werden und regelmäßig Daten
miteinander austauschen.

### Projektabgrenzung

Mein Aufgabenbereich, der in dieser Projektarbeit erarbeitet werden
soll, beinhaltet:

-   Implementierung der Daten-Aggregierung von einer öffentlichen API

-   Implementierung eines gRPC Unary Remote Procedure Calls\* zur
    Abfrage eines aktuellen Kryptowährungs-Preises

-   Implementierung eines gRPC serverseitigen Stream Remote Procedure
    Call zur Livedarstellung von historischen Daten eines
    Kryptowährungs-Kurses

-   Containerisierung der Anwendung

## Ist-/ Soll-Analyse

  -----------------------------------------------------------------------
  Ist                                 Soll
  ----------------------------------- -----------------------------------
  Es ist kein Backend Service zur     Es soll ein Backend Service
  Bereitstellung von gRPC-Methoden    implementiert werden der
  implementiert.                      verschiedene gRPC-Methoden
                                      bereitstellt.

  Es ist kein Frontend Client zur     Es soll ein Frontend-Client
  Abfrage von Kryptowährungsdaten     implementiert werden, um Daten über
  implementiert.                      gRPC-Aufrufe von dem Backend
                                      Service zu erhalten.

  Es ist keine Anbindung an eine      Es soll eine Anbindung an eine
  externe API zur Abfrage von         öffentliche API implementiert
  aktuellen Kryptowährungsdaten       werden, die Kryprowöhrungsdaten
  implementiert.                      bereitstellt.

  Es besteht keine                    Das Projekt soll so konfiguriert
  Infrastruktur-Konfiguration für das sein, dass es einfach und
  Projekt.                            automatisiert unabhängig von Hard-/
                                      und Softwaregegebenheiten gestartet
                                      werden kann.
  -----------------------------------------------------------------------

  : []{#_Toc132975878 .anchor}Tabelle 1: Ist-/ Soll-Analyse

# Planung

## Projektziel

Die beschriebene Demo-Anwendung wurde komplett implementiert. Die
Vorgehensweise wurde in der Dokumentation beschrieben und die Relevanz
der verwendeten Technologien für das Talent Hub wurde herausgearbeitet
sowie mit den bereits verwendeten Technologien gegenüber gestellt.

## Abweichung zum Projektantrag

Durch das recherchieren über gRPC wurde während der Entwicklung
festgestellt, dass sich ein Graph, zur Darstellung von Daten die über
den Aufruf einer Unary-Methode erhalten wurden, nicht eignet. Daher
wurde hier ein einfaches Feld zur Darstellung des aktuell angefragten
Preises gewählt.

## Projektaufgaben

Zur Erreichung des Projektziels wurde das Projekt in verschiedene
Aufgaben unterteilt:

-   Recherchieren von gRPC

-   Recherchieren von Quarkus

-   Erstellen eines POC

-   Dockerisierung des gesamten Projekts

-   Aufsetzen einer Datenbank zum speichern von Kryptowährungsdaten zur
    historisierung

-   Implementieren eines Rest Clients in Quarkus um Daten von der
    öffentlichen Binance API abzufragen

-   Implementierung einer Datenbankverbindung im Backend

-   Implementierung eines Schedulers zur automatisierten Abfrage von
    neuen Kryptowährungsdaten

-   Aufsetzen eines Reverse-Proxy's zur Kommunikation zwischen
    Frontent-Client und Backend-Service

-   Implementieren des gRPC Services

-   Implementieren des Frontend-Clients

## Projektschnittstellen

**Backend-Entwickler: Simon Braitsch**

Simon war in diesem Projekt für die Implementierung eines
bidirektionalen Streams verantwortlich und wir sollten gemeinsam
arbeiten um gRPC vollumfänglich aufzuarbeiten und im Talent Hub
vorstellen zu können.

Zu seinen Nebenaufgaben gehörte es, die Basis-Projekte für Quarkus und
React zu erstellen und ein Repository in GitHub anzulegen.

## Projektphasenplanung

+-------------+--------------------+-------+-------------+-----------+
| Phase       | Aufgabe            | Dauer | Sta         | End       |
|             |                    | in    | rtzeitpunkt | zeitpunkt |
|             |                    | St    |             |           |
|             |                    | unden |             |           |
+=============+====================+=======+=============+===========+
| Recherche   | Grundlegende       | 3     | 16.05.2023  | 1         |
|             | Recherche Quarkus  |       |             | 6.05.2023 |
|             |                    |       | 8:00 Uhr    | / 11:00   |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Grundlegende       | 5     | 16.05.2023  | 1         |
|             | Recherche gRPC     |       | / 11:00 Uhr | 6.05.2023 |
|             |                    |       |             | / 16:00   |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Grundlegende       | 2     | 17.05.2023  | 1         |
|             | Recherche          |       | / 8:00 Uhr  | 7.05.2023 |
|             | asynchrone         |       |             | / 10:00   |
|             | Programmierung     |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Recherche Mutiny   | 1     | 17.05.2023  | 1         |
|             |                    |       | / 10:00 Uhr | 7.05.2023 |
|             |                    |       |             | / 11:00   |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Recherche          | 1     | 17.05.2023  | 1         |
|             | Timeseries         |       | / 11:00 Uhr | 7.05.2023 |
|             | Funktionalität     |       |             | / 12:00   |
|             | MongoDB            |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
| Impl        | Implementieren     | 9     | 18.05.2023  | 1         |
| ementierung | eines simplen      |       | / 8:00 Uhr  | 8.05.2023 |
|             | Prototyps zur      |       |             | / 17:00   |
|             | Verifizierung der  |       |             | Uhr       |
|             | angestrebten       |       |             |           |
|             | Funktionsweise     |       |             |           |
+-------------+--------------------+-------+-------------+-----------+
|             | Implementieren     | 2     | 19.05.2023  | 1         |
|             | eines Rest-Clients |       | / 8:00 Uhr  | 9.05.2023 |
|             |                    |       |             | / 10:00   |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             |                    |       |             |           |
+-------------+--------------------+-------+-------------+-----------+
| **Phase**   | **Aufgabe**        | **    | **Start     | **Endze   |
|             |                    | Dauer | zeitpunkt** | itpunkt** |
|             |                    | in    |             |           |
|             |                    | Stun  |             |           |
|             |                    | den** |             |           |
+-------------+--------------------+-------+-------------+-----------+
|             | Konfiguration      | 1,5   | 19.05.2023  | 1         |
|             | einer              |       | / 10:00 Uhr | 9.05.2023 |
|             | Dockerisierten     |       |             | / 11:30   |
|             | Umgebung           |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Einbinden einer    | 3     | 19.05.2023  | 1         |
|             | Datenbank          |       | / 11:30 Uhr | 9.05.2023 |
|             |                    |       |             | / 14:30   |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Implementierung    | 2     | 19.05.2023  | 1         |
|             | einer              |       | / 14:30 Uhr | 9.05.2023 |
|             | Datenbankanbindung |       |             | / 16:30   |
|             | in Quarkus         |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
| Impl        | Implementierung    | 2     | 20.05.2023  | 2         |
| ementierung | einer Klasse zum   |       | / 8:00 Uhr  | 0.05.2023 |
|             | automatisierten    |       |             | / 10:00   |
|             | Aufrufen des       |       |             | Uhr       |
|             | Rest-Clients       |       |             |           |
+-------------+--------------------+-------+-------------+-----------+
|             | Implementieren     | 4     | 20.05.2023  | 2         |
|             | einer Unary        |       | / 10:00 Uhr | 0.05.2023 |
|             | Methode mit gRPC   |       |             | / 14:00   |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Implementieren     | 6     | 20.05.2023  | 2         |
|             | eines              |       | / 14:00 Uhr | 0.05.2023 |
|             | serverseitigen     |       |             | / 17:00   |
|             | Streams mit gRPC   |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Einbinden und      | 8     | 21.05.2023  | 2         |
|             | konfigurieren      |       | / 8:00 Uhr  | 1.05.2023 |
|             | eines              |       |             | / 16:00   |
|             | Reverse-Proxy's    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Implementieren der | 4     | 22.05.2023  | 2         |
|             | grundlegenden UI\* |       | / 8:00 Uhr  | 2.05.2023 |
|             |                    |       |             | / 12:00   |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Implementieren der | 8     | 22.05.2023  | 2         |
|             | gRPC Aufrufe des   |       | / 12:00 Uhr | 3.05.2023 |
|             | Frontend-Clients   |       |             | / 12:00   |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Feinschliff der    | 1     | 24.05.2023  | 2         |
|             | Benutzeroberfläche |       | / 8:00 Uhr  | 4.05.2023 |
|             |                    |       |             | / 9:30    |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
| Bericht     | Beschreibung des   | 2     | 24.05.2023  | 2         |
|             | Projekts und der   |       | / 9:30 Uhr  | 4.05.2023 |
|             | Anwendung          |       |             | / 11:30   |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
| **Phase**   | **Aufgabe**        | **    | **Start     | **Endze   |
|             |                    | Dauer | zeitpunkt** | itpunkt** |
|             |                    | in    |             |           |
|             |                    | Stun  |             |           |
|             |                    | den** |             |           |
+-------------+--------------------+-------+-------------+-----------+
|             | Beschreibung der   | 2,5   | 24.05.2023  | 2         |
|             | Technologien und   |       | / 13:00 Uhr | 4.05.2023 |
|             | S                  |       |             | / 15:30   |
|             | oftwarearchitektur |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Beschreibung der   | 1     | 24.05.2023  | 2         |
|             | Tool-Auswahl       |       | / 15:30 Uhr | 4.05.2023 |
|             |                    |       |             | / 16:30   |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Dokumentation der  | 4     | 25.05.2023  | 2         |
|             | Projektphasen      |       | / 8:00 Uhr  | 5.05.2023 |
|             |                    |       |             | / 12:00   |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             |                    |       |             |           |
+-------------+--------------------+-------+-------------+-----------+
| Bericht     | Dokumentation des  | 5     | 25.05.2023  | 2         |
|             | Implem             |       | / 13:00 Uhr | 5.05.2023 |
|             | entierungsvorgangs |       |             | / 17:00   |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
|             | Schlussbetrachtung | 1     | 26.05.2023  | 2         |
|             | gRPC & Rest\       |       | / 8:00 Uhr  | 6.05.2023 |
|             | Schlussbetrachtung |       |             | / 9:00    |
|             | Projektarbeit      |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
| Proje       | Reflexion des      | 1     | 26.05.2023  | 2         |
| ktabschluss | Projekts           |       | / 9:00 Uhr  | 6.05.2023 |
|             |                    |       |             | / 10:00   |
|             |                    |       |             | Uhr       |
+-------------+--------------------+-------+-------------+-----------+
| Summe       |                    | 79,5  |             |           |
+-------------+--------------------+-------+-------------+-----------+

: Tabelle 2: Projektphasenplanung

[]{#_Toc132975811 .anchor}

## Ressourcenplanung

### Entwicklungsumgebung/ Tools

-   IDE/ Editor → IntelliJ Enterprise, Visual Studio Code

-   Betriebssystem → Linux Mint

-   Dokumentation → Microsoft Word

-   Code Versionierung → GitHub

### Technologien

-   Infrastruktur

    -   Datenbank → MongoDB

    -   Datenbank Client → Mongo Express

    -   Reverse Proxy → Envoy

-   Backend

    -   Build Management Tool → Gradle

    -   Entwicklungsumgebung → OpenJDK 17

    -   Programmiersprache → Java

    -   Schnittstellentechnologie → gRPC

    -   Framework → Quarkus

    -   Plugins → Lombok

    -   Datenbank Verbindung → Panache Mongo Reactive

    -   Rest Client → Quarkus Rest Client Reactive

-   Frontend

    -   Build Management Tool → NPM

    -   Programmiersprache → Typescript

    -   Library/ Framework → React

    -   Styling Library → Material UI

    -   gRPC Client → gRPC-Web

## Kostenplanung

### Fertigungskosten

  -----------------------------------------------------------------------
  Beschreibung        Menge            Preis pro        Gesamt
                                       Einheit          
  ------------------- ---------------- ---------------- -----------------
  Mitarbeiterstunde   79,5 Stunden     8,02€            637,59 €
  Lars Buck                                             

  **Gesamt**                                            **637,59 €**
  -----------------------------------------------------------------------

  : Tabelle 3 : Fertigungskosten

### Materialkosten

Es fielen keine Materialkosten an, da alle benötigten Programme und
Tools aufgrund von der täglichen Arbeit bereits vorhanden waren.

Außerdem wurde nur lokal entwickelt, wodurch keine weiteren Kosten für
Serverbetrieb oder ähnliches anfielen.

  -----------------------------------------------------------------------
  Beschreibung        Menge            Preis pro        Gesamt
                                       Einheit          
  ------------------- ---------------- ---------------- -----------------
  **Gesamt**                                            **0 €**

  -----------------------------------------------------------------------

  : Tabelle 4 : Materialkosten

### Gesamtkosten

  -----------------------------------------------------------------------
  Kostenstelle                           Preis
  -------------------------------------- --------------------------------
  Fertigungskosten                       637,59 €

  Materialkosten                         0 €

  **Gesamtkosten**                       **637,59 €**
  -----------------------------------------------------------------------

  : Tabelle 5 : Gesamtkosten

### Amortisationsrechnung

Eine direkte Amortisationsrechnung ist in diesem Fall nicht möglich, da
das entwickelte Softwareprodukt zu internen Lernzwecken dient und nicht
vertrieben wird oder signifikante Einsparungen für die NT\* bringt.

Der Nutzen des Projekts liegt vor allem darin, Mitarbeitern der NT gRPC
näher zu bringen und die Vor- und Nachteile davon zu beleuchten um einen
möglichen Einsatz in zukünftigen Projekten zu verifizieren.\
Dadurch lässt sich der Nutzen nicht in Geldwerten berechnen, es wird
jedoch ein Wert im Sinne Wissen generiert, auf das Mitarbeiter durch
dieses Projekt zugreifen können.

## Technische Umsetzung

### Erklärung von gRPC

gRPC ist ein Open-Source Remote Procedure Call (RPC) Framework, das es
Clients und Servern ermöglicht, über verschiedene Programmiersprachen
und Plattformen hinweg miteinander zu kommunizieren. Es wurde
ursprünglich von Google entwickelt, wird inzwischen aber von der Cloud
Native Computing Foundation (CNCF) unterstützt.

gRPC basiert auf dem Protokoll HTTP/2 und verwendet Protocol Buffers
(protobuf) als Serialisierungsformat. Es ermöglich eine sehr effiziente
und latenzarme Kommunikation zwischen verschiedenen Diensten und bietet
sich daher sehr für die Microservice-Architekturen.\
gRPC unterstütz viele Programmiersprachen wie Java, C#, Ruby, Go usw.

#### Funktionsweise

gRPC verwendet eine Client-Server-Architektur, bei der der Client eine
Anfrage an den Server sendet und dieser mit einem Ergebnis antwortet.
Der Client und der Server kommunizieren über Stubs\*, die aus einer
protobuf-Datei generiert werden. Stubs stellen eine einfache
Schnittstelle bereit, über die der Client Methoden auf dem Server
aufrufen kann.

gRPC unterstützt sowohl Unary- als auch Streaming-RPCs. Unary-RPCs
folgen einem traditionelle Anfrage-Antwort-Modell, bei dem der Client
eine Anfrage an den Server sende auf die der Server mit einer Nachicht
antwortet. Streaming-RPCs ermöglichen einen uni- oder bi-direktionale
Datenstrom zwischen dem Client und dem Server, bei der beide Parteien
über eine einzige Verbindung mehrere Nachrichten senden und/ oder
empfangen können.

#### Protocol Buffers

Protocol Buffers (kurz Protobuf) ist ein ebenfalls von Google
entwickeltes binäres Serialisierungsformat. Es wird im Bezug auf gRPC
verwendet, um Daten zwischen Client und Server auszutauschen.\
In Protobuf-Dateien (.proto) wird die Struktur der auszutauschenden
Daten definiert. Danach werden die Protobuf-Dateien mit dem
Protobuf-Compiler-Tool kompiliert und es werden daraus Server- und
Client-Stubs\* generiert.\
Protobuf ermöglicht eine einfache und effiziente Übertragung von Daten
zwischen Client und Server.

### Erklärung von Quarkus

Quarkus ist ein Open-Source Framework für Java, das auf die Erstellung
von Cloud-Nativen\* Anwendungen optimiert ist.\
Es stellt viele Funktionalitäten zur Verfügung, die es Entwicklern
erleichtern soll Cloud-Native Anwendungen leserlich und effizient zu
programmieren. Dabei unterstütz es des Reactive-Programmierungsparadigma
das auf asynchronen Operationen basiert um Anwendungen besser skalierbar
zu machen.

Quarkus findet in diesem Projekt Verwendung, da es in Verbindung mit
gRPC eine sehr effiziente und schnelle Kommunikation zwischen
verschiedenen Diensten ermöglicht.

# Entwurf

## Softwarearchitektur

Für das Projekt wurde eine Microservice-Architektur gewählt.\
Dabei wird die Anwendung in kleine, unabhängige Dienste unterteilt, die
jeweils eine spezifische Aufgabe haben. Jeder Dienst wird in dieser
Architektur als Microservice bezeichnet.\
Jeder Microservice ist ein in sich geschlossenes System das unabhängig
von anderen Diensten funktioniert.

Diese Architektur bietet die folgenden Vorteile gegenüber monolithischen
Architekturen:

-   Skalierbarkeit: Da einzelne Dienste unterschiedlich skaliert werden
    können ist die gesamte Anwendung skalierbarer.

-   Flexibilität: Änderungen an einem Dienst haben normalerweise keine
    Auswirkungen auf andere Dienste.

-   Wartbarkeit: Die logische Untertrennung der Dienste erleichtert es
    Entwicklern sich in einzelne Dienste einzuarbeiten.

-   Technologische Vielfalt: Jeder Dienst kann eine unterschiedliche
    Technologie verwenden, solange er mit den anderen Diensten
    kommunizieren kann, was es Entwicklern ermöglicht die besten
    Werkzeuge für den jeweiligen Anwendungsfall wählen zu können.

<figure>
<img src="media/image3.png" style="width:6.55368in;height:3.39595in"
alt="Ein Bild, das Diagramm enthält. Automatisch generierte Beschreibung" />
<figcaption><p><span id="_Toc132975879" class="anchor"></span>Abbildung
1: Softwarearchitektur</p></figcaption>
</figure>

**Core Backend:** Der Core Backend Dienst stellt alle Funktionalitäten
zur Abfrage und Bereitstellung von aktuellen Kryptowährungs-Kursen
bereit. Er ist in Java mit Quarkus programmiert und verwendet gRPC als
Übertragungsprotokoll.

**Datenbank:** In die Datenbank werden die abgerufenen
Kryptowährungs-Daten, zur historisierung, geschrieben und gelesen. Es
handelt sich um eine nicht relationale MongoDB.\
Sie stellt eine Timeseries Funktionalität bereit die es, bei einer
Weiterentwicklung der Anwendung, das Auslesen von Kryptowährungs-Daten
basierend auf Zeitabschnitten effizienter macht.

**Binance API:** Die Binance API ist eine öffentliche
Programmierungsschnittstelle die von dem Unternehmen Binance zur
verfügung gestellt wird. Hier werden vom Core Backend alle aktuellen
Kryptowährungs-Daten abgerufen. Die bereitgestellte Schnittstelle
verwendet das Übertragungsprotokoll Rest.

**Frontend Client:** Der Frontend Client ruft die vom Core Backend
bereitgestellten Remote Procedure Calls auf und stellt die erhaltenen
Daten in geeigneten Darstellungsformen dar. Es wird Typescript mit React
verwendet.

**Reverse Proxy:** Der Reverse Proxy ist dafür zuständig die HTTP1.1
Anfragen des Clients in HTTP2 Anfragen zu übersetzen, da gRPC diese
voraussetzt. Es wurde Envoy als Reverse-Proxy verwendet.

## Zu verwendende Tools

### Docker

Die Anwendung wird mit Docker Containerisiert, was das Ausführen auf
unterschiedlichen Systemen erleichtert. Durch eine Containerisierte
Laufzeitumgebung können Mitarbeiter des Talent Hub's die Anwendung auf
ihren Rechnern starten um gRPC Funktionalitäten besser nachvollziehen zu
können.

### Mutiny

Um die auf Effizienz und Geschwindigkeit ausgelegt Architektur sinnvoll
umzusetzen wird bei der Entwicklung des Backend-Services auf das
Reaktive-Programmierungsparadigma gesetzt, das sicherstellt, dass die
Anwendung auch unter hoher last funktioniert. Dazu wurde die Mutiny
verwendet.

Mutiny ist eine reaktive Programmierbibliothek für Quarkus, die auf der
Reactive Streams-Spezifikation\* aufbaut. Sie bietet verschiedene
reaktiven Typen wie Uni und Multi und erleichtert die Programmierung von
asynchronen und fehlertoleranten Anwendungen.

Der Datentyp Uni steht immer für eine asynchrone Operation die entweder
ein Ergebnis, oder einen Error liefert.

Ein Multi steht immer für eine asynchrone Operation die einen Datenstrom
aus mehreren Ergebnissen liefert. Diese Ergebnisse können einzeln
verarbeitet werden und bieten sich in der Regel dafür an große
Datenströme effizient zu verarbeiten.

### Git

Zur Versionierung des Codes wird Git verwendet. Die NT\* stellt dafür
ein GitLab Repository auf dem firmeneigenen Server bereit.\
Durch die verwendung von Git soll die Zusammenarbeit der Entwickler
vereinfacht, und die Datensicherung des Codes sichergestellt werden.

# Durchführung

## Erstellen eines Prototypen

Es war schon vor Beginn des Projekts klar, dass es aufgrund der
fehlenden Kompatibilität von Browsern mit HTTP2 zu Problemen bei der
Verbindung von Frontend-Client und Backend-Service kommen konnte.

Daher wurde ein simpler Prototyp erstellt, der verifizieren sollte, dass
die angestrebte Vorgehensweise funktioniert.

Die Vorgehensweise hat sich als funktionierend herausgestellt und die
eigentliche Implementierung des Projekts konnte beginnen.

## Containerisierung der Dienste

Um alle Dienste mit Docker zu containerisieren mussten zuerst
Dockerfiles für alle Dienste geschrieben werden.\
Diese Dockerfiles definieren wie ein Dienst in einer Docker-Instanz
gestartet werden soll. Dazu musste jeder Dienst mit dem jeweiligen
Build-Management-Tool kompiliert und in eine ausführbare Datei
geschrieben werden (Implementierungsbeispiel Core Backend Anlage X.X)

Dieses aus diesen Dockerfiles konnten danach Docker-Images gebaut
werden.

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image4.png){width="5.905511811023622in"
height="1.110236220472441in"}

Dieses Docker Images können alleinstehend gestartet werden um die
Anwendung in einem Docker-Container laufen zu lassen.

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image5.png){width="5.905511811023622in"
height="1.2086614173228347in"}

Da es sich um eine Microservice Architektur handelt, lassen sich die
unterschiedlichen Container einfacher mit Docker-Compose verwalten.

Dazu musste eine docker-compose.yaml Datei konfiguriert werden. (Anlage
X.X)

Danach konnte das gesamte Projekt mit der Eingabeaufforderung
docker-compose up hochgefahren und mit docker-compose down wieder
heruntergefahren werden.

## Aufsetzen einer Datenbank zum Speichern von Kryptowährungsdaten

Zum Aufsetzen der Datenbank wurde ein existierendes Docker-Image aus dem
Docker-Hub\* verwendet und in die docker-compose.yaml Datei eingebunden.

Dabei wurde ein Initialisierungs-Script in den Docker-Container
eingebettet um die Timeseries Funktionalität von MongoDB zu aktivieren.
(Anlage X.X)

Um die gespeicherten Daten einfach anzeigen zu können wurde die
docker-compose.yaml Datei noch um ein weiteres Image "mongo-express"
erweiters. Dabei handelt es sich um einen Client der eine
Benutzeroberfläche für MongoDB bereitstellt.

## Implementieren eines Rest Clients zur Abfrage von Kryptowährungs-Daten der einer öffentlichen API

Zur Anbindung an die öffentliche API von Binance wurde im
Core-Backend-Service ein Reactive-Rest-Client verwendet. Dieser erhält
über die application.properties die Ziel-URL der API, durch die
Annotation \@Get wird beim Methodenaufruf getCryptoprice ein HTTP
Get-Request mit dem jeweiligen Query Parameter (Übergabeparameter der
Methode) abgeschickt. (Anlage X.X)

Die Antwort der API wird in den Mutiny-Type Uni geschachtelt und
zurückgegeben.

## Implementierung einer Datenbankverbindung im Backend

!! Ändern nach Umstellung auch Reactive Entity

Um Daten aus dem Backend-Service in die Datenbank speichern zu können
musste die Funktionalität gegeben sein, Kryptowährungs-Daten in ein für
die Datenbank geeignetes Format umzuwandeln und mit ihr zu
interagieren.\
Das wurde mit der ReactivePanacheMongoEntity realisiert. Diese
Erweiterung macht es möglich, Datenbank CRUD-Operationen auf der
Java-Klasse auszuführen.

![](media/image6.png){width="5.905511811023622in"
height="0.8503937007874016in"}Die PanacheMongoEntity zielt auf eine
leserliche Schreibweise ab, somit lassen sich beispielsweise alle
Currency Einträge mit dem Symbol "BTC" folgendermaßen auslesen:

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image7.png){width="5.905511811023622in"
height="1.5039370078740157in"}Um Daten in die Datenbank zu schreiben
muss man ein Objekt der Entity-Klasse instanziieren, alle Werte setzen
und die .persist() Methode aufrufen.

## Implementierung eines Schedulers zur automatisierten Abfrage von neuen Kryptowährungsdaten

Um die Abfrage der Kryptowährungsdaten zu automatisieren wurde ein
Quarkus Scheduler implementier.

Dazu wurde eine Service-Klasse erstellt. Durch die Annotation
\@ApplicationScoped wird sie automatisch beim Starten der Anwendung
instanziiert und als Singleton im Speicher gehalten.

Die Methode executeTimer wird durch die Annotation \@Scheduled alle 30
Sekunden ausgeführt, ruft neue Daten von der Binance-API ab und
speichert diese mit der Currency-Entity direkt in die Datenbank (Anlage
X.X).

## Implementierung des gRPC Services

Um gRPC in einem Quarkus Service einzubinden müssen zuerst folgende
Dependencies eingebunden werden:

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image8.png){width="6.495833333333334in"
height="1.4708333333333334in"}

Diese Dependencies stellen den ProtoC Compiler\* bereit, der automatisch
beim Bauen der Anwendung aus den definierten .proto Dateien Server
Stubs\* erstellt.

### Implementierung Unary Endpunkt

Um einen remote procedure call via gRPC zu tätigen wurden .proto Dateien
definiert die angeben welche Funktionen bereitgestellt werden sollen,
welche Übergabeparameter diese haben und was ihre Rückgabewerte sein
werden.

Für den Unary remote procedure call\* zur Aggregierung des aktuellen
Preises einer Krypto-Währung wurde die folgende .proto Datei definiert:

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image9.png){width="5.905511811023622in"
height="4.106299212598425in"}

Die daraus generierten Server Stubs\* können dann genutzt werden, indem
man die Service Klasse CryptoPricesServices die generierte Klasse Crypto
erweitern lässt (Anlage X.X).

Die Methode getCurrentPrice überlagert die gleichnamige Methode in den
generierten Server Stubs\*, so der RPC\* verarbeitet und die eigene
Implementierungslogik kann implementiert werden(Anlage X.X).

Die Datentypen wurden unter Verwendung von Mutiny dabei immer in die
Datentypen Uni oder Multi geschachtelt.

### Implementierung Serverseitiger Stream

Die Implementierung eines Serverseitigen Streams befolgt dieselben
Grundprinzipien von gRPC und Mutiny und Implementiert so, wie auch der
Unary Endpunkt, die generierten Server Stubs.

Die .proto Datei wurde um die folgenden Einträge erweitert:

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image10.png){width="5.905511811023622in"
height="3.606299212598425in"}

Die Service Methode zur Implementierung des RPC gibt ein Multi zurück.\
Dieser Multi weist seinen Emitter dem zuvor instanziierten Emitter
priceHistoryEmitter zu.\
Zuerst werden alle zu dem übergebenen Symbol passenden Datensätze in der
Datenbank einzeln über den Stream emittiert.

Um Live-Daten über den Stream emittieren zu können musste zudem das
Observer Pattern (siehe Erklärung Seite X) implementiert werden um jedes
Mal, wenn neue Daten von der Binance-API abgerufen wurden den neuen Wert
über den MultiEmitter emittieren zu können.

!!! HIER WEITER MACHEN

Um das zu realisieren, wurde das Observer Pattern implementiert
(genauere Erklärung S. X) und der CryptoPriceService wurde erweitert, um
Streams aufrecht zu erhalten sowie Updates immer an alle offenen
Verbindungen zu übermitteln.

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image11.png){width="3.3933781714785654in"
height="4.341666666666667in"}

Der BinanceService benachrichtigt in diesem Fall alle Observer die ihn
zuvor abonniert haben, sobald er neue Daten von der API erhält.

Um den BinanceService zu beobachten, wurde der CryptoPricesService um
die folgende Implementierung erweitert:

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image12.png){width="6.495833333333334in"
height="7.163194444444445in"}

Um sicherzustellen, dass mehrere Clients eine Verbindung mit dem
gRPC-Service Aufbauen können, und alle Verbindungen aufrecht gehalten
werden, muss Top-Level eine HashMap instantiiert werden, die alle
MultiEmitter im Speicher hält und mit dem passenden Symbol verknüpft.

Wird nun getPriceHistory aufgerufen wird der erstellte Emitter zu der
HashMap hinzugefügt. So wird sicher gestellt, dass er erhalten bleibt
bis er manuell aus dieser HashMap entfertn wird.

Der CryproPricesService implementiert nun das Observer Interface und
überschreibt die darin definierte Methode update .

Jedes mal wenn nun die Methode update vom BinanceService aufgerufen
wird, wir die HashMap emitters nach allen Einträgen mit dem passenden
Symbol gesucht.

Für jeden emitter in der HashMap mit dem passenden Symbol wird dann die
Antwort übertragen, somit stellt man sicher, dass jedes mal wenn
beispielsweise ein neuer Preis für Bitcoin rein kommt, alle Clients die
einen Stream mit dem Anfrageparameter Bitcoin geöffnet haben den neuen
Wert übermittelt bekommen.

Das abbonieren des BinanceService erfolgt immer beim Aufruf der Methode
getPriceHistory . Wird der Emitter ein mal Terminiert (Verbindung bricht
ab) oder gecancelt (Client bricht die Verbindung ab) wird der
BinanceService deabboniert, damit er seine Aktionen nicht mehr an diesen
Beobachter überträgt. Außerdem wird die Referenzvariable des Emitters
aus der HashMap entfernt, damit keine Daten mehr an einen Client
übertragen werden der die Verbindung beendet hat.

## Aufsetzen eines Reverse-Proxy's zur Kommunikation zwischen Frontent-Client und Backend-Service

Um den erstellten gRPC Service mit einem Frontend-Client erreichen zu
können muss ein Reverse-Proxy konfiguriert werden der die HTTP1.1
Anfragen des Frontend-Clients in HTTP2 Anfragen übersetzt und diese an
den Backend-Service weiterleitet, da gRPC HTTP voraussetzt.

Dieser Schritt ist notwendig, da aktuelle Browser HTTP2 noch nicht (ohne
weiteres) unterstützen.

Zuerst wurde die Konfigurationsdatei für den Envoy-Proxy geschrieben.
Darin wird festgelegt auf welchen Port der Envoy Proxy hört, und wohin
die Anfragen weitergeleitet werden sollen. Zwischen Anfrage Empfangen
und Weiterleiteten durchläuft sie noch mehrere Filter die die HTTP1.1
Anfrage in eine HTTP2 Anfrage übersetzen.

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image13.png){width="6.495833333333334in"
height="8.299305555555556in"}

Danach wurde ein Docker-Image, basierend auf dem öffentlichen
Docker-Images aus dem Docker-Hub aufgebaut. Das erstellen eines neuen
Images war notwendig, da man die Konfigurationsdatei nicht über
Umgebungsvariablen an den Container mit geben kann. Die Lösung war also
ein neues Image zu erstellen und dabei die Konfigurationsdatei von
meinem lokalen Rechner in das Image zu mounten, wodurch die
Konfiguration richtig ausgelesen werden konnte.

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image14.png){width="6.495833333333334in"
height="1.9583333333333333in"}

Dieses Docker-Image musste dann nur noch in das bereits bestehende
docker-compose.yaml eingebunden werden, und der Frontend-Client und der
Backend-Service konnten miteinander kommunizieren.

!! Konfig noch genauer erklären/ verstehen

## Implementieren des Frontend-Clients

Um sich mit einem Frontend-Client mit dem zuvor geschriebenen gRPC
Service verbinden zu können müssen folgende Abhängigkeiten zuerst in der
package.json Datei hinzugefügt werden.

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image15.png){width="6.495833333333334in"
height="1.6527777777777777in"}

Diese Abhängigkeiten stellen alle Funktionalitäten bereit um generierten
Code des ProtoC Compilers lesen und ausführen zu können.

Es wurde eine simple Benutzeroberfläche mit drei Ansichten
implementiert. Eine Ansicht stellt die Homepage dar und beinhaltet ein
paar Informationen zu dem Projekt. In der zweiten Ansicht lässt sich der
aktuelle Preis eine Kryptowährung abfragen und in der letzten Ansicht
lässt sich die Historie einer Kryptowährung in einem Graphen darstellen
die sich beim Erhalt neuer Daten Live aktualisiert.

Bild von views

### Implementieren der Backend Kommunikation

Um die Verbindung mit dem gRPC Service aufbauen zu können mussten zuerst
die Client-Stubs\* erstellt werden. Dazu wurde die package.json Datei um
folgenden Eintrag erweitert:

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image16.png){width="6.495833333333334in"
height="2.359722222222222in"}

Mit dem Eingabeaufforderungsbefehl npm run generateCryptoProto lassen
sich nun die Typescript Code-Snippets generieren die für den Aufruf des
gRPC Services nötig sind.

Die Implementierungslogik zum aufbauen der Verbindung wurde zentral in
einer Typescript Klasse implementiert

Bei der Erstellung der Klasse wird ein Client instantiiert der den
Backend-Service aufrufen kann.

Mit der Methode getCurrentPrice kann die gleichnamige Methode im
Backend-Service aufgerufen werden. Dazu muss immer eine neue Instanz der
automatisch generierten Anfrage CryptoRequest erstellt und alle Werte
zugewiesen werden.

Danach wird die von ProtoC generierte Methode getCurrentPrice mit der
zuvor erstellten Anfrage aufgerufen. Dieser Methodenaufruf verhält sich,
als würde er in der gleichen Domäne/ Service liegen, im Hintergrund
jedoch wird eine Verbindung mit dem Backend-Service aufgebaut.

Da es sich um eine Asynchrone Operation handelt wird ein Promise zurück
gegeben das entweder den angefragten Preis oder, im Falle eines Fehlers,
den Fehler zurück gibt.

Die Methode getPriceHistory schickt auf die selbe Weise eine Anfrage an
den Server.

Da die methode this.client.getPriceHistory aber mit einen Datenstrom
(Stream) antwortet muss anders darauf reagiert werden.

Es wird auf Ereignisse auf der this.stream gewartet. Wird ein data
Ereignis empfangen wird die Callback-Funktion mit den empfangenen Daten
aufgerufen. Wird ein error Ereignis empfangen wird der Error in der
Entwickler-Konsole ausgegeben.

# Verwendete Design Patterns

## Observer Pattern

Das Observer-Pattern ist ein Entwurfsmuster, bei dem ein Objekt
(\"Observable\") eine Liste von anderen Objekten (\"Observer\") führt
und diese automatisch benachrichtigt, wenn sich sein Zustand ändert. Die
Observer können dann entsprechend reagieren.

Das Observer-Pattern wird im Kontext dieses Projekts verwendet, alle
Observer (alle Klassen die über neue Kryptowährungs-Kurse benachichtigt
werden wollen) zu benachichtigen, sobald neue Daten von der öffentlichen
Binance API geholt wurden.

Das "Observale" ist der Binance Service → jedes mal wenn er neue Daten
erhält sollen alle Observer benachichtigt werden.

Die "Observer" sind alle Klassen die über neue Kryptowährungs-Kurse
benachichtigt werden wollen.

### Implementierung Observable

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image17.png){width="6.495833333333334in"
height="7.9in"}

### Implementierung Observer Interface

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image18.png){width="4.675in" height="1.95in"}

### Implementierung Observer

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image19.png){width="4.475898950131233in"
height="4.597916666666666in"}

## Builder Pattern

Das Builder-Pattern ist ein Entwurfsmuster der Softwareentwicklung, das
verwendet wird, um komplexe Objekte zu erstellen. Es ermöglicht, dass
ein Objekt schrittweise aufgebaut wird, indem es in mehrere kleinere
Schritte unterteilt wird. Jeder Schritt fügt dem Objekt neue
Eigenschaften hinzu, bis es vollständig erstellt ist. Dadurch wird der
Code lesbarer und flexibler, da verschiedene Varianten des Objekts
leichter erstellt werden können. Das Builder-Pattern wird oft
eingesetzt, wenn ein Objekt viele Konstruktionsparameter hat oder wenn
mehrere ähnliche Objekte mit unterschiedlichen Eigenschaften erstellt
werden sollen.

Das Builder-Pattern wird im Kontext des Projektes von gRPC verwendet.
Die aus den .proto Dateien, von ProtoC generierten Code-Snippets
beinhalten das Builder-Pattern um Anfragen und Antworten (Übergabe- &
Rückgaberwerte) zu erstellen.

Die Implementierung des Patterns erfolgt hier also automatisch und wird
nur aufgerufen um Anfragen und Antworten zu erstellen.

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image20.png){width="6.083333333333333in"
height="2.716666666666667in"}

# Projektabschluss

## Rückbetrachtung

### Soll-/ Ist-Analyse

  -----------------------------------------------------------------------
  Soll                    Ist                     Auswertung
  ----------------------- ----------------------- -----------------------
  Es soll ein Backend     Es wurde ein Backend    Umsetzung war
  Service implementiert   Service implementiert,  erfolgreich
  werden der verschiedene der verschiedene        
  gRPC-Methoden           gRPC-Methoden           
  bereitstellt.           bereitstellt.           

  Es soll ein             Es wurde ein            Umsetzung war
  Frontend-Client         Frontend-Client         erfolgreich
  implementiert werden,   implementiert, der      
  um Daten via            Daten via gRPC von dem  
  gRPC-Aufrufe von dem    Backend Service erhält  
  Backend Service zu                              
  erhalten.                                       

  Es soll eine Anbindung  Es wurde eine Anbindung Umsetzung war
  an eine öffentliche API an eine öffentliche API erfolgreich
  implementiert werden,   implementiert, um       
  die Kryprowöhrungsdaten aktuelle                
  bereitstellt.           Kryptowährungskurse     
                          abzufragen.             

  Die Anwendung soll so   Die Anwendung wurde so  Umsetzung war
  konfiguriert sein, dass konfiguriert, dass es   erfolgreich
  es einfach und          einfach und             
  automatisiert           automatisiert           
  unabhängig von Hard-/   unabhängig von Hard-/   
  und                     und                     
  Softwaregegebenheiten   Softwaregegebenheiten   
  gestartet werden kann.  gestartet werden kann   
  -----------------------------------------------------------------------

### Zielerreichung

Ein Projektziel ist ein klar definiertes und spezifisches Ergebnis, das
ein Projekt erreichen soll. Es ist erreicht, wenn das definierte
Ergebnis vollständig und erfolgreich erreicht wurde und alle damit
verbundenen Anforderungen erfüllt sind.

Das Ziel des Projekts, eine Anwendung zu entwickeln, die die
verschiedenen Verbindungstypen die gRPC anbietet implementiert wurde
vollständig erreicht. Die verschiedenen Konzepte konnten im Rahmen des
Projekts erarbeitet und Firmenintern dargelegt werden. Der Zeitliche
Rahmen konnte dabei eingehalten werden.

### Nachkalkulation

Die Nachkalkulation wird als Überprüfung auf Abweichungen des am Anfang
geschätzten Betrages der Material- und Fertigungskosten erstellt.

Bei dem Projekt kam es zu keinen Abweichungen der anfangs geschätzten
Kosten. Der Zeitliche Rahmen wurde genau eingehalten. Da nur Kosten für
die Arbeitszeit fällig wurden belaufen sich die Gesamtkosten wie geplant
auf 969,6 €.

## Ausblick in die Zukunft

Das Projektziel wurde erreicht und es sind zukünftig keine Erweiterungen
der Anwendung geplant, jedoch wären folgende Erweiterungen denkbar:

-   Entfernen des Reverse-Proxy's zur Kommunikation zwischen
    Frontend-Client und Backend-Service, sobald Browser HTTP2
    unterstützen.

-   Deployment auf einem Firmeneigenen Server um die Anwendung noch
    besser verfügbar für Mitarbeiter macht um gRPC kennenzulernen.

-   Erweiterung der Anwendung um einen Service der in einer anderen
    Programmiersprache geschrieben ist um die kompatibilitätsvorteile
    von gRPC zu verdeutlichen.

## Reflexion Projektverlauf

Das Projekt verlief zum großen Teil wie erwartet und konnte fast
entsprechend dem initialen Umsetzungsplan umgesetzt werden.

Die Zeitliche Planung konnte nicht immer eingehalten werden, da sich aus
der Recherche ergeben hat, dass ein einfacher Prototyp benötigt wird, um
zu sehen ob der geplante Ansatz umsetzbar ist oder nicht, bevor
angefangen wurde mit der eigentlichen Implementierung zu beginnen.

Bei der Entwicklung dieses Prototyps konnten bereits einige
Schwierigkeiten, wie beispielsweise die Konfiguration des Envoy Proxy's
bewältigt werden, was die spätere Implementierung deutlich vereinfachte.

### Fazit Projektverlauf

In weiteren Projekten sollte bei der Zeitplanung der Fokus weniger auf
die Recherche, sondern mehr auf die Implementierung oder sogar die
Implementierung eines simplen Prototyps gelegt werden. Es macht in jedem
Fall Sinn sich in neue Themen zuerst ein zu lesen, jedoch sollte dafür
auch nicht zu viel Zeit in anspruch genommen werden, da man bei der
Umsetzung meist bessere Vortschritte im Verständnis macht und somit
effizienter arbeiten kann.

## Inhaltliche Reflexion

### gRPC vs. Rest

  -----------------------------------------------------------------------------
  Kategorie                     gRPC                    Rest
  ----------------------------- ----------------------- -----------------------
  Protokoll                     Protocol Buffers        HTTP

  Datenformat                   Binärdaten              JSON, Text, XML

  Übertragungsgeschwindigkeit   Hoch                    Langsamer

  Standard Verschlüsselung      TLS                     HTTPS

  Skalierbarkeit                Sehr gut                Bedingt gut

  Komplexität                   Hoch                    Niedrig

  Kompatibilität                Hoch                    Noch höher
  -----------------------------------------------------------------------------

Wann bietet es sich an gRPC anstatt REST zu verwenden?

-   Wenn Services in verschiedenen Programmiersprachen entwickelt wurden
    und eine nahtlose Integration erforderlich ist, bietet sich gRPC an.
    Mit Protobuf als standardisiertes Datenformat ermöglicht es gRPC
    eine schnelle und effiziente Kommunikation zwischen verschiedenen
    Sprachen.

-   Bei hohen Anforderungen an Performance und Netzwerklast bietet gRPC
    Vorteile gegenüber REST, da es Binärdaten überträgt, die kompakter
    und effizienter sind als JSON-Daten.

-   Wenn die verfügbaren Ressourcen knapp sind, bietet sich gRPC an, da
    es durch die effizientere Übertragung von Binärdaten die Host- und
    Netzwerkressourcen besser nutzt.

-   Wenn bidirektionale Streams zwischen Client und Server benötigt
    werden, bietet gRPC diese Funktion nativ an.

Wann bietet es sich an REST anstatt gRPC zu verwenden?

-   REST ist der branchenübliche Standard für API-Design und daher eine
    gute Wahl für Projekte mit vielen Entwicklern oder für APIs, die von
    Drittanbietern genutzt werden sollen.

-   Bei Webanwendungen bietet sich REST an, da gRPC nicht vollständig
    von allen aktuellen Browsern unterstützt wird. HTTP2 wird zwar
    unterstützt, aber nicht alle Funktionen von gRPC sind damit
    verfügbar.

-   Wenn die Netzwerkübertragungen mitgelesen werden müssen oder wenn
    die Lesbarkeit von Daten im Vordergrund steht, bietet sich REST an,
    da JSON-Daten leichter lesbar sind als Binärdaten.

### Fazit gRPC vs. Rest

Abschließen lässt sich sagen, dass beide Kommunikationsprotokolle Vor-
und Nachteile bieten. Ein direkter vergleich fällt schwer, da beide
Technologien auf unterschiedliche Anwendungsfälle abzielen. Grundlegend
lässt sich aber sagen, dass gRPC weitaus effizienter aber gleichzeitig
auch deutlich komplexer ist.

Für das TalentHub\* bietet sich die Verwendung von gRPC nicht an, da es
sich in erster Linie um eine Abteilung handelt, die Schülern und
Studenten den Berufseinstieg erleichtern soll. Da gRPC im Vergleich zu
Rest Komplexer ist und einen komplett anderen Denkansatz verfolgt macht
die Verwendung in diesem Rahmen keinen Sinn.

Für die aktive Arbeit im Talent Hub\* bietet sich gRPC nicht an. Es
handelt sich um eine Abteilung die in erster Linie Schülern und
Studenten den Berufseinstieg erleichtern soll, daher ist gRPC mit seiner
höheren Komplexität und dem komplett anderen Denkansatz im Gegensatz zu
Rest nicht geeignet. Es macht Sinn gRPC in form von internen
Dokumentationen, Beispielprojekten und Präsentationen zu erklären und
vorzustellen da es eine interessante Technologie ist die in Zukunft
durch immer größere und verteilte Systeme immer potentiell immer
wichtiger werden kann.

### Gegenüberstellung gRPC und Websocket bei Frontend-Diensten

Mit Quarkus und gRPC kann man sehr effiziente und skalierbare
anwendungen schreiben

# Glossar

# Anlagen

## *Dockerfile*

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image21.png){width="3.6953904199475067in"
height="2.875in"}

## *Erweiterung Dockerfile*

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image22.png){width="6.495833333333334in"
height="5.1715277777777775in"}

## *Initialisierungs Script Timeseries Funktionalität*

## *Implementierung Reactive-Rest-Client*

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image23.png){width="6.495833333333334in"
height="2.3465277777777778in"}

## *Implementierung Currency Entity*

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image24.png){width="6.175in"
height="2.9166666666666665in"}

## *Implementierung des Schedulers*

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image25.png){width="6.495833333333334in"
height="4.9215277777777775in"}

## *Implementierung Unary RPC\**

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image26.png){width="6.495833333333334in"
height="3.334722222222222in"}

## *Implementierung serverseitiger Stream RPC\**

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image27.png){width="3.1805949256342956in"
height="2.214583333333333in"}

## Ansicht *"Home"*

![Ein Bild, das Text enthält. Automatisch generierte
Beschreibung](media/image28.png){width="6.495833333333334in"
height="3.303472222222222in"}

## Ansicht *"Current Price"*

![](media/image29.png){width="6.495833333333334in"
height="3.303472222222222in"}

## Ansicht *"Price History"*

![Ein Bild, das Diagramm enthält. Automatisch generierte
Beschreibung](media/image30.png){width="6.495833333333334in"
height="3.5027777777777778in"}

# Entwicklerdokumentation

  -------------------------------------------------------------------------
  Titel                                                          Position
  -------------------------------------------------------------- ----------
  Versionsübersicht                                              1

  Verwendete Technologien                                        2

  Systemvoraussetzungen                                          3

  Starten der Anwendung                                          4

  Änderungen vornehmen                                           5
  -------------------------------------------------------------------------

## Versionsübersicht

### Anwendung

Programmbezeichnung: grpc_showcase

Programm Version: 1.0

Freigabedatum: 06.06.2023

### Entwicklerdokumentation

Handbuch Version: 1.0

Erstellt am: 01.06.2023

Letzte Änderung: 01.06.2023

## Verwendete Technologien

-   Infrastruktur

    -   Datenbank → MongoDB

    -   Datenbank Client → Mongo Express

    -   Reverse Proxy → Envoy

-   Backend

    -   Build Management Tool → Gradle

    -   Entwicklungsumgebung → OpenJDK 17

    -   Programmiersprache → Java

    -   Schnittstellentechnologie → gRPC

    -   Framework → Quarkus

    -   Plugins → Lombok

    -   Datenbank Verbindung → Panache Mongo Reactive

    -   Rest Client → Quarkus Rest Client Reactive

-   Frontend

    -   Build Management Tool → NPM

    -   Programmiersprache → Typescript

    -   Library/ Framework → React

    -   Styling Library → Material UI

    -   gRPC Client → gRPC-Web

## Systemvoraussetzungen

Folgene Voraussetzungen müssen erfüllt sein um die Anwendung erfolgreich
starten zu können:

-   Docker installiert

-   Docker-Compose installiert

-   JDK 17 oder höher installiert

-   Internetbrowser zum aufrufen der Benutzeroberfläche

## Starten der Anwendung

1.  GitHub Repository Klonen

2.  Navigiere zu grpc_showcase/infrastructure/

3.  Führe das Script startscript.sh aus

→ Die verschiedenen Services sollten automatisch gebaut, die jeweiligen
Docker Images erstellt und gestartet werden. Nach dem erfolgreichen
Ausführen des Scripts ist die Benutzeroberfläche unter localhost:3000
erreichbar.

## Änderungen vornehmen

Um selbst Änderungen an der Codebase vornehmen zu können, stoppe einfach
den jeweiligen Docker Container (Frontend Client - grpc_frontend_client,
Backend Service - grpc_core_backend).

Danach kannst du den gewählten Service lokal starten.

### Service lokal starten

-   Frontend

    -   Navigiere zu /grpc_showcase/frontend-client/

    -   Gebe in die Eingabeaufforderung npm start ein

-   Backend

    -   Navigiere zu /grpc_showcase/core-backend/

    -   Gebe in die Eingabeaufforderung ./gradlew quarkusDev ein
