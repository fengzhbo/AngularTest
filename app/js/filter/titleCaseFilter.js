define(['app'],function (app) {
	app.filter('TitleCase',function(){

		return function(input,n){
			var words = input.split(' ');

			if (!n || n<=0 || n > words.length) {
				n=words.length;
			}

			for (var i = 0; i < n; i++) {
				words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
			};

			return words.join(' ');
		}

	});
});