import tailwindcss from "../assets/icon.png";
import react from "../assets/react.svg";
import git from "../assets/git.png";
import firebase from "../assets/firebase.png";
export default function Skills() {
  return (
    <div className=''>
      <h1 className='font-bold text-2xl text-white'>Skills:</h1>

      <div className=' text-white p-2 rounded-lg space-x-1.5 space-y-2'>
        {/* <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>TailwindCss</li>
        <li>Jest</li>
        <li>Git / GitHub</li> */}

        <div className='inline-block bg-black p-2 rounded-sm'>
          <span className='font-bold text-orange-600 text-lg'>{"</>"}</span>
          <span>HTML</span>
        </div>

        <div className='inline-block bg-black p-2 rounded-sm'>
          <span className='font-bold text-blue-400 text-xl'>{"#"}</span>
          <span>CSS</span>
        </div>

        <div className='inline-block bg-black p-2 rounded-sm'>
          <span className='font-bold text-yellow-300 text-lg'>JS</span>
          <span>JavaScript</span>
        </div>

        <div className='inline-block bg-black p-2 rounded-sm'>
          <img src={react} className='w-6 inline-block' />
          <span>React</span>
        </div>

        <div className='inline-block bg-black p-2 rounded-sm'>
          <img src={tailwindcss} className='w-6 inline-block' />
          <span>Tailwind</span>
        </div>

        <div className='inline-block bg-black p-2 rounded-sm'>
          <img src={git} className='w-6 inline-block' />
          <span>Git/GitHub</span>
        </div>

        <div className='inline-block bg-black p-2 rounded-sm'>
          <img src={firebase} className='w-6 inline-block' />
          <span>FireBase 'Backend'</span>
        </div>
      </div>
    </div>
  );
}
