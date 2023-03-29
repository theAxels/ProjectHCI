//Mondstadt
let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let card = document.querySelectorAll(".cards")
let pic = document.querySelectorAll(".pic")

function clearActive(item, item2){
    let i;
    for(i=0;i<item.length;i++){
        item[i].classList.remove("active")
    }

    for(i=0;i<item2.length;i++){
        item2[i].classList.remove("ON")
    }
}

card1.onclick = function(){
    clearActive(card, pic);

    card1.classList.add("active")
    document.getElementById("before").style.left = "-20%"
    document.getElementById("current").style.left = "0"
    pic[1].classList.add("ON")
    document.getElementById("after").style.left = "20%"
    document.getElementById("name").innerText = "JEAN"
    document.getElementById("desc").innerText = "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt. She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always."
}


card2.onclick = function(){
    clearActive(card, pic);

    card2.classList.add("active")
    document.getElementById("before").style.left = "20%"
    document.getElementById("current").style.left = "-20%"
    document.getElementById("after").style.left = "0"
    pic[2].classList.add("ON")
    document.getElementById("name").innerText = "MONA"
    document.getElementById("desc").innerText = "A mysterious young astrologer who proclaims herself to be 'Astrologist Mona Megistus,' and who possesses abilities to match the title. Erudite, but prideful. Though she is often strapped for cash and lives a life of thrift, she is resolved to never use astrology for profit... It is this very resolution that has caused her to constantly fret about money."
}

card3.onclick = function(){
    clearActive(card, pic);

    card3.classList.add("active")
    document.getElementById("before").style.left = "0"
    pic[0].classList.add("ON")
    document.getElementById("current").style.left = "20%"
    document.getElementById("after").style.left = "-20%"
    document.getElementById("name").innerText = "EULA"
    document.getElementById("desc").innerText = "A rebellious descendant of the old aristocracy who is always out on the battlefield.As one born into the old aristocracy, carrying the bloodline of sinners, Eula has needed a unique approach to the world to navigate the towering walls of prejudice peacefully. Of course, this did not prevent her from severing ties with her clan. As the outstanding Spindrift Knight, she hunts down Mondstadt's enemies in the wild to exact her unique 'vengeance.'"
}

//Liyue
let card21 = document.getElementById("card21")
let card22 = document.getElementById("card22")
let card23 = document.getElementById("card23")
let cards2 = document.querySelectorAll(".cards2")
let pic1 = document.querySelectorAll(".pic1")

card21.onclick = function(){
    clearActive(cards2, pic1);

    card21.classList.add("active")
    document.getElementById("before2").style.left = "-20%"
    document.getElementById("current2").style.left = "0"
    pic1[1].classList.add("ON")
    document.getElementById("after2").style.left = "20%"
    document.getElementById("name2").innerText = "HUTAO"
    document.getElementById("desc2").innerText = "Hu Tao is the 77th Director of the Wangsheng Funeral Parlor, a person vital to managing Liyue's funerary affairs. She does her utmost to flawlessly carry out a person's last rites and preserve the world's balance of yin and yang."
}


card22.onclick = function(){
    clearActive(cards2, pic1);

    card22.classList.add("active")
    document.getElementById("before2").style.left = "20%"
    document.getElementById("current2").style.left = "-20%"
    document.getElementById("after2").style.left = "0"
    pic1[2].classList.add("ON")
    document.getElementById("name2").innerText = "KEQING"
    document.getElementById("desc2").innerText = "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue ⁠— but in truth, gods admire skeptics such as her quite a lot. She firmly believes that humanity's future should be determined by humans themselves, and that they can even do better than the archons and adepti have done for them. In order to prove this, she works harder than anyone else."
}

card23.onclick = function(){
    clearActive(cards2, pic1);

    card23.classList.add("active")
    document.getElementById("before2").style.left = "0"
    pic1[0].classList.add("ON")
    document.getElementById("current2").style.left = "20%"
    document.getElementById("after2").style.left = "-20%"
    document.getElementById("name2").innerText = "BEIDOU"
    document.getElementById("desc2").innerText = "Captain of the Crux, with quite the reputation in Liyue.There are those who say she can split mountains and part the sea. Others say she draws lightning through her sword. Some say that even the mightiest of sea beasts are no match for her. For those not from Liyue, it may sound like a hearty joke, but those that have sailed with her will say— 'No matter what sea beasts there may be, Beidou will be sure to split them all in two.'"
}

//Inazuma
let card31 = document.getElementById("card31")
let card32 = document.getElementById("card32")
let card33 = document.getElementById("card33")
let cards3 = document.querySelectorAll(".cards3")
let pic2 = document.querySelectorAll(".pic2")

card31.onclick = function(){
    clearActive(cards3, pic2);

    card31.classList.add("active")
    document.getElementById("before3").style.left = "-20%"
    document.getElementById("current3").style.left = "0"
    pic2[1].classList.add("ON")
    document.getElementById("after3").style.left = "20%"
    document.getElementById("name3").innerText = "KAMISATO AYAKA"
    document.getElementById("desc3").innerText = "Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Dignified and elegant, wise and determined. Sincere and pleasant to others. Universally loved by the Inazuma people, she has earned the title of Shirasagi Himegimi."
}


card32.onclick = function(){
    clearActive(cards3, pic2);

    card32.classList.add("active")
    document.getElementById("before3").style.left = "20%"
    document.getElementById("current3").style.left = "-20%"
    document.getElementById("after3").style.left = "0"
    pic2[2].classList.add("ON")
    document.getElementById("name3").innerText = "RAIDEN SHOGUN"
    document.getElementById("desc3").innerText = "The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate. With the might of lightning at her disposal, she commits herself to the solitary pursuit of eternity."
}

card33.onclick = function(){
    clearActive(cards3, pic2);

    card33.classList.add("active")
    document.getElementById("before3").style.left = "0"
    pic2[0].classList.add("ON")
    document.getElementById("current3").style.left = "20%"
    document.getElementById("after3").style.left = "-20%"
    
    document.getElementById("name3").innerText = "YOIMIYA"
    document.getElementById("desc3").innerText = "A talented pyrotechnician. The current owner of Naganohara Fireworks known as the 'Queen of the Summer Festival.' A girl filled with fiery passion. The uncompromising childish innocence and the obsession with craftsmanship intertwine in her to create a spectacular blaze."
}

//Sumeru
let card41 = document.getElementById("card41")
let card42 = document.getElementById("card42")
let card43 = document.getElementById("card43")
let cards4 = document.querySelectorAll(".cards4")
let pic3 = document.querySelectorAll(".pic3")

card41.onclick = function(){
    clearActive(cards4, pic3);

    card41.classList.add("active")
    document.getElementById("before4").style.left = "-20%"
    document.getElementById("current4").style.left = "0"
    pic3[1].classList.add("ON")
    document.getElementById("after4").style.left = "20%"
    document.getElementById("name4").innerText = "CANDACE"
    document.getElementById("desc4").innerText = "The guardian of Aaru Village who is gentle and benevolent. She will not allow anyone to harm Aaru Village under her watch."
}


card42.onclick = function(){
    clearActive(cards4, pic3);

    card42.classList.add("active")
    document.getElementById("before4").style.left = "20%"
    document.getElementById("current4").style.left = "-20%"
    document.getElementById("after4").style.left = "0"
    pic3[2].classList.add("ON")
    document.getElementById("name4").innerText = "NAHIDA"
    document.getElementById("desc4").innerText = "Lesser Lord Kusanali dwells deep in the Sanctuary of Surasthana, and has never really been in the limelight, nor has she even been mentioned much. Her burden is heavy, but though she may experience loneliness, and though darkness is all she sees before her, she will not stop moving forward."
}

card43.onclick = function(){
    clearActive(cards4, pic3);

    card43.classList.add("active")
    document.getElementById("before4").style.left = "0"
    pic3[0].classList.add("ON")
    document.getElementById("current4").style.left = "20%"
    document.getElementById("after4").style.left = "-20%"
    document.getElementById("name4").innerText = "DEHYA"
    document.getElementById("desc4").innerText = "A member of'The Eremites' a loosely-organized mercenary organization. She is brave, powerful, and enjoys an excellent reputation among mercenaries."
}

//Slider

var slideIndex = 0;
var slides = document.getElementsByClassName("region")

let mapLine = document.querySelectorAll(".mapLine")

showSlides(slideIndex);

function currentSlides(n){
    let i;
    for(i = 0; i < mapLine.length; i++){
        mapLine[i].style.display = "none";
        mapLine[i].querySelector("#line").style.display = "none"
        mapLine[i].querySelector("#list").classList.remove("active")
    }
    showSlides(slideIndex = n-1);
}

function showMapLine(n){
    mapLine[n].style.display = "flex";
    mapLine[n].querySelector("#line").style.display = "flex"
    mapLine[n].querySelector("#list").classList.add("active")
}

function showSlides(n){
    var i;
    let y = window.scrollY;
    let b = Math.round(y/document.documentElement.clientHeight);
    // console.log(n)
    // console.log(b)

    for(i = 0; i < slides.length;i++){
        slides[i].style.display = "none";
    }

    showMapLine(n);

    if(b > 0){
        mapLine[n].style.display = "none";
        mapLine[n].querySelector("#line").style.display = "none"
        mapLine[n].querySelector("#list").classList.remove("active")
    }else{
        showMapLine(n);
    }
    
    slides[slideIndex].style.display = "flex";
}

window.addEventListener("scroll", ()=>{
    showSlides(slideIndex)
})
