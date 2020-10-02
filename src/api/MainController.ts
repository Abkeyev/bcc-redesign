import { server } from "./axios";

export class MainController {
  async getMenu(): Promise<any> {
    return server.get(`/content/nav`, {
      baseURL: "http://188.227.84.200:3005",
    });
  }
}
