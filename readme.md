# Stacc code challenge 2021

## Oppgavebeskrivelse

> Jeg har valgt å løse begge oppgavene. Altså både lage en enkel webapp og et eget API. Når man åpner webappen kan man velge om man vil ha en person eller et company. Person går gjennom mitt eget API laget med express.js, og Company går gjennom deres API.

## Hvordan kjøre prosjektet
Man vil trenge å ha installert med npm:
1. nodemon
2. cors
3. ejs

Webappen er **index.html**, her man bruker appen.

> For å kjøre serveren **'nodemon server.js'** i konsollen. Dette trengs bare for å kjøre enkeltpersonssøk.

> Eksempelkjøring i index.html:
> - Velg Person og skriv inn 'Knut Arild Hareide'
> - Velg Company og skriv inn '981078365'

## Kommentarer
> API'et mitt funker bare for enkeltpersoner, og da bare fra json filer. Jeg har dessverre ikke funnet ut hvordan man kan bruke csv filer til å gjøre søket.

> Jeg valgte å bruke deres API for company, dette var fordi det ikke ble vedlagt json eller csv filer med denne informasjonen. Samtidig for å bevise at man også kan bruke begge metodene. 