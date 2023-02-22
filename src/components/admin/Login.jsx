import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
    } catch (err) {
      console.error(err)
      setError('Failed to login')
    }
  };

  return (
    <form onSubmit={handleSubmit}
    className="login-form">
      <label>
        <input
          type="email"
          value={email}
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <input
          type="password"
          value={password}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="login-submit-button" type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );

}
 
export default Login;