// ###################################################################
// ############## AUTO-GENERATED FILE. DO NOT EDIT. ##################
// ###################################################################


var color = "element";

var zoom = "0.4";

var time = "1000";

var type = "licorice";

var total = "4";

var sele = " and not hydrogen";

var format = "mol2";

var chapter = "structure-activity-relationships";

var molecule_id = "probing-aromatic-ring";


function autoConvertToRadians(rotationArray) {
    var threshold = 5; // Threshold to distinguish between radians and degrees
    var degToRad = Math.PI / 180;
    var result = rotationArray.slice(); // Create a copy of the input array

    // Check if any of the rotation values are likely in degrees
    if (Math.abs(rotationArray[0]) >= threshold || Math.abs(rotationArray[1]) >= threshold || Math.abs(rotationArray[2]) >= threshold) {
        // Convert from degrees to radians
        result = [
            rotationArray[0] * degToRad,
            rotationArray[1] * degToRad,
            rotationArray[2] * degToRad
        ];
    }

    return result;
}




if (typeof rotation !== 'undefined' && rotation !== null) {
    var elements = rotation.replace(/[\[\]]/g, '').split(',');
    rotation = elements.map(function(elem) {
        return parseFloat(elem);
    });
}

stage.loadFile("./../../molecules/"+ chapter +"/"+molecule_id+"."+format).then(function (o) {  

    if (typeof rotation !== 'undefined' && rotation !== null) {
        var rotationRadians = autoConvertToRadians(rotation);
        o.setRotation(rotationRadians)
    }

    // Flag to check if autoView and zoom have been done
    let isViewAdjusted = false;

    // Function to display a molecule
    function displayMolecule(modelIndex) {
      // Clear previous representations
      o.removeAllRepresentations();
      // Add new representation for the current molecule
      o.addRepresentation(type, {
          multipleBond: 'symetric',
          sele: '/' + modelIndex + sele, // Selects the molecule based on model index
          color: color
      });

      // Adjust view only for the first molecule
      if (!isViewAdjusted) {
          stage.autoView();
          stage.viewerControls.zoom(parseFloat(zoom));
          isViewAdjusted = true;
      }
  }

  // Loop through molecules with a delay
  let currentMolecule = 0;
  const totalMolecules = parseInt(total); // Update this with the actual number of molecules in the file
  function loopMolecules() {
      displayMolecule(currentMolecule);
      currentMolecule = (currentMolecule + 1) % totalMolecules;
      setTimeout(loopMolecules, parseInt(time)); // 1000 milliseconds delay
  }

  loopMolecules(); // Start the loop
});