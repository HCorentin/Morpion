//Déclaration du plugin JQuery "morpion"
(function($) {
    $.fn.morpion = function() {

        let turn = 1;

        //Au clic sur une case
        $('.cell').on('click', function (){
            //Alternance des joueurs 1 et 2 à chaque coup joué
            if (turn == 1) {
                //le joueur qui doit jouer est affiché sur la page
                $('#currentPlayer').text("Joueur 2")
                //la case affiche un X
                $(this).css("content", "url(cross.png)")
                turn = 2;
            }
            else {
                $('#currentPlayer').text("Joueur 1")
                //le joueur 2 place des O
                $(this).css("content", "url(circle.png)")
                turn = 1;
            }

            //Vérifier si une case est libre et empêcher d'y jouer si on clique dessus
            if ($(this).css('content')){
                $(this).unbind("click");
            }

            //on déclare une variable pour chaque case
            let case1 = $('#grid>.row:first-child>.cell:first-child')
            let case2 = $('#grid>.row:first-child>.cell:nth-child(2)')
            let case3 = $('#grid>.row:first-child>.cell:nth-child(3)')
            let case4 = $('#grid>.row:nth-child(2)>.cell:first-child')
            let case5 = $('#grid>.row:nth-child(2)>.cell:nth-child(2)')
            let case6 = $('#grid>.row:nth-child(2)>.cell:nth-child(3)')
            let case7 = $('#grid>.row:nth-child(3)>.cell:first-child')
            let case8 = $('#grid>.row:nth-child(3)>.cell:nth-child(2)')
            let case9 = $('#grid>.row:nth-child(3)>.cell:nth-child(3)')

            //on vérifie les conditions de victoire sur l'horizontal
            if(case1.css('content') === case2.css('content') && case2.css('content') === case3.css('content') && case1.css('content') !== "normal"){
                //affichage de la popup
                if($('#currentPlayer' === "Joueur 1")){
                    $('.win-display').text("Joueur 1 a gagné !")
                } else if($('#currentPlayer' === "Joueur 2")) {
                    $('.win-display').text("Joueur 2 a gagné !")
                }
                $('#grid').addClass('won')
            }

            else if(case4.css('content')=== case5.css('content') && case5.css('content') === case6.css('content') && case4.css('content') !== "normal"){
                //affichage de la popup
                if($('#currentPlayer' === "Joueur 1")){
                    $('.win-display').text("Joueur 1 a gagné !")
                } else if($('#currentPlayer' === "Joueur 2")) {
                    $('.win-display').text("Joueur 2 a gagné !")
                }
                $('#grid').addClass('won')
            }

            else if(case7.css('content')=== case8.css('content') && case8.css('content') === case9.css('content') && case7.css('content') !== "normal"){
                //affichage de la popup
                if($('#currentPlayer' === "Joueur 1")){
                    $('.win-display').text("Joueur 1 a gagné !")
                } else if($('#currentPlayer' === "Joueur 2")) {
                    $('.win-display').text("Joueur 2 a gagné !")
                }
                $('#grid').addClass('won')
            }

            //on vérifie les conditions de victoire sur la verticale
            if(case1.css('content') === case4.css('content') && case4.css('content') === case7.css('content') && case1.css('content') !== "normal"){
                //affichage de la popup
                if($('#currentPlayer' === "Joueur 1")){
                    $('.win-display').text("Joueur 1 a gagné !")
                } else if($('#currentPlayer' === "Joueur 2")) {
                    $('.win-display').text("Joueur 2 a gagné !")
                }
                $('#grid').addClass('won')
            }

            else if(case2.css('content')=== case5.css('content') && case5.css('content') === case8.css('content') && case2.css('content') !== "normal"){
                //affichage de la popup
                if($('#currentPlayer' === "Joueur 1")){
                    $('.win-display').text("Joueur 1 a gagné !")
                } else if($('#currentPlayer' === "Joueur 2")) {
                    $('.win-display').text("Joueur 2 a gagné !")
                }
                $('#grid').addClass('won')
            }

            else if(case3.css('content')=== case6.css('content') && case6.css('content') === case9.css('content') && case3.css('content') !== "normal"){
                //affichage de la popup
                if($('#currentPlayer' === "Joueur 1")){
                    $('.win-display').text("Joueur 1 a gagné !")
                } else if($('#currentPlayer' === "Joueur 2")) {
                    $('.win-display').text("Joueur 2 a gagné !")
                }
                $('#grid').addClass('won')
            }

            //on vérifie les conditions de victoire en diagonale
            if(case1.css('content') === case5.css('content') && case5.css('content') === case9.css('content') && case1.css('content') !== "normal"){
                //affichage de la popup
                if($('#currentPlayer' === "Joueur 1")){
                    $('.win-display').text("Joueur 1 a gagné !")
                } else if($('#currentPlayer' === "Joueur 2")) {
                    $('.win-display').text("Joueur 2 a gagné !")
                }
                $('#grid').addClass('won')
            }
            else if(case3.css('content')=== case5.css('content') && case5.css('content') === case7.css('content') && case3.css('content') !== "normal"){
                //affichage de la popup
                if($('#currentPlayer' === "Joueur 1")){
                    $('.win-display').text("Joueur 1 a gagné !")
                } else if($('#currentPlayer' === "Joueur 2")) {
                    $('.win-display').text("Joueur 2 a gagné !")
                }
                $('#grid').addClass('won')
            }
        })

        //au clic sur le bouton rejouer la page se refresh
        $('#replay').on('click', function () {
            location.reload()
        })

    };
})(jQuery);

$('#grid').morpion();