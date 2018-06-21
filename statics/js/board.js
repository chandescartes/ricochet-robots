
Stage({
  name: 'bg',
  image: {
    url: 'res/grid2.png',
    ratio: boardValues.ratio,
  },
  textures: {
    prerendered: {
      x: boardValues.x, y: boardValues.y, width: boardValues.dim, height: boardValues.dim,
    },
  },
});
