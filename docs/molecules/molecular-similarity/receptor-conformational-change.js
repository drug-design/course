var molecules = {};

var moleculeControls = [
  { id: 'renin-red', label: 'Renin Red', checked: true },
  { id: 'renin-blue', label: 'Renin Blue', checked: true },
  { id: 'lig', label: 'Ligand', checked: true }
];

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

moleculeControls.forEach(function (control, index) {
  var checkbox = createElement('input', {
    type: 'checkbox',
    id: control.id,
    checked: control.checked,
    onchange: function () {
      toggleMolecule(control.id);
    }
  }, { top: (120 + index * 24) + 'px', left: '12px' });

  addElement(checkbox);

  var label = createElement('label', {
    htmlFor: control.id,
    innerText: control.label
  }, { 
    top: (120 + index * 24) + 'px', 
    left: '34px', // Adjust this value as needed to position the label correctly
    position: 'absolute',
    color: 'grey', // Text color set to grey
    fontSize: '12px' // Smaller font size, adjust as needed
  });

  addElement(label);
});



function toggleMolecule(moleculeId) {
  var molecule = molecules[moleculeId];
  if (molecule) {
    molecule.setVisibility(!molecule.visible);
  }
}

Promise.all([
  stage.loadFile("./../../molecules/molecular-similarity/receptor-conformational-change-renin-1.pdb",{name: 'renin-red'}).then(function (o) {
    o.addRepresentation("backbone", {color: "red"})
    o.addRepresentation("licorice", {color: 'pink', sele: 'TYR and 75'})
    return o
  }),

  stage.loadFile("./../../molecules/molecular-similarity/receptor-conformational-change-renin-2.pdb",{name: 'renin-blue'}).then(function (o) {
    o.addRepresentation("backbone", {color: "blue"})
    o.addRepresentation("licorice", {color: 'skyblue', sele: 'TYR and 83'})
    return o
  }),

  stage.loadFile("./../../molecules/molecular-similarity/receptor-conformational-change-renin-ligand.sd",{name: 'lig'}).then(function (o) {
    o.addRepresentation("licorice", {color: "yellow"})
    return o
  })
]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4);

  // Store references to the loaded molecules and set their initial visibility
  molecules['renin-red'] = ol[0];
  molecules['renin-red'].setVisibility(moleculeControls.find(c => c.id === 'renin-red').checked);

  molecules['renin-blue'] = ol[1];
  molecules['renin-blue'].setVisibility(moleculeControls.find(c => c.id === 'renin-blue').checked);

  molecules['lig'] = ol[2];
  molecules['lig'].setVisibility(moleculeControls.find(c => c.id === 'lig').checked);
});













