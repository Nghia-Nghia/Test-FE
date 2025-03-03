import { Listbox, Combobox, Icon } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React, { useState, useCallback } from "react";

export interface ComboboxItem {
  value: string;
  label: string;
}
interface NonMutuallyExclusiveProps {
  label?: string;
  items: ComboboxItem[];
  selected?: string | null;
  onSelected: (value: string) => void;
  style?: React.CSSProperties;
}

export type CustomComboboxProps = NonMutuallyExclusiveProps;

const CustomCombobox: React.FC<CustomComboboxProps> = ({ label, items, selected, onSelected }) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(items);

  const escapeSpecialRegExCharacters = useCallback(
    (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    []
  );

  const updateText = useCallback(
    (value: string) => {
      setInputValue(value);

      if (value === "") {
        setOptions(items);
        return;
      }

      const filterRegex = new RegExp(escapeSpecialRegExCharacters(value), "i");
      const resultOptions = items.filter((option) => option.label.match(filterRegex));
      setOptions(resultOptions);
    },
    [items, escapeSpecialRegExCharacters]
  );

  const updateSelection = useCallback(
    (selected: string) => {
      const matchedOption = options.find((option) => {
        return option.value.match(selected);
      });
      onSelected(selected);
      setInputValue((matchedOption && matchedOption.label) || "");
    },
    [options]
  );

  const optionsMarkup =
    options.length > 0
      ? options.map((option) => {
          const { label, value } = option;

          return (
            <Listbox.Option
              key={`${value}`}
              value={value}
              selected={selected === value}
              accessibilityLabel={label}
            >
              {label}
            </Listbox.Option>
          );
        })
      : null;

  return (
    <div>
      {label && <p style={{ marginBottom: "2px" }}>{label}</p>}
      <Combobox
        activator={
          <Combobox.TextField
            prefix={<Icon source={SearchIcon} />}
            onChange={updateText}
            label='Search tags'
            labelHidden
            value={inputValue}
            placeholder='Search tags'
            autoComplete='off'
          />
        }
      >
        {options.length > 0 ? <Listbox onSelect={updateSelection}>{optionsMarkup}</Listbox> : null}
      </Combobox>
    </div>
  );
};

export default CustomCombobox;
