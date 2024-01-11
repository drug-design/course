var loadedMolecule;
var moleculeRepresentations = [];

var modelControls = [
    { id: 'id-0', label: 'Pro-Leu-Gly-NH2',  checked: true,   sele: '/3 and not hydrogen' },
    { id: 'id-1', label: 'Peptide Analog',    checked: false,  sele: '/0 and not hydrogen' },
    { id: 'id-2', label: 'Validation - Analog 1',  checked: false,  sele: '/2 and not hydrogen' }, 
    { id: 'id-3', label: 'Validation - Analog 2', checked: false,  sele: '/1 and not hydrogen' },  
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
stage.loadFile("./../../molecules/pharmacophore-elucidation/dopamine-browser.mol2").then(function (o) {
  loadedMolecule = o;

  var representation;
  var current_pos = 0

// //volume active
// control = modelControls[0]
// console.log("control.sele"+control.sele);
// representation = o.addRepresentation('surface', { sele: control.sele,  colorScheme: 'electrostatic', surfaceType: 'av', lazy: true, opacity: 0.2, color: 'white' })
// representation.setVisibility(control.checked);
// moleculeRepresentations.push(representation); 

  control = modelControls[0] 
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'blue' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  control = modelControls[1] 
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'red' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  control = modelControls[2]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'yellow' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);

  control = modelControls[3]
  representation = o.addRepresentation('line', { multipleBond: 'symmetric', sele: control.sele, color: 'orange' })
  representation.setVisibility(control.checked);
  moleculeRepresentations.push(representation);  

  stage.autoView();
  stage.viewerControls.zoom(0.4);
});

