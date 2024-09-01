import { ReactNode } from "react";

interface AttributeProps {
  icon: ReactNode;
  label: string;
}

const Attribute = ({ icon, label }: AttributeProps) => {
  return (
    <div className="flex gap-2 rounded-full border border-accent-200 px-2 py-1">
      {icon}
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default Attribute;
