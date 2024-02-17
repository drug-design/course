//###################################################################
//############## AUTO-GENERATED FILE. DO NOT EDIT. ##################
//###################################################################


var loadedMolecule;
var moleculeRepresentations = [];


var checkbox_boolean = true;



var no_ui_boolean = false;



var checkbox = "true";

var format = "sd";

var zoom = "0.4";

var chapter = "3d-database-searching";

var molecule_id = "centroid-browser";


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
    id: 'centroid',
    label: 'centroid',
    checked: true,
    sele: '/7 and not hydrogen',
    type: 'line',
    color: 'green',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_1 = {
    id: 'Phenyl',
    label: 'Phenyl',
    checked: true,
    sele: '/2 and not hydrogen',
    type: 'line',
    color: 'blue',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_2 = {
    id: 'Pyridine',
    label: 'Pyridine',
    checked: true,
    sele: '/3 and not hydrogen',
    type: 'line',
    color: 'yellow',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_3 = {
    id: 'Thiophene',
    label: 'Thiophene',
    checked: true,
    sele: '/1 and not hydrogen',
    type: 'line',
    color: 'orange',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_4 = {
    id: 'Furan',
    label: 'Furan',
    checked: true,
    sele: '/5 and not hydrogen',
    type: 'line',
    color: 'grey',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_5 = {
    id: 'Pyrrole',
    label: 'Pyrrole',
    checked: true,
    sele: '/0 and not hydrogen',
    type: 'line',
    color: 'red',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_6 = {
    id: 'Imidazole',
    label: 'Imidazole',
    checked: true,
    sele: '/6 and not hydrogen',
    type: 'line',
    color: 'skyblue',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_7 = {
    id: 'Isoxazole',
    label: 'Isoxazole',
    checked: true,
    sele: '/4 and not hydrogen',
    type: 'line',
    color: 'lime',  // 'defaultColor' is a placeholder, replace with a default color if needed
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


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_2 = createElement('input', {
            type: 'checkbox',
            id: modelControl_2.id,
            checked: modelControl_2.checked,
            onchange: function () {
                toggleModel(2); // Pass the model index to the toggle function
            }
        }, { top: (120 + 2 * 24) + 'px', left: '12px' });

        addElement(checkbox_2);
    } else {
        var colorSquare_2 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_2.color,
            position: 'absolute',
            top: (120 + 2 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_2);
    }


    var label_2 = createElement('label', {
        htmlFor: modelControl_2.id,
        innerText: modelControl_2.label
    }, { top: (120 + 2 * 24) + 'px', left: '34px' });

    addElement(label_2);



    var label_2 = createElement('label', {
        htmlFor: modelControl_2.id,
        innerText: modelControl_2.label
    }, { 
        top: (120 + 2 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_2);
}


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_3 = createElement('input', {
            type: 'checkbox',
            id: modelControl_3.id,
            checked: modelControl_3.checked,
            onchange: function () {
                toggleModel(3); // Pass the model index to the toggle function
            }
        }, { top: (120 + 3 * 24) + 'px', left: '12px' });

        addElement(checkbox_3);
    } else {
        var colorSquare_3 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_3.color,
            position: 'absolute',
            top: (120 + 3 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_3);
    }


    var label_3 = createElement('label', {
        htmlFor: modelControl_3.id,
        innerText: modelControl_3.label
    }, { top: (120 + 3 * 24) + 'px', left: '34px' });

    addElement(label_3);



    var label_3 = createElement('label', {
        htmlFor: modelControl_3.id,
        innerText: modelControl_3.label
    }, { 
        top: (120 + 3 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_3);
}


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_4 = createElement('input', {
            type: 'checkbox',
            id: modelControl_4.id,
            checked: modelControl_4.checked,
            onchange: function () {
                toggleModel(4); // Pass the model index to the toggle function
            }
        }, { top: (120 + 4 * 24) + 'px', left: '12px' });

        addElement(checkbox_4);
    } else {
        var colorSquare_4 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_4.color,
            position: 'absolute',
            top: (120 + 4 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_4);
    }


    var label_4 = createElement('label', {
        htmlFor: modelControl_4.id,
        innerText: modelControl_4.label
    }, { top: (120 + 4 * 24) + 'px', left: '34px' });

    addElement(label_4);



    var label_4 = createElement('label', {
        htmlFor: modelControl_4.id,
        innerText: modelControl_4.label
    }, { 
        top: (120 + 4 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_4);
}


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_5 = createElement('input', {
            type: 'checkbox',
            id: modelControl_5.id,
            checked: modelControl_5.checked,
            onchange: function () {
                toggleModel(5); // Pass the model index to the toggle function
            }
        }, { top: (120 + 5 * 24) + 'px', left: '12px' });

        addElement(checkbox_5);
    } else {
        var colorSquare_5 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_5.color,
            position: 'absolute',
            top: (120 + 5 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_5);
    }


    var label_5 = createElement('label', {
        htmlFor: modelControl_5.id,
        innerText: modelControl_5.label
    }, { top: (120 + 5 * 24) + 'px', left: '34px' });

    addElement(label_5);



    var label_5 = createElement('label', {
        htmlFor: modelControl_5.id,
        innerText: modelControl_5.label
    }, { 
        top: (120 + 5 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_5);
}


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_6 = createElement('input', {
            type: 'checkbox',
            id: modelControl_6.id,
            checked: modelControl_6.checked,
            onchange: function () {
                toggleModel(6); // Pass the model index to the toggle function
            }
        }, { top: (120 + 6 * 24) + 'px', left: '12px' });

        addElement(checkbox_6);
    } else {
        var colorSquare_6 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_6.color,
            position: 'absolute',
            top: (120 + 6 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_6);
    }


    var label_6 = createElement('label', {
        htmlFor: modelControl_6.id,
        innerText: modelControl_6.label
    }, { top: (120 + 6 * 24) + 'px', left: '34px' });

    addElement(label_6);



    var label_6 = createElement('label', {
        htmlFor: modelControl_6.id,
        innerText: modelControl_6.label
    }, { 
        top: (120 + 6 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_6);
}


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_7 = createElement('input', {
            type: 'checkbox',
            id: modelControl_7.id,
            checked: modelControl_7.checked,
            onchange: function () {
                toggleModel(7); // Pass the model index to the toggle function
            }
        }, { top: (120 + 7 * 24) + 'px', left: '12px' });

        addElement(checkbox_7);
    } else {
        var colorSquare_7 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_7.color,
            position: 'absolute',
            top: (120 + 7 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_7);
    }


    var label_7 = createElement('label', {
        htmlFor: modelControl_7.id,
        innerText: modelControl_7.label
    }, { top: (120 + 7 * 24) + 'px', left: '34px' });

    addElement(label_7);



    var label_7 = createElement('label', {
        htmlFor: modelControl_7.id,
        innerText: modelControl_7.label
    }, { 
        top: (120 + 7 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_7);
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

    
        

        var representation_2 = o.addRepresentation(modelControl_2.type, {
            multipleBond: 'symmetric',
            sele: modelControl_2.sele,
            color: modelControl_2.color});

         
    
    representation_2.setVisibility(modelControl_2.checked);
    moleculeRepresentations.push(representation_2);

    
        

        var representation_3 = o.addRepresentation(modelControl_3.type, {
            multipleBond: 'symmetric',
            sele: modelControl_3.sele,
            color: modelControl_3.color});

         
    
    representation_3.setVisibility(modelControl_3.checked);
    moleculeRepresentations.push(representation_3);

    
        

        var representation_4 = o.addRepresentation(modelControl_4.type, {
            multipleBond: 'symmetric',
            sele: modelControl_4.sele,
            color: modelControl_4.color});

         
    
    representation_4.setVisibility(modelControl_4.checked);
    moleculeRepresentations.push(representation_4);

    
        

        var representation_5 = o.addRepresentation(modelControl_5.type, {
            multipleBond: 'symmetric',
            sele: modelControl_5.sele,
            color: modelControl_5.color});

         
    
    representation_5.setVisibility(modelControl_5.checked);
    moleculeRepresentations.push(representation_5);

    
        

        var representation_6 = o.addRepresentation(modelControl_6.type, {
            multipleBond: 'symmetric',
            sele: modelControl_6.sele,
            color: modelControl_6.color});

         
    
    representation_6.setVisibility(modelControl_6.checked);
    moleculeRepresentations.push(representation_6);

    
        

        var representation_7 = o.addRepresentation(modelControl_7.type, {
            multipleBond: 'symmetric',
            sele: modelControl_7.sele,
            color: modelControl_7.color});

         
    
    representation_7.setVisibility(modelControl_7.checked);
    moleculeRepresentations.push(representation_7);

    


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