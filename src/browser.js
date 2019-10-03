import Mikado from "./mikado.js";
import "./export.js";
import compile from "./compile.js";
import {
    getAttribute,
    getClass,
    getCSS,
    getHTML,
    getText,
    hasAttribute,
    hasClass,
    toggleClass,
    removeClass,
    addClass,
    removeAttribute,
    setAttribute,
    setClass,
    setCSS,
    setHTML,
    setText
    //setStyle,
    //getStyle
} from "./cache.js";

if(SUPPORT_COMPILE){

    Mikado["compile"] = compile;
}

if(SUPPORT_CACHE && SUPPORT_CACHE_HELPERS){

    Mikado["setText"] = setText;
    Mikado["getText"] = getText;
    Mikado["setHTML"] = setHTML;
    Mikado["getHTML"] = getHTML;
    Mikado["setClass"] = setClass;
    Mikado["getClass"] = getClass;
    Mikado["hasClass"] = hasClass;
    Mikado["toggleClass"] = toggleClass;
    Mikado["removeClass"] = removeClass;
    Mikado["addClass"] = addClass;
    //Mikado["setStyle"] = setStyle;
    //Mikado["getStyle"] = getStyle;
    Mikado["setCSS"] = setCSS;
    Mikado["getCSS"] = getCSS;
    Mikado["setAttribute"] = setAttribute;
    Mikado["getAttribute"] = getAttribute;
    Mikado["hasAttribute"] = hasAttribute;
    Mikado["removeAttribute"] = removeAttribute;

    /*
    Mikado.register;
    Mikado.unregister;
    Mikado.load;
    Mikado.unload;
    Mikado.new;
    Mikado.once;
    */
}

(function(){

    const name = "Mikado";
    const factory = Mikado;
    const root = this || window;
    let prop;

    // AMD (RequireJS)
    if((prop = root["define"]) && prop["amd"]){

        prop([], function(){

            return factory;
        });
    }
    // Closure (Xone)
    else if((prop = root["modules"])){

        prop[name.toLowerCase()] = factory;
    }
    // CommonJS (Node.js)
    else if(typeof root["exports"] === "object"){

        /** @export */
        root["module"].exports = factory;
    }
    // Global (window)
    else{

        root[name] = factory;
    }

}());