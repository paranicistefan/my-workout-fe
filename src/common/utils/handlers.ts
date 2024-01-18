import { Dispatch, SetStateAction } from "react";
type WithNameAndValue = {
  name: string;
  value: string;
};

type WithNameAndChecked = {
  name: string;
  checked: boolean;
};

export const onDataChange =
  <T extends EventTarget, K>(setState: Dispatch<SetStateAction<K>>) =>
  (e: React.ChangeEvent<T>) => {
    const { name, value } = e.target as unknown as WithNameAndValue;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

export const onSelectValueChangeWithParam =
  <T>(setState: Dispatch<SetStateAction<T>>) =>
  (name: string, option: string | string[]) => {
    setState((prevState) => ({ ...prevState, [name]: option }));
  };

export const onDataChangeWithValueParam =
  <T extends EventTarget, K>(setState: Dispatch<SetStateAction<K>>) =>
  (name: string, value: T) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

export const onClearGeneric =
  <K>(setState: Dispatch<SetStateAction<K>>, prop: string) =>
  () => {
    setState((prevState) => ({ ...prevState, [prop]: "" }));
  };

export const onValueChange =
  <T extends EventTarget>(setState: Dispatch<SetStateAction<string>>) =>
  (e: React.ChangeEvent<T>) => {
    const { value } = e.target as unknown as WithNameAndValue;
    setState(value);
  };

export const onValueChangeWithParam =
  <T>(setState: Dispatch<SetStateAction<T>>, value: T) =>
  () => {
    setState(value);
  };

export const onDataStringChange =
  <K>(setState: Dispatch<SetStateAction<K>>) =>
  (name: string, value: string) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

export const onDataCheckboxChange =
  <T extends EventTarget, K>(setState: Dispatch<SetStateAction<K>>) =>
  (e: React.ChangeEvent<T>) => {
    const { name, checked } = e.target as unknown as WithNameAndChecked;
    setState((prevState) => ({ ...prevState, [name]: checked }));
  };
