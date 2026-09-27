export interface NavLink {
  id: number;
  label: string;
  url: string;
  isExternal?: boolean;
}

interface NavLinkItemProps {
  item: NavLink;
}

export const NavLinkItem = ({ item }: NavLinkItemProps) => {
  return (
    <a
      href={item.url}
      target={item.isExternal ? '_blank' : undefined}
      rel={item.isExternal ? 'noopener noreferrer' : undefined}
      className="text-indigo-500 hover:text-indigo-700 font-medium text-sm"
    >
      {item.label}
    </a>
  );
};