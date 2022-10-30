import React, {useEffect, useState} from "react";
import {IssueService} from "../../services";
import {AxiosError} from "axios";
import {useNavigate} from "react-router-dom";
import {ROUTER} from "../../router/routes";
import useIssueContext from "../../hooks/useIssueContext";
import {IssueContextProvider} from "../../contexts/IssueContext";
import IssueList from "./component/IssueList";

export default function Issue() {
    return(
        <IssueContextProvider>
            <IssueList />
        </IssueContextProvider>
    )
}
