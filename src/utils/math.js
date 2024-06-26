export const getTimeDuration = (duration) => {
  try {
    const millis = duration;
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  } catch (_error) {
    return '0:00';
  }
}