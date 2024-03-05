const varu_div = document.querySelector(".varor");


function addToKundvagn(bild, namn, pris)
{ 
    let prod={
        varu_bild: bild,
        varu_namn: namn,
        varu_pris: pris
    }
    let json = window.localStorage.getItem("Lista");
    let array = JSON.parse(json);
    if(!array){
        array=[];
    }
    array.push(prod);
    json = JSON.stringify(array);
    window.localStorage.setItem("Lista",json);
}



function ladda_kundvagn()
{
    console.log("ladda kundvagn");
    let json_array = window.localStorage.getItem("Lista");
    let array = JSON.parse(json_array);
    if(!array){
        return;
    }
    varu_div.innerHTML="";
    for(let i = 0; i<array.length; i++) {
        //Skapa div för varan 
        let diven = document.createElement("div");
        // början skapa varubild
        let img = document.createElement("img");
        img.setAttribute("src", array[i].varu_bild) ;
        img.classList.add("vara");
        diven.appendChild(img);
        // sluta skapa varubild 
        // början skapa varunamn
        let h2 = document.createElement("h2");
        h2.textContent = array[i].varu_namn;
        h2.classList.add("produkt");
        diven.appendChild(h2);
        // slut varu-namn
        // början skapa pris
        let p = document.createElement("p");
        p.textContent = array[i].varu_pris;
        h2.classList.add("pris");
        diven.appendChild(p);
        // slut pris
        varu_div.appendChild(diven);
    }
}

function RemoveFromCart(){
    localStorage.removeItem('Lista');
}