window.onload = function() {
    const outputDiv = document.getElementById('output');

    for (let i = 1; i <= 100; i++) {
        const span = document.createElement('span');
        if (i % 3 === 0) {
            span.textContent = 'BOO';
            span.className = 'boo';
        } else {
            span.textContent = i;
            span.className = 'number';
        }

        span.style.marginRight = '10px';
        outputDiv.appendChild(span);
    }
};
