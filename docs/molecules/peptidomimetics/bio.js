//###################################################################
//############## AUTO-GENERATED FILE. DO NOT EDIT. ##################
//###################################################################


var loadedMolecule;
var moleculeRepresentations = [];


var checkbox_boolean = true;



var no_ui_boolean = false;



var checkbox = "true";

var format = "sd";

var chapter = "peptidomimetics";

var molecule_id = "bio";


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
    id: 'Peptide Bond',
    label: 'Peptide Bond',
    checked: true,
    sele: '/0 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_1 = {
    id: 'Thio',
    label: 'Thio',
    checked: true,
    sele: '/1 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_2 = {
    id: 'Depsi',
    label: 'Depsi',
    checked: true,
    sele: '/2 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_3 = {
    id: 'Thioester',
    label: 'Thioester',
    checked: true,
    sele: '/3 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_4 = {
    id: 'Ketomethylene',
    label: 'Ketomethylene',
    checked: true,
    sele: '/4 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_5 = {
    id: 'N-methyl',
    label: 'N-methyl',
    checked: true,
    sele: '/5 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_6 = {
    id: 'Retro-inverso',
    label: 'Retro-inverso',
    checked: true,
    sele: '/6 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_7 = {
    id: 'Reduced Amide',
    label: 'Reduced Amide',
    checked: true,
    sele: '/7 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_8 = {
    id: 'sulfonamide',
    label: 'sulfonamide',
    checked: true,
    sele: '/8 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_9 = {
    id: 'Phosphonamide',
    label: 'Phosphonamide',
    checked: true,
    sele: '/9 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_10 = {
    id: 'Hydroxyethylene',
    label: 'Hydroxyethylene',
    checked: true,
    sele: '/10 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_11 = {
    id: 'Dihydroxyethylene',
    label: 'Dihydroxyethylene',
    checked: true,
    sele: '/11 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_12 = {
    id: 'E-Ethylene',
    label: 'E-Ethylene',
    checked: true,
    sele: '/12 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_13 = {
    id: 'Carba',
    label: 'Carba',
    checked: true,
    sele: '/13 and not hydrogen',
    type: 'line',
    color: 'skyblue',  // 'defaultColor' is a placeholder, replace with a default color if needed
    opacity: '0.5',
    color_scheme: 'electrostatic',
    surface_type: 'av'
};

var modelControl_14 = {
    id: 'Phosphinate',
    label: 'Phosphinate',
    checked: true,
    sele: '/14 and not hydrogen',
    type: 'line',
    color: 'element',  // 'defaultColor' is a placeholder, replace with a default color if needed
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


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_8 = createElement('input', {
            type: 'checkbox',
            id: modelControl_8.id,
            checked: modelControl_8.checked,
            onchange: function () {
                toggleModel(8); // Pass the model index to the toggle function
            }
        }, { top: (120 + 8 * 24) + 'px', left: '12px' });

        addElement(checkbox_8);
    } else {
        var colorSquare_8 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_8.color,
            position: 'absolute',
            top: (120 + 8 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_8);
    }


    var label_8 = createElement('label', {
        htmlFor: modelControl_8.id,
        innerText: modelControl_8.label
    }, { top: (120 + 8 * 24) + 'px', left: '34px' });

    addElement(label_8);



    var label_8 = createElement('label', {
        htmlFor: modelControl_8.id,
        innerText: modelControl_8.label
    }, { 
        top: (120 + 8 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_8);
}


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_9 = createElement('input', {
            type: 'checkbox',
            id: modelControl_9.id,
            checked: modelControl_9.checked,
            onchange: function () {
                toggleModel(9); // Pass the model index to the toggle function
            }
        }, { top: (120 + 9 * 24) + 'px', left: '12px' });

        addElement(checkbox_9);
    } else {
        var colorSquare_9 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_9.color,
            position: 'absolute',
            top: (120 + 9 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_9);
    }


    var label_9 = createElement('label', {
        htmlFor: modelControl_9.id,
        innerText: modelControl_9.label
    }, { top: (120 + 9 * 24) + 'px', left: '34px' });

    addElement(label_9);



    var label_9 = createElement('label', {
        htmlFor: modelControl_9.id,
        innerText: modelControl_9.label
    }, { 
        top: (120 + 9 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_9);
}


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_10 = createElement('input', {
            type: 'checkbox',
            id: modelControl_10.id,
            checked: modelControl_10.checked,
            onchange: function () {
                toggleModel(10); // Pass the model index to the toggle function
            }
        }, { top: (120 + 10 * 24) + 'px', left: '12px' });

        addElement(checkbox_10);
    } else {
        var colorSquare_10 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_10.color,
            position: 'absolute',
            top: (120 + 10 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_10);
    }


    var label_10 = createElement('label', {
        htmlFor: modelControl_10.id,
        innerText: modelControl_10.label
    }, { top: (120 + 10 * 24) + 'px', left: '34px' });

    addElement(label_10);



    var label_10 = createElement('label', {
        htmlFor: modelControl_10.id,
        innerText: modelControl_10.label
    }, { 
        top: (120 + 10 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_10);
}


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_11 = createElement('input', {
            type: 'checkbox',
            id: modelControl_11.id,
            checked: modelControl_11.checked,
            onchange: function () {
                toggleModel(11); // Pass the model index to the toggle function
            }
        }, { top: (120 + 11 * 24) + 'px', left: '12px' });

        addElement(checkbox_11);
    } else {
        var colorSquare_11 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_11.color,
            position: 'absolute',
            top: (120 + 11 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_11);
    }


    var label_11 = createElement('label', {
        htmlFor: modelControl_11.id,
        innerText: modelControl_11.label
    }, { top: (120 + 11 * 24) + 'px', left: '34px' });

    addElement(label_11);



    var label_11 = createElement('label', {
        htmlFor: modelControl_11.id,
        innerText: modelControl_11.label
    }, { 
        top: (120 + 11 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_11);
}


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_12 = createElement('input', {
            type: 'checkbox',
            id: modelControl_12.id,
            checked: modelControl_12.checked,
            onchange: function () {
                toggleModel(12); // Pass the model index to the toggle function
            }
        }, { top: (120 + 12 * 24) + 'px', left: '12px' });

        addElement(checkbox_12);
    } else {
        var colorSquare_12 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_12.color,
            position: 'absolute',
            top: (120 + 12 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_12);
    }


    var label_12 = createElement('label', {
        htmlFor: modelControl_12.id,
        innerText: modelControl_12.label
    }, { top: (120 + 12 * 24) + 'px', left: '34px' });

    addElement(label_12);



    var label_12 = createElement('label', {
        htmlFor: modelControl_12.id,
        innerText: modelControl_12.label
    }, { 
        top: (120 + 12 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_12);
}


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_13 = createElement('input', {
            type: 'checkbox',
            id: modelControl_13.id,
            checked: modelControl_13.checked,
            onchange: function () {
                toggleModel(13); // Pass the model index to the toggle function
            }
        }, { top: (120 + 13 * 24) + 'px', left: '12px' });

        addElement(checkbox_13);
    } else {
        var colorSquare_13 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_13.color,
            position: 'absolute',
            top: (120 + 13 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_13);
    }


    var label_13 = createElement('label', {
        htmlFor: modelControl_13.id,
        innerText: modelControl_13.label
    }, { top: (120 + 13 * 24) + 'px', left: '34px' });

    addElement(label_13);



    var label_13 = createElement('label', {
        htmlFor: modelControl_13.id,
        innerText: modelControl_13.label
    }, { 
        top: (120 + 13 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_13);
}


if (!no_ui_boolean){
    if (checkbox_boolean) {
        var checkbox_14 = createElement('input', {
            type: 'checkbox',
            id: modelControl_14.id,
            checked: modelControl_14.checked,
            onchange: function () {
                toggleModel(14); // Pass the model index to the toggle function
            }
        }, { top: (120 + 14 * 24) + 'px', left: '12px' });

        addElement(checkbox_14);
    } else {
        var colorSquare_14 = createElement('div', {}, {
            width: '12px',
            height: '12px',
            backgroundColor: modelControl_14.color,
            position: 'absolute',
            top: (120 + 14 * 24) + 'px',
            left: '12px'
        });

        addElement(colorSquare_14);
    }


    var label_14 = createElement('label', {
        htmlFor: modelControl_14.id,
        innerText: modelControl_14.label
    }, { top: (120 + 14 * 24) + 'px', left: '34px' });

    addElement(label_14);



    var label_14 = createElement('label', {
        htmlFor: modelControl_14.id,
        innerText: modelControl_14.label
    }, { 
        top: (120 + 14 * 24) + 'px', 
        left: '34px',
        color: 'grey', // Set label color to grey
        fontSize: '12px' // Optional: set font size
    });

    addElement(label_14);
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

    
        

        var representation_8 = o.addRepresentation(modelControl_8.type, {
            multipleBond: 'symmetric',
            sele: modelControl_8.sele,
            color: modelControl_8.color});

         
    
    representation_8.setVisibility(modelControl_8.checked);
    moleculeRepresentations.push(representation_8);

    
        

        var representation_9 = o.addRepresentation(modelControl_9.type, {
            multipleBond: 'symmetric',
            sele: modelControl_9.sele,
            color: modelControl_9.color});

         
    
    representation_9.setVisibility(modelControl_9.checked);
    moleculeRepresentations.push(representation_9);

    
        

        var representation_10 = o.addRepresentation(modelControl_10.type, {
            multipleBond: 'symmetric',
            sele: modelControl_10.sele,
            color: modelControl_10.color});

         
    
    representation_10.setVisibility(modelControl_10.checked);
    moleculeRepresentations.push(representation_10);

    
        

        var representation_11 = o.addRepresentation(modelControl_11.type, {
            multipleBond: 'symmetric',
            sele: modelControl_11.sele,
            color: modelControl_11.color});

         
    
    representation_11.setVisibility(modelControl_11.checked);
    moleculeRepresentations.push(representation_11);

    
        

        var representation_12 = o.addRepresentation(modelControl_12.type, {
            multipleBond: 'symmetric',
            sele: modelControl_12.sele,
            color: modelControl_12.color});

         
    
    representation_12.setVisibility(modelControl_12.checked);
    moleculeRepresentations.push(representation_12);

    
        

        var representation_13 = o.addRepresentation(modelControl_13.type, {
            multipleBond: 'symmetric',
            sele: modelControl_13.sele,
            color: modelControl_13.color});

         
    
    representation_13.setVisibility(modelControl_13.checked);
    moleculeRepresentations.push(representation_13);

    
        

        var representation_14 = o.addRepresentation(modelControl_14.type, {
            multipleBond: 'symmetric',
            sele: modelControl_14.sele,
            color: modelControl_14.color});

         
    
    representation_14.setVisibility(modelControl_14.checked);
    moleculeRepresentations.push(representation_14);

    


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