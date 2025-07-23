import React from "react";

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    age: "",
  });

  return (
    <>
      <h1>Register</h1>
    </>
  );
};

export default Register;
