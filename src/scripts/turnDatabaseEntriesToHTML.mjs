import filterEntriesBySearchInput from "./filterEntriesBySearchInput.mjs"

function turnDatabaseEntriesToHTML() {
    return filterEntriesBySearchInput()
        .then((filteredEntries) => {
            let entryHTMLBlocks = []
            filteredEntries.forEach(entry => {
                entryHTMLBlocks.push(`
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
                return entryHTMLBlocks
            })
            return entryHTMLBlocks
        })
}

export default turnDatabaseEntriesToHTML