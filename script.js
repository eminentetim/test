const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = documnent.getElementById('next')
const circle= document.querySelectorAll('.circle') 

let currentActive = 1

next.addEventListener( 'click', () => {
    currentActive++

    if(currentActive > circle. length) {
        currentActive = circle.length

    }
    Update()
})

prev.addEventListener( 'click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1

    }
Update()
    
})

function Update() {
    circle.forEach( (circle, idx) => { 
        if(idx < currentActive ) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })


     const actives = document.querySelectorAll('.actives')
     progress.style.width = (actives. length - 1) (circle. length -1) *  100 + '%'

    if(currentActive === 1) {
    prev.disabled = true
    } else if (currentActive === circle.length){
    next.disabled = true
    } else {
         prev.disabled = false
         next.disabled = false
    }
}
