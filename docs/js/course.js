var globalAudioPlayer = new Audio();

var currentlyPlayingButton = null;

function playAudio(buttonElement) {
    var audioSrc = buttonElement.getAttribute('data-mp3-name');

    // Check if this button's audio is currently playing or paused
    if (currentlyPlayingButton === buttonElement) {
        if (globalAudioPlayer.paused) {
            // If paused, then play
            globalAudioPlayer.play();
            buttonElement.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'; // Change to pause icon
        } else {
            // If playing, then pause
            globalAudioPlayer.pause();
            buttonElement.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'; // Change back to play icon
        }
    } else {
        if (audioSrc) {
            // Stop any currently playing audio and reset the icon
            if (currentlyPlayingButton) {
                resetButtonIcon(currentlyPlayingButton);
            }

            // Update the icon to a 'pause' icon
            buttonElement.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'; // Change to pause icon

            // Play the new audio
            globalAudioPlayer.src = "https://media.drugdesign.org/mp3/" + audioSrc + ".mp3";
            globalAudioPlayer.play();

            // Keep track of the currently playing button
            currentlyPlayingButton = buttonElement;

            // Reset icon when audio finishes
            globalAudioPlayer.onended = function() {
                resetButtonIcon(currentlyPlayingButton);
                currentlyPlayingButton = null;
            };
        } else {
            console.error("No MP3 URL found for this button.");
        }
    }
}

function resetButtonIcon(buttonElement) {
    buttonElement.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'; // Reset to the play icon
}

function checkAndHideButtonIfFileDoesNotExist(button) {
    var mp3Url = "https://media.drugdesign.org/mp3/" + button.getAttribute('data-mp3-name') + ".mp3";

    fetch(mp3Url, { method: 'HEAD' })
        .then(response => {
            if (!response.ok) {
                // If the response is not OK (like a 404), hide the button
                button.style.display = 'none';
            }
        }).catch(error => {
            console.error("Error checking MP3 file:", error);
            button.style.display = 'none'; // Optionally hide on error
        });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("course.js loaded"); 
    
    // var buttons = document.querySelectorAll('.playb');
    // buttons.forEach(checkAndHideButtonIfFileDoesNotExist);
    
    // function containsClass(node, className) {
    //     if (node.classList && node.classList.contains(className)) {
    //         return true;
    //     }
    //     for (let child of node.childNodes) {
    //         if (containsClass(child, className)) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }     

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var relevantMutation = Array.from(mutation.addedNodes).some(node => 
                containsClass(node, 'nglviewer-container')
            );
            
            if (relevantMutation) {
                console.log("Relevant mutation detected, reinitializing molecule displays");
                removeTabChangeListeners()
                registerTabListener();
                checkAndInitializeMoleculeDisplays();
            }
            else {
                console.log("Mutation not relevant, ignoring");
            }
        });
    });


// Configuration for the observer:
// childList - to observe direct children changes
// subtree - to observe all descendants (not just children)
var observerConfig = {
    childList: true,
    subtree: true
};

// Select the target node to observe (usually the 'body' for page content)
var targetNode = document.body;

// Start observing the target node for configured mutations
observer.observe(targetNode, observerConfig);


function initializeMoleculeDisplay(container) {
    var moleculeId = container.getAttribute('data-molecule-id');
    var chapterName;
    var urlPath;
    if (!moleculeId) {
        return;
    }
    var parts = moleculeId.split("/"); 
    if (parts.length === 1) {
        urlPath = window.location.pathname;
        chapterName = urlPath.split('/')[2]; 
    } else if (parts.length === 2) {
        chapterName = parts[0];
        moleculeId = parts[1];
    }    
        
    var isInitialized = container.getAttribute('data-initialized') === 'true';

    if (container && !isInitialized) {
        var stage = new NGL.Stage(container);
        console.log("Loading molecule " + moleculeId + " from chapter " + chapterName);
        stage.loadScript("/molecules/" + chapterName + "/" + moleculeId + ".js",'2');
        container.setAttribute('data-initialized', 'true');
    }
}
   
    function checkAndInitializeMoleculeDisplays() {
        console.log("Checking and initializing molecule displays");
        document.querySelectorAll('.tabbed-set[data-tabs]').forEach(tabbedSet => {
            const tabIndex = getActiveTabIndex(tabbedSet);
            const tabbedBlocks = tabbedSet.querySelectorAll('.tabbed-block');
            if(tabbedBlocks[tabIndex]) {
                tabbedBlocks[tabIndex].querySelectorAll('.nglviewer-container').forEach(container => {
                    if (container) {
                        initializeMoleculeDisplay(container);
                    }
                });
            }
        });
    }

    function getActiveTabIndex(tabbedSet) {
        const tabsRange = tabbedSet.getAttribute('data-tabs').split(':');
        const baseIndex = parseInt(tabsRange[0]);
        const tabInputs = tabbedSet.querySelectorAll(`input[name="__tabbed_${baseIndex}"]`);
        const activeTabIndex = Array.from(tabInputs).findIndex(radio => radio.checked);
        return activeTabIndex;
    }

/*
<div class="tabbed-set tabbed-alternate" data-tabs="1:2" style="--md-indicator-x: 82px; --md-indicator-width: 104px;">

    <input checked="checked" id="__tabbed_1_1" name="__tabbed_1" type="radio">
    <input id="__tabbed_1_2" name="__tabbed_1" type="radio">

    <div class="tabbed-labels tabbed-labels--linked">
        <label for="__tabbed_1_1"><a href="#__tabbed_1_1" tabindex="-1">Shape</a></label>
        <label for="__tabbed_1_2"><a href="#__tabbed_1_2" tabindex="-1">3D Shape</a></label>
    </div>

    <div class="tabbed-content">
        <div class="tabbed-block">
            <p>......</a></p>
        </div>
        <div class="tabbed-block">
            <div id="nglviewer-container-ss1" class="nglviewer-container" data-molecule-id="shape-similarity" style="width: 750px; height: 450px;" data-initialized="false"></div> 
        </div>    
    </div>
</div>
*/
    
function onTabChange(event) {
    if (event.target.checked) {
        let tabbedSet = event.target.closest('.tabbed-set');
        if (!tabbedSet) {
            console.error('Tabbed set not found for the radio button.');
            return;
        }

        let radioButtons = Array.from(tabbedSet.querySelectorAll(`input[type='radio']`));
        let selectedIndex = radioButtons.indexOf(event.target);
        if (selectedIndex === -1) {
            console.error('Selected radio button not found in the tabbed set.');
            return;
        }

        let tabbedBlock = tabbedSet.querySelector('.tabbed-content').children[selectedIndex];
        if (!tabbedBlock) {
            console.error('Corresponding tabbed block not found.');
            return;
        }

        let container = tabbedBlock.querySelector('.nglviewer-container');
        if (container) {
            initializeMoleculeDisplay(container);
        }
    }
}


    function removeTabChangeListeners() {
        document.querySelectorAll('.tabbed-set[data-tabs]').forEach(tabbedSet => {
            const tabsRange = tabbedSet.getAttribute('data-tabs').split(':');
            const baseIndex = parseInt(tabsRange[0]);
            tabbedSet.querySelectorAll(`input[name="__tabbed_${baseIndex}"]`).forEach(radio => {
                radio.removeEventListener('change', onTabChange);
            });
        });
    }

    function registerTabListener() {        
        document.querySelectorAll('.tabbed-set[data-tabs]').forEach(tabbedSet => {
            const tabsRange = tabbedSet.getAttribute('data-tabs').split(':');
            const baseIndex = parseInt(tabsRange[0]);
            tabbedSet.querySelectorAll(`input[name="__tabbed_${baseIndex}"]`).forEach(radio => {
                console.log("Adding change listener to radio button " + radio.name);            
                radio.addEventListener('change', onTabChange);
                // radio.addEventListener('change', function() {
                //     //checkAndInitializeMoleculeDisplays();
                //     console.log("Radio button " + radio.name + " changed");

                //     if (radio.checked) {
                //         console.log("Radio button " + radio.name + " checked");
                //         // Find the corresponding tabbed block for this radio button
                //         let tabbedBlock = tabbedSet.querySelector('.tabbed-content').children[Array.from(radio.parentElement.children).indexOf(radio) - 1];
                //         // Find the nglviewer-container in the current tabbed block
                //         let container = tabbedBlock.querySelector('.nglviewer-container');
                //         if (container) {
                //             initializeMoleculeDisplay(container);
                //         }
                //     }

                // });
            });
        });
    }

    registerTabListener()
    checkAndInitializeMoleculeDisplays();
});


