import email from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import Whatsapp from "../assets/whatsapp.png";
import message from "../assets/message.svg";
export default function Contact() {
  return (
    <div className='text-white '>
      <h1 className='font-bold text-2xl'>Contact Me:</h1>
      <div className='bg-black space-y-3 p-2 space-y-2 rounded-lg'>
        <ul>
          <li>
            <a href='mailto:edetpromise019@gmail.com'>
              <img src={email} className='w-10 inline-block' />
              <b>Email:</b>
              edetpromise019@gmail.com
            </a>
          </li>

          <li>
            <a href='https://www.linkedin.com/in/promise-edet-260574321'>
              <img src={linkedin} className='w-10 inline-block' />
              <b>LinkedIn:</b> LinkedIn
            </a>
          </li>

          <li>
            <a href='tel:+2348052096286'>
              <img src={message} className='w-10 inline-block' />
              <b>Tell:</b>
              +2348052096286
            </a>
          </li>

          <li>
            <img src={Whatsapp} className='w-10 inline-block' />
            <a href='http://wa.me/+2348052096286'>
              <b>Whatsapp:</b>
              +2348052096286
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
