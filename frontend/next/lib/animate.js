export function observeAnimate(observeClass, elemAnimateClass) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createAnimateSlick(elemAnimateClass);
            }
        });
    });
    observer.observe(document.querySelector(observeClass));
}

export function createAnimateSlick(elemAnimateClass) {
    let num = 200;
    document.querySelectorAll(elemAnimateClass).forEach(
        (el, i) => {
            let timeout = i * num;
            setTimeout(() => {
                el.classList.add('animate');
            }, timeout);
        })
}