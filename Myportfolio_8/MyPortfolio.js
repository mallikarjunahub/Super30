var Details_titles=document.querySelector('.tech');
var Details_contents=document.querySelector('.Details_contents');

function opentab(tabname){
    for(Details_tille of Details_titles){
        Details_tille.ClassList.remove("active-link")
    }
    for(Details_content of Details_contents){
        Details_content.ClassList.remove("active-tab")
    }
    Event.currentTarget.ClassList.add('active-link');
    document.getElementById(tabname).classList.add("active-tab");
}

var sideMenu=document.querySelector('#sideMenu');
function openMenu(){
    sideMenu.style.right='0px';
}
function closeMenu(){
    sideMenu.style.right='-200px';
}
