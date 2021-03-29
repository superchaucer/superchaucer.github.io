
function change(li)
{
	var lis = document.getElementById("box").getElementsByTagName("li");
	var divs = document.getElementById("box").getElementsByTagName("div");
	for(var i = 0;i < lis.length;i++)
	{
		if (li==lis[i])
		 {
		 	lis[i].className="tagli";
		 	divs[i].className="show";
		 }
		 else
		 {
		 	lis[i].className="tag";
		 	divs[i].className="hidden";
		 }
	}
}
