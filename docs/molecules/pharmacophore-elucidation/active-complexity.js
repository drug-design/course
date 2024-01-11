Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/active-complexity.mol2").then(function (o) {
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/0',color:'element'})
       o.addRepresentation('ball+stick', {multipleBond: 'symetric',color:'element', sele:'1:A.O75 or 1:A.C10'})
       o.addRepresentation('ball+stick', {multipleBond: 'symetric',color:'element', sele:'1:A.H77 or 1:A.N1'})
       o.addRepresentation('ball+stick', {multipleBond: 'symetric',color:'element', sele:'1:A.C9 or 1:A.C16 or 1:A.C24 or 1:A.C33 or 1:A.C15 or 1:A.C23'})
       o.addRepresentation('ball+stick', {multipleBond: 'symetric',color:'element', sele:'1:A.C27 or 1:A.C36 or 1:A.C43 or 1:A.C35 or 1:A.C26 or 1:A.C18'})
       o.addRepresentation('ball+stick', {multipleBond: 'symetric',color:'element', sele:'1:A.C38 or 1:A.C30 or 1:A.C20 or 1:A.C29 or 1:A.C37 or 1:A.C44'})

       return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
  setTimeout(() => {
    // Calculate the center of the bounding box of the superimposed structures
    let box = ol[0].structure.getBoundingBox();
    let center = box.getCenter().clone();
    stage.animationControls.move(center, 0); // Instantly move the center of rotation to the new center
}, 50);
})
