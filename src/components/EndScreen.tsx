import { useEffect, useState } from "react";
import { IGuessResult } from "../interfaces";

const EndScreen = (): JSX.Element => {
  const [result, setResult] = useState<IGuessResult>();

  useEffect(() => {
    const res = localStorage.getItem("result");

    if (res) {
      const guessResult: IGuessResult = JSON.parse(res);
      setResult(guessResult);
    }
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/2">

        { result?.location && result.murderer && result.weapon ? 
        
        <div><div className="text-center text-4xl pb-4">🎉</div><div className="text-center">Congratulations! You solved the mystery</div> </div>
        : <div><div className="text-center text-4xl pb-4">❌</div><div className="text-center">Sad, you did not solve the mystery</div></div>}

        <div className="pt-6 grid gap-2 grid-cols-3">
          <div className="bg-white shadow-md">
            <div className="w-full h-60 bg-black flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-md"></div>
            </div>

            <div className="p-6">
              Murderer: {result?.murderer ? "Right": "Wrong"}
            </div>
          </div>
          
          <div className="bg-white shadow-md">
            <div className="w-full h-60 bg-black flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-md"></div>
            </div>

            <div className="p-6">
              MurderWeapon: {result?.weapon ? "Right": "Wrong"}
            </div>
          </div>

          <div className="bg-white shadow-md">
            <div className="w-full h-60 bg-black flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-md"></div>
            </div>

            <div className="p-6">
              Location: {result?.location  ? "Right": "Wrong"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndScreen;