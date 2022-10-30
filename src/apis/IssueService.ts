/* eslint-disable class-methods-use-this */

import { client } from "./api";

interface IssueService {
  get(): Promise<any>;
  //   getIssue(): Promise<AxiosResponse>;
}

class IssueServiceImp implements IssueService {
  get() {
    return client.get("issues", { params: { sort: "comments" } });
  }

  //   getIssue(): void {
  //     return client.get("issues");
  //   }
}

export default new IssueServiceImp();
