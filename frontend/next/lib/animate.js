export function createAnimate(observeClass, elemAnimateClass) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let num = 200;
                document.querySelectorAll(elemAnimateClass).forEach(
                    (el, i) => {
                        let timeout = i * num;
                        setTimeout(() => {
                            el.classList.add('animate');
                        }, timeout);

                    })
            }
        });
    });

    observer.observe(document.querySelector(observeClass));
}