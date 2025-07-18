import { useState } from "react";

function Content() {
  const [render, setRender] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  function collectEmail(event){
    setEmail(event.target.value)
  }
  function handleSubmit(){
        if(email==''){
          setError(!error)
        }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen px-4">
        {/* Outer Container */}
        <div
          className="z-10 flex flex-col text-white text-lg sm:text-xl md:text-2xl lg:text-[1.7vw] 
            justify-center items-center rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[1vw] 
            gap-y-2 sm:gap-y-2 md:gap-y-2 lg:gap-y-[0.8vw] bg-purple-950/75 
            p-6 sm:p-8 md:p-10 lg:p-[1.8vw] w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[30vw]"
        >
          {/* Inner Container (Matches Outer Width) */}
          <div className="flex flex-col justify-center items-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[30vw] gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-[2vw]">
            <img
              className="invert h-8 sm:h-10 md:h-12 lg:h-[2.5vw]"
              src="https://img.icons8.com/?size=100&id=XKFRdQOs24QU&format=png&color=000000"
              alt=""
            />
            <h1 className="font-bold tracking-wide text-center">Welcome To Framer</h1>

            {/* Google Button */}
            <button
              className="flex justify-center items-center rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[1vw] 
                w-full py-2 sm:py-3 md:py-4 lg:py-[0.8vw] bg-blue-400"
            >
              <img
                className="invert mr-2 sm:mr-3 md:mr-4 lg:mr-[0.5vw] h-6 sm:h-7 md:h-8 lg:h-[1.8vw]"
                src="https://img.icons8.com/?size=100&id=ws7rJTC8qP0f&format=png&color=000000"
                alt=""
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-[1.15vw] font-bold">
                Continue with Google
              </h1>
            </button>
          </div>
          <div>
            
          </div>
          <div className="flex flex-col justify-start gap-y-2  lg:gap-y-2 2xl:gap-y-[1vh]  
            w-full ">
              {/* Conditionally render the input field */}
          {render ? (
           <input
  autoFocus
  className={`bg-black/30 pl-4 sm:pl-5 md:pl-6 lg:pl-[1vw] pr-20 sm:pr-24 md:pr-28 lg:pr-[8.5vw] 
    py-2 sm:py-3 md:py-4 lg:py-[0.8vw] text-sm sm:text-base md:text-lg lg:text-[1.15vw] 
    rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[1vw] placeholder:text-gray-400 
    focus:outline-none border lg:px-[8vw] ${error ? 'border-red-700' : 'border-blue-500'}`}
  type="text"
  placeholder="Email"
  onChange={collectEmail}
/>) : null}

          {error?
          <label className="text-[3vw] md:text-2xl lg:text-[0.7rem] 2xl:text-[1vw] text-left text-red-700 "> 
            Please enter a Valid email address</label>:null}

          {/* Conditional button rendering */}
          {render?<button
            className="text-sm sm:text-base md:text-lg lg:text-[1.15vw] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[1vw] 
              bg-white/20 w-full py-2 sm:py-3 md:py-4 lg:py-[0.8vw]
              px-[4.88rem] sm:px-3 md:px-10 lg:px-[8vw] "
              onClick={handleSubmit}
          >
            Continue
          </button> :
          <button
            className="text-sm sm:text-base md:text-lg lg:text-[1.15vw] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[1vw] 
              bg-white/20 sm:px-3 md:px-10 lg:px-[5vw] py-2 sm:py-3 md:py-4 lg:py-[0.8vw]"
            onClick={() => setRender(!render)}
          >
            Continue with Email
          </button>}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Content;