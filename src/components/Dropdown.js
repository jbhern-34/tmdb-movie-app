import React from "react";
import {
  FormControl,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectIcon,
  Icon,
  ChevronDownIcon,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

const DropDown = ({ onValueChange, items, selectedValue, placeholder }) => {
  return (
    <FormControl>
      <Select 
      style={styles.dropdown}
      onValueChange={onValueChange} 
      selectedValue={selectedValue}
      >
        <SelectTrigger variant="outline" size="sm">
          <SelectInput placeholder={selectedValue ? selectedValue : placeholder} />
          <SelectIcon mr="$2">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>

        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {items.map((item) => (
              <SelectItem
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </FormControl>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    width: 300,
  },
});