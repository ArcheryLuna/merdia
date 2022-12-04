export function ScrollDown(howFar) {
    window.scrollTo({
        top: howFar,
        behavior: 'smooth'
    });
}