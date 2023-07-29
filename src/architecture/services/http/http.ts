import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class Http {
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
  public header(params: URLSearchParams): AxiosRequestConfig {
    return {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": process.env.REACT_X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.REACT_X_RAPIDAPI_HOST,
      },
      params: params,
    };
  }
}
export { Http };
