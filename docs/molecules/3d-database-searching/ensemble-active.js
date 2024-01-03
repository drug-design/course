var loadedMolecule;
var moleculeRepresentations = [];

var modelControls = [
    { id: 'id-10', label: 'Share Volume',  checked: true,   sele: '/0 or /1 or /2 or /3 or /4 or /5 or /6 or /7 or /8' },  
    { id: 'id-0', label: 'mol1',  checked: true,   sele: '/0' },
    { id: 'id-1', label: 'mol2',    checked: true,  sele: '/1' },
    { id: 'id-2', label: 'mol3',  checked: true,  sele: '/2' }, 
    { id: 'id-3', label: 'mol4', checked: true,  sele: '/3' }, 
    { id: 'id-4', label: 'mol5',     checked: true,  sele: '/4' },
    { id: 'id-5', label: 'mol6',   checked: true,  sele: '/5' }, 
    { id: 'id-6', label: 'mol7', checked: true,  sele: '/6' },
    { id: 'id-7', label: 'mol8', checked: true,  sele: '/7' },
    { id: 'id-8', label: 'mol9', checked: true,  sele: '/8' }, 
  
  // Add more models as needed
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
stage.loadFile("./../../molecules/3d-database-searching/ensemble-active.sd").then(function (o) {
  loadedMolecule = o;

  var representation;
  var current_pos = 0



  //volume active
  control = modelControls[0]
  console.log("control.sele"+control.sele);
  representation = o.addRepresentation('surface', { sele: control.sele,  colorScheme: 'electrostatic', surfaceType: 'av', lazy: true, opacity: 0.2, color: 'white' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);  

  //active 2
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
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'red' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  control = modelControls[9]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'white' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);  

  stage.autoView();
  stage.viewerControls.zoom(0.2);
});

