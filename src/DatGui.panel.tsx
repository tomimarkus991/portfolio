import DatGui, { DatColor, DatNumber } from "react-dat-gui";

export interface GuiData {
  metalness: number;
  color: string;
}

interface Props {
  data: GuiData;
  setData: any;
}

export const DatGuiPanel = ({ data, setData }: Props) => {
  return (
    <DatGui
      data={data}
      onUpdate={updatedData =>
        setData((prevState: any) => ({ data: { ...prevState.data, updatedData } }))
      }
      className="react-dat-gui-relative-position"
    >
      <DatNumber path="metalness" label="metalness" min={-10} max={100} step={0.1} />
      <DatColor label="color" path="color" />
    </DatGui>
  );
};
