import React, { useEffect, useState } from "react";

type ChangeEventHandler<T = Element> = (event?: React.ChangeEvent<T>) => void;

type ValidationSchema<T> = Array<{
  key: keyof T;
  condition: boolean;
  cb: (...arg: any) => void;
}>;

export const useInput = <T extends object>(
  fields: T
): {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
  onChangeHandler: (
    name: keyof T,
    value?: string | number
  ) => ChangeEventHandler<any>;
  error: Partial<Record<keyof T, string | boolean>>;
  onClear: () => void;
  getErrors: (validationSchema?: ValidationSchema<T>) => { errorFlag: boolean };
  setError: any;
} => {
  const [data, setData] = useState<T>({
    ...fields,
  });

  const updatedError: Partial<Record<keyof T, string | boolean>> = fields;

  useEffect(() => {
    Object.keys(fields).forEach((v: string) => {
      updatedError[v as keyof T] = false;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [error, setError] =
    useState<Partial<Record<keyof T, string | boolean>>>(updatedError);

  const onChangeHandler = (name: keyof T, value?: string | number) => {
    return function (e?: any) {
      !!e && e.persist();

      setError((prev: any) => {
        if (name === "email") {
          return {
            ...prev,
            [name]: validateEmail(String(value ?? e.target.value)),
          };
        }

        if (name === "phone") {
          return {
            ...prev,
            [name]: validatePhone(String(value ?? e.target.value)),
          };
        }

        if (name === "orgPhone") {
          return {
            ...prev,
            [name]: validateOrgPhone(String(value ?? e.target.value)).message,
          };
        }

        if (name === "orgEmail") {
          return {
            ...prev,
            //@ts-ignore
            [name]: validateOrgEmail(
              String(value ?? e.target.value),
              //@ts-ignore
              String(data["orgPhone"])
            ).message,
          };
        }

        if (name === "mobile") {
          return {
            ...prev,
            [name]: validateMobile(String(value ?? e.target.value)),
          };
        }

        if (
          (value !== undefined &&
            value !== null &&
            value !== "" &&
            value !== 0) ||
          (e?.target?.value !== undefined &&
            e?.target?.value !== null &&
            e?.target?.value !== "" &&
            e?.target?.value !== 0)
        ) {
          return { ...prev, [name]: false };
        } else {
          return { ...prev, [name]: true };
        }
      });

      setData((prev: T) => {
        if (value === undefined || value === null) {
          return { ...prev, [name]: e?.target?.value };
        } else {
          return { ...prev, [name]: value };
        }
      });
    };
  };

  const onClear = () => {
    setData({ ...fields });
  };

  const getErrors = (validationSchema?: ValidationSchema<T>) => {
    let newError = {};

    if (!!validationSchema) {
      validationSchema.forEach((val) => {
        const newCondition = val.condition;

        newError = { ...newError, [val.key]: newCondition };

        if (newCondition) {
          val.cb();
        }
      });

      setError(() => {
        return newError;
      });
    }

    const errors = Object.entries(newError);

    const filtered = errors.filter(
      ([_, value]) =>
        value === true || value === "" || value === undefined || value === 0
    );

    const errorFlag = filtered.length > 0;

    return { errorFlag };
  };

  return {
    data,
    onChangeHandler,
    error,
    onClear,
    setData,
    getErrors,
    setError,
  };
};

export function validateEmail(email: string) {
  //Validates the email address
  var emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  var value = !emailRegex.test(email);

  return value;
}

export function validateOrgEmail(email: string, phone: string | number) {
  var { type } = validateOrgPhone(String(phone));

  if (type === "landline") {
    return {
      condition: validateEmail(email),
      message: validateEmail(email) ? "Please enter a valid email!" : undefined,
    };
  }

  var cond = email.length > 0 ? validateEmail(email) : false;

  return {
    condition: cond,
    message: cond ? "Please enter a valid email!" : undefined,
  };
}

export function validateOrgPhone(phone: string) {
  var phoneRegex = /^\d{9,10}$/; // Change this regex based on requirement

  var value = !phoneRegex.test(phone);

  return {
    type: phone.length <= 9 ? "landline" : "mobile",
    condition: value,
    message: value
      ? "Phone number must be 9 [landline] - 10 [mobile] digits!"
      : undefined,
  };
}

export function validatePhone(phone: string) {
  //Validates the phone number
  var phoneRegex = /^\d{9}$/; // Change this regex based on requirement

  var value = !phoneRegex.test(phone);

  return value;
}

export function validateMobile(phone: string) {
  //Validates the phone number
  var phoneRegex = /^\d{10}$/; // Change this regex based on requirement

  var value = !phoneRegex.test(phone);

  return value;
}

export function validatePassword(password: string): {
  condition: boolean;
  message?: string;
} {
  const whiteSpaceRegex = /^(?=.*\s)/;
  const upperCaseRegex = /(?=.*[A-Z])/;
  const lowerCaseRegex = /^(?=.*[a-z])/;
  const digitRegex = /^(?=.*[0-9])/;
  const specialRegex = /(?=.*[!@#$%^&*])/;
  const passwordLengthRegex = /^.{7,16}$/;

  const whiteSpace = !whiteSpaceRegex.test(password);
  const upperCase = upperCaseRegex.test(password);
  const lowerCase = lowerCaseRegex.test(password);
  const digit = digitRegex.test(password);
  const special = specialRegex.test(password);
  const passwordLength = passwordLengthRegex.test(password);

  if (!whiteSpace)
    return {
      condition: true,
      message: "Password must not contain white spaces.",
    };
  else if (!upperCase)
    return {
      condition: true,
      message: "Password must contain at least one upper case.",
    };
  else if (!lowerCase)
    return {
      condition: true,
      message: "Password must contain at least one lower case.",
    };
  else if (!digit)
    return {
      condition: true,
      message: "Password must contain at least one digit.",
    };
  else if (!special)
    return {
      condition: true,
      message: "Password must contain at least one special symbol.",
    };
  else if (!passwordLength)
    return {
      condition: true,
      message: "Password must be 7-16 characters long.",
    };
  return {
    condition: false,
    message: undefined,
  };
}
