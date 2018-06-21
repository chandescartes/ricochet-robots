
Stage({
  name: 'wheel',
  image: {
    url: '../../res/wheel.png',
    ratio: wheelValues.ratio,
  },
  textures: {
    default: {
      x: wheelValues.x, y: wheelValues.y, width: wheelValues.width, height: wheelValues.height,
    },
  },
});