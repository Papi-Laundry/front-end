export function toDate(date) {
    const formatDate = new Date(date)
    return formatDate.toISOString().split('T')[0]
}

export function toIDR(price) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(price);
}