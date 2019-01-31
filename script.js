magnitude = (x, y) => {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

normalize = (x, y) => {
    const h = magnitude(x, y);
    return {
        x: x / h,
        y: y / h,
    } 
}

handleEyeTracking = (event, elem) => {
    const elemRect = elem.getBoundingClientRect();
    let relativeX = elemRect.left + (elemRect.width / 2);
    let relativeY = elemRect.top + (elemRect.height / 2);
    let normalizedVector = normalize(event.clientX - relativeX, (event.clientY - relativeY));
    const transformationWeight = 6;
    elem.style.transform = `translate(${normalizedVector.x * transformationWeight}px, ${normalizedVector.y * transformationWeight}px)`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", (e) => {
        handleEyeTracking(e, document.getElementById("left"));
        handleEyeTracking(e, document.getElementById("right"));
    });
});