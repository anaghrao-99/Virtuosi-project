	function scroll(){
			window.scrollBy({ 
				  top: 100, // could be negative value
				  left: 0, 
				  behavior: 'smooth' 
				});
	}


	var button = document.querySelector("button");
	button.addEventListener("click",function(){
			
			var x=1;
			var y=1;
			var count=0;
			var stop = setInterval(function(){ mytimer() }, 2);

			function mytimer(){
				if(count>223)
				{
					clearInterval(stop);
				}
    			window.scrollBy(0, 3);
    			count=count+1;
			}

		});


	var mainhead = document.querySelector(".virto");
	var icon = document.querySelector(".navv img");

	mainhead.addEventListener("mouseover",function(){
		mainhead.style.color = "#F5BF0F";
		icon.setAttribute("src","musical-note-hover.png");

	});
	mainhead.addEventListener("mouseout",function(){
		mainhead.style.color = "black";
		icon.setAttribute("src","musical-note.png");

	});
	icon.addEventListener("mouseout",function(){
		mainhead.style.color = "black";
		icon.setAttribute("src","musical-note.png");

	});
	icon.addEventListener("mouseover",function(){
		mainhead.style.color = "#F5BF0F";
		icon.setAttribute("src","musical-note-hover.png");

	});


	
	 function initMap() {
        var uluru = {lat: 25.430444, lng: 81.770655};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

      
      var count = 0;
      setInterval(function()
      	{
      		
      		if(count  == 0)
      		{
      			document.querySelector(".slideshow img").setAttribute("src","two.jpg");

      			count = 1;

      			return;
      		}

      		else if(count  == 1)
      		{
      			document.querySelector(".slideshow img").setAttribute("src","three.jpg");
      			count = 2;
      			return;
      		}

      		else
      		{
      			document.querySelector(".slideshow img").setAttribute("src","one.jpg");
      			
      			count = 0;
      			return;
      		}


      	},3000);
      