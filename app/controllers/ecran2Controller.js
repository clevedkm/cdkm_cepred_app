
angular.module('ecran2', [])
        .controller('ecran2Controller', function(){
            var pays = this
            pays.countrys =[    {country:'France',	    all:false,	 none:false,   custom:false },
                                {country:'Belgium',	    all:false,	 none:false,   custom:false },
                                {country:'Germany',	    all:false,	 none:false,   custom:false },
                                {country:'Italie',	    all:false,	 none:false,   custom:false },
                                {country:'Spain',	    all:false,	 none:false,   custom:false },
                                {country:'United Kingdom',	all:false,	 none:false,   custom:false }
            ];

        });