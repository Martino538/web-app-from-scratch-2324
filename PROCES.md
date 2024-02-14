## Mijn proces?
<p>Welkom op mijn proces pagina. Hier beschrijf ik wat ik per dag gedaan heb en hoe ik tot het eindresultaat ben gekomen. Ik beschrijf wat ik geleerd heb, maar ook waar ik moeite mee heb gehad.<p>

## Dag 1
#### 05-02-2024
<p>Vandaag heb ik de voorbeeld repository gecloned en nagedacht over een onderwerp voor op mijn individuele web-applicatie.<p> 

<p>Ik wil een one-pager ter introductie van mijzelf maken. Ik heb een JSON bestand gemaakt met basisinformatie. In eerste instantie wil ik mij richten op het fetchen van mijn deze data uit het JSON bestand. Hierdoor staat de basis al op het scherm en kan ik mij gaan richten op de vormgeving. Zo ziet de JSON eruit:<p>

<img width="549" alt="Scherm­afbeelding 2024-02-14 om 11 27 03" src="https://github.com/Martino538/web-app-from-scratch-2324/assets/32341318/83fd5192-5699-453d-8297-255de4b96711">

<p>In de vormgeving wil ik mij richten op het maken van animaties en micro-interacties. Ik heb enige ervaring met het vormgeven d.m.v. css, maar ik heb nog niet veel ervaring met het maken van animaties en interacties.<p>


## Dag 2
#### 06-02-2024
<p>Nu de data gefetcht en ingeladen wordt heb ik mij bezig gehouden met de visuele aspecten van mijn website. D.m.v. een trucje geleerd hoe ik een glow animation achter een willekeurige afbeelding kan krijgen en heb ik geleerd hoe je om de zoveel tijd een tekst laat veranderen.<p>

<p>Bron voor de glow animatie: <p>
https://stackoverflow.com/questions/8693733/how-to-give-outer-glow-to-an-object-in-a-transparent-png-using-css3

<p>Hiernaast ben ik erachter gekomen wat de essentie van een breakdown-schets is. Ik heb soms moeite om semantische code te schrijven, waardoor een schets op voorhand erg handig kan zijn. In het begin had ik al een breakdown schets, maar deze was niet erg uitgebreid. Deze heb ik vandaag verbeterd en is hieronder te zien:<p>


## Dag 3
#### 07-02-2024
<p>Vandaag heb ik mij bezig gehouden met het verder vormgeven van mijn website. In de film sectie heb ik een aantal interactieve cards toegevoegd en geleerd hoe deze kunt laten omdraaien. Hiernaast heb ik audio-players op de site gezet mijn eigen muziek. Hiernaast was de eerste Weekly nerd. Dit was heel interessant omdat er allemaal nieuwe HTML tags werden uitgelegd die ervoor zorgen dat je geen javascript meer hoeft te gebruiken om hetzelfde voor elkaar te krijgen. Ik heb deze elementen niet nodig gehad in mijn site maar ga dit welvoegelijk gebruiken in de toekomst.<p>


## Dag 4
#### 08-02-2024
<p>Vandaag ben ik gaan kijken hoe ik mijn website interactiever kan maken. Gister heb ik de cards toegevoegd, maar dit vind ik erg minimaal. Om deze reden wil ik animaties toevoegen om meer speling in mijn pagina te krijgen. Ik heb voor het eerst een animatie gemaakt d.m.v. keyframes. Hiermee heb ik een coole animatie in mijn pageheader weten te maken. Bas heeft mij erop gewezen dat mijn flow animatie in de pageheader veel makkelijker te maken is d.m.v. drop-shadow. Dit geeft namelijk een schaduw om de vorm van een element en voorheen was dit heel omslachtig meerdere afbeeldingen gedaan. Ook ben ik gestart met het maken van een slider animatie van mijn secties. Dit vind ik erg lastig en zou hier zonder hulp niet uitkomen. Dit komt omdat ik d.m.v. uitleg heb gemerkt dat ik de benodigde stappen niet begrijp. Stapje voor stapje leer ik een nieuw onderdeel wat mij tot het eindresultaat zal leiden.<p>

![pageheader-gif](https://github.com/Martino538/web-app-from-scratch-2324/assets/32341318/79adee0d-a1b6-498c-92c2-dc349052c19f)

![Section-animation](https://github.com/Martino538/web-app-from-scratch-2324/assets/32341318/112fffbd-a6b9-43b5-8a2d-cef10e384de5)



## Dag 5
#### 09-02-2024
<p>Vandaag responsie website gemaakt en ervoor gezorgd dat 2 animaties mogelijk zijn op 1 element. Nu is het mogelijk om de website op elk grootte te bekijken. In mijn pageherder heb ik nu een mooie flow animatie en een fade-out animatie op de tekst. Echter is een deel van de uitleg die Marten mij gegeven had over het selecteren van de juiste sectie ontgaan omdat ik druk bezig was met het maken van de animatie. Dus heb ik vandaag nogmaals om uitleg gevraagd wat de volgende stap kan zijn om mijn slideshow te laten werken. Ik heb nu een duidelijk plan wat ik wil gaan proberen om dit te laten werken:<p>
  <ol>
    <li>Alle sections achter elkaar plaatsen</li>
    <li>Op een druk op de knop een z-index geven aan de juiste sectie</li>
    <li>De nieuwe sectie in-animeren</li>
    <li>De oude sectie uit laten animeren</li>
  </ol>


## Dag 6
#### 12-02-2024
<p>Vandaag was ik ziek maar ondanks dat heb ik vanuit huis door te werken. Ik heb een  hamburger menu gemaakt en gekeken naar de slide animation. Het is gelukt om de secties achter elkaar te plaatsen en een juiste sectie op te roepen als je op een navigatie item hebt geklikt. Alleen het animeren is nog een uitdaging, maar ik ben hier zelf al best trots op en heb geleerd dat je extra data-attributen kunt toevoegen waar je vervolgens op kunt checken, zodat je de juiste sectie bij een knop kunt vinden. Met een beetje hulp van ChatGPT kwam ik op de volgende code uit:<p>

<img width="623" alt="Scherm­afbeelding 2024-02-14 om 12 09 37" src="https://github.com/Martino538/web-app-from-scratch-2324/assets/32341318/66390ce9-022b-45c4-b1f1-e9d2948c9563">

<br><p>Het resultaat is het volgende:<p>

![section-animation (1)](https://github.com/Martino538/web-app-from-scratch-2324/assets/32341318/4e1975e5-3016-47e5-a19c-c76858236242)


<p>Met de resterende tijd ga ik proberen om stap 3 en 4 werkend te krijgen. Mijn idee is dat ik een timer instel op het aanroepen van de nieuwe sectie, zodat er speling ontstaat om de huidige sectie weg te laten animeren.<p>


## Dag 7
#### 13-02-2024
<p>Deze dag was ik te ziek om te kunnen werken aan school. Stap 3 & 4 moet ik nog uitwerken.<p>


## Dag 8
#### 14-02-2024
Vandaag heb ik mij gericht op de afronding van de website. Wat ik in eerste instantie graag had willen doen was het toevoegen van een animatie tussen de secties. Deze luid als volgt: Als er gewisseld wordt tussen een sectie, laat dan eerste de content uit het scherm bewegen voordat en daadwerkelijk een nieuwe sectie in beeld wordt gebracht.

Deze animatie is mij helaas niet gelukt door te voeren voor alles secties. Wel heb ik een soortgelijke animatie weten te maken op de homepagina op de knop 'Lees meer over mij'. Zodra er op deze knop wordt gedrukt gebeurd precies de animatie zoals hierboven beschreven. Dit wordt gedaan d.m.v. van de volgende code:


