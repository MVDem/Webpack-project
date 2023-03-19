export const galeryLists = (item) => {
  const itemEl = document.createElement('div');
  itemEl.classList = 'galery-item';

  if (item.type === 'pic') {
    const imageEl = document.createElement('img');
    imageEl.classList = 'galery-item__image';
    imageEl.src = item.resource;
    itemEl.appendChild(imageEl);
  } else if (item.type === 'audio') {
    const audioEl = document.createElement('audio');
    audioEl.classList = 'galery-item__audio';
    audioEl.controls = 'controls';
    audioEl.src = item.resource;
    itemEl.appendChild(audioEl);
  } else if (item.type === 'video') {
    const videoEl = document.createElement('video');
    videoEl.classList = 'galery-item__video';
    videoEl.controls = 'controls';
    videoEl.src = item.resource;
    itemEl.appendChild(videoEl);
  }

  const titleEl = document.createElement('span');
  titleEl.classList = 'galery-item__title';
  titleEl.textContent = item.title;

  itemEl.appendChild(titleEl);

  return itemEl;
};
