function orderNow(product) {
    let message = `Hi Swaad Sutra, I want to order: ${product}`;
    let whatsappNumber = "919999999999"; // replace with real number
    let whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
}
