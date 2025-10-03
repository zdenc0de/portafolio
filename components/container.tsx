interface ContainerProps {
  children: React.ReactNode;
}

export const ContainerPage = ({ children }: ContainerProps) => {
  return (
    <div className="relative mx-auto mt-40 w-full max-w-6xl px-4 md:px-6 min-h-[600px] md:min-h-screen">
      {children}
    </div>
  );
};
