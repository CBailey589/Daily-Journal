function makeNewEntryObject() {
    let newEntryObject = {};

    newEntryObject.date = document.querySelector("#journalDate").value
    newEntryObject.conceptsCovered = document.querySelector("#conceptsCovered").value
    newEntryObject.textEntry = document.querySelector("#entry").value
    newEntryObject.link = document.querySelector("#helpfulLink").value
    newEntryObject.linkDescription = document.querySelector("#helpfulLinkTitle").value
    newEntryObject.mood = document.querySelector("#mood").value
    console.log(newEntryObject)

    return newEntryObject
}

export default makeNewEntryObject