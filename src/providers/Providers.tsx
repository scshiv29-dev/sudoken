import { ReactQueryProvider } from "./ClientProviders";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Providers;
