
function clearcontent(elementID) {
    document.getElementById("app").innerHTML = "";
}

function addstyle() {
    document.getElementById('personResults').href='style.css';
}

function fetchPerson() {
    clearcontent();
    if(document.getElementById('drop').value == "Person") {
        fetch(`http://localhost:3000/api/result?search=${document.getElementById('search').value}&submit=Submit`)
        //fetch(`https://stacc-code-challenge-2021.azurewebsites.net/api/pep?name=${document.getElementById('search').value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const html = data.hits
                .map(hit => {
                    return `
                    <div class="personResults"
                        <p>Name: ${hit.name}</p>
                        <p>Score: ${hit.score}</p>
                        <p>ID: ${hit.id}</p>
                        <p>Date of birth: ${hit.birth_date}</p>
                    </div>
                    `;
                })
                .join("");
            document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
            addstyle();

        })
    }
    else if(document.getElementById('drop').value == "Company") {
        //fetch(`http://localhost:3000/api/result?search=${document.getElementById('search').value}&submit=Submit`)
        fetch(`https://stacc-code-challenge-2021.azurewebsites.net/api/enheter?orgNr=${document.getElementById('search').value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const html =     
                    `
                    <div class="personResults"
                        <p>Org.Nr.: ${data.organisasjonsnummer}</p>
                        <p>Navn: ${data.navn}</p>
                        <p>Ansatte: ${data.antallAnsatte}</p>
                        <p>Adresse: ${data.forretningsadresse.adresse} </p>
                        <p>Postkode: ${data.forretningsadresse.postnummer} ${data.forretningsadresse.poststed}</p>
                    </div>
                    `;
            document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
            addstyle();
        })
    }
}