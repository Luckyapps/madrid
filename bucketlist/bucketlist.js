window.addEventListener("load", start_bucketlist);

function start_bucketlist(){
    var blist = document.getElementsByClassName("bucketlist_container")[0];
    for(i=0; i<bucketlist.length;i++){
        blist.innerHTML = blist.innerHTML +"<div>"+ bucketlist[i].titel +"</div>";
    }
}