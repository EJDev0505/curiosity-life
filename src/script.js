let pic = document.querySelectorAll("#pic");
let viewmore = document.querySelector('#viewmore');
let activeBanner = "/public/human-daily-life-on-rainy-day-enjoying-rainfall-and-happy-life-lively-rainy-season-concept-generative-ai-free-photo.jpeg";
let banner = document.querySelector("#banner");
let lastclickBanner = "";


pic.forEach((e) => {
    e.addEventListener('click', (event) => {
         pic.forEach((element) => {
                element.classList.remove('active');
            });
            if(event){
                activeBanner = event.currentTarget.querySelector('img').getAttribute('src');
                banner.style.backgroundImage = `linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url('${activeBanner}')`;
                lastclickBanner = activeBanner;
                e.classList.add('active'); 
                banner.style.transition = '0.5s ease-in-out';
            }else if(viewmore){
                
            }
               
                localStorage.setItem('lastclickBanner', lastclickBanner);
               
    });
    
});




window.addEventListener('load', () => {

        lastclickBanner = localStorage.getItem('lastclickBanner');

        banner.style.backgroundImage = `linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url('${lastclickBanner}')`;
        banner.style.transition = '0.5s ease-in-out';

        pic.forEach((element) => {
                element.classList.remove('active');
            });

        document.querySelector(`#pic img[src='${lastclickBanner}']`).parentNode.classList.add('active');
    });

viewmore.addEventListener('click', () => {
    
        let viewmoreBanner =  "./public/wp9805879.jpg";
        activeBanner = viewmoreBanner;
        banner.style.backgroundImage = `linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url('${activeBanner}')`;
        lastclickBanner = activeBanner;
        banner.style.transition = '0.5s ease-in-out';
        document.querySelector(`#pic img[src='${lastclickBanner}']`).parentNode.classList.add('active');

        pic.forEach((element) => {
           element.classList.remove('active');
        });
     

         localStorage.setItem('lastclickBanner', lastclickBanner);


        
        
});

   
    