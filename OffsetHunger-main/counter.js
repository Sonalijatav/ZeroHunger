function incrementCounter(counterId, target, duration) {
    let count = 0;
    let increment = target / (duration / 10);

    let counter = document.getElementById(counterId);
    let interval = setInterval(() => {
        count += increment;
        counter.textContent = Math.ceil(count);
        
        if (count >= target) {
            clearInterval(interval);
            counter.textContent = target;  // Ensure the counter reaches the target value
        }
    }, 10);
}


// Use IntersectionObserver to start counters when they enter the viewport
document.addEventListener('DOMContentLoaded', () => {
    const counters = [
        { id: 'states-count', target: 10, duration: 2000 },
        { id: 'events-count', target: 25, duration: 2000 },
        { id: 'organizations-count', target: 15, duration: 2000 }
    ];

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = counters.find(c => c.id === entry.target.id);
                if (counter) {
                    incrementCounter(counter.id, counter.target, counter.duration);
                    observer.unobserve(entry.target); // Stop observing once increment starts
                }
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        observer.observe(element);
    });
        });