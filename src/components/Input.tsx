import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

import { FieldError } from "react-hook-form";

interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  type: string;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, label, type, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        type={type}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="fild"
        _hover={{
          bgColor: "gray.900",
        }}
        ref={ref}
        size="lg"
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
