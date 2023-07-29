import { SessionInterface } from "./common.types";

interface FooterColumnProps {
  title: string;
  links: string[];
}

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | undefined;
};

interface ProfileMenuProps {
  session :  SessionInterface 
}

interface ProjectFormProps {
  type:"create"
  session: SessionInterface
}

interface PosterProps{
  id:string,
  value:any,
  type:"create"
  entity:string,
  disabled?:boolean,
  handleChange: any,
  handleBlur:any,
}

interface FormFieldProps{
  type?:string;
  isTextArea?:string;
  title:string;
  value:string | undefined;
  placeholder:string;
  handleChange:any;
  handleBlur:any;
}

interface CustomMenuProps{
  title:string;
  value:string | undefined;
  filters:string[];
  handleClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
  handleBlur:any;
}

interface ButtonProps{
  title:string;
  disabled:boolean;
  children:React.ReactNode
  handleClick:()=>void;
}

type Providers = Record<string, Provider>;
export type { 
  FooterColumnProps, 
  Provider, 
  Providers, 
  ProfileMenuProps, 
  ProjectFormProps, 
  PosterProps,
  FormFieldProps,
  CustomMenuProps,
  ButtonProps
};
