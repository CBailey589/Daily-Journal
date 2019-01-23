API.getJournalEntries().then(parsedEntries => {
    parsedEntries.forEach(entry => {
        const html = pastEntriesToHTML(entry)
        pastEntriesToDOM(html)
    });
})

