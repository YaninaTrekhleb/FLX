// eslint-disable-next-line no-unused-vars
function formatTime(totalMinutes) {
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes - days * 60 * 24) / 60);
    const minutes = totalMinutes - days * 60 * 24 - hours * 60;

    return `${days} day(s), ${hours} hour(s), ${minutes} minute(s)`;
}
