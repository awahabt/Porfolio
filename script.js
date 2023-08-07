function btn() {
  let button = document.getElementById("about-me");
  if (button.style.display === "none") {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

btn() 

const toggleMenu=()=>{
  const mobileMenu=document.getElementById("mobile_nav-btn");
  if(mobileMenu.style.display=='none'){
    mobileMenu.style.display='block'
  }
  else{
    mobileMenu.style.display='none'
  }
}
toggleMenu()