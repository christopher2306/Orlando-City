$(document).ready(function(){

		$("#logotipo").on("mouseover", function(){

			$("#logotipo").addClass("efeito");

		}).on("mouseout", function(){

			$("#logotipo").removeClass("efeito");

		});

		$(".thumbnails").owlCarousel({
			loop:true,
			margin: 10,
			//nav:true,
			//navText: ["Anterior","Próximo"],
			responsive: {
				0:{
					items: 1
				},
				480:{
					items: 3
				},
				1000:{
					items: 4
				},
			}
		});		

	});
