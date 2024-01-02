Promise.all([
  stage.loadFile("./../../molecules/3d-database-searching/bio-flexible-folded.sd").then(function (o) {
     o.addRepresentation('ball+stick', {multipleBond: 'symetric',color:'element', sele:'/0'})
     o.addRepresentation('ball+stick', {multipleBond: 'symetric',color:'orange', sele: '/1'})
    return o
  }),
]).then(function (ol) {
stage.autoView();

setTimeout(() => {
  // Calculate the center of the bounding box of the superimposed structures
  let box = ol[0].structure.getBoundingBox();
  let center = box.getCenter().clone();
  stage.animationControls.move(center, 0); // Instantly move the center of rotation to the new center
  stage.viewerControls.zoom(0.5)
}, 50);


})