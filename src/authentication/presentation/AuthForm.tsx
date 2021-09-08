import * as React from "react";
import { useState } from "react";
interface IProps {
  accredit(id: String, password: String): void;
  buttonValue: String;
}

const AuthForm: React.FC<IProps> = (props) => {
  const { accredit, buttonValue } = props;
  const [id, setId] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const handleChangeClientInfo = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
  };

  return <section></section>;
};

export default AuthForm;
