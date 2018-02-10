
const bgDim = 480;
const vbDim = 600;

Stage((stage) => {
  stage.viewbox(vbDim, vbDim, mode = 'in-pad').pin('handle', -0.5);

  const bg = Stage.image('bg:prerendered')
    .appendTo(stage)
    .pin({
      handle: 0.5,
    });

  const wheelNode = Stage.image('wheel:default')
    .appendTo(bg)
    .pin({
      offset: 36,
      handle: 0.5,
      align: 0,
    })
    .on('click', function () { // don't use arrow for tween
      this.tween(1000).pin({
        offsetX: 443,
        offsetY: 443,
      }).ease('linear');
    });
});

Stage({
  name: 'wheel',
  image: {
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/wheel.png',
    ratio: 10,
  },
  textures: {
    default: {
      x: 0, y: 0, width: 20, height: 20,
    },
  },
});

Stage({
  name: 'bg',
  image: {
    url: 'res/grid2.png',
    ratio: 10,
  },
  textures: {
    prerendered: {
      x: 0, y: 0, width: bgDim, height: bgDim,
    },
  },
});
