$(document).ready(function(){


	new Swiper(".fest-slider", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		pagination: {
			el: ".swiper-pagination",
			clickable: true,			
			},

			loop: true,

			effect: 'fade',

			// breakpoints: {

			// 	1439: {
			// 		Width: 1010,

			// 	}


			// 	767: {
			// 	Width: 850,
			// 	},

			// 	360: {
			// 		Width: 766,
			// 	},

				// 360: {
				// 	width: 766,
				// 	},
	//}


			

	});

});

