export function diffYears(date1: Date, date2: Date) {
    let diffYears = date2.getFullYear() - date1.getFullYear();
    if (
        date2.getMonth() < date1.getMonth() ||
        (date2.getMonth() === date1.getMonth() &&
            date2.getDate() < date1.getDate())
    ) {
        diffYears--;
    }
    return diffYears;
}
