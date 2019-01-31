import getPastEntriesFromDatabase from "./getPastEntriesFromDatabase.mjs"

function turnPastEntriesToHTML() {
    let pastEntryHTMLBlocks = [];
    let pastEntriesPromise = getPastEntriesFromDatabase();
    pastEntriesPromise.then((pastEntriesArray) => {
        pastEntriesArray.forEach(entry => {
            pastEntryHTMLBlocks.push(
                `
                <div id="${entry.date}" class="pastEntry">
                    <h1 class="pastEntryTitle">${entry.conceptsCovered}</h1>
                    <div class="pastEntryText">${entry.textEntry}</div>
                    <div class="pastEntryLink">
                       <a href="${entry.link}">Related Link: ${entry.linkDescription} </a>
                    </div>
                    <div class="dateAndMood">
                       <div class="pastEntryDate">${entry.date}</div>
                       <div class="pastEntryMood">${entry.mood}</div>
                   </div>
               </div>
               `)
        })
        return pastEntryHTMLBlocks
    })
}

export default turnPastEntriesToHTML