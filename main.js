const content = document.getElementsByClassName('content');
const cell = document.getElementsByClassName('cell');
const button = document.querySelector('#btn').onclick = function () {
    for (let i = 0; i <= cell.length; i++) {
        cell[i].innerHTML = '';
    }
}

let player = 'x';
debugger;
for (let i = 0; i <= cell.length; i++) {

    cell[i].addEventListener('click', cellClick, false);

}



function cellClick() {

    if (!this.innerHTML) { // проверяем не находится ли в ячейке игрок

        this.innerHTML = player; // записываем игрока в ячейку
        player = player == 'x' ? 'o' : 'x'; // меняем игрока

    } else {

        alert('Ячейка занята')

    }


}
