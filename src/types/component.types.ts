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

type Providers = Record<string, Provider>;
export type { FooterColumnProps, Provider, Providers };
