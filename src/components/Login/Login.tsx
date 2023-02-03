import React, {useState} from 'react'

function LoginModaller() {
    const [isVisible, setIsVisible] = useState(false);


    return (
        <div className="login-modal">
      <button onClick={() => setIsVisible(true)}>Login</button>
      {isVisible && (
        <div className="modal">
          <form>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <button type="submit">Submit</button>
          </form>
          <button onClick={() => setIsVisible(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default LoginModaller