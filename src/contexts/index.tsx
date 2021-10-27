interface Props {
  children: JSX.Element | JSX.Element[];
}

export function AppProviders({ children }: Props) {
  return (
    <>
      children
    </>
  );
}
