/**Web-style JS for the index page of the gang fights god dot xyz
* @author Contrastellar
*/

/**
 * Loads a specific CSSFile into
 */
function loadCSSFile(ID, mode){
    let modeFile;

    if(mode === "light"){
        modeFile = "light-mode.css";
    }else if(mode === "dark"){
        modeFile = "dark-mode.css";
    }else{
        throw "Type Exception";
    }

    DOMObject = document.getElementById(ID);
    return DOMObject.setAttribute("href", modeFile);

}

/**
 * Retrieves cookie of certain name, returning an exception if no cookie exists.
 */
function retrieveCookie(cookieName){
    let output = document.cookie
        .split('; ')
        .find((row) => row.startsWith(cookieName + '='))
        ?.split('=')[1];

    if(output == undefined){
        throw "Custom Cookie Exception";
    }

    return output;

}

/**
 * function to create cookies.
 */
function createCookie(cookieName, cookieValue){
    let cookieString = cookieName + "=" + cookieValue;
    cookieString += "; SameSite=Strict;";
    document.cookie = cookieString;
    return;

}

function addDefaultH2Behavior(){
    let allh2tags = document.getElementsByTagName("h2");
    console.log("This function" + Function.name + " has not been implemented.");
}

function startup(){
    establishCSSMode();
    addDefaultH2Behavior();
}

/**
 * function that runs when page is loaded.
 */
function establishCSSMode(){
    let cssModeCookie;
    try{
        cssModeCookie = retrieveCookie("cssMode");
    }catch(err){
        console.error(err);
        console.log("First time launch for user, as no cookie matching 'cssMode' was found");
        createCookie("cssMode", "light");
    }
    console.log(cssModeCookie);
    loadCSSFile("mode-selector", cssModeCookie);

}

/**
 * Function to swap the cookie value and swap the current view. 
 */
function swapModes(){
    let cssModeCookie = retrieveCookie("cssMode");
    let status;
    if(cssModeCookie === "light"){
        status = "dark"
        loadCSSFile("mode-selector", status);

    }else if(cssModeCookie === "dark"){
        status = "light"
        loadCSSFile("mode-selector", status);
    }else{
        throw Exception;
    }
    createCookie("cssMode", status);

}

/**
 * This function is used to connect to the FFXIV REST API to determine what the current patch is.
 * This function also uses browser cookies /w known expiry (the tuesday after the cookie is created) to determine if it needs
 * to reach out to the API or not.
 */
function topLoad(){
    // TODO implement this function
}