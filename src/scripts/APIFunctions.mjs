import putPastEntryHTMLOnDOM from "./putPastEntryHTMLOnDOM.mjs"
import postNewEntryToDatabase from "./postNewEntryToDatabase.mjs"
import deleteEntryFromDatabase from "./deleteEntryFromDatabase.mjs"

const API = {
    GET: putPastEntryHTMLOnDOM,
    POST: postNewEntryToDatabase,
    DELETE: deleteEntryFromDatabase,

}

export default API