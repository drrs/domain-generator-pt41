/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById(
    "domain_generation"
  ).innerHTML = domainGenerator11().join("<br>");
};
/*
const pronoun = ["the", "our", "his", "her", "their", "an", "a"];
const adjective = [
  "cool",
  "great",
  "big",
  "small",
  "terrific",
  "terrible",
  "blue",
  "scary",
  "green",
  "friendly"
];
const noun = [
  "jogger",
  "bear",
  "raccoon",
  "runner",
  "surfer",
  "boxer",
  "dancer",
  "writer",
  "dolphin",
  "giant",
  "gnome",
  "beluga",
  "opossum"
];

const tld = [".com", ".gov", ".org", ".net"];
*/
const pronoun = ["the"];
const adjective = ["friendly"];
const noun = ["Capcom", "Coolgov", "Internet"];
const tld = [".com", ".gov", ".org", ".net"];

/*
function domainGenerator1(pronounArray, adjectiveArray, nounArray, tldArray) {
  for (let i = 0; i < pronounArray.length; i++) {
    for (let j = 0; j < adjectiveArray.length; j++) {
      for (let k = 0; k < nounArray.length; k++) {
        for (let l = 0; l < tldArray.length; l++) {
          return (
            pronounArray[i] + adjectiveArray[j] + nounArray[k] + tldArray[l]
          );
        }
      }
    }
  }
}

function domainGenerator2(pronounArray, adjectiveArray, nounArray) {
  for (let i = 0; i < pronounArray.length; i++) {
    for (let j = 0; j < adjectiveArray.length; j++) {
      for (let k = 0; k < nounArray.length; k++) {
        return pronounArray[i] + adjectiveArray[j] + "." + nounArray[k];
      }
    }
  }
}
*/

function domainGenerator11() {
  let collectedArray = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < tld.length; l++) {
          if (
            noun[k].substring(noun[k].length - 3) ==
            tld[l].substring(tld[l].length - 3)
          ) {
            collectedArray.push(
              pronoun[i] +
                adjective[j] +
                noun[k].substring(0, noun[k].length - 3) +
                tld[l]
            );
          } else {
            collectedArray.push(pronoun[i] + adjective[j] + noun[k] + tld[l]);
          }
        }
      }
    }
  }
  return collectedArray;
}

/*
function domainGenerator21() {
  let collectedArray = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        collectedArray.push(pronoun[i] + adjective[j] + "." + noun[k]);
      }
    }
  }
  return collectedArray;
}
*/
