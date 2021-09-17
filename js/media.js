import data from "./FishEyeData.js";

const media = () => {
    const url_string = window.location.href;
    console.log(url_string);
    let url = new URL(url_string);
    const myparam = url.searchParams.get('id');
    console.log(myparam);
    let photographerId;
    let user;
    let pathuser;

    // object of user
    user = data.photographers.filter((person) => {
        if(person.id == myparam) {
            let firstname = person.name.split(' ');
            let pathuser = firstname[0];
            console.log(pathuser);
            return pathuser;
        }
    })
    
    let res = ""; 
    let totalLikes = 0;
    data.media.filter((media) => {
        if(media.photographerId == myparam){
            let path = user[0].name.split(' ')[0];
            console.log(media.image);            
            console.log(typeof media.likes);
            if(parseFloat(media.likes)){
                totalLikes += parseFloat(media.likes);
            }
            if(media.image) {
                res += '<div><img class="thumb-img" src="../img/Photos/'+path+'/'+media.image+'"/><div class="thumb-info"><p>'+media.title+'</p><div class="thumb-likes"><div class="likes"><p>'+media.likes+'</p></div><img class="heart" src="../img/heart-solid.svg" alt="likes"/></div></div></div>';

            }
            
        }
    })
    console.log(totalLikes);
    document.getElementById('likes').innerHTML = totalLikes;
    document.getElementById('photos-section').innerHTML = res;
    

}

media();