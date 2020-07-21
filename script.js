//You can edit ALL of the code here
function setup() {
	const allEpisodes = getAllEpisodes();
	makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
	const rootElem = document.getElementById('root');

	for (let i = 0; i < episodeList.length; i++) {
    let episodeContainer = document.createElement('div');
    episodeContainer.className = "episode";
    rootElem.appendChild(episodeContainer);
    let titleElement = document.createElement('div');
    episodeContainer.appendChild(titleElement);
    let headingElement = document.createElement("h2");
    titleElement.appendChild(headingElement);

    let season = episodeList[i].season;
		let number = episodeList[i].number;
		let seasonNumber = 'S' + ('0' + season).slice(-2);
		let episodeNumber = 'E' + ('0' + number).slice(-2);
		let finalNumber = seasonNumber + episodeNumber;

    headingElement.innerText = episodeList[i].name + " - " + finalNumber;

    let image = document.createElement('img');
    image.src = episodeList[i].image.medium;
    titleElement.appendChild(image);

		let summaryElement = document.createElement('div');
		episodeContainer.appendChild(summaryElement);
		summaryElement.innerHTML = episodeList[i].summary;

		
	
		

		

		
	}
}

window.onload = setup;
