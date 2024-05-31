document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.info__size');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set the first button as active by default
    buttons[0].classList.add('active');
});
