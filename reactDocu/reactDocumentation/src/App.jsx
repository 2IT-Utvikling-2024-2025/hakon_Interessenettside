

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
          <p>Først valgte vi navn standarden til PC-en. Vi bestemte at det skulle være PC og så IP adressen. Vår gruppe benytter IP adressene 192.168.1.60 – 79. 
            Svein sin IP er 192.168.60, Odin sin er 192.168.1.61 og min IP er 192.168.1.62. Det er vår IP-plan. Derfor er min navn standard PC-192.168.1.62
          </p>
        </section>

        <section>
          <h3>WINDOWS SETUP</h3>
          <p>Jeg satte inn minnepenn med Windows 10, jeg prøvde først Windows 11 men pc-en kunne ikke støtte den. Etter minnepenn er satt inn trykket jeg på Enter og f12, jeg fikk en liten meny med forskjellige  valg. Jeg valgte USB deretter Norsk språk, så startet Windows 10 installasjonen.
            Etter Windows 10 var installert valgte jeg custom setup. Jeg slettet alle eksisterende disker og valgte at partisjonen for disken skulle ha 100gb. 
          </p>
        </section>

        <section>
          <h3>KOBLE SAMMEN PC</h3>
          <p>Med Windows setup ferdig kunne jeg starte neste delen av oppgaven. Jeg gikk inn på settings – Network Connection, høyreklikket på Ethernet, og endret IP til min IP som var 192.168.1.62. 
             Jeg fikk automatisk subnetmasken 255.255.255.0. Etter det gikk jeg inn på brannmuren og trykket på enable, sånn at jeg kan pinge andre PCer. Jeg og Odin koblet oss på Ethernet og åpnet terminalen og brukte kommando ping (IP). Jeg pinget Odin sin IP, 
             så det ble ping 192.168.1.61. Vi klarte å pinge hverandre.
             Til slutt koblet vi oss på tråløst nettverk og lastet ned FileZilla. Svein satte opp en server som vi kunne bruke til å sende hverandre filer.
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
