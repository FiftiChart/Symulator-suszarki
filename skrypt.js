let add_pos = document.getElementById('add_pos');
let del_pos = document.getElementById('del_pos');
let go_on = document.getElementById('go_on');
let main = document.getElementById('main');
let tab = document.getElementById('tab');
var poz = 0;
let pozycja = '';

tab.innerHTML += `<tr>
<td>${poz+1}</td><td><select class="odz">
    <option value="Majtki">Majtki</option>
    <option value="Skarpetki">Skarpetki</option>
    <option value="Koszulka">Koszlka</option>
    <option value="Spodnie">Spodnie</option>
</select></td><td><input type="number" class="ilosc" value="1" max="8" min="0" required></td></tr>`;

add_pos.addEventListener("click", event =>{
    event.preventDefault()
    if(poz == -1){
        poz+=1
    }
    if(poz == 3){
        poz+=1
        tab.innerHTML += `<tr><td style=" color: red;" colspan="3">Chyba wszytkie opcje zostały wykorzystane. Nie sądzisz?</td></tr>`
    }if(poz > 3){

    }else{
        poz+=1
    tab.innerHTML += `<tr>
    <td>${poz+1}</td><td><select class="odz">
        <option value="Majtki">Majtki</option>
        <option value="Skarpetki">Skarpetki</option>
        <option value="Koszulka">Koszlka</option>
        <option value="Spodnie">Spodnie</option>
    </select></td><td><input type="number" class="ilosc" value="1" max="8" min="0" required></td></tr>`
    }
})

del_pos.addEventListener("click", event =>{
    event.preventDefault()
    if(confirm("Czy na pewno chcesz wyjąć ostatnią pozycję?") == true){
    if(poz+1 == 1){
        poz-=1
    }
    if(poz+1 == 0){
        alert(`Została ci tylko jedna pozycja!!!\n(Nie możesz jej usunąć)`)
    }
    else{
        tab.deleteRow(poz+1);
        poz-=1
    }
    }
})

function otwarcie(){
    let otworzSuszarke = document.getElementById("otworzSuszarke")
    otworzSuszarke.addEventListener("click", event =>{
        event.preventDefault();
        main.innerHTML = "Dziekuje i pozdrawiam";

    })
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    const Interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent ="Czas suszenia: "+ minutes + ":" + seconds;

        if (--timer < 0) {
            display.innerHTML = "";
            main.innerHTML += `Suszenie Skończone<br/>
            <button id="otworzSuszarke">Otworz suszarke</button>
            `
            clearInterval(Interval);
            otwarcie();
            
        }
    }, 1000);
}

go_on.addEventListener("click", event=>{
    event.preventDefault();
    let suma = 0;
    let cloth = document.getElementsByClassName('odz')
    let ilosc = document.getElementsByClassName('ilosc')
    let out_tab2 = ''
    console.log(parseInt(ilosc[0].value));
    for(let i=0; i<ilosc.length; i++){
        let war = parseInt(ilosc[i].value)
        if(war<0){
            alert("Ilość nie może być ujemna!!!")
            suma = 0
            break
        }
        else{
            suma+=war;
        }
    }
    console.log(suma)
    if(suma == 0){
        tab.innerHTML += `<tr><td style=" color: red;" colspan="3">Nie ma sensu uruchamiać suszarkę bez ubrań. Nie sądzisz?</td></tr>`
        poz+=1
    }
    else if(suma > 24){
        tab.innerHTML += `<tr><td style=" color: red;" colspan="3">ZA DUŻO UBRAŃ!!!</td></tr>`
        poz+=1
    }
    else if(suma < 0){

    }
    else{
        out_tab2 += `
        <table id="tab2">
            <tr>
                <th>
                    Poz.
                </th>
                <th>
                    Odzierz
                </th>
                <th>
                    Ilość
                </th>
            </tr>
        `
        for (let i=0; i<cloth.length; i++){
            console.log(cloth[i])
            out_tab2 += `<tr>
            <td>${i+1}</td><td>${cloth[i].value}</td><td>${ilosc[i].value}</td></tr>`
        }
        out_tab2 += `</table>`
        main.innerHTML = out_tab2

        main.innerHTML += `
        <button id="turbo">Turbo</button>
        <button id="medium">Medium</button>
        <button id="low">Slow</button>
        `
        let buttonTurbo = document.getElementById('turbo');
        let buttonMedium = document.getElementById('medium');
        let buttonLow = document.getElementById('low');
        let timeElement = document.getElementById("time");
        buttonTurbo.addEventListener("click", event =>{
            event.preventDefault();
            buttonTurbo.parentNode.removeChild(buttonTurbo);    
            buttonMedium.parentNode.removeChild(buttonMedium);   
            buttonLow.parentNode.removeChild(buttonLow);   
            startTimer(0.01*60, timeElement)
        })
        buttonMedium.addEventListener("click", event =>{
            event.preventDefault();
            buttonTurbo.parentNode.removeChild(buttonTurbo);    
            buttonMedium.parentNode.removeChild(buttonMedium);   
            buttonLow.parentNode.removeChild(buttonLow);   
            startTimer(10*60, timeElement)

        })
        buttonLow.addEventListener("click", event =>{
            event.preventDefault();
            buttonTurbo.parentNode.removeChild(buttonTurbo);    
            buttonMedium.parentNode.removeChild(buttonMedium);   
            buttonLow.parentNode.removeChild(buttonLow);   
            startTimer(15*60, timeElement)

        })


    }
    
})
