/* eslint-disable class-methods-use-this */

import { client } from "./api";

interface IssueService {
  getIssues(page: number): Promise<any>;
  getIssue(number: number): Promise<any>;
}

class IssueServiceImp implements IssueService {
  getIssues(page: number) {
    return client.get("", { params: { sort: "comments", page, per_page: 10 } });
  }

  getIssue(number: number) {
    return client.get(`${number}`);
  }
}

export default new IssueServiceImp();
