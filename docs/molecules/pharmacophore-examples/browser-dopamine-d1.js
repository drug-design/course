var loadedMolecule;
var moleculeRepresentations = [];

var modelControls = [
    //0  CY208243
    //1  dihydrexidine
    //2  apomorphine
    //3  A68930
    //4  abeorphine
    //5  SKF89626
    //6  fenoldopam
    //7  SKF75670
    //8  dopamine
    //9  pharmaco

    { id: 'id-0', label: 'dopamine (Ligand)',  checked: true,   sele: '/8' },
    { id: 'id-1', label: 'fenoldopam',    checked: false,  sele: '/6' },
    { id: 'id-2', label: 'CY208243',  checked: false,  sele: '/0' }, 
    { id: 'id-3', label: 'A68930', checked: false,  sele: '/3' }, 
    { id: 'id-4', label: 'SKF75670',     checked: false,  sele: '/7' },
    { id: 'id-5', label: 'SKF89626',   checked: false,  sele: '/5' }, 
    { id: 'id-6', label: 'abeorphine', checked: false,  sele: '/4' },
    { id: 'id-7', label: 'apomorphine', checked: false,  sele: '/2' }, 
    { id: 'id-8', label: 'dihydrexidine', checked: false,  sele: '/1' }, 
    { id: 'id-9', label: 'pharmacophore', checked: true,  sele: '/9' }, 
  
];

function toggleModel(modelIndex) {
  if (moleculeRepresentations[modelIndex]) {
      var isVisible = moleculeRepresentations[modelIndex].visible;
      moleculeRepresentations[modelIndex].setVisibility(!isVisible);
  }
}

function createElement(name, properties, style) {
  var el = document.createElement(name);
  Object.assign(el, properties);
  Object.assign(el.style, style);
  return el;
}

function addElement(el) {
  Object.assign(el.style, {
    position: 'absolute',
    zIndex: 10
  });
  stage.viewer.container.appendChild(el);
}

modelControls.forEach(function (control, index) {
  var checkbox = createElement('input', {
    type: 'checkbox',
    id: control.id,
    checked: control.checked,
    onchange: function () {
      toggleModel(index); // Pass the model index to the toggle function
    }
  }, { top: (120 + index * 24) + 'px', left: '12px' });

  addElement(checkbox);

  var label = createElement('label', {
    htmlFor: control.id,
    innerText: control.label
  }, { top: (120 + index * 24) + 'px', left: '34px', position: 'absolute', color: 'grey', fontSize: '12px' });

  addElement(label);
});

// Loading the file with multiple models
stage.loadFile("./../../molecules/pharmacophore-examples/browser-dopamine-d1.mol2").then(function (o) {
  loadedMolecule = o;

  var representation;
  var current_pos = 0

  control = modelControls[0] 
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'purple' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  control = modelControls[1] 
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'white' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  control = modelControls[2]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'skyblue' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  control = modelControls[3]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'orange' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);  

  control = modelControls[4]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'yellow' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  control = modelControls[5]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'green' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  control = modelControls[6]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'purple' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  control = modelControls[7]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'red' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  control = modelControls[8]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'purple' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  control = modelControls[9]
  representation = o.addRepresentation('ball+stick', { multipleBond: 'symmetric', sele: control.sele, color: 'yellow' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  stage.autoView();
  stage.viewerControls.zoom(0.4);
});

