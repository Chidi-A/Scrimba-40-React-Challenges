import React from 'react';
import Message from './components/Message';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';

export default function MillionDollarBankAccount() {
  const passCode = '1001';

  const [userInput, setUserInput] = React.useState({
    charOne: '',
    charTwo: '',
    charThree: '',
    charFour: '',
  });

  const [verified, setVerified] = React.useState(undefined);

  /* Challenge

	The verification code form doesn't yet check the user's input. Your job is to finish setting it up as follows: 
	
		1. When the user types a character in one of the password inputs, the corresponding 
		   property of the userInput state object should be updated, while preserving the other properties. Note that the property names and the names of the inputs match each other (charOne, charTwo, etc.)
		   
		2. When the user clicks the submit button, a submit handling function should prevent the 
		   page from refreshing and check if the combination of the four characters stored in userInput equals the passCode value (declared on line 7 above).
		   
		3. If they match, the verified state value should be set to true. Otherwise, it should 
		   be set to false. 
		   
		4. Your code should be as DRY as possible!
*/

  function handleChange(event) {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      userInput.charOne +
        userInput.charTwo +
        userInput.charThree +
        userInput.charFour ===
      passCode
    ) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  }
  return (
    <div className="million-dollar-bank-account">
      <div className="wrapper">
        <Header />

        <form>
          <Message status={verified} />

          <div>
            <input
              required
              type="password"
              name="charOne"
              value={userInput.charOne}
              onChange={handleChange}
            />

            <input
              required
              type="password"
              name="charTwo"
              maxLength="1"
              value={userInput.charTwo}
              onChange={handleChange}
            />

            <input
              required
              type="password"
              name="charThree"
              maxLength="1"
              value={userInput.charThree}
              onChange={handleChange}
            />

            <input
              required
              type="password"
              name="charFour"
              maxLength="1"
              value={userInput.charFour}
              onChange={handleChange}
            />
          </div>

          <button disabled={verified} onClick={handleSubmit}>
            Submit
          </button>
        </form>

        <Footer />
      </div>
    </div>
  );
}
