async function getUsers() {
    const response = await fetch('https://images.dog.ceo/breeds/terrier-norwich/n02094258_50.jpg')
    const data = await response.json()

    const results = data.results

    createTableRow(results)
}
getUsers()

function createTableRow(results) {
    const tbody = document.getElementById('tabela')
    for(const item of results) {
        const imgUser = item.message}}
