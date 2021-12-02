const EndScreen = (): JSX.Element => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/2">
        <div className="text-center text-4xl pb-4">🎉</div>
        <div className="text-center">Congratulations! You solved the mystery</div>

        {/* <div className="text-center text-4xl pb-4">❌</div>
        <div className="text-center">Sad, you did not solve the mystery</div> */}

        <div className="pt-6 grid gap-2 grid-cols-3">
          <div className="bg-white shadow-md">
            <div className="w-full h-60 bg-black flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-md"></div>
            </div>

            <div className="p-6">
              Murderer
            </div>
          </div>
          
          <div className="bg-white shadow-md">
            <div className="w-full h-60 bg-black flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-md"></div>
            </div>

            <div className="p-6">
              Murderer
            </div>
          </div>

          <div className="bg-white shadow-md">
            <div className="w-full h-60 bg-black flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-md"></div>
            </div>

            <div className="p-6">
              Murderer
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndScreen;