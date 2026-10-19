$(document).ready(function () {
    $('.nav-menu a').on('click', function () {
        $('#nav-toggle').prop('checked', false);
    });

    $('.product-name a').on('click', function (event) {
        event.preventDefault();

        const productName = $(this).text().trim();
        const message = encodeURIComponent(`Hola Seven, me interesa el producto: ${productName}`);
        const whatsappUrl = `https://wa.me/5493812146046?text=${message}`;

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });

    $('.category-item').on('click', function (event) {
        event.preventDefault();
        const selectedCategory = $(this).data('category');

        $('.category-item')
            .removeClass('item-active')
            .attr('aria-pressed', 'false');
        $(this)
            .addClass('item-active')
            .attr('aria-pressed', 'true');

        $('.product-item').each(function () {
            const matchesCategory = selectedCategory === 'all'
                || $(this).data('category') === selectedCategory;

            $(this).toggle(matchesCategory);
        });
    });
});