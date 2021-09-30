const initialColor = 'rgba(255, 255, 0, 0)';
const highlightColor = 'rgba(255, 255, 0, 1)'; 

const targets = 'section';

let observerOptions = {
    root: null,
    rootMargin: '120px 0px 0px 0px',
    threshold: 0.1
};

window.onscroll = function () { 
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    function observerCallback(entries) {
        entries.forEach((entry) => {           
                if(entry.isIntersecting) {            
                    entry.target.style.backgroundColor = highlightColor;
                  }
                  else{
                      entry.target.style.backgroundColor = initialColor; 
                  };                 
        });    
    };
    
    document.querySelectorAll(targets).forEach(element => {    
        observer.observe(element);   
    });
};   





