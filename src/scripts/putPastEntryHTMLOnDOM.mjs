import turnPastEntriesToHTML from "./turnPastEntriesToHTML.mjs"

function putPastEntryHTMLOnDOM() {
    return turnPastEntriesToHTML().then((pastEntryHTMLBlocks) => {
        pastEntryHTMLBlocks.forEach(pastEntryHTML => {
            document.querySelector("#pastEntries").innerHTML += pastEntryHTML;
        })
    });
}


export default putPastEntryHTMLOnDOM