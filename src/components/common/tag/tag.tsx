import React from "react";
import { Tag, LegacyStack, Text, BlockStack, Card } from "@shopify/polaris";

interface NonMutuallyExclusiveProps {
  items: string[] | null;
  onRemoveTag: (value: string) => void;
}
export type CustomTagProps = NonMutuallyExclusiveProps;

const CustomTag: React.FC<CustomTagProps> = ({ items, onRemoveTag }) => {
  const tagMarkup = (items ?? []).map((option) => (
    <Tag size='large' key={option} onRemove={() => onRemoveTag(option)}>
      {option}
    </Tag>
  ));

  return (
    <BlockStack gap='100'>
      <LegacyStack spacing='tight'>{tagMarkup}</LegacyStack>
    </BlockStack>
  );
};

export default CustomTag;
