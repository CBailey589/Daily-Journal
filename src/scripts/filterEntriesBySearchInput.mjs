import filterEntriesBySelectedMood from "./filterEntriesBySelectedMood.mjs"

function filterEntriesBySearchInput() {
    return filterEntriesBySelectedMood()
    .then((entriesFilteredByMood) => {
        let entriesFilteredBySearchInput= []
        entriesFilteredBySearchInput = entriesFilteredByMood
        return entriesFilteredBySearchInput
    })
}

export default filterEntriesBySearchInput


    // if (document.querySelector("#searchEntriesInput").value !== "") {
    //     // console.log("IT ISNT EMPTY")
    //     let titleRegEx = new RegExp(`class="pastEntryTitle">(.*)</h1>`)
    //     let pastEntrySearchableText = a
    // }