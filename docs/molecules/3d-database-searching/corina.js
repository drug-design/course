//###################################################################
//############## AUTO-GENERATED FILE. DO NOT EDIT. ##################
//###################################################################


var loadedMolecule;
var moleculeRepresentations = [];


var checkbox_boolean = false;



var no_ui_boolean = true;



var no_ui = "true";

var format = "sd";

var zoom = "0.4";

var chapter = "3d-database-searching";

var molecule_id = "corina";


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




if (typeof distance !== 'undefined' && distance !== null) {
    var distance_array = distance.split(',').map(function(pair) {
        return pair.split('-');
    });
}

if (typeof no_ui !== 'undefined' && no_ui !== null) {
    no_ui = true
}
else {
    var no_ui = false
}

if (typeof rotation !== 'undefined' && rotation !== null) {
    var elements = rotation.replace(/[\[\]]/g, '').split(',');
    rotation = elements.map(function(elem) {
        return parseFloat(elem);
    });
}



var modelControl_0 = {
    id: 'Reference',
    label: 'Reference',
    checked: true,
    sele: '/0 and not hydrogen',
    type: 'licorice',
    color: 'skyblue',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_1 = {
    id: 'New Design',
    label: 'New Design',
    checked: true,
    sele: '/1 and not hydrogen',
    type: 'licorice',
    color: 'white',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};


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


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_0 = createElement('input', {
            type: 'checkbox',
            id: modelControl_0.id,
            checked: modelControl_0.checked,
            onchange: function () {
                toggleModel(0); // Pass the model index to the toggle function
            }
        }, { top: (120 + 0 * 24) + 'px', left: '12px' });

        addElement(checkbox_0);
    } else {
        var colorSquare_0 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_0.color,
            position: 'absolute',
            top: (120 + 0 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_0);
    }


    var label_0 = createElement('label', {
        htmlFor: modelControl_0.id,
        innerText: modelControl_0.label
    }, { top: (120 + 0 * 24) + 'px', left: '34px' });

    addElement(label_0);



    var label_0 = createElement('label', {
        htmlFor: modelControl_0.id,
        innerText: modelControl_0.label
    }, { 
        top: (120 + 0 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_0);
}


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_1 = createElement('input', {
            type: 'checkbox',
            id: modelControl_1.id,
            checked: modelControl_1.checked,
            onchange: function () {
                toggleModel(1); // Pass the model index to the toggle function
            }
        }, { top: (120 + 1 * 24) + 'px', left: '12px' });

        addElement(checkbox_1);
    } else {
        var colorSquare_1 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_1.color,
            position: 'absolute',
            top: (120 + 1 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_1);
    }


    var label_1 = createElement('label', {
        htmlFor: modelControl_1.id,
        innerText: modelControl_1.label
    }, { top: (120 + 1 * 24) + 'px', left: '34px' });

    addElement(label_1);



    var label_1 = createElement('label', {
        htmlFor: modelControl_1.id,
        innerText: modelControl_1.label
    }, { 
        top: (120 + 1 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_1);
}



// Loading the file with multiple models
stage.loadFile("./../../molecules/"+ chapter +"/"+molecule_id+"."+format).then(function (o) {

    if (typeof rotation !== 'undefined' && rotation !== null) {
        var rotationRadians = autoConvertToRadians(rotation);
        o.setRotation(rotationRadians)
    }

    loadedMolecule = o;

    
        

        var representation_0 = o.addRepresentation(modelControl_0.type, {
            multipleBond: 'symmetric',
            sele: modelControl_0.sele,
            color: modelControl_0.color});

         
    
    representation_0.setVisibility(modelControl_0.checked);
    moleculeRepresentations.push(representation_0);

    
        

        var representation_1 = o.addRepresentation(modelControl_1.type, {
            multipleBond: 'symmetric',
            sele: modelControl_1.sele,
            color: modelControl_1.color});

         
    
    representation_1.setVisibility(modelControl_1.checked);
    moleculeRepresentations.push(representation_1);

    


    if (typeof distance !== 'undefined' && distance !== null) {
     o.addRepresentation('distance', {
        atomPair: distance_array,
        color: 'white',
        labelUnit: 'angstrom',
        labelVisible: false,
      })     
    }

    
    stage.autoView();
    stage.viewerControls.zoom(zoom);
    

});