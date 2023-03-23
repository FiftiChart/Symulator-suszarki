let add_pos = document.getElementById('add_pos');
let del_pos = document.getElementById('del_pos');
let go_on = document.getElementById('go_on');
let mai = document.getElementById('main');
let tab = document.getElementById('tab');
var poz = 0;
let pozycja = '';

tab.innerHTML += `<tr>
<td>${poz+1}</td><td><select class="odz">
    <option value="1">Majtki</option>
    <option value="2">Skarpetki</option>
    <option value="3">Koszlka</option>
    <option value="4">Spodnie</option>
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
        <option value="1">Majtki</option>
        <option value="2">Skarpetki</option>
        <option value="3">Koszlka</option>
        <option value="4">Spodnie</option>
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

go_on.addEventListener("click", event=>{
    event.preventDefault();
    let ilosc = document.getElementsByClassName('ilosc');
    let suma = 0;
    console.log(parseInt(ilosc[1].value));
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
    if(suma == 0){
        tab.innerHTML += `<tr><td style=" color: red;" colspan="3">Nie ma sensu uruchamiać suszarkę bez ubrań. Nie sądzisz?</td></tr>`
        poz+=1
    }
    
})
