Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/chlorpromazine-sup.mol2").then(function (o) {
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/0',color:'orange'})
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/1',color:'element'})
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