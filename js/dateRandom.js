
function updateButton() {
    alert(randomDate(new Date(2024, 4, 1), new Date()));
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
