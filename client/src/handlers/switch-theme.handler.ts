import { ChangeEvent } from "react";

class SwitchThemeHandler {
    private _vars: any = {
        '--text-color': { dark: '#ffffff', light:'#000000' },
        '--bg-color': { dark: '#000000', light: '#ffffff' },
        '--main-color': { dark: '#000000', light: '#ffffff' },
     
        '--section-color': { dark: '#000000', light: '#ffffff' },
        '--component-color': { dark: '#131313', light: '#e9e9e9' },
        '--shadow-color': { dark: '#1f1f1f', light: '#c4c4c4' }
    };

    public Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const document = event.target.ownerDocument;
        const html = document.querySelector('html');
    
        if(!html) return;

        const switchTheme = (theme: 'dark'|'light') => {
            html.style.cssText = `color-scheme: ${theme}`;
    
            for(const key in this._vars) {
                const value = this._vars[key];
    
                document.documentElement.style.setProperty(key, value[theme]);
            };
    
            html.style.colorScheme = theme;
        };
    
        if(!event.target.checked || html.style.colorScheme === 'dark')
            switchTheme('light');
        else
            switchTheme('dark');
    };

    public OnLoad = (id: string) => {
        const document = window.document;
        const html = document.querySelector('html');
        const inputElement: any = document.querySelector(`#${id}`);

        if(!html || !inputElement) return;
        
        if(html.style.colorScheme === 'dark')
            inputElement.checked = false;
        else
            inputElement.checked = true;
    };
};

export default SwitchThemeHandler;