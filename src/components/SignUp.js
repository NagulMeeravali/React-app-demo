import "./reg.css";
export const SignUp = () => {
  return (
    <div className="f1">
      <h1>Registration form</h1>
      <table>
        <tr>
          <td>Email Id: </td>
          <td>
            <input type="text" name="uname" />
          </td>
        </tr>
        <tr>
          <td>Full Name: </td>
          <td>
            <input type="text" name="full_name" />
          </td>
        </tr>
        <tr>
          <td> Mobile: </td>
          <td>
            <input type="mobile" name="mobile" />
          </td>
        </tr>
        <tr>
          <td>Gender: </td>
          <td>
            <input type="radio" name="gender" /> Male
            <input type="radio" name="gender" /> Female
          </td>
        </tr>
        <tr>
          <td>City :</td>
          <td>
            <input type="text" name="city" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="submit" value="Sign Up" />
            <input type="Reset" name="Clear" />
          </td>
        </tr>
      </table>
    </div>
  );
};
