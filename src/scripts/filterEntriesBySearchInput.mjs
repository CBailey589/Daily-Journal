import filterEntriesBySelectedMood from "./filterEntriesBySelectedMood.mjs"

function filterEntriesBySearchInput() {
    return filterEntriesBySelectedMood()
        .then((entriesFilteredByMood) => {
            let input = document.querySelector("#searchEntriesInput").value
            let entriesFilteredBySearchInput = entriesFilteredByMood.filter((object) => {
                return (object.conceptsCovered.includes(input) || object.textEntry.includes(input))
            })
            return entriesFilteredBySearchInput
        })
}

export default filterEntriesBySearchInput
