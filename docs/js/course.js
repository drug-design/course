document.addEventListener('DOMContentLoaded', function() {
    console.log("course.js loaded");


var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // Check if the added nodes include the relevant container
        var relevantMutation = Array.from(mutation.addedNodes).some(node => 
            node.classList && node.classList.contains('nglviewer-container'));
        
        if (relevantMutation) {
            console.log("Relevant mutation detected, reinitializing molecule displays");
            checkAndInitializeMoleculeDisplays();
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
    
    document.querySelectorAll('.tabbed-set[data-tabs]').forEach(tabbedSet => {
        const tabsRange = tabbedSet.getAttribute('data-tabs').split(':');
        const baseIndex = parseInt(tabsRange[0]);
        tabbedSet.querySelectorAll(`input[name="__tabbed_${baseIndex}"]`).forEach(radio => {
            radio.addEventListener('change', function() {
                checkAndInitializeMoleculeDisplays();
            });
        });
    });

    //checkAndInitializeMoleculeDisplays();
});
