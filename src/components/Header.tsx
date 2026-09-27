interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="w-full text-center py-6 bg-white shadow-sm">
      <h1 className="text-xl font-bold">{title}</h1>
    </header>
  );
};