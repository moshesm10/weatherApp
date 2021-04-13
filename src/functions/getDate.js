export function getHour(dt) {
  return new Date(dt * 1000).getHours();
}

export function getDay(time = new Date().getTime()) {
  const date = new Date(time).getDate();
  const day = new Date(time).getDay();
  const month = new Date(time).getMonth();

  const days = ['Вс', 'Пн', 'Вт', 'Cр', 'Чт', 'Пт', 'Сб'];
  const months = ["янв", "фев", "мар", "апр", "май", "июн",
    "июл", "авг", "сент", "окт", "ноя", "дек"]
  return `${days[day]}, ${date} ${months[month]} `
};