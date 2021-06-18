
const images = [
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_640.jpg',
    original: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg',
    description: 'Elephant Trunk Tusks',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2018/08/19/12/23/photoshop-3616540_640.jpg',
    original: 'https://cdn.pixabay.com/photo/2018/08/19/12/23/photoshop-3616540_1280.jpg',
    description: 'Photoshop Bear Woman',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_640.jpg',
    original: 'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg',
    description: 'Sunset, Sunrise, Nature',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2017/07/27/02/23/space-2543838_640.jpg',
    original: 'https://cdn.pixabay.com/photo/2017/07/27/02/23/space-2543838_1280.jpg',
    description: 'Space',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_640.jpg',
    original: 'https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_1280.jpg',
    description: 'UFO',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2016/11/18/21/10/wolf-1836875_640.jpg',
    original: 'https://cdn.pixabay.com/photo/2016/11/18/21/10/wolf-1836875_1280.jpg',
    description: 'Wolf',
  },
];

// import images from './gallery-items.js';

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

const imagesContainer = document.querySelector('.js-gallery');
const imagesMarkup = createImagesCaredMarkup(images);
const modal = document.querySelector('.js-lightbox');
const btnCloseModal = document.querySelector('.lightbox__button');
const modalImage = document.querySelector('.lightbox__image');
const backdrop = document.querySelector('.lightbox__overlay');
const lightboxContent = document.querySelector('.lightbox__content ');

// создание разметки
imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesCaredMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
	<a
		class="gallery__link"
		href="#"
	>
		<img
			class="gallery__image lazyload"
			data-src="${preview}"
      data-source="${original}"
			alt="${description}"
		/>
	</a>
</li>`;
    })
    .join('');
}

//      src="${preview}"
// 			data-source="${original}"
//

// открытие модального окна
imagesContainer.addEventListener('click', onOpenModalClick);

function onOpenModalClick(event) {
  const currentSrcImage = event.target.dataset.source;
  const currentAltImage = event.target.alt;

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  // вешаем слушатель на кнопку Esc
  window.addEventListener('keydown', onEscPress);
  // вешаем слушатель на кнопку  "вправо"
  window.addEventListener('keydown', onArrowRightPress);
  // вешаем слушатель на кнопку  "влево"
  window.addEventListener('keydown', onArrowLeftPreff);

  modal.classList.add('is-open');
  modalImage.src = `${currentSrcImage}`;
  modalImage.alt = `${currentAltImage}`;
}

// закрытие модалки
btnCloseModal.addEventListener('click', onCloseModalClick);

function onCloseModalClick(event) {
  // снимаем слушателя с кнопки Esc
  window.removeEventListener('keydown', onEscPress);
  // снимаем слушателя с кнопки "вправо"
  window.removeEventListener('keydown', onArrowRightPress);
  // снимаем слушателя с кнопки "влево"
  window.removeEventListener('keydown', onArrowLeftPreff);

  modal.classList.remove('is-open');
  modalImage.src = '';
  modalImage.alt = '';
}

// Закрытие модального окна по клику на div.lightbox__overlay.
backdrop.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  onCloseModalClick();
}

// Закрытие модального окна по нажатию клавиши ESC.
function onEscPress(event) {
  if (event.code === 'Escape') {
    onCloseModalClick();
  }
}

// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

// Пролистывание изображений при нажатии клавиши "вправо"
function onArrowRightPress(event) {
  if (event.code === 'ArrowRight') {
    const currentIndex = images.map(e => e.original).indexOf(modalImage.src);
    if (currentIndex !== images.length - 1) {
      const nextIndexSrc = images[currentIndex + 1].original;
      const nextIndexDescription = images[currentIndex + 1].description;
      modalImage.src = `${nextIndexSrc}`;
      modalImage.alt = `${nextIndexDescription}`;
    }
  }
}

// Пролистывание изображений при нажатии клавиши "влево"
function onArrowLeftPreff(event) {
  if (event.code === 'ArrowLeft') {
    const currentIndex = images.map(e => e.original).indexOf(modalImage.src);
    if (currentIndex !== 0) {
      const nextIndexSrc = images[currentIndex - 1].original;
      const nextIndexDescription = images[currentIndex - 1].description;
      modalImage.src = `${nextIndexSrc}`;
      modalImage.alt = `${nextIndexDescription}`;
    }
  }
}

// ======================
