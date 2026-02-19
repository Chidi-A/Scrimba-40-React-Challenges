import { nanoid } from 'nanoid';

export default [
  {
    id: nanoid(),
    currentImage: './enemy1A.png',
    altImage: './enemy1B.png',
    orientation: 'left',
    position: {
      top: 210,
      left: 157,
    },
  },
  {
    id: nanoid(),
    currentImage: './enemy2A.png',
    altImage: './enemy2B.png',
    orientation: 'right',
    position: {
      top: 105,
      left: 187,
    },
  },
  {
    id: nanoid(),
    currentImage: './enemy3A.png',
    altImage: './enemy3B.png',
    orientation: 'right',
    position: {
      top: 165,
      left: 165,
    },
  },
];
