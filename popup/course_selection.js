

function listenForClicks() {
  document.addEventListener("click", (e) => {


    function courseActions(tabs) {
		//document.body.style.border = "5px solid red";
		//alert(e.target.id);
		var searchValue = document.getElementById("searchValue").value;
		var searchList = document.getElementById("searchList").value;
		//alert(searchValue);
		//alert("searchValue"+document.getElementById("searchValue").value);


		switch (e.target.id) {
			
			case "selectionnerPage":
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****COCHER PAGE"); var n =0; document.querySelectorAll('input[type=checkbox]').forEach(function (element ,index) {element.checked = true; n++;}); console.log(n+' cases cochées'); `
			});
			break;
			
			case "deselectionnerPage":
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****DECOCHER PAGE"); var n =0; document.querySelectorAll('input[type=checkbox]').forEach(function (element ,index) {element.checked = false; n++;}); console.log(n+' cases décochées');`
			});
			break;
			
			case "inverserPage":
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****INVERSER PAGE"); var n =0; document.querySelectorAll('input[type=checkbox]').forEach(function (element ,index) {element.click(); n++;}); console.log(n+' cases inversées');`
			});
			break;
			
			case "selectionnerCours":
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****COCHER COURS"); var n =0; document.getElementsByName('bc[]').forEach(function (element ,index) {element.checked = true; n++;}); console.log(n+' cases cochées'); `
			});
			break;

			case "deselectionnerCours":
			   browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****DECOCHER COURS"); var n =0; document.getElementsByName('bc[]').forEach(function (element ,index) {element.checked = false; n++;}); console.log(n+' cases décochées');`
			});
			break;

			case "inverserCours":
			   browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****INVERSER COURS"); var n = 0; document.getElementsByName('bc[]').forEach(function (element ,index) {element.click(); n++;}); console.log(n+' cases inversées');`
			});
			break;
			
			
			case "dechoisir":
			   browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****DECHOISIR OPTION RONDE ACTIVE"); var n = 0; document.activeElement.checked = false; console.log(n+' une option dé-choisie');`
			});
			break;
			
			
			case "afficher":
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****INVERSER PAGE"); var n =0; document.querySelectorAll('input').forEach(function (element ,index) {element.style.display = 'block';element.style.visibility = 'visible'; n++;}); console.log(n+' cases affichées');`
			});
			break;
			
			case "afficherEl":
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****INVERSER PAGE"); var n =0; document.querySelectorAll('body *').forEach(function (element ,index) {element.style.display = 'block';element.style.visibility = 'visible'; n++;}); console.log(n+' élément affichés');`
			});
			break;
			
			
			case "chercher":
			   browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****CHERCHER"); var n =0; document.getElementsByName('bc[]').forEach(function (element ,index) {if (element.parentElement.nextSibling.nextSibling.firstChild.innerHTML.match(/^(`+searchValue+`)$/)){n++; console.log(element.parentElement.nextSibling.nextSibling.firstChild.innerHTML);element.click();} }); console.log(n+' cours cliqués'); `
			});
			break;
			case "chercherListe":
				var splitted = searchList.split(/\r?\n/);
				var chercherListe =`console.log("*****CHERCHER LISTE"); var n =0;`;
				for (i = 0; i < splitted.length; i++) {
					chercherListe += `document.getElementsByName('bc[]').forEach(function (element ,index) {if (element.parentElement.nextSibling.nextSibling.firstChild.innerHTML.match(/^(`+splitted[i]+`)$/)){n++; console.log(element.parentElement.nextSibling.nextSibling.firstChild.innerHTML);element.click();} }); console.log(n+' cours cliqués'); `
				}
			   browser.tabs.executeScript(tabs[0].id, {
			  code: chercherListe
			});
			break;
			
			case "afficherCodes":
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****AFFICHER CODES"); var n =0; document.querySelectorAll('.course-shortname').forEach(function (element ,index) {element.style.display = 'inline-block'; n++;}); console.log(n+' codes affichés');`
			});
			break;
			
			
			case "tester":
			  alert("ok");
			break;
		}
		

	  alert("ok!");
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
      console.log(`Could not Select courses : ${error}`);
    }

    /**
     * Get the active tab,
     * then call "courseActions()" or "reset()" as appropriate.
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
  console.error(`Failed to execute CourseSel content script: ${error.message}`);
  return "ok";
}

function internationalizePopup(){
	console.log("***** I18N POPUP ****");
	  var objects = document.getElementsByTagName('*'), i;
  for(i = 0; i < objects.length; i++) {
    if (objects[i].dataset && objects[i].dataset.message) {
      objects[i].innerText = browser.i18n.getMessage(objects[i].dataset.message);
    }
	if (objects[i].dataset && objects[i].dataset.title) {
		console.log("TITLE:"+objects[i].dataset.title);
      objects[i].setAttribute("title", browser.i18n.getMessage(objects[i].dataset.title)) ;
    }
  }
	
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
 
 browser.tabs.executeScript({file: "/content_scripts/beastify.js"})
// .then(listenForClicks)
.then(internationalizePopup)
.then(listenForClicks)
.catch(reportExecuteScriptError);
