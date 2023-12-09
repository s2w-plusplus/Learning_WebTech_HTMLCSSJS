function rectangle(wdth,hgth)
		{
		this.height=hgth;
		this.width=wdth;

		this.perimeterR=function()
			{
			var perim=2*(this.width+this.height);
			return (perim);
			}
		this.areaR=function()
			{
			var area=this.width*this.height;
			return (area);
			}
		this.dispR=function()	
			{
			document.write("The perimeter and the area of the rectangle with width:<b>"+this.width+"</b> height:<b>"+this.height +"</b> is:  <b>"+this.perimeterR()+"</b> and <b>"+this.areaR()+"</b> respectively<br>");
			}
		}

function circle(rad)
		{
		this.radius=rad;
		
		this.perimeterC=function()
			{
			var perim=2*Math.PI*this.radius;
			return (perim);
			}	
		this.areaC=function()
			{
			var area=Math.PI*this.radius*this.radius;
			return (area);
			}	
		this.dispC=function()	
			{
			document.write("The perimeter and the area of the Circle with radius:<b>"+this.radius+"</b> is:  <b>"+this.perimeterC()+"</b> and <b>"+this.areaC()+"</b> respectively<br>");
			}
			
		}
	
	
				