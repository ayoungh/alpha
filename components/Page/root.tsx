type PageRootProps = {
  children: React.ReactNode;
};

export const PageRoot = ({ children }: PageRootProps): JSX.Element => (
  <div>{children}</div>
);