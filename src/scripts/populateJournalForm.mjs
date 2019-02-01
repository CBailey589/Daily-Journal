function populateJournalForm() {
    document.querySelector("#journalEntryForm").innerHTML =`
    <fieldset>
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>

        <fieldset>
            <label for="conceptsCovered" class="conceptsCovered">Concepts Covered</label>
            <input type="text" name="conceptsCovered" id="conceptsCovered">
        </fieldset>

        <fieldset>
            <label for="entry">Journal Entry</label>
            <textarea name="entry" id="entry" cols="30" rows="10"></textarea>
        </fieldset>

        <fieldset>
            <label for="helpfulLink" class="helpfulLink">Helpful Link</label>
            <input type="text" name="helpfulLink" id="helpfulLink">
        </fieldset>

        <fieldset>
            <label for="helpfulLinkTitle" class="helpfulLinkTitle">Link Description</label>
            <input type="text" name="helpfulLinkTitle" id="helpfulLinkTitle">
        </fieldset>

        <fieldset>
            <label for="mood">Mood for the day</label>
            <select name="mood" id="mood">
                <option value="Happy">Happy</option>
                <option value="Fine">Fine</option>
                <option value="Confused">Confused</option>
                <option value="Sad">Sad</option>
                <option value="Angry">Angry</option>
            </select>
        </fieldset>
    `
}

export default populateJournalForm