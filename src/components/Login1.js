import { useState } from "react";

export const Login1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (email && password) {
      //const newEntry = { email: email, password: password };
      //setAllEntry([...allEntry, newEntry]);
      //console.log(allEntry);
      //let result=fetch("http://localhost:3306")
    } else {
      alert("please fill the data");
    }
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
