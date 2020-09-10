import React from "react";
import { useFormikContext } from "formik";

//import components
import * as Button from "../Button";
import colors from "../../config/colors";

const SubmitBtn = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button.BtnContain
      label={title}
      color={colors.red}
      labelcolor="white"
      onPress={handleSubmit}
    />
  );
};

export default SubmitBtn;
