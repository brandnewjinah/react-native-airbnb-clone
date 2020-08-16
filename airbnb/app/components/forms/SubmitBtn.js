import React from "react";
import { useFormikContext } from "formik";

//import components
import { BtnContain } from "../Button";

const SubmitBtn = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <BtnContain label={title} onPress={handleSubmit} />;
};

export default SubmitBtn;
