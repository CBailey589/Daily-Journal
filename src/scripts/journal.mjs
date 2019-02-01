import populateJournalForm from './populateJournalForm.mjs'
import API from './APIFunctions.mjs'
import clearDisplayedEntriesFromDOM from './clearDisplayedEntriesFromDOM.mjs'
import resetJournalEntryForm from './resetJournalEntryForm.mjs'

populateJournalForm();
API.GET()

document.querySelector("#recordButton").addEventListener("click", () => {
    clearDisplayedEntriesFromDOM()
    API.POST().then(API.GET)
    resetJournalEntryForm()
})
