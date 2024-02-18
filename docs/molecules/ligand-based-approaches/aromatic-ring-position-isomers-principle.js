// ###################################################################
// ############## AUTO-GENERATED FILE. DO NOT EDIT. ##################
// ###################################################################


var color = "element";

var zoom = "0.3";

var time = "500";

var auto = "true";

var control = "true";

var type = "licorice";

var total = "4";

var sele = " and not hydrogen";

var format = "mol2";

var chapter = "ligand-based-approaches";

var molecule_id = "aromatic-ring-position-isomers-principle";



var auto_boolean = true;




var control_boolean = true;



var step = 1;


let currentMolecule = 0;
const totalMolecules = parseInt(total); 


function autoConvertToRadians(rotationArray) {
    var threshold = 5; 
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

function createNavigationButton(id, label, onClickCallback, topOffset, leftOffset) {
    var button = document.createElement('button');
    button.type = 'button';
    button.id = id;
    button.innerText = label;
    button.onclick = onClickCallback;

    var style = {
        position: 'absolute',
        top: topOffset + 'px',
        left: leftOffset + 'px',
        zIndex: 10, 
        color: 'white', 
        background: 'rgba(0, 0, 0, 0.5)', 
        padding: '5px 10px', 
        cursor: 'pointer' 
    };
    Object.assign(button.style, style);

    if (control_boolean)
        stage.viewer.container.appendChild(button);
}

var currentPositionDisplay;

function updatePositionDisplay(currentPosition, totalPositions) {
    if (!currentPositionDisplay) {
        currentPositionDisplay = document.createElement('div');
        currentPositionDisplay.style.position = 'absolute';
        currentPositionDisplay.style.top = '100px';
        currentPositionDisplay.style.left = '100px'; 
        currentPositionDisplay.style.zIndex = 10;
        currentPositionDisplay.style.color = 'yellow'; 
        currentPositionDisplay.style.background = 'rgba(0, 0, 0, 0.5)'; 
        currentPositionDisplay.style.padding = '2px 5px'; 
        currentPositionDisplay.style.fontSize = '14px'; 
        if (control_boolean)
            stage.viewer.container.appendChild(currentPositionDisplay);
    }

    currentPositionDisplay.innerText = `${currentPosition}/${totalPositions}`;
}

stage.loadFile("./../../molecules/"+ chapter +"/"+molecule_id+"."+format).then(function (o) {  

    let autoIntervalId;

    if (typeof rotation !== 'undefined' && rotation !== null) {
        var rotationRadians = autoConvertToRadians(rotation);
        o.setRotation(rotationRadians)
    }

    // Flag to check if autoView and zoom have been done
    let isViewAdjusted = false;

createNavigationButton('prevButton', 'Previous', function() {
        console.log('Previous clicked');
        currentMolecule = (currentMolecule - 1 + totalMolecules) % totalMolecules;
        updatePositionDisplay(currentMolecule + 1, totalMolecules);
        displayMolecule(currentMolecule);
    }, 100, 12); 
    createNavigationButton('nextButton', 'Next', function() {
        next();
    }, 100, 160); 

    function next() {
        currentMolecule = (currentMolecule + 1) % totalMolecules;
        updatePositionDisplay(currentMolecule + 1, totalMolecules); 
        displayMolecule(currentMolecule);
    }

    function createAutoButton() {
        createNavigationButton('autoButton', auto ? 'Stop' : 'Start', function() {
            console.log('Auto clicked');
            if (autoIntervalId) {
                // If auto-play is running, stop it
                clearInterval(autoIntervalId);
                autoIntervalId = null;
                this.innerText = 'Start'; 
            } else {
                // Start auto-play
                autoIntervalId = setInterval(next, parseInt(time));
                this.innerText = 'Stop'; 
            }
        }, 100, 220); // Position the "Auto" button
    }
    
    // Call 'createAutoButton' after defining 'next' and the other necessary functions
    createAutoButton();    

    function displayMolecule(modelIndex) {
        o.removeAllRepresentations();
        for (let i = 0; i < step; i++) { // Loop through 3 molecules
            let index = (modelIndex + i) % totalMolecules; // Ensure index wraps around
            o.addRepresentation(type, {
                multipleBond: 'symmetric',
                sele: '/' + index + sele, // Adjust selection for each molecule
                color: color
            });
        }
        // Adjust view only once, not needed in loop
        if (!isViewAdjusted) {
            stage.autoView();
            stage.viewerControls.zoom(parseFloat(zoom));
            isViewAdjusted = true;
        }
    }


  updatePositionDisplay(currentMolecule+1, totalMolecules);
  displayMolecule(currentMolecule);

  if (!autoIntervalId && auto) { // Check if the auto-play isn't already running
    // Start auto-play after a 1-second delay
    setTimeout(function() {
        autoIntervalId = setInterval(next, parseInt(time, 10));
    }, 1000); // Delay in milliseconds
}    


});