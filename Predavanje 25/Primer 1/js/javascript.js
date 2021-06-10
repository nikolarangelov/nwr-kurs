/** Javascript events */

const eventDiv = document.querySelector('#event');

const msgDiv =  document.querySelector('.child');

// click event
eventDiv.addEventListener('click', eventMsg);

//mouse over
eventDiv.addEventListener('mouseover', eventMsg);


// mouse leave
eventDiv.addEventListener('mouseleave', eventMsg);

//mouse enter
eventDiv.addEventListener('mouseenter', eventMsg);

function eventMsg(event){
    event.currentTarget.textContent = `Event type ${event.type} `;
    
    
}

eventDiv.addEventListener("mouseover", function() {
    eventDiv.style.opacity = 0.5;
});

// function onCLick(event){
//     console.log(event);
//     console.log('element je kliknut')
// };

/** Zadatak 1 - postaviti opacity na hover nekom od ovih elemenata od .5 */
