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

//table.innerHTML = "<tr><td>hi</td></tr>"

for(let i = 0; i < episodeList.length; i++){
let row = document.createElement("tr")
let cell = document.createElement("td")
//cell.innerText = episodeList[i].name

let name = document.createElement("p");
name.innerText = episodeList[i].name
let image = document.createElement("img")
image.src = episodeList[i].image.medium



cell.appendChild(name)
cell.appendChild(image)
row.appendChild(cell)
table.appendChild(row)

  console.log(episodeList[i].name);
}
}

window.onload = setup;

