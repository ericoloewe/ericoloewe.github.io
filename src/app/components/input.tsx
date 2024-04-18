"use client";
interface CustomProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  isNumber?: boolean,
  isPercent?: boolean,
  groupSymbolLeft?: string,
  groupSymbolRight?: string,
  onChange: React.Dispatch<React.SetStateAction<any>>,
  value: any,
}

export function Input(props: CustomProps) {
  const { onChange, isNumber, groupSymbolLeft, groupSymbolRight, isPercent, value, ...otherProps } = props;
  const isInputNumber = props.type === 'number' || isNumber;

  function onChangeInput(event: any) {
    const { value } = event.target;

    const onChangeOrDefault = onChange || function () { };

    if (isPercent)
      onChangeOrDefault(value / 100);
    else if (isInputNumber)
      onChangeOrDefault(value);
    else
      onChangeOrDefault(value);
  }

  const inputValue = isInputNumber && value ? parseNumber(value, { isPercent }) : value || '';

  const input = <input className="form-control" onChange={onChangeInput} value={inputValue} {...otherProps} />;

  return groupSymbolLeft || groupSymbolRight ? (
    <div className="input-group mb-3">
      {groupSymbolLeft && <span className="input-group-text">{groupSymbolLeft}</span>}
      {input}
      {groupSymbolRight && <span className="input-group-text">{groupSymbolRight}</span>}
    </div>
  ) : input;
}

function parseNumber(value: number, { isPercent }: any) {
  if (value == null || isNaN(value))
    return '';

  return isPercent ? value * 100 : value;
}

