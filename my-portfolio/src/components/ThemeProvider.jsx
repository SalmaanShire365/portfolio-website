import React, {useState,createContext,useContext} from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
    const {darkMode, toggleDarkMode} = useContext(ThemeContext);
    return [darkMode, toggleDarkMode];
};

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
