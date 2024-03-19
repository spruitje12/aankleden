const rokje = document.querySelector("#rok")
const tweeRok = document.querySelector(".tweerok")
const spijkerbroek = document.querySelector("#kortebroek")
const spijkerTwee = document.querySelector(".spijkertwee")
const rokjeblauw = document.querySelector("#blauwrok")
const blauwrokjeTwee = document.querySelector(".rokjesblauw")
const kleurgympen = document.querySelector("#gympen")
const kleurschoen = document.querySelector(".kleurschoen")
const witteschoen = document.querySelector("#gymwit")
const wittegympen = document.querySelector(".wittegympen")
const croptop = document.querySelector("#shirt")
const shirtTwee = document.querySelector(".shirttwee")
const paarsetop = document.querySelector("#top")
const truitjetwee = document.querySelector(".truitjetwee")
const wittopje = document.querySelector("#topwit")
const topTwee = document.querySelector(".toptwee")
const bruinhaar = document.querySelector("#haarbruin")
const bruinhaarTwee = document.querySelector(".bruinhaartwee")
const haarroze = document.querySelector("#haarroze")
const rozehaarTwee = document.querySelector(".rozehaartwee")


function toonrok(){
    tweeRok.classList.toggle('hidden')
}

function toonbroek(){
    spijkerTwee.classList.toggle('hidden')
}
function toonblauw(){
    blauwrokjeTwee.classList.toggle('hidden')
}

function toonschoen(){
    kleurschoen.classList.toggle('hidden')
}

function toongympen(){
    wittegympen.classList.toggle('hidden')
}

function toonshirt(){
    shirtTwee.classList.toggle('hidden')
}

function toontop(){
    truitjetwee.classList.toggle('hidden')
}

function toonwit(){
    topTwee.classList.toggle('hidden')
}

function toonbruinhaar(){
    bruinhaarTwee.classList.toggle('hidden')
}

function toonrozehaar(){
    rozehaarTwee.classList.toggle('hidden')
}

spijkerbroek.addEventListener('click', toonbroek)
rokje.addEventListener('click', toonrok)
rokjeblauw.addEventListener('click', toonblauw)
kleurgympen.addEventListener('click', toonschoen)
witteschoen.addEventListener('click', toongympen)
croptop.addEventListener('click', toonshirt)
paarsetop.addEventListener('click', toontop)
wittopje.addEventListener('click', toonwit)
bruinhaar.addEventListener('click', toonbruinhaar)
haarroze.addEventListener('click', toonrozehaar)










// let poppetje = document.querySelector("#poppetje")

// function rokjeaan(){
//     poppetje.src = "img/poprok.png"
//     if(rokStatus == true){
//         poppetje.src = "img/poplicht.png"
//     } else{
//         rokje.src = "img/spijkrrok.png"
//     }
// }
// rokje.addEventListener('click', rokjeaan)

// let rokStatus = false

// const tshirt = document.querySelector("#shirt")
// tshirt.src = "img/shirthart.png"










// let shirt = document.querySelector("#shirt")
// let topje = document.querySelector("#top")
// let hemdje = document.querySelector("#topwit")
// let krullen = document.querySelector("#haarbruin")
// let stijl = document.querySelector("#haarroze")
// let rokspijker = document.querySelector("#rok")
// let broekje = document.querySelector("#kortebroek")
// let blauwrok = document.querySelector("#blauwrok")
// let gympenkleur = document.querySelector("#gympen")
// let schoenwit = document.querySelector("#gymwit")

// let shirtStatus = document.querySelector("#shirtAan")
// let paarsStatus = document.querySelector("#paarsAan")
// let hemdStatus = document.querySelector("#witTop")
// let krulStatus = document.querySelector("#haarbruinAan")
// let rozeStatus = document.querySelector("#haarrozeAan")
// let rokStatus = document.querySelector("#rokAan")
// let broekStatus = document.querySelector("#kortebroekAan")
// let blauwStatus = document.querySelector("#blauwrokAan")
// let gympenStatus = document.querySelector("#gympenAan")
// let schoenStatus = document.querySelector("#gymwitAan")

// function tshirt(){
//     if(shirtStatus == false){
//         shirtStatus = false
//         document.querySelector("#shirtAan").style.display = "none";
//     } else{
//         shirtStatus = true
//         document.querySelector("#shirtAan").style.display = "block";
//     }
// }
// shirt.addEventListener("click", tshirt)

// function paarstop(){
//     if(paarsStatus == false){
//         paarsStatus = false
//         document.querySelector("#topAan").style.display = "none";
//     } else{
//         paarsStatus = true
//         document.querySelector("#topAan").style.display = "block";
//     }
// }
// topje.addEventListener("click", paarstop)

// function withemd(){
//     if(hemdStatus == false){
//         hemdStatus = false
//         document.querySelector("#witTop").style.display = "none";
//     } else{
//         hemdStatus = true
//         document.querySelector("#witTop").style.display = "block";
//     }
// }
// hemdje.addEventListener("click", withemd)

// function krullenbruin(){
// if(krulStatus == false){
//     krulStatus = false
//     document.querySelector("#haarbruinAan").style.display = "none";
// } else{
//     krulStatus = true
//     document.querySelector("#haarbruinAan").style.display = "block";
// }
// }
// krullen.addEventListener("click", krullenbruin)

// function rozehaar(){
//     if(rozeStatus == false){
//         rozeStatus = false
//         document.querySelector("#haarrozeAan").style.display = "none";
//     } else{
//         rozeStatus = true
//         document.querySelector("#haarrozeAan").style.display = "block";
//     }
// }
// stijl.addEventListener("click", rozehaar)

// function rokken(){
//     if(rokStatus == false){
//         rokStatus = false
//         document.querySelector("#rokAan").style.display = "none";
//     } else{
//         rokStatus = true
//         document.querySelector("#rokAan").style.display = "block";
//     }
// }
// rokspijker.addEventListener("click", rokken)

// function spijkerbroekje(){
//     if(broekStatus == false){
//         broekStatus = false
//         document.querySelector("#kortebroekAan").style.display = "none";
//     } else{
//         broekStatus = true
//         document.querySelector("#kortebroekAan").style.display = "block";
//     }
// }
// broekje.addEventListener("click", spijkerbroekje)

// function rokjeblauw(){
//     if(blauwStatus == false){
//         blauwStatus = false
//         document.querySelector("#blauwrokAan").style.display = "none";
//     } else{
//         blauwStatus = true
//         document.querySelector("#blauwrokAan").style.display = "block";
//     }
// }
// blauwrok.addEventListener("click", rokjeblauw)

// function gympjes(){
//     if(gympenStatus == false){
//         gympenStatus = false
//         document.querySelector("#gympenAan").style.display = "none";
//     } else{
//         gympenStatus = true
//         document.querySelector("#gympenAan").style.display = "block";
//     }
// }
// gympenkleur.addEventListener("click", gympjes)

// function schoenen(){
//     if(schoenStatus == false){
//         schoenStatus = false
//         document.querySelector("#gymwitAan").style.display = 'none';
//     } else{
//         schoenStatus = true
//         document.querySelector("#gymwitAan").style.display = 'block';
//     }
// }
// schoenwit.addEventListener("click", schoenen)
// let willekeurigNummer = Math.random() *10
// console.log(willekeurigNummer)

// let afronden = Math.ceil(willekeurigNummer)
