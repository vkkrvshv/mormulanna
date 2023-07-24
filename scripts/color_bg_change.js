window.addEventListener('scroll', () => {
    if(window.scrollY > 1500) {
        const html = document.querySelector('html')
        const body = document.querySelector('body')
        html.style.backgroundColor = `#ecdbd7`;
        html.style.transition = `0.3s all`;
        body.style.backgroundColor = `#ecdbd7`;
        body.style.transition = `0.3s all`;
    }

    if(window.scrollY < 1500) {
        const html = document.querySelector('html')
        const body = document.querySelector('body')
        html.style.backgroundColor = `#faf5f5`;
        html.style.transition = `0.3s all`;
        body.style.backgroundColor = `#faf5f5`;
        body.style.transition = `0.3s all`;
    }
});
