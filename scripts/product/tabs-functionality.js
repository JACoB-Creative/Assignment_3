document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab__link');

    tabLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const contentId = this.getAttribute('data-tab');
            const content = document.getElementById(contentId);

            if (this.classList.contains('active')) {
                this.classList.remove('active');
                content.classList.remove('active');
            } else {
                tabLinks.forEach(function(item) {
                    item.classList.remove('active');
                    const itemContentId = item.getAttribute('data-tab');
                    const itemContent = document.getElementById(itemContentId);
                    itemContent.classList.remove('active');
                });
                this.classList.add('active');
                content.classList.add('active');
            }
        });
    });
});
