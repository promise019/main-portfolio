import profile from "../assets/Profile1.jpg";
export default function Intro() {
  return (
    <div className='text-center pt-6'>
      <h1 className='text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-red-400 text-transparent bg-clip-text lg:text-5xl'>
        Edet, Promise Archibong
      </h1>

      <h2 className='font-bold text-white text-xl'>Frontend React Developer</h2>

      <img
        src={profile}
        alt=' profile picture'
        className='w-[50%] ml-[25%] mt-10 lg:w-[40%] lg:ml-[30%] rounded-full shadow shadow-blue-700'
      />
    </div>
  );
}
