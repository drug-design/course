document.addEventListener('DOMContentLoaded', function() {

  function initializeMoleculeDisplay(container) {
      var moleculeId = container.getAttribute('data-molecule-id');
      var chapterName
      var urlPath
      if (!moleculeId) {
          return;
      }
      //check if moleculeId could be either "mol1" or "chapters/mol1"
      var parts = moleculeId.split("/"); 
      if (parts.length === 1) {
          urlPath = window.location.pathname;
          chapterName = urlPath.split('/')[2]; // Assuming the structure is /chapters/test1/...
      }        
      else if (parts.length === 2) {
          // Both chapter and page are present
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
      document.querySelectorAll('.nglviewer-container').forEach(container => {
          // Initialize only if the container is in the active tab
          if (isTabActive(container)) {
              initializeMoleculeDisplay(container);
          }
      });
  }

  function isTabActive(container) {
      // Find the index of the active radio button
      var activeTabIndex = Array.from(document.querySelectorAll('input[type="radio"][name="__tabbed_1"]')).findIndex(radio => radio.checked);
      
      // Find the corresponding tabbed-block
      var correspondingTabBlock = document.querySelectorAll('.tabbed-block')[activeTabIndex];
  
      // Check if the container is within the active tabbed-block
      return correspondingTabBlock.contains(container);
  }
  
  // Event listener for tab changes
  document.querySelectorAll('input[type="radio"][name="__tabbed_1"]').forEach(radio => {
      radio.addEventListener('change', function() {
          //console.log('Tab change detected');
          checkAndInitializeMoleculeDisplays();
      });
  });
  
  // Initial check on page load
  checkAndInitializeMoleculeDisplays();
});