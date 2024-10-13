import { createContext, useState } from "react";

export const PostItContext = createContext({
    hasChanged: 0,
    triggerChange: () => {},
});
export const PostItProvider = ({ children }) => {
    const [hasChanged, setHasChanged] = useState(0);
    const triggerChange = () => {
        setHasChanged(prev => prev + 1);
    };
    return (
        <PostItContext.Provider value={{ hasChanged, triggerChange }}>
            {children}
        </PostItContext.Provider>
    );
};
