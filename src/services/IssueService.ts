import {API} from "./api";

export const getListIssue = () => {
    const url = "issues";
    return API.get(url);
}

export const getListIssueDetail = (id: string | undefined) => {
    const url = `issues/${id}`;
    return API.get(url);
}
