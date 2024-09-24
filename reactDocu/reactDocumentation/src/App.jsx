

import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div id="root">
      <div className="container">
        <h1>KOBLE SAMMEN PC'ER</h1>
        <h3>Tverrfaglig Prosjekt</h3>
        <img 
          src="https://media.discordapp.net/attachments/1163559115306573996/1283409728713785416/output-onlinegiftools.gif?ex=66e2e3f3&is=66e19273&hm=81b9d6015563c1f1a4128ca6fb4e6e40e8a27676e0069cd6486cb560fe3cf880&=&width=747&height=420" 
          alt="Animated Image" 
        />
        <section>
          <h3>PLANLEGGING</h3>
          <p> Navn standarden til PC-en er IP adressen.
             Vår gruppe benytter IP adressene 192.168.1.60 – 79. Svein sin IP er 192.168.60, Odin sin er 192.168.1.61 og min IP er 192.168.1.62. Det er vår IP-plan. Derfor er min navn standard PC-192.168.1.62</p>
        </section>

        <section>
          <h3>WINDOWS SETUP</h3>
          <p>
          Først ble Windows 11 testet, dette funket ikke så Windows 10 ble installert.  Minnepinne ble brukt for installasjon av Windows, når den var satt opp fikk man opp boost menyen I boost menyen velger man USB, og norsk språk.
          Etter Windows 10 installasjon velger man custom setup. Slett alle eksisterende disker og velg at partisjonen for disken skal ha 100gb. 

          </p>
        </section>

        <section>
          <h3>KOBLE SAMMEN PC</h3>
          <p>NDeretter gå inn på settings – Network Connection, høyreklikket på Ethernet, og endre IP ti  192.168.1.62. 
          automatisk subnetmasken er 255.255.255.0. Deretter åpne brannmur og trykke på enable, sånn at man kan pinge andre PCer. Koblet på Ethernet og åpne terminalen og bruk kommando ping (IP). 
          Til slutt last ned Filezilla. Sett opp en server for å bruke overføre filer.

          </p>

        </section>

        <section>
  <h3>BRUKERVEILEDNING BRANNMUR</h3>
  <ol className="firewall-steps">
    <li>Gå til forstørrelses glasset og søk «firewall»</li>
    <li>Trykk inn på firewall & Network protection</li>
    <li>Finn avanserte innstillinger</li>
    <li>Etter du er ferdig trykker du på X i høyre hjørnet får å gå ut av brannmuren</li>
  </ol>
</section>


        <section>
          <h3>REFLEKSJON:</h3>
          <p>Jeg har lært mye gjennom denne oppgaven. Jeg kan nå installere Windows, endre IP adressen til pc-en, 
            gjøre endringer i brannmuren, pinge andre PCer, også har jeg blitt litt flinkere i react. Jeg lærte hvordan man 
            kan legge til URL bilder. Innsatsen min har vært svært bra, var borte et par dager så jeg har jobbet effektivt for 
            å ta igjen den tapte tiden. Om jeg skulle gjort dette igjen tror jeg ikke at jeg hadde gjort mye annerledes, men jeg 
            hadde gjort alt mye raskere.</p>

        </section>

      </div>
    </div>
  );
}

export default App;
