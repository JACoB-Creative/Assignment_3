document.getElementById('place-order').addEventListener('click', function() {
    document.getElementById('order-complete-modal').classList.add('active');
});

document.querySelectorAll('.modal-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('order-complete-modal').classList.remove('active');
    });
});

// Optionally, close the modal when clicking outside of the modal content
document.getElementById('order-complete-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.remove('active');
    }
});