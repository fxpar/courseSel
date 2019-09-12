

function initialize(){
	
		if (localStorage.getItem("searchValue") == null){
				var searchValue = document.getElementById("searchValue").value;
				//console.log("locastorage searchvalue = null");
		}else{
				//console.log("locastorage searchvalue ="+localStorage.getItem("searchValue"));
				var searchValue = localStorage.getItem("searchValue");
				document.getElementById("searchValue").value = searchValue;
		}

		if (localStorage.getItem("searchList") == null){
				var searchList = document.getElementById("searchList").value;
				//console.log("locastorage searchList = null");
		}else{
				//console.log("locastorage searchList ="+localStorage.getItem("searchList"));
				var searchList = localStorage.getItem("searchList");
				document.getElementById("searchList").value = searchList;
		}		
}

function listenForClicks() {
  document.addEventListener("click", (e) => {



    function courseActions(tabs) {


		switch (e.target.id) {
			
			case "selectionnerPage":
				var myAlert = browser.i18n.getMessage("cocherAlert");
				//console.log('**ALERT**:'+myAlert);
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("😺😺😺😺COCHER PAGE TEST"); var n =0; var c = 0; var d = 0; t= 0; document.querySelectorAll('input[type=checkbox]').forEach(function (element ,index) {if (element.checked == true) {t++; c++;}else{d++;t++;} element.checked = true; n++;}); console.log('**ALERT**\\n'+`+myAlert+`); window.alert(`+myAlert+`);`
			});
			break;
			
			case "deselectionnerPage":
				var myAlert = browser.i18n.getMessage("décocherAlert");
				//console.log('**ALERT**:'+myAlert);
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****🦝🦝🦝🦝DECOCHER PAGE"); var n =0; var c = 0; var d = 0; t= 0; document.querySelectorAll('input[type=checkbox]').forEach(function (element ,index) {if (element.checked == true) {t++; c++;}else{d++;t++;} element.checked = false; n++;}); console.log('**ALERT**\\n'+`+myAlert+`); window.alert(`+myAlert+`);`
			});
			break;
			
			case "inverserPage":
			var myAlert = browser.i18n.getMessage("inverserAlert");
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****🦓🦓🦓🦓INVERSER PAGE"); var n =0; var c = 0; var d = 0; t= 0; document.querySelectorAll('input[type=checkbox]').forEach(function (element ,index) {if (element.checked == true) {t++; c++;}else{d++;t++;} element.click(); n++;}); console.log('**ALERT**\\n'+`+myAlert+`); window.alert(`+myAlert+`);`
			});
			break;
			
			case "selectionnerCours":
			var myAlert = browser.i18n.getMessage("cocherAlert");
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****🦊🦊🦊COCHER COURS"); var n =0; var c = 0; var d = 0; t= 0; document.getElementsByName('bc[]').forEach(function (element ,index) {if (element.checked == true) {t++; c++;}else{d++;t++;} element.checked = true; n++;});  console.log('**ALERT**\\n'+`+myAlert+`); window.alert(`+myAlert+`);`
			});
			break;

			case "deselectionnerCours":
			var myAlert = browser.i18n.getMessage("décocherAlert");
			   browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****🐫🐫🐫🐫DECOCHER COURS"); var n =0; var c = 0; var d = 0; t= 0; document.getElementsByName('bc[]').forEach(function (element ,index) {if (element.checked == true) {t++; c++;}else{d++;t++;} element.checked = false; n++;});  console.log('**ALERT**\\n'+`+myAlert+`); window.alert(`+myAlert+`);`
			});
			break;

			case "inverserCours":
			var myAlert = browser.i18n.getMessage("inverserAlert");
			   browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****🦥🦥🦥🦥INVERSER COURS"); var n = 0; var c = 0; var d = 0; t= 0; document.getElementsByName('bc[]').forEach(function (element ,index) {if (element.checked == true) {t++; c++;}else{d++;t++;} element.click(); n++;});  console.log('**ALERT**\\n'+`+myAlert+`); window.alert(`+myAlert+`);`
			});
			break;
			
			
			case "dechoisir":
			
			   browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****🦘🦘🦘🦘DECHOISIR OPTION RONDE ACTIVE"); var n = 0; document.activeElement.checked = false; console.log(n+' une option dé-choisie');`
			});
			break;
			
			
			case "afficher":
			var myAlert = browser.i18n.getMessage("afficherAlert");
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****INVERSER PAGE"); var n =0; var c = 0; var d = 0; t= 0; document.querySelectorAll('input').forEach(function (element ,index) {element.style.display = 'block';element.style.visibility = 'visible'; n++;});  console.log('**ALERT**\\n'+`+myAlert+`); window.alert(`+myAlert+`);`
			});
			break;
			
			case "afficherEl":
			var myAlert = browser.i18n.getMessage("cocherAlert");
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****INVERSER PAGE"); var n =0; var c = 0; var d = 0; t= 0; document.querySelectorAll('body *').forEach(function (element ,index) {element.style.display = 'block';element.style.visibility = 'visible'; n++;});  console.log('**ALERT**\\n'+`+myAlert+`); window.alert(`+myAlert+`);`
			});
			break;
			
			
			case "chercher":
			var myAlert = browser.i18n.getMessage("cocherAlert");
			localStorage.setItem("searchValue", document.getElementById("searchValue").value);
			searchValue = localStorage.getItem("searchValue");
			   browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****🐳🐳🐳CHERCHER"); var n =0; var c = 0; var d = 0; t= 0; document.getElementsByName('bc[]').forEach(function (element ,index) {if (element.checked == true) {t++; c++;}else{d++;t++;} if (element.parentElement.nextSibling.nextSibling.firstChild.innerHTML.match(/^(`+searchValue+`)$/)){n++; console.log(element.parentElement.nextSibling.nextSibling.firstChild.innerHTML);element.click();} });  console.log('**ALERT**\\n'+`+myAlert+`); window.alert(`+myAlert+`);`
			});
			break;
			case "chercherListe":
			var myAlert = browser.i18n.getMessage("chercherListeAlert");
			localStorage.setItem("searchList", document.getElementById("searchList").value);
			searchList = localStorage.getItem("searchList");
				var splitted = searchList.split(/\r?\n/);
				var chercherListe =`console.log("*****🦀🦀🦀🦀CHERCHER LISTE"); var n =`+splitted.length+`; var tr = 0; var ntr = n; var c = 0; var d = 0; t= document.getElementsByName('bc[]').length;`;
				for (i = 0; i < splitted.length; i++) {
					chercherListe += `document.getElementsByName('bc[]').forEach(function (element ,index) {if (element.parentElement.nextSibling.nextSibling.firstChild.innerHTML.match(/^(`+splitted[i]+`)$/)){tr++;ntr--; if (element.checked == true) { c++;}else{d++;} console.log(element.parentElement.nextSibling.nextSibling.firstChild.innerHTML);element.click();} }); console.log(n+' cours cliqués'); `
				}
				chercherListe +=`window.alert(`+myAlert+`);`;
			   browser.tabs.executeScript(tabs[0].id, {
			  code: chercherListe
			});
			
			break;
			
			case "afficherCodes":
			var myAlert = browser.i18n.getMessage("afficherAlert");
			  browser.tabs.executeScript(tabs[0].id, {
			  code: `console.log("*****🦜🦅🦅🦉🦉🐥🦚COPIER LISTE ET AFFICHER CODES"); var n =0; var c = 0; var d = 0; t= 0; var dashCourses = []; document.querySelectorAll('.course-shortname').forEach(function (element ,index) {if (element.checked == true) {t++; c++;}else{d++;t++;} element.style.display = 'inline-block'; n++; dashCourses.push(element.innerText)}); localStorage.setItem("dashCourses", JSON.stringify(dashCourses)); console.log(n+' codes affichés'); console.log(JSON.parse(localStorage.getItem("dashCourses")));  console.log('**ALERT**\\n'+`+myAlert+`); window.alert(`+myAlert+`);`
			});
			break;
			
			case "cocherCodes":
			var myAlert = browser.i18n.getMessage("chercherListeAlert");
			var checkConsole = browser.i18n.getMessage("consulterConsoleAlert");
				var chercherListe =`console.log("*****COCHER CODES DEPUIS LISTE ENREGISTREE"); var n =0; var tr = 0; var ntr = 0; var c = 0; var d = 0; t= 0; console.log(JSON.parse(localStorage.getItem("dashCourses"))); var dashCourses = JSON.parse(localStorage.getItem("dashCourses"));if (dashCourses == null) {window.alert('`+browser.i18n.getMessage("aucunCoursAlert")+`');} else{ntr = dashCourses.length; for (i = 0; i < dashCourses.length; i++) { document.getElementsByName('bc[]').forEach(function (element ,index) { if (element.parentElement.nextSibling.nextSibling.firstChild.innerHTML==(dashCourses[i])){n++; tr++;ntr--; if (element.checked == true) { c++;}else{d++;} console.log(element.parentElement.nextSibling.nextSibling.firstChild.innerHTML);element.click();} });} console.log(n+' cours cliqués'); n= dashCourses.length; t =  document.getElementsByName('bc[]').length;  console.log("***DASHCOURSES***");console.log(dashCourses);  console.log('**ALERT**\\n'+`+myAlert+`); window.alert(`+myAlert+`+'\\n\\n(`+checkConsole+`)');}`;
			  browser.tabs.executeScript(tabs[0].id, {
			  code: chercherListe
			});
			break;
			
			
			case "tester":
			  alert("ok");
			break;
		}
		

	  //alert("ok!");
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
      console.log(`Could not Select courses : ${error} `);
    }

    /**
     * Get the active tab,
     * then call "courseActions()" or "reset()" as appropriate.
     */
    if (e.target.classList.contains("button")) {
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
	console.log("✨✨✨✨✨ I18N POPUP ✨✨✨✨");
	  var objects = document.getElementsByTagName('*'), i;
  for(i = 0; i < objects.length; i++) {
    if (objects[i].dataset && objects[i].dataset.message) {
      objects[i].innerText = browser.i18n.getMessage(objects[i].dataset.message);
    }
	if (objects[i].dataset && objects[i].dataset.title) {
		//console.log("TITLE:"+objects[i].dataset.title);
      objects[i].setAttribute("title", browser.i18n.getMessage(objects[i].dataset.title)) ;
    }
  }
	
}


try{
//internationalizePopup();
initialize();
listenForClicks();
}
catch(error){
	reportExecuteScriptError(error);
}

