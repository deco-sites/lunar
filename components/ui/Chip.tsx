import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

type ChipProps = {
  children: string;
};

function Chip({ children }: ChipProps) {
  return (
    <div className="bg-blue-300 inline-block bg-opacity-10 py-2 px-4 rounded-md">
      <p className="text-blue-500 uppercase text-sm font-bold">{children}</p>
    </div>
  );
}

export default Chip;
