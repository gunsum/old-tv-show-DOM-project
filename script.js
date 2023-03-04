//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;


let table = document.createElement("table");
rootElem.appendChild(table);

table.innerHTML = "<tr><td>hi</td></tr>"

for(let i = 0; i < episodeList.length; i++){
let row = document.createElement("tr")
let cell = document.createElement("td")
//cell.innerText = episodeList[i].name

/*let number
let formattedNmuber = ("0"+number).slice(-2)
formattedNumber = document.createElement("number")
number.innerText = episodeList[i].number


"abcd".slice(-1) == "d"
"abcd".slice(-2) == "cd"
"abcd".slice(-3) == "bcd"
S + season_number + E + episode_number

let seasonum
let seasonNumber = ("0"+seasonum).slice(-2)
seasonNumber = document.createElement("season")
seasonum.innerText = episodeList[i].season
*/
let season = episodeList[i].season
let number = episodeList[i].number

let seasonNumber = "S"+("0"+ season).slice(-2)
//console.log(seasonNumber)
let episodeNumber ="E"+("0"+ number).slice(-2)

let finalNumber = seasonNumber + episodeNumber

let finalNum = document.createElement("p")

finalNum.innerText = finalNumber


let name = document.createElement("p");
name.innerText = episodeList[i].name

let image = document.createElement("img")
image.src = episodeList[i].image.medium

let summary = document.createElement("p")
summary.innerText = episodeList[i].summary


cell.appendChild(finalNum)
  
cell.appendChild(name)
cell.appendChild(image)
cell.appendChild(summary)
row.appendChild(cell)
table.appendChild(row)

  console.log(episodeList[i].name);
}
}

window.onload = setup;

