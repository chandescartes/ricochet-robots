
Stage((stage) => {
  stage.viewbox(stageValues.dim, stageValues.dim, mode = 'in-pad').pin('handle', -globalValues.handle);

  const bg = Stage.image('bg:prerendered')
    .appendTo(stage)
    .pin({
      handle: globalValues.handle,
    });

  const wheelNode = Stage.image('wheel:default')
    .appendTo(bg)
    .pin({
      offset: initialValues.wheelOffset,
      handle: globalValues.handle,
      align: initialValues.wheelAlign,
    })
    .on('click', function () { // don't use arrow for tween
      this.tween(1000).pin({
        offsetX: 443,
        offsetY: 443,
      }).ease('linear');
    });
});
