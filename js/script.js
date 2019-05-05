/*
	script 
	Copyright Camel Léonce Djoulako Mars 2019 - Aspiring Software Engineer 
 */

$(document).ready(function(){
	console.log('jquery.js bien chargé');

	/*Animations aux click*/

	/*recuperation des li et nbre elemnt du menu*/
	var $mainMenuItems = $("#main-menu ul").children("li"),
		totalMainMenuItems = $mainMenuItems.length, //nombre d'éléments dans mainMenuItems
		openedIndex = 2 ;/*nombre d'element de l'index ouvert*/

	var	init = function(){/*fonction d'initialisation de l'animation*/
			bindEvent();

			if(validIndex(openedIndex)){
				animateItem($mainMenuItems.eq(openedIndex), true, 3000);
			}
		}; 

		var validIndex = function(indexToCheck){

			return (indexToCheck >= 0) && (indexToCheck <= totalMainMenuItems);
		};


		/*bindEvent regroupe toute les fonctions auxquelle on attache un evenement*/
		var bindEvent = function(){
			$mainMenuItems.children(".images").click(function(){
				 /*on recupere l'index de l'élement sur lequel on a fait le click
					index() retourne l'index d'un element
				 */
			 	var newIndex = $(this).parent().index(),
			 		$item = $mainMenuItems.eq(newIndex);

			 	checkAndAnimateItem(newIndex);

			});

			$(".button").hover(
				function(){
					$(this).addClass("hovered");
				},


				function(){
					$(this).removeClass("hovered");
				}

			);

			$(".button").click(function(){
				var newIndex = $(this).index();
				/*on recupere l'index de l'élement sur lequel on a fait le click
					index() retourne l'index d'un element
				 */
			 	var newIndex = $(this).parent().index(),
			 		$item = $mainMenuItems.eq(newIndex);
			 		checkAndAnimateItem(newIndex);

			 	
			});
		};

		/*Fonction animateItem qui prend en parametre l'item qu'on veut annimé 
		et le deuxiemet parametre le type d'animation(ouverture ou fermeture)
		e en troisieme le temps(vitesse)
		*/

		var animateItem = function($item, toOpen, speed){
			var $colorImage = $item.find(".color"),
				itemParam = toOpen ? {width:"420px"} : {width:"140px"},
				colorImageParam = toOpen ? {left:"0px"} : {left:"140px"};
			
			$colorImage.animate(colorImageParam, speed);
			$item.animate(itemParam, speed);
		};

		var checkAndAnimateItem = function(indexToCheckAnAnimate){
			if (openedIndex == indexToCheckAnAnimate) {
			 		animateItem($mainMenuItems.eq(indexToCheckAnAnimate), false, 500);
			 		openedIndex = -1;
			 	}else {
			 		if (validIndex(indexToCheckAnAnimate)) {
			 			/*on ferme d'abord celui qui est ouvert*/
			 			animateItem($mainMenuItems.eq(openedIndex), false, 500);
			 			openedIndex = indexToCheckAnAnimate;

			 			animateItem($mainMenuItems.eq(openedIndex), true, 500);
			 		}
			 	}
		};

	init();

});
