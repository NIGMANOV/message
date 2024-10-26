// console.log(new Date); // Fri Oct 25 2024 13:48:42 GMT+0500 (Узбекистан, стандартное время)
// console.log(new Date().toDateString()); // Fri Oct 25 2024 тип данных str
// console.log(new Date().toISOString()); // 2024-10-25T08:52:03.959Z // UTC время
// console.log(typeof Date);

function getRandomTimeFromNow() {
  const now = new Date(); // Текущее время
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999); // Конец текущего дня

  const randomTimestamp =
    now.getTime() + Math.random() * (endOfDay.getTime() - now.getTime());
  const randomTime = new Date(randomTimestamp);

  return randomTime.toISOString(); // Возвращаем только время в формате HH:MM:SS
}

console.log(getRandomTimeFromNow()); // Пример: "16:45:23"

const users = [
  {
    name: "Николай",
    id: 1,
    country: "Uzbekistan",
  },

  {
    name: "Самир",
    id: 2,
    country: "Russian",
  },
];

const messages = [
  {
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, nemo?",
    time: getRandomTimeFromNow(),
    userId: 1,
  },

  {
    message: "Lorem ipsum dolor sit amet.",
    time: getRandomTimeFromNow(),
    userId: 2,
  },

  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic distinctio, culpa ut rem quo, atque totam corporis aliquid unde commodi dignissimos, cumque nesciunt eius eos. Earum, fugit ullam? Hic!",
    time: getRandomTimeFromNow(),
    userId: 2,
  },

  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic distinctio, culpa ut rem quo, atque totam corporis aliquid unde commodi dignissimos, cumque nesciunt eius eos. Earum, fugit ullam? Hic!",
    time: getRandomTimeFromNow(),
    userId: 1,
  },
];

const findOne = (array, searchOpts) => {
  const { field, search } = searchOpts;
  return array.find((element) => element[field] === search);
};

const elementMessages = document.querySelector(".element");

messages.forEach((message) => {
  const user = findOne(users, { field: "id", search: message.userId });
  if (!user || !elementMessages) return;

  const isMyMessage = user.id === 1;
  const text = `
    <div class="message ${isMyMessage ? "message--my" : ""}">
      <p class="time">${message.time}</p>
      <p class="user-message">${message.message}</p>
    </div>
  `;

  elementMessages.insertAdjacentHTML("beforeend", text);
});
