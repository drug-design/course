var loadedMolecule;
var moleculeRepresentations = [];

var modelControls = [
  { id: 'id-0', label: 'active 1',        checked: true,  sele: '/1'  },
  { id: 'id-1', label: 'active 2',        checked: true,  sele: '/3'  },
  { id: 'id-2', label: 'active 3',        checked: true,  sele: '/6'  }, 
  { id: 'id-3', label: 'active 4',        checked: true,  sele: '/4'   }, 
  { id: 'id-4', label: 'volume active',   checked: false, sele: '/1 or /3 or /6 or /4'},
  { id: 'id-5', label: 'inactive 1',      checked: false,  sele: '/0'  }, 
  { id: 'id-6', label: 'inactive 2',      checked: false,  sele: '/2'  },
  { id: 'id-7', label: 'inactive 3',      checked: false,  sele: '/7'  }, 
  { id: 'id-8', label: 'inactive 4',      checked: false,  sele: '/5'   },
  { id: 'id-9', label: 'volume inactive', checked: false, sele: '/0 or /2 or /7 or /5'}
  
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
stage.loadFile("./../../molecules/3d-database-searching/volume-active-mol.mol2").then(function (o) {
  loadedMolecule = o;

  var representation;
  var current_pos = 0

  // active 1
  control = modelControls[0] 
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'lime' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  //active 2
  control = modelControls[1] 
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'lime' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  // active 3
  control = modelControls[2]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'lime' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  //active 4
  control = modelControls[3]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'lime' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);  

  //volume active
  control = modelControls[4]
  console.log("control.sele"+control.sele);
  representation = o.addRepresentation('surface', { sele: control.sele,  colorScheme: 'electrostatic', surfaceType: 'av', lazy: true, opacity: 0.5, color: 'lime' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  // inactive 1
  control = modelControls[5]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'red' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  //inactive 2
  control = modelControls[6]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'red' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  //inactive 3
  control = modelControls[7]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'red' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  //inactive 4
  control = modelControls[8]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'red' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);  

  //volume active
  control = modelControls[9]
  representation = o.addRepresentation('surface', {sele: control.sele, colorScheme: 'electrostatic',surfaceType: 'av',lazy: true, opacity: 0.5, color: 'red' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);  

  stage.autoView();
  stage.viewerControls.zoom(0.4);
});

