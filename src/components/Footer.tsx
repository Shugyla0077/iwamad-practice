interface FooterProps {
  text: string;
}

export const Footer = ({ text }: FooterProps) => {
  return (
    <footer className="w-full text-center py-4 text-xs text-gray-500">
      <p>{text}</p>
    </footer>
  );
};