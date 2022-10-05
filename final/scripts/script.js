//select input//
let myInput=document.querySelector('.input-password');

//select eye//
let myEye=document.querySelector('.eye');



myEye.addEventListener('click',function(){
	let attinput=myInput.getAttribute('type');
//toggel between password/text input type
	if(attinput=='password'){
		myInput.setAttribute('type','text');
		myEye.setAttribute('src','image/invisible-eye.png');
		}else{
	    myInput.setAttribute('type','password');
	    myEye.setAttribute('src','image/visible-eye.png');
   };
});



myInput.addEventListener('keyup',function(){
	let numberlength=myInput.value.length;
	//showing eyes and not showing
	if(numberlength==0){
		myEye.style.display="none"
		}else{
			myEye.style.display="inline-block"
			}
});

