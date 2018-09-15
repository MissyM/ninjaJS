var links = document.getElementsByTagName("a")
console.log(links)

for (i = 1; i <= links.length; i++) {
    console.log("Este link es el número" + i)
}

document.write("Todos los links han sido mostrados")