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
    user = data.photographers.filter((person) => {
        if(person.id == myparam) {
            let firstname = person.name.split(' ');
            let pathuser = firstname[0];
            console.log(pathuser);
            return pathuser;
        }
    })
    console.log(user);
    
    data.media.filter((media) => {
        if(media.photographerId == myparam){
            let path = user[0].name.split(' ')[0];
            console.log();
            console.log(media.image);
            document.getElementById('photos-section').innerHTML = '<div><img class="thumb-img" src="../img/Photos/'+path+'/'+media.image+'"/></div>';
            return media.image;
        }
    })
    

}

media();