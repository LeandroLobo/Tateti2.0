  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/vsH/',
        url: 'vsH.html',
      },
      {
        path: '/vsIA/',
        url: 'vsIA.html',
      },
    ]
    // ... other parameters
  });
var mainView = app.views.create('.view-main');
var t=0, O=0, X=0, R='', q=0, e=0, player1='', player2='';
var f1=0,f2=0,f3=0,c1=0,c2=0,c3=0,d1=0,d2=0,w=0,mov=0,mano=1,partida=1,XX=0,OO=0,humano='';

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

$$(document).on('page:init', function (e) {
    console.log(e);
})

$$(document).on('page:init', '.page[data-name="vsH"]', function (e) {
    console.log(e);
    t=0; O=0; X=0; R=''; q=0; e=0; player1=''; player2='';
    var abrirPopupH=app.popup.open(".popup-vsH");
    $$('.initVsH').on('click',function(){
        player1=$$('.jug1').val();
        player2=$$('.jug2').val();
        if(player1==''){
            player1='Jugador1';
        }
        if(player2==''){
            player2='Jugador2';
        }
        turno();
        score();
    });        
    $$('.c1').on('click',function(){jugar(1)});
    $$('.c2').on('click',function(){jugar(2)});
    $$('.c3').on('click',function(){jugar(3)});
    $$('.c4').on('click',function(){jugar(4)});
    $$('.c5').on('click',function(){jugar(5)});
    $$('.c6').on('click',function(){jugar(6)});
    $$('.c7').on('click',function(){jugar(7)});
    $$('.c8').on('click',function(){jugar(8)});
    $$('.c9').on('click',function(){jugar(9)});
    $$('#resultadoH').on('click',reiniciarH);
})

function jugar(n){
    if(! $$('.c'+n).hasClass('O') && ! $$('.c'+n).hasClass('X')){
        t++; e++
        if(t%2==0){
            $$('.c'+n).attr('src','img/o.png').addClass('O')
        }else{
            $$('.c'+n).attr('src','img/x.png').addClass('X')
        }
    }
    console.log('Turno: '+t)
    check()
}

function check(){
    if($$('.c1').hasClass('O') && $$('.c2').hasClass('O') && $$('.c3').hasClass('O')){
        O++; R='O'; finPartida(1); return
    }
    if($$('.c4').hasClass('O') && $$('.c5').hasClass('O') && $$('.c6').hasClass('O')){
        O++; R='O'; finPartida(2); return
    }
    if($$('.c7').hasClass('O') && $$('.c8').hasClass('O') && $$('.c9').hasClass('O')){
        O++; R='O'; finPartida(3); return
    }
    if($$('.c1').hasClass('O') && $$('.c4').hasClass('O') && $$('.c7').hasClass('O')){
        O++; R='O'; finPartida(4); return
    }
    if($$('.c2').hasClass('O') && $$('.c5').hasClass('O') && $$('.c8').hasClass('O')){
        O++; R='O'; finPartida(5); return
    }
    if($$('.c3').hasClass('O') && $$('.c6').hasClass('O') && $$('.c9').hasClass('O')){
        O++; R='O'; finPartida(6); return
    }
    if($$('.c1').hasClass('O') && $$('.c5').hasClass('O') && $$('.c9').hasClass('O')){
        O++; R='O'; finPartida(7); return
    }
    if($$('.c7').hasClass('O') && $$('.c5').hasClass('O') && $$('.c3').hasClass('O')){
        O++; R='O'; finPartida(8); return
    }
    ///////////////////////////////////////////////////////////////////////////////
    if($$('.c1').hasClass('X') && $$('.c2').hasClass('X') && $$('.c3').hasClass('X')){
        X++; R='X'; finPartida(1); return
    }
    if($$('.c4').hasClass('X') && $$('.c5').hasClass('X') && $$('.c6').hasClass('X')){
        X++; R='X'; finPartida(2); return
    }
    if($$('.c7').hasClass('X') && $$('.c8').hasClass('X') && $$('.c9').hasClass('X')){
        X++; R='X'; finPartida(3); return
    }
    if($$('.c1').hasClass('X') && $$('.c4').hasClass('X') && $$('.c7').hasClass('X')){
        X++; R='X'; finPartida(4); return
    }
    if($$('.c2').hasClass('X') && $$('.c5').hasClass('X') && $$('.c8').hasClass('X')){
        X++; R='X'; finPartida(5); return
    }
    if($$('.c3').hasClass('X') && $$('.c6').hasClass('X') && $$('.c9').hasClass('X')){
        X++; R='X'; finPartida(6); return
    }
    if($$('.c1').hasClass('X') && $$('.c5').hasClass('X') && $$('.c9').hasClass('X')){
        X++; R='X'; finPartida(7); return
    }
    if($$('.c7').hasClass('X') && $$('.c5').hasClass('X') && $$('.c3').hasClass('X')){
        X++; R='X'; finPartida(8); return
    }
    if(e==9){
        finPartida(9)
    }
}

function finPartida(n){
    switch(n){
        case 1: $$('#resultadoH>img').attr('src',"img/j1.png").css('visibility','visible'); break
        case 2: $$('#resultadoH>img').attr('src',"img/j2.png").css('visibility','visible'); break
        case 3: $$('#resultadoH>img').attr('src',"img/j3.png").css('visibility','visible'); break
        case 4: $$('#resultadoH>img').attr('src',"img/j4.png").css('visibility','visible'); break
        case 5: $$('#resultadoH>img').attr('src',"img/j5.png").css('visibility','visible'); break
        case 6: $$('#resultadoH>img').attr('src',"img/j6.png").css('visibility','visible'); break
        case 7: $$('#resultadoH>img').attr('src',"img/j7.png").css('visibility','visible'); break
        case 8: $$('#resultadoH>img').attr('src',"img/j8.png").css('visibility','visible'); break
        case 9: $$('#resultadoH>img').attr('src',"img/empate.png").css('visibility','visible'); break
        default: break
    }
    q++; t=q; e=0
    score()
}

function reiniciarH(){
    $$('#resultadoH>img').attr('src',"img/nada.png").css('visibility','hidden')
    $$('.c1,.c2,.c3,.c4,.c5,.c6,.c7,.c8,.c9').attr('src','img/nada.png').removeClass('O').removeClass('X')
    turno()
}

function score(){
    $$('#scoreH').text('|SCORE| '+player1+': '+X+' | '+player2+': '+O)
}

function turno(){
    if(q){
        anuncioGanador()
    }
    if(e==0){
        if(q%2==0){
            alert('Partida n°'+(q+1)+'\nComienza '+player1)
        }else{
            alert('Partida n°'+(q+1)+'\nComienza '+player2)
        }
    }
}

function anuncioGanador(){
    if(R=='X'){
        alert(player1+' ganó esta partida')
    }else if(R=='O'){
        alert(player2+' ganó esta partida')
    }else{
        alert('Empate')
    }
    R=''
}

$$(document).on('page:init', '.page[data-name="vsIA"]', function (e) {
    console.log(e);
    f1=0;f2=0;f3=0;c1=0;c2=0;c3=0;d1=0;d2=0;w=0;mov=0;mano=1;partida=1;XX=0;OO=0;humano='';
    var abrirPopupIA=app.popup.open(".popup-vsIA");
    $$('.initVsIA').on('click',function(){
        humano=$$('.humano').val();
        if(humano==''){
            humano='Humano';
        }
        scoreIA();
        turnoIA();
    });
    $$('.i1').on('click',function(){juegaPlayer(1)});
    $$('.i2').on('click',function(){juegaPlayer(2)});
    $$('.i3').on('click',function(){juegaPlayer(3)});
    $$('.i4').on('click',function(){juegaPlayer(4)});
    $$('.i5').on('click',function(){juegaPlayer(5)});
    $$('.i6').on('click',function(){juegaPlayer(6)});
    $$('.i7').on('click',function(){juegaPlayer(7)});
    $$('.i8').on('click',function(){juegaPlayer(8)});
    $$('.i9').on('click',function(){juegaPlayer(9)});
    $$('#resultadoIA').on('click',reiniciarIA);
})

// Player1 suma de a 5 y la IA suma de a 1, para diferenciar quien puso las fichas, y determinar las jugadas de la IA
function juegaPlayer(n){
    if(! $$('.i'+n).hasClass('O') && ! $$('.i'+n).hasClass('X') && (mano%2)==1){
        $$('.i'+n).attr('src','img/x.png').addClass('X')
        mov++;mano++
        switch(n){
        case 1: f1+=5;c1+=5;d1+=5; break
        case 2: f1+=5;c2+=5; break
        case 3: f1+=5;c3+=5;d2+=5; break
        case 4: f2+=5;c1+=5; break
        case 5: f2+=5;c2+=5;d1+=5;d2+=5; break
        case 6: f2+=5;c3+=5; break
        case 7: f3+=5;c1+=5;d2+=5; break
        case 8: f3+=5;c2+=5; break
        case 9: f3+=5;c3+=5;d1+=5; break
        default: break
        }
    }
    checkIA()
    if(w==0 && (mano%2)==0){juegaIA(IA())}else{w=0}//condicion para que no se ejecute cuando player1 ya ganó
}


// Reglas de la IA

// Modo defensa
// Primero que nada no perder, chequeando que no haya 2 X en la misma fila, columna o diagonal
// Si es el caso, completar la fila con una O
// Si el centro está libre, n=5; si no, alguna esquina
// Si tengo dos O, completar con la tercera
// Hay 4(*4 por la simetría) casos especiales que son para evitar que player1 tenga la posibilidad de formar la doble chance
// Esos casos se dan siempre en el movimiento 4

// Modo ataque
// primera jugada al centro, segunda en la esquina de una diagonal que no sea opuesta a una X(si player1 puso una esquina)
// Intentar completar, si hay bloqueo, poner otra esquina
// La regla de chequear que no me ganen sigue siendo primordial
function IA(){
    mov++;mano++
    //////////// Liquidar /////////////
    if(f1==2){
        if(! $$('.i1').hasClass('O')){return 1}
        if(! $$('.i2').hasClass('O')){return 2}
        if(! $$('.i3').hasClass('O')){return 3}
    }
    if(f2==2){
        if(! $$('.i4').hasClass('O')){return 4}
        if(! $$('.i5').hasClass('O')){return 5}
        if(! $$('.i6').hasClass('O')){return 6}
    }
    if(f3==2){
        if(! $$('.i7').hasClass('O')){return 7}
        if(! $$('.i8').hasClass('O')){return 8}
        if(! $$('.i9').hasClass('O')){return 9}
    }
    if(c1==2){
        if(! $$('.i1').hasClass('O')){return 1}
        if(! $$('.i4').hasClass('O')){return 4}
        if(! $$('.i7').hasClass('O')){return 7}
    }
    if(c2==2){
        if(! $$('.i2').hasClass('O')){return 2}
        if(! $$('.i5').hasClass('O')){return 5}
        if(! $$('.i8').hasClass('O')){return 8}
    }
    if(c3==2){
        if(! $$('.i3').hasClass('O')){return 3}
        if(! $$('.i6').hasClass('O')){return 6}
        if(! $$('.i9').hasClass('O')){return 9}
    }
    if(d1==2){
        if(! $$('.i1').hasClass('O')){return 1}
        if(! $$('.i5').hasClass('O')){return 5}
        if(! $$('.i9').hasClass('O')){return 9}
    }
    if(d2==2){
        if(! $$('.i3').hasClass('O')){return 3}
        if(! $$('.i5').hasClass('O')){return 5}
        if(! $$('.i7').hasClass('O')){return 7}
    }
    //////////// Bloquear ////////////
    if(f1==10){
        if(! $$('.i1').hasClass('X')){return 1}
        if(! $$('.i2').hasClass('X')){return 2}
        if(! $$('.i3').hasClass('X')){return 3}
    }
    if(f2==10){
        if(! $$('.i4').hasClass('X')){return 4}
        if(! $$('.i5').hasClass('X')){return 5}
        if(! $$('.i6').hasClass('X')){return 6}
    }
    if(f3==10){
        if(! $$('.i7').hasClass('X')){return 7}
        if(! $$('.i8').hasClass('X')){return 8}
        if(! $$('.i9').hasClass('X')){return 9}
    }
    if(c1==10){
        if(! $$('.i1').hasClass('X')){return 1}
        if(! $$('.i4').hasClass('X')){return 4}
        if(! $$('.i7').hasClass('X')){return 7}
    }
    if(c2==10){
        if(! $$('.i2').hasClass('X')){return 2}
        if(! $$('.i5').hasClass('X')){return 5}
        if(! $$('.i8').hasClass('X')){return 8}
    }
    if(c3==10){
        if(! $$('.i3').hasClass('X')){return 3}
        if(! $$('.i6').hasClass('X')){return 6}
        if(! $$('.i9').hasClass('X')){return 9}
    }
    if(d1==10){
        if(! $$('.i1').hasClass('X')){return 1}
        if(! $$('.i5').hasClass('X')){return 5}
        if(! $$('.i9').hasClass('X')){return 9}
    }
    if(d2==10){
        if(! $$('.i3').hasClass('X')){return 3}
        if(! $$('.i5').hasClass('X')){return 5}
        if(! $$('.i7').hasClass('X')){return 7}
    }
    //////////// Casos especiales /////////////
    if(mov==4){
        if($$('.i2').hasClass('X') && $$('.i4').hasClass('X')){return 1}
        if(d1==11 && f2==1){return 4}
        if(d2==11 && f2==1){return 2}
        if(d1==6 && c2==6){return 7}
        if(d2==6 && c2==6){return 9}
        if(d2==6 && f2==6){return 9}
        if(f2==6 && c2==6){return 9}
    }
    /////////// Asegurando la partida; 5 prioridad, luego esquinas luego laterales /////////////
    if(! $$('.i5').hasClass('X') && ! $$('.i5').hasClass('O')){return 5}
    else if(! $$('.i1').hasClass('X') && ! $$('.i1').hasClass('O')){return 1}
    else if(! $$('.i3').hasClass('X') && ! $$('.i3').hasClass('O')){return 3}
    else if(! $$('.i7').hasClass('X') && ! $$('.i7').hasClass('O')){return 7}
    else if(! $$('.i9').hasClass('X') && ! $$('.i9').hasClass('O')){return 9}
    else if(! $$('.i2').hasClass('X') && ! $$('.i2').hasClass('O')){return 2}
    else if(! $$('.i4').hasClass('X') && ! $$('.i4').hasClass('O')){return 4}
    else if(! $$('.i6').hasClass('X') && ! $$('.i6').hasClass('O')){return 6}
    else if(! $$('.i8').hasClass('X') && ! $$('.i8').hasClass('O')){return 8}
}

function juegaIA(n){
    $$('.i'+n).attr('src','img/o.png').addClass('O')
    switch(n){
        case 1: f1+=1;c1+=1;d1+=1; break
        case 2: f1+=1;c2+=1; break
        case 3: f1+=1;c3+=1;d2+=1; break
        case 4: f2+=1;c1+=1; break
        case 5: f2+=1;c2+=1;d1+=1;d2+=1; break
        case 6: f2+=1;c3+=1; break
        case 7: f3+=1;c1+=1;d2+=1; break
        case 8: f3+=1;c2+=1; break
        case 9: f3+=1;c3+=1;d1+=1; break
        default: break
    }
    checkIA()
}

function checkIA(){
    if(f1==3||f1==15){
        w=1; finPartidaIA(1); return
    }
    if(f2==3||f2==15){
        w=1; finPartidaIA(2); return
    }
    if(f3==3||f3==15){
        w=1; finPartidaIA(3); return
    }
    if(c1==3||c1==15){
        w=1; finPartidaIA(4); return
    }
    if(c2==3||c2==15){
        w=1; finPartidaIA(5); return
    }
    if(c3==3||c3==15){
        w=1; finPartidaIA(6); return
    }
    if(d1==3||d1==15){
        w=1; finPartidaIA(7); return
    }
    if(d2==3||d2==15){
        w=1; finPartidaIA(8); return
    }
    if(mov==9){
        finPartidaIA(9)
    }
}

function finPartidaIA(n){
    switch(n){
        case 1: $$('#resultadoIA>img').attr('src',"img/j1.png").css('visibility','visible'); break
        case 2: $$('#resultadoIA>img').attr('src',"img/j2.png").css('visibility','visible'); break
        case 3: $$('#resultadoIA>img').attr('src',"img/j3.png").css('visibility','visible'); break
        case 4: $$('#resultadoIA>img').attr('src',"img/j4.png").css('visibility','visible'); break
        case 5: $$('#resultadoIA>img').attr('src',"img/j5.png").css('visibility','visible'); break
        case 6: $$('#resultadoIA>img').attr('src',"img/j6.png").css('visibility','visible'); break
        case 7: $$('#resultadoIA>img').attr('src',"img/j7.png").css('visibility','visible'); break
        case 8: $$('#resultadoIA>img').attr('src',"img/j8.png").css('visibility','visible'); break
        case 9: $$('#resultadoIA>img').attr('src',"img/empate.png").css('visibility','visible'); break
        default: break
    }
    scoreIA()
}

function reiniciarIA(){
    $$('#resultadoIA>img').attr('src',"img/nada.png").css('visibility','hidden')
    $$('.i1,.i2,.i3,.i4,.i5,.i6,.i7,.i8,.i9').attr('src','img/nada.png').removeClass('O').removeClass('X')
    partida++
    turnoIA()
    mano=partida
    mov=f1=f2=f3=c1=c2=c3=d1=d2=w=0
    if((mano%2)==0){juegaIA(IA())}
}

// Player1 tiene movimientos impares y la IA pares, con eso basta para determinar quien ganó

function scoreIA(){
    if(w==1){
        if(mano%2==0){XX++}
        else if(mano%2==1){OO++}
    }
    $$('#scoreIA').html('|SCORE|<br><<  '+humano+': '+XX+' | I. A.: '+OO+'  >>')
}

function turnoIA(){
    if(partida%2==1){
        alert('Partida n°'+(partida)+'\nComienza el Humano')
    }else{
        alert('Partida n°'+(partida)+'\nComienza la I. A.')
    }
}