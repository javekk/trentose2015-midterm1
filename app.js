/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */ 

var tmpl = ' <li id="ID">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';
var domanda = 0;
var errori = 0;


function check(frase){
    if(domanda == data.length - 1){
        $("#tot-good").text(data.length - errori -1);
        $("#tot").text(data.length);
        $(".btn-opt-continue").hide();
        $(".final").show();
    }
    else if(frase != data[domanda].phrase_de){
        errori++;
    }
    domanda++;
}

$(document).ready(function(){
    
    $(".sentences").text(data[0].phrase_en);
    
    $(".btn-opt-continue").click(function(){
        var risposta = document.getElementById('form-ctrl').value;
        check(risposta);        
        if(domanda < data.length){
            $(".sentences").text(data[domanda].phrase_en);
        }
    });
  
});







