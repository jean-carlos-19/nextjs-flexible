import { ProjectInterface, SessionInterface, UserProfile } from "./common.types";

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
  session: SessionInterface
}

interface ProjectFormProps {
  type: "create" | "edit"
  session: SessionInterface
  project?: ProjectInterface | undefined
}

interface PosterProps {
  urlImage: string;
  id: string,
  value: any,
  type: "create" | "edit"
  disabled?: boolean,
  setUrlImageLocal: (image: string) => void
  handleChange: any,
  handleBlur: any,
}

interface FormFieldProps {
  type?: string;
  isTextArea?: string;
  title: string;
  value: string | undefined;
  placeholder: string;
  handleChange: any;
  handleBlur: any;
}

interface CustomMenuProps {
  title: string;
  value: string | undefined;
  filters: string[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleBlur: any;
}

interface ButtonProps {
  title: string;
  disabled?: boolean;
  children?: React.ReactNode,
  leftIcon?: string | undefined,
  rightIcon?: string | undefined,
  bgColor?: string,
  textColor?: string
  handleClick?: () => void;
}

interface ProjectCardProps {
  id: string,
  name: string,
  title: string,
  image: string,
  avatarUrl: string
  userId: string,
}

interface RelatedProjectsProps {
  userId: string,
  projectId: string,
}

interface ProjectActionsProps {
  projectId: string;
}

interface LoadMoreProps {
  startCursor:string | undefined
  endCursos:string | undefined
  hasPreviousPage:boolean | undefined
  hasNextPage:boolean | undefined
}

interface ProfilePageProps{
  user:UserProfile
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
  ButtonProps,
  ProjectCardProps,
  RelatedProjectsProps,
  ProjectActionsProps,
  LoadMoreProps,
  ProfilePageProps
};
