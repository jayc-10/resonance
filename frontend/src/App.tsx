export default function App() {
  return (
    <div className="w-screen min-h-screen p-5 bg-beige text-dark font-mono relative">
      {/* Headings */}
      <div className="w-full grid grid-cols-3 relative pt-14">
        <h1 className="text-left">RESONANCE</h1>
        <h1 className="text-center">GUITAR CONVERSION TOOL</h1>
        <h1 className="absolute right-0 text-right pt-8">ACOUSTIC</h1>
        <h1 className="text-right">ELECTRIC | BASS</h1>
      </div>
      {/* Black Box (OMG TESTING??)*/}
      <div className="w-full h-[73vh] bg-dark text-beige flex items-center justify-center mt-4 relative">
        <img
          src="/src/assets/images/background.png"
          alt="background image"
          className="absolute left-0 h-full z-0"
        />
        <div className="absolute top-10 right-10">
          <p className="text-xs">pedal art credit to owners</p>
        </div>
        <div className="absolute bottom-10 right-10 text-right">
          <p className="text-xs">(v1) supported !!</p>
          <ul className="list-disc list-inside text-xs">
            <li>acoustic</li>
          </ul>
        </div>
        {/* Pedals */}
        <div className="absolute flex z-10 right-1/9 top-1/7 space-x-6">
          <div className="flex flex-col items-center text-center space-y-1">
            <p>acoustic</p>
            <img
              src="/src/assets/images/acoustic_pedal.png"
              alt="acoustic pedal"
            />
            <p className="text-xs">CCV yung kai</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-1 w-40">
            <p>electric</p>
            <img
              src="/src/assets/images/electric_pedal.png"
              alt="electric pedal"
            />
            <p className="text-xs">RF coalowl うるせー！ <br />reprint edition</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-1">
            <p>bass</p>
            <img
              src="/src/assets/images/bass_pedal.png"
              alt="bass pedal"
            />
            <p className="text-xs">PPDS coalowl 押せ！引け！<br />reprint edition</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-1">
            <p>more</p>
            <img
              src="/src/assets/images/more_pedal.png"
              alt="more pedal"
            />
            <p className="text-xs">DOMB might 日差し<br />reprint edition</p>
          </div>
        </div>
      </div>
      {/* Footers */}
      <div className="w-full flex justify-between pt-11">
        <h1>SUM 2025</h1>
        <h1>001</h1>
        <h1>
          <a
            href="https://github.com/jayc-10"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-inherit hover:no-underline"
            style={{ color: 'inherit' }}
          >
            JAYC-10
          </a>
        </h1>
      </div>
    </div>
  );
}
