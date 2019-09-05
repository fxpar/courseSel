
function listenForClicks() {
  document.addEventListener("click", (e) => {


    function courseActions(tabs) {
		//document.body.style.border = "5px solid red";
		//alert(e.target.id);
		var searchValue = document.getElementById("searchValue").value;
		//alert(searchValue);
		//alert("searchValue"+document.getElementById("searchValue").value);


		switch (e.target.id) {
			case "tout":
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `document.body.style.border = "5px solid green"; console.log("TOUT GREEN");document.getElementsByName('bc[]').forEach(function (element ,index) {element.checked = true;});`
			});
			break;
			case "chercher":
			   browser.tabs.executeScript(tabs[0].id, {
			  code: `document.body.style.border = "5px solid blue"; console.log("CHERCHER BLUE"); var n =0; document.getElementsByName('bc[]').forEach(function (element ,index) {if (element.parentElement.nextSibling.nextSibling.firstChild.innerHTML.match(/^(`+searchValue+`)$/)){n++; console.log(element.parentElement.nextSibling.nextSibling.firstChild.innerHTML);element.click();} }); console.log(n+' cours cliqués'); `
			});
			break;
			case "inverser":
			   browser.tabs.executeScript(tabs[0].id, {
			  code: `document.body.style.border = "5px solid red"; console.log("INVERSER RED"); var n = 0; document.getElementsByName('bc[]').forEach(function (element ,index) {element.click();});`
			});
			break;
			case "deselectionner":
			   browser.tabs.executeScript(tabs[0].id, {
			  code: `document.body.style.border = "5px solid yellow"; console.log("DESELECTIONNER YELLOW"); document.getElementsByName('bc[]').forEach(function (element ,index) {element.checked = false;});`
			});
			break;
			case "tester":
			  alert("ok");
			break;
		}
		

	  alert("beastified");
    }

    /**
     * Remove the page-hiding CSS from the active tab,
     * send a "reset" message to the content script in the active tab.
     */
    function reset(tabs) {
      browser.tabs.removeCSS({code: hidePage}).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        });
      });
    }

    /**
     * Just log the error to the console.
     */
    function reportError(error) {
      console.log(`Could not beastify: ${error}`);
    }

    /**
     * Get the active tab,
     * then call "beastify()" or "reset()" as appropriate.
     */
    if (e.target.classList.contains("beast")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(courseActions)
        .catch(reportError);
    }
    else if (e.target.classList.contains("reset")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(reset)
        .catch(reportError);
    }
  });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute beastify content script: ${error.message}`);
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
//browser.tabs.executeScript({file: "/content_scripts/beastify.js"})
browser.tabs.executeScript({file: "/content_scripts/beastify.js"})
.then(listenForClicks)

.catch(reportExecuteScriptError);
