export interface IProps {
  navigation: {
    replace: (arg0: string) => void;
    navigate: (arg0: string) => void;
  };
}

export interface ICredentials {
  phoneNo: string;
  password: string;
}

export interface IUser {
  fullName: string;
  phoneNo: string;
  password: string;
  confirmPassword: string;
}

interface IProperties {
  fullName: boolean | undefined;
  phoneNo: boolean | undefined;
  password?: boolean | undefined;
  confirmPassword?: boolean | undefined;
}
export interface IFormikProps {
  handleChange: (e: string | React.ChangeEvent<any>) => void;
  handleBlur: (e: string | React.ChangeEvent<any>) => void;
  setFieldValue: (fieldName: string, fieldValue: any) => void;
  values: IUser;
  touched: IProperties;
  errors: IProperties;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}
