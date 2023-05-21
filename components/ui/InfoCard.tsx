import type { ComponentChildren } from "preact";

type InfoCardProps = {
  icon: ComponentChildren;
  title: string;
  content: string;
};

function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <div className="mb-16 not:last:mb-0">
      <div className="flex justify-center items-center bg-gray-800 w-11 h-11 rounded-sm">
        {icon}
      </div>
      <h2 className="mt-4 mb-1 text-gray-300 text-base">{title}</h2>
      <p className="text-gray-500 text-base">{content}</p>
    </div>
  );
}

export default InfoCard;
