import turnPastEntriesToHTML from "./turnPastEntriesToHTML.mjs"


function putPastEntryHTMLOnDOM() {
    // let pastEntryHTMLBlocksPromise = turnPastEntriesToHTML();
    console.log(pastEntryHTMLBlocksPromise)
    // pastEntryHTMLBlocksPromise.then((PastEntryHTMLBlocks) => {
        PastEntryHTMLBlocks.forEach(pastEntryHTML => {
            document.querySelector("#pastEntries").innerHTML += pastEntryHTML;
        });
    }
    // )
// }

export default putPastEntryHTMLOnDOM