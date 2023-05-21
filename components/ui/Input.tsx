import type { ComponentChildren } from "preact";
import Icon from "$store/components/ui/Icon.tsx";

type InputProps = {
  icon: ComponentChildren;
  label: string;
  isPassword?: boolean;
};

function Input({ icon, label, isPassword = false }: InputProps) {
  return (
    <div className="relative mb-5 not:last:mb-0">
      <div className="absolute left-4 top-5">
        {icon}
      </div>
      <input
        className="bg-gray-900 text-gray-200 w-full py-5 pl-12 pr-6 rounded-sm"
        placeholder={label}
        type={isPassword ? "password" : "text"}
      />
    </div>
  );
}

export default Input;
