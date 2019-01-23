const pastEntriesToHTML = (entry) => {
    return `
     <div id="${entry.date}" class="pastEntry">
         <h1 class="pastEntryTitle">${entry.conceptsCovered}</h1>
         <div class="pastEntryText">${entry.textEntry}</div>
         <div class="dateAndMood">
            <div class="pastEntryDate">${entry.date}</div>
            <div class="pastEntryMood">${entry.mood}</div>
        </div>
    </div>
    `
}
