import { SVGProps } from "../types/Types";
type InfoProps = {
  Icon: React.ComponentType<SVGProps>;
  data: string;
  split?: string;
  format: string;
};
export const Info = ({ Icon, data, split, format }: InfoProps) => {
  return (
    <div className="info flex row gap-2 items-center">
      <div className="icon bg-[var(--secondary)] w-[50px] h-[50px] flex items-center justify-center rounded-[40px]">
        <Icon color="white" width="25px" />
      </div>
      <div className="data flex font-bold ">
        <p className="text-white">
          {data}
          {split && split}
        </p>
        <span className="text-[var(--secondary)]">{format}</span>
      </div>
    </div>
  );
};
