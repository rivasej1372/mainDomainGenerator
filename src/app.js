/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function domainGenerator() {
  const allDomains = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let x = 0; x < pronoun.length; x++) {
    for (let y = 0; y < adj.length; y++) {
      for (let z = 0; z < noun.length; z++) {
        console.log(pronoun[x] + adj[y] + noun[z]);
        allDomains.push(pronoun[x] + adj[y] + noun[z] + ".com");
      }
    }
  }
  return allDomains;
}

window.onload = () => {
  document.querySelector("div").innerHTML = domainGenerator();
};
