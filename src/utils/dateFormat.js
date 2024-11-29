export default function formatDate(str) {
    let date = str.split(" ")[0].split("-")
    let time = str.split(" ")[1]
    let year = date[0][2] + date[0][3]
    let month = date[1]
    let day = date[2]
    return `${day}/${month}/${year} at ${time}`
}