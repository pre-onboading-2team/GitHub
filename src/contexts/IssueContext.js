import React, {createContext, useState} from 'react';

export const IssueContext = createContext([]);

export function IssueContextProvider({children}) {
    const [listIssue, setListIssue] = useState([]);

    return (
        <IssueContext.Provider value={{listIssue, setListIssue}}>
            {children}
        </IssueContext.Provider>
    );
}
