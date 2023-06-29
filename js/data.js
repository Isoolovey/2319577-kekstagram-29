import {getRandomInteger, getRandomArrayElement, createId} from './util.js';

// Количество значений
const VARIABLE_VALUE = 25;

// Описание фото
const DESCRIPTIONS = [
  'Вид сверху на пляж.',
  'Вывеска указывающая к пляжу.',
  'Вид с камней на пляж и вдаль океана.',
  'Девушка в купальнике и с фотоаппаратом на пляжу.',
  'Две порции мило оформленной метной похлебки.',
  'Черный спортивный автомобиль с открытой вверх дверью.',
  'Десерт из долек клубники на деревянной тарелке.',
  'Два стакана освежающего морса из красных ягод.',
  'Купающиеся люди машут низко пролетающему самолету.',
  'Выдвижная полка с летней обувью.',
  'Подход к пляжу с огороженной местной растительностью.',
  'Автомобиль Ауди на улице.',
  'Салат из рыбы и овощей.',
  'Рыжий кот на рисе, буд-то суши-ролл.',
  'Отдыхающий на диване человек в домашней обуви как видеоигр.',
  'Пролетающий самоле над горами.',
  'Музыкальный хор репетирует перед выступлением.',
  'Красный ретро автомобиль внутри кирпичного здания.',
  'Демонстрация домашних тапочек с подсветкой, для хождений по дому ночью.',
  'Пальмы в вечернее время на фоне гостевых домиков.',
  'Местное блюдо из мяса с приправами.',
  'Купающийся человек на фоне заката.',
  'Взрослый краб на камне.',
  'Люди поднимают руки вверх на концерте известного исполнителя.',
  'Машина, проезжающая около высунувших морды бегемотов',
];

// Создание рандомного имени
const NAMES = [
  'Иван',
  'Хуан',
  'Себастьян',
  'Марий',
  'Кристоф',
  'Виктор',
  'Юлий',
  'Люпита',
  'Вашингтон',
  'Абра',
];

const SURNAMES = [
  'Парарам',
  'Верон',
  'Кетчуп',
  'Мирабелла',
  'Вальц',
  'Пельмешка',
  'Онопко',
  'Тополёк',
  'Нионго',
  'Ирвинг',
  'Кадабра',
];

// 8 комментариев
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

/**
 * Функция по созданию массива объектов — список комментариев, вкл. в себя id, аватарку, сообщение и имя пользователя
 * @param {number} id - идентификатор комментария
 * @param {string} avatar - ссылка на автар, который формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg
 * @param {string} message - комментарий, который формируется случайным образом из массива MESSAGES[]
 * @param {string} name - имя пользователя данного комментария, которое формируется случайным образом из массивов NAMES[] + SURNAMES[]
 * @return {array} - массив объектов (комментариев)
 */
const getComment = () => {
  const commentId = createId(1, 100);
  return {
    id: commentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: `${getRandomArrayElement(MESSAGES)}`,
    name: `${getRandomArrayElement(NAMES) } ${ getRandomArrayElement(SURNAMES)}`
  };
};

/**
 * Функция по созданию массива карточек фото, вкл. в себя id, ссылку на фото, описание фото, кол-во лайков, массив комментариев
 * @param {number} id - идентификатор фото
 * @param {string} url - ссылка на фото, которая формируется по правилу photos/{{id от 1 до 25}}.jpg
 * @param {string} description - случайное описание под фото
 * @param {number} likes - случайное количество лайков от 0 до 100
 * @param {array} comments - массив комментариев из getComment
 */
const getPhotosDescriptions = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTIONS[index - 1],
  // description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length)],
  likes: getRandomInteger(0, 100),
  comments: Array.from({length: getRandomInteger(0, 15) }, getComment)
});

// Экспорт функции, содержащей массив, в котором хранятся все данные
export const getPhotosData = (num) => {
  const photoDescriptions = Array.from({length: num}, (_, index) => getPhotosDescriptions(index + 1));
  return photoDescriptions;
};
