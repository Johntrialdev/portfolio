const darkMode = () => {

    const themeTogglesBtn = document.querySelectorAll('#theme-toggle');
    //state
    const theme = localStorage.getItem('theme');
    //on mount
    theme && document.body.classList.add(theme);
    //handlers
    const handleThemeToggle = () => {
        themeTogglesBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                document.body.classList.toggle('light-mode');
    
                if(document.body.classList.contains('light-mode')){
                    localStorage.setItem('theme', 'light-mode');
                }else{
                    localStorage.removeItem('theme');
                    document.body.removeAttribute('class');
                }
            });
    
        });
    };

    //Events
    themeTogglesBtn.forEach(btn => {
        btn.addEventListener('click', handleThemeToggle)
    });

};

export default darkMode;