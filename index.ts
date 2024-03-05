
setTimeout(() => {
    paint()
}, 2000)


const paint = () =>{
    setInterval(() =>{
        let wrapper = document.querySelector(".wrapper")
        let positionBall = {
            positionTop: Math.random() * window.innerHeight,
            positionLeft: Math.random() * window.innerWidth
        }
        
        let size = Math.floor(Math.random() * 50)
        let color = randomColor()
        
        let ballElement = createBall(positionBall, size, color)
        
        if (wrapper){
            wrapper.appendChild(ballElement)
        }
        
    }, 1000)
}

function randomColor(){
    let stringSymbolsColor = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++){
        color += stringSymbolsColor[Math.floor(Math.random() * 16)]
    }

    return color
}

function createBall(positionBall: {positionTop: number, positionLeft: number}, size: number, color: string){
    let elementBall = document.createElement("div")
    elementBall.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg class="ball" width="${size}px" height="${size}px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-n</title><circle cx="256" cy="256" r="192" style="fill:${color};stroke:#000000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><polygon points="256 175.15 179.91 238.98 200 320 256 320 312 320 332.09 238.98 256 175.15" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="332.09 238.98 384.96 216.58 410.74 143.32" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="447" y1="269.97" x2="384.96" y2="216.58" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="179.91 238.98 127.04 216.58 101.26 143.32" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="65" y1="269.97" x2="127.04" y2="216.58" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="256 175.15 256 117.58 320 74.94" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="192" y1="74.93" x2="256" y2="117.58" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="312 320 340 368 312 439" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="410.74" y1="368" x2="342" y2="368" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="200 320 172 368 200.37 439.5" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="101.63" y1="368" x2="172" y2="368" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>`
    elementBall.style.position = "absolute"
    elementBall.style.top = positionBall.positionTop + "px"
    elementBall.style.left = positionBall.positionLeft + "px"
    return elementBall
}