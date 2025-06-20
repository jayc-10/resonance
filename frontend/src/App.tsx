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
      <div className="w-full h-[73vh] bg-dark text-beige flex items-center justify-center mt-4">
        <h1 className= "absolute text-right right-[1%] !text-[205px] tracking-wide z-0">RESONANCE</h1>
        {/* fill in main content here */}
      </div>
      {/* Footers */}
      <div className="w-full flex justify-between pt-11">
        <h1>JUN 2025</h1>
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
