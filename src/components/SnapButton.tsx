import { Spark } from "./Brand";

type SnapButtonProps = {
  onClick: () => void;
  exit?: boolean;
  disabled?: boolean;
};

export default function SnapButton({ onClick, exit = false, disabled = false }: SnapButtonProps) {
  return (
    <button
      type="button"
      className={exit ? "snap-exit" : "snap-button"}
      onClick={onClick}
      disabled={disabled}
      data-focus={exit ? undefined : "snap"}
    >
      <Spark className="snap-icon" />
      {exit ? "SNAP TO EXIT" : "SNAP"}
    </button>
  );
}
