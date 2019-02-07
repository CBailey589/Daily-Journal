import turnDatabaseEntriesToHTML from "./turnDatabaseEntriesToHTML.mjs"

function putPastEntryHTMLOnDOM() {
    return turnDatabaseEntriesToHTML()
    .then((entryHTMLBlocks) => {
        entryHTMLBlocks.forEach(block => {
            document.querySelector("#pastEntries").innerHTML += block;
        })
    });
}

export default putPastEntryHTMLOnDOM