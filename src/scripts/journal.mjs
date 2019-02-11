import populateJournalForm from './populateJournalForm.mjs'
import API from './APIFunctions.mjs'
import clearDisplayedEntriesFromDOM from './clearDisplayedEntriesFromDOM.mjs'
import checkNewEntryForProfanity from './checkNewEntryForProfanity.mjs'
import resetJournalEntryForm from './resetJournalEntryForm.mjs'

populateJournalForm();
API.GET()

document.querySelector("#submitButton").addEventListener("click", () => {
    if (event.target.textContent === "Record Journal Entry") {
        if (checkNewEntryForProfanity()) {
            alert("No Profanity Allowed In Journal")
            resetJournalEntryForm()
        } else {
            clearDisplayedEntriesFromDOM()
            API.POST().then(API.GET)
            resetJournalEntryForm()
        }
    }
    if (event.target.textContent === "Update Journal Entry") {
// need code here

        document.querySelector("#submitButton").textContent = "Record Journal Entry"
    }
})

document.querySelector("#moodRadioSection").addEventListener("click", () => {
    if (event.target.type === "radio") {
        clearDisplayedEntriesFromDOM()
        API.GET()
    }
})

document.querySelector("#searchEntriesInput").addEventListener("keyup", () => {
    clearDisplayedEntriesFromDOM()
    API.GET()
})

document.querySelector("#pastEntries").addEventListener("click", () => {
    if (event.target.id.startsWith("delete--")) {
        let id = parseInt(event.target.id.split("--")[1])
        return(API.DELETE(id))
        .then(() => {
            clearDisplayedEntriesFromDOM()
            return
        })
        .then(() => {
            API.GET()
        })
    }
})
