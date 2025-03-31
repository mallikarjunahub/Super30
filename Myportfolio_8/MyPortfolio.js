var Details_titles=document.getElementsByClassName('tech');
var Details_contents=document.getElementsByClassName('Details_contents');

function opentab(tabname, event){
    for(let Details_tille of Details_titles){
        Details_tille.classList.remove("active-link")
    }
    for(let Details_content of Details_contents){
        Details_content.classList.remove("active-tab")
    }
    event.currentTarget.classList.add('active-link');
    console.log("Clicked tab:", tabname);
    document.getElementById(tabname).classList.add("active-tab");
}

var sideMenu=document.querySelector('#sideMenu');
function openMenu(){
    sideMenu.style.right='0px';
}
function closeMenu(){
    sideMenu.style.right='-200px';
}
