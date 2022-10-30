/* eslint-disable class-methods-use-this */

import { client } from "./api";

interface IssueService {
  getIssues(): Promise<any>;
  getIssue(number: number): Promise<any>;
}

class IssueServiceImp implements IssueService {
  getIssues() {
    return client.get("", { params: { sort: "comments" } });
  }

  getIssue(number: number) {
    return client.get(`${number}`);
  }
}

export default new IssueServiceImp();
