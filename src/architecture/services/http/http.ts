import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class Http {
  private static http:Http;
  public post = async <T>(
    url: string,
    body: any,
    header: any,
  ): Promise<AxiosResponse<any, any>> => {
    return await axios.post(url, body, header);
  };
  public get = async <T>(
    url: string,
    header: any,
  ): Promise<AxiosResponse<any, any>> => {
    return await axios.get(url, header);
  };
  public headerMethodGet = (params: URLSearchParams | undefined): AxiosRequestConfig => {
    return {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: params,
    };
  }
  public headerMethodPost = (): AxiosRequestConfig => {
    return {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
  }
  
  public static getInstance = ():Http =>{
    if(!this.http) this.http = new Http();
    return this.http;
  }
  private constructor(){}

}
export { Http };
