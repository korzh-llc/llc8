let albums = document.querySelector('.albums')

let albArr = []

class Album{
    constructor(cover , title){
        this.cover = cover
        this.title = title
    }
    tohtml(){
        return `<div class="album">
            <img src="${this.cover}" class="cover">
            <h2 class="title">${this.title}</h2>`
    }
}

albArr.push(new Album("/images/EIKAL.png" , "EVERYTHING I KNOW ABOUT LOVE"))
albArr.push(new Album("/images/bewitched.png" , "BEWITCHED"))
albArr.push(new Album("/images/AMOF.png" , "A METTER OF TIME"))

for( i = 0 ; i < albArr.length ; i++){
    albums.innerHTML += albArr[i].tohtml()
}