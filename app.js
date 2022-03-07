
const screen = document.querySelector (".screen");

function capture(v){
    screen.value += v;
}

function clr(){
    screen.value = "";
}

function del(){
    let sv = screen.value;

    screen.value = sv.substr(0, sv.length - 1);
}

function eql(){
    let sv = screen.value;

    screen.value = eval(sv);

}

function pw2(){
    let sv = screen.value;

    screen.value = Math.pow(sv, 2);
}

function sqrt(){
    let sv = screen.value;

    screen.value = Math.sqrt(sv)
}