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

  const { name, email, password, password2, age } = formData;

  return (
    <>
      <h1>Register</h1>
    </>
  );
};

export default Register;
