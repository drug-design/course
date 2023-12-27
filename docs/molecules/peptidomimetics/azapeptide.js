var molecules = {};

const commonRepresentations = [
  { type: "licorice", color: "element" }
];

var moleculeControls = [
  { index:1, id: 'peptide', label: 'peptide', checked: true },
  { index:2, id: 'azapeptide', label: 'azapeptide', checked: true },
];

var moleculeDetails = moleculeControls.map(control => {
  return {
      index: control.index,
      id: control.id,
      name: control.label,
      representations: commonRepresentations
  };
});

function toggleMolecule(moleculeId) {
  var molecule = molecules[moleculeId];
  if (molecule) {
    molecule.setVisibility(!molecule.visible);
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

function loadMolecule(molecule) {
  return stage.loadFile("./../../molecules/peptidomimetics/azapeptide-"+molecule.index+".sd", { label: molecule.name }).then(o => {
      molecule.representations.forEach(repr => {
          o.addRepresentation(repr.type, repr);
      });
      return o;
  });
}

Promise.all(moleculeDetails.map(loadMolecule)).then(function (loadedMolecules) {
  stage.autoView();
  stage.viewerControls.zoom(0.4);

  loadedMolecules.forEach(function (loadedMolecule, index) {
      var control = moleculeControls[index];
      if (control) {
          molecules[control.id] = loadedMolecule;
          loadedMolecule.setVisibility(control.checked);
      }
  });
});





// Promise.all([
//   stage.loadFile("./../../molecules/peptidomimetics/",{name: 'renin-red'}).then(function (o) {
//     o.addRepresentation("backbone", {color: "red"})
//     o.addRepresentation("licorice", {color: 'pink', sele: 'TYR and 75'})
//     return o
//   }),

//   stage.loadFile("./../../molecules/molecular-similarity/receptor-conformational-change-renin-2.pdb",{name: 'renin-blue'}).then(function (o) {
//     o.addRepresentation("backbone", {color: "blue"})
//     o.addRepresentation("licorice", {color: 'skyblue', sele: 'TYR and 83'})
//     return o
//   }),

//   stage.loadFile("./../../molecules/molecular-similarity/receptor-conformational-change-renin-ligand.sd",{name: 'lig'}).then(function (o) {
//     o.addRepresentation("licorice", {color: "yellow"})
//     return o
//   })
// ]).then(function (ol) {
//   stage.autoView();
//   stage.viewerControls.zoom(0.4);

//   ol.forEach(function (loadedMolecule, index) {
//     var control = moleculeControls[index];
//     if (control) {
//       molecules[control.id] = loadedMolecule;
//       loadedMolecule.setVisibility(control.checked);
//     }
//   });

// });