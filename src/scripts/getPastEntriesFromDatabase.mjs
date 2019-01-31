function getPastEntriesFromDatabase() {
    let pastEntriesArray = [];
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedPastEntriesInDatabase => {
        parsedPastEntriesInDatabase.forEach(pastEntry => {
            pastEntriesArray.push(pastEntry)
        });
        return pastEntriesArray
    })
}

export default getPastEntriesFromDatabase