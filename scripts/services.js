'use strict';

angular.module('irctc')

        .service('trainsList', function() {
    
            var trains=[
                         {
                          _id:0,
						  trainNumb:'231063',
                          name:'CHENNAI EXPRESS',
                          departure:'21:35',
						  distance:'700kms',
						  duration:'12h 25m',
						  arrival:'10:00',
						  status:'Available',   
//                          color:'limegreen'
                        },
						{
                          _id:1,
						  trainNumb:'232987',
                          name:'CHENNAI MAIL',
                          departure:'18:45',
						  distance:'712kms',
						  duration:'12h 45m',
						  arrival:'07:30',
						  status:'WL 10',  
//                          color:'gold'
                            
                        },
						{
                          _id:2,
						  trainNumb:'231360',
                          name:'TVC CHENNAI EXP',
                          departure:'17:20',
						  distance:'702kms',
						  duration:'12h 30m',
						  arrival:'05:50',
						  status:'WL 35',      
//                          color:'limegreen'
                        },
						{
                          _id:3,
						  trainNumb:'161287',
                          name:'GUV CHENNAI EXP',
                          departure:'23:30',
						  distance:'1003kms',
						  duration:'21h 45m',
						  arrival:'21:15',
						  status:'WL 40', 
//                          color:'orange'
                        }
                    ];
            
    
                this.getTrainsList = function(){
                    
                    return trains;
                    
                };
    
                        
        });