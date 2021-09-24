import data from "../FishEyeData.js";
// import { myListPictures } from './media';


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
    let position = 0;
    const listPictures = [];
    data.media.filter((media) => {
        if(media.photographerId == myparam){
            let path = user[0].name.split(' ')[0];
            
            if(parseFloat(media.likes)){
                totalLikes += parseFloat(media.likes);
            }
            if(media.image) {
                
                console.log(listPictures.push(media.image));
                
                res += '<div><img data-p="'+position+'" id="'+media.id+'" class="thumb-img" alt="'+media.title+'" src="/img/Photos/'+path+'/'+media.image+'"/><div class="thumb-info"><p>'+media.title+'</p><div class="thumb-likes"><div class="likes"><p>'+media.likes+'</p></div><img class="heart" src="../img/heart-solid.svg" alt="likes"/></div></div></div>';
                position++;
            }      
        }
    })   
    document.querySelector('#photoList').setAttribute('data-list', JSON.stringify(listPictures));
    console.log(listPictures);
    
    // export listPictures;
    // export let listPictures;
    console.log(listPictures.length);
    
    document.getElementById('likes').innerHTML = totalLikes;
    document.getElementById('photos-section').innerHTML = res;
    return listPictures;
    
    

}
media();

export { media };