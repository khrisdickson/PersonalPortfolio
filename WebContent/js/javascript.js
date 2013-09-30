/*
Author: Khris Dickson
Date: September 30 2013
Name: Khris Dickson Portfolio Website
Description: This is my style sheet for my portfolio project for Advanced Web Design
There is a section to allow the site to be viewed in mobile in a respective layout
*/

//This script was taken from "http://stackoverflow.com/questions/819416/adjust-width-height-of-iframe-to-fit-with-content-in-it"
//It is used to make my resume fit inside the content within the iframe

<script language="JavaScript">
		function autoResize(id){
		var newheight;
		var newwidth;
							
			if(document.getElementById){
				newheight=document.getElementById(id).contentWindow.document .body.scrollHeight;
				newwidth=document.getElementById(id).contentWindow.document .body.scrollWidth;
			}
								
			document.getElementById(id).height= (newheight) + "px";
			document.getElementById(id).width= (newwidth) + "px";
		}
</script>