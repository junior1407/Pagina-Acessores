/**
 * Created by NTJR on 26-Oct-15.
 */
$(document).ready(function(){
    $("#ligacoes").on("show.bs.collapse", function(e){
        $(".tp1").addClass("topico-aberto");




    });
    $("#ligacoes").on("hide.bs.collapse", function(e){
        $(".tp1").removeClass("topico-aberto");


    });
    $("#ligacoes1").on("show.bs.collapse", function(e){
        $(".tp2").addClass("topico-aberto");


    });
    $("#ligacoes1").on("hide.bs.collapse", function(e){
        $(".tp2").removeClass("topico-aberto");


    });

    $("#ligacoes2").on("show.bs.collapse", function(e){
        $(".tp3").removeClass("ultimo");
        $(".tp3").addClass("topico-aberto");


    });
    $("#ligacoes2").on("hide.bs.collapse", function(e){
        $(".tp3").addClass("ultimo");
        $(".tp3").removeClass("topico-aberto");


    });

});