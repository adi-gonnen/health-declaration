'use strict'

function init() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    let yy =`${today.getFullYear()}`.slice(0,2);
    const fullDate = dd + '.' + mm + '.' + yy;
    const list = document.getElementsByClassName('date')
    list[0].innerHTML = fullDate;
    list[1].innerHTML = fullDate;
}

