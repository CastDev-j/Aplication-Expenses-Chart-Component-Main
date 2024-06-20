document.addEventListener('DOMContentLoaded', function () {
    const data = [
        { day: "mon", amount: 17.45 },
        { day: "tue", amount: 34.91 },
        { day: "wed", amount: 52.36 },
        { day: "thu", amount: 31.07 },
        { day: "fri", amount: 23.39 },
        { day: "sat", amount: 43.28 },
        { day: "sun", amount: 25.48 }
    ];

    // Calculate the maximum amount to determine the height percentage
    const maxAmount = Math.max(...data.map(d => d.amount));

    const items = document.querySelectorAll('.bar-form');

    let i = 0;
    
    data.forEach(item => {
        const barElement = document.getElementById(item.day);
        if (barElement) {
            const heightPercent = (item.amount / maxAmount) * 100;
            items[i].style.height = `${heightPercent}%`;
            i++;
            console.log(i +" "+heightPercent);

            // Add amount to the before pseudo-element
            barElement.setAttribute('data-amount', `$${item.amount.toFixed(2)}`);

            // Set the bar color
            if (item.amount === maxAmount) {
                barElement.classList.remove('red-bar');
                barElement.classList.add('cyan-bar');
            } else {
                barElement.classList.add('red-bar');
            }
        }
    });
});
