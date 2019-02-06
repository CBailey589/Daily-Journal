import getPastEntriesFromDatabase from "./getPastEntriesFromDatabase.mjs"

function turnPastEntriesToHTML() {
    return getPastEntriesFromDatabase().then((pastEntriesArray) => {
        let pastEntryHTMLBlocks = [];
        let moodOptionsArray = [].slice.call(document.querySelectorAll(".radio"))
        if (moodOptionsArray[0].checked) {
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
        } else {
            let moodToShow = moodOptionsArray.filter(moodOption => {
                return moodOption.checked === true
            })[0].id
            pastEntriesArray.filter(pastEntry => {
                return pastEntry.mood === moodToShow
            }).forEach(entry => {
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
        }
        console.log(pastEntryHTMLBlocks[0])
        return pastEntryHTMLBlocks
    })
}

export default turnPastEntriesToHTML