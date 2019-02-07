import populateJournalForm from './populateJournalForm.mjs'
import API from './APIFunctions.mjs'
import clearDisplayedEntriesFromDOM from './clearDisplayedEntriesFromDOM.mjs'
import checkNewEntryForProfanity from './checkNewEntryForProfanity.mjs'
import resetJournalEntryForm from './resetJournalEntryForm.mjs'

populateJournalForm();
API.GET()

document.querySelector("#recordButton").addEventListener("click", () => {
    if(checkNewEntryForProfanity()) {
        alert("No Profanity Allowed In Journal")
        resetJournalEntryForm()
    } else {
        clearDisplayedEntriesFromDOM()
        API.POST().then(API.GET)
        resetJournalEntryForm()
    }
})

document.querySelector("#moodRadioSection").addEventListener("click", () => {
    if (event.target.type === "radio") {
        clearDisplayedEntriesFromDOM()
        API.GET()
    }
})

document.querySelector("#searchEntriesInput").addEventListener("keyup", () => {
    console.log(event.target.value)
})
