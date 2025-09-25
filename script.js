function orderNow(product) {
    let message = `Hi Mom's Kitchen, I want to order: ${product}`;
    let whatsappNumber = "919999999999"; // replace with real number
    let whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
}
