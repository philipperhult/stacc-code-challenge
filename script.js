import readline from "readline";
import fetch from "node-fetch";

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  r.question('Hello! Please enter persons that you want to simplify:\n>>> ', person => {
    fetchPerson(person);
    r.close();
  });


async function fetchPerson(person) {
  try {
    await fetch(`https://stacc-code-challenge-2021.azurewebsites.net/api/pep?name=${person}`)
    .then(res => res.json())
    .then(data => console.log(data.data));
  } catch (error) {
    console.log(error);
  }
}




