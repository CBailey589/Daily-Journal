import makeNewEntryObject from "./makeNewEntryObject.mjs"

function postNewEntryToDatabase() {
    let newEntryObject = makeNewEntryObject()
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntryObject)
    })
}


export default postNewEntryToDatabase