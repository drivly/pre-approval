import { Switch } from "@headlessui/react";
import { useController } from "react-hook-form";

export default function ToggleInput(props: any) {
  const {
    field: { onChange, value },
  } = useController(props);
  const { disabled, name, label } = props;

  return (
    <div className="flex items-center py-3.5">
      <Switch
        disabled={disabled}
        value={value}
        name={name}
        onChange={onChange}
        className={`${
          value ? "bg-skin-accent" : "bg-gray-600"
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none `}
      >
        <span className="sr-only">Agree to pre-approval</span>
        <span
          className={`${
            value ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white/80 backdrop-blur-lg transition`}
        />
      </Switch>
      <label
        className={`${
          value ? "text-skin-accent" : "text-skin-base"
        } ml-4 text-sm font-medium tracking-wide`}
      >
        <span>{label}</span>
      </label>
    </div>
  );
}
