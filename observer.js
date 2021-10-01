
const targetSections = document.querySelectorAll('section');
const firstSection = document.getElementById('first-section');

const initialColor = 'rgba(255, 255, 0, 0)';
const highlightColor = 'rgba(255, 255, 0, 1)'; 

let triggerBool = false;

const observerOptions = {
    root: null,
    rootMargin: '110px',
    threshold: 0.2
};

// first observer to watch for scroll move and initiate second observer when true
const scrollMoveObserver = new IntersectionObserver(entries => {
    console.log(entries);
    if (entries[0].boundingClientRect.y < 0) {
    triggerBool = true;
    firstSection.style.backgroundColor = highlightColor;
        }
    });

scrollMoveObserver.observe(document.querySelector("#pixel-to-watch"));

// second ovserver to initiate background color change
const observer = new IntersectionObserver(observerCallback, observerOptions);

function observerCallback(entries) {
        entries.forEach((entry) => {     
            if(entry.isIntersecting && triggerBool === true) {            
                entry.target.style.backgroundColor = highlightColor;
              }
            else{
                entry.target.style.backgroundColor = initialColor; 
            };                                       
    })
};  

targetSections.forEach(element => {           
    observer.observe(element);   
});
 





