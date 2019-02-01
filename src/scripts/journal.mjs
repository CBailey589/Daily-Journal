import API from './APIFunctions.mjs'

API.GET()

document.querySelector("#recordButton").addEventListener("click", () => {
    API.POST()
})
