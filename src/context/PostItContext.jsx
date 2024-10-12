import { createContext, useState } from "react";

export const PostItContext = createContext();
export const PostItProvider = ({ children }) => {
    const [postIts, setPostIts] = useState([]);

    return (
        <PostItContext.Provider value={{ postIts, setPostIts }}>
            {children}
        </PostItContext.Provider>
    );
};
