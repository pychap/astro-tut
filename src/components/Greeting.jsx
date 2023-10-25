import { useState } from 'preact/hooks';
import confetti from 'canvas-confetti';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h4 style="color: white;">{greeting}! Thank you for visiting! <br />Be sure to click my surprise button!</h4>
      {/* <button onClick={() => setGreeting(randomMessage())}> */}
      <button onClick={() => {
        confetti()
        setGreeting(randomMessage())
        }}>
        Surprise!
      </button>
    </div>
  );
}