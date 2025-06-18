class LoneAppParams {
    env = { STILL_HOME: null };
    /** @type { 'react'|'default' } */
    container;
}

class StillLoneApp {
    load(){};
    unload(){};
}

export class StillAppLoader {

    #script;

    /**
     * @param { LoneAppParams } params
     * @returns { StillLoneApp } 
     */
    cdn = (params = {}) => {
        window.STILL_HOME = params.env.STILL_HOME;
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@stilljs/core@latest/@still/lone.js'; 
        this.#script = script;
        return { load: () => this.load(), unload: () => this.unload() };
    }

    /**
     * @param { LoneAppParams } params
     * @returns { StillLoneApp } 
     */
    local = (params = {}) => {
        window.STILL_HOME = params.env.STILL_HOME;
        const script = document.createElement('script');
        script.src = window.STILL_HOME + '@still/lone.js';
        return { load: () => this.load(), unload: () => this.unload() };
    }

    load(){
        this.#script.async = true;
        this.#script.type = 'module';
        document.body.appendChild(script);   
    }

    unload(){
        document.body.removeChild(this.#script);
    }

}