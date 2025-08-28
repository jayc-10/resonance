import { useState } from 'react';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [resultTab, setResultTab] = useState('');

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleOpenPopup = () => setIsPopupOpen(true);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setFile(null);
  };

  const handleCloseResult = () => {
    setIsResultOpen(false);
    setResultTab('');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resultTab);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:8000/upload/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Tab result from backend:', data.tab);
      setResultTab(data.tab ?? '');
      setIsResultOpen(true);

    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error processing file');

    } finally {
      setFile(null);
      setIsPopupOpen(false);
    }
  };

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
              onClick={handleOpenPopup}
              className="cursor-pointer"
            />
            <p className="text-xs">CCV yung kai</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-1 w-40">
            <p>electric</p>
            <img src="/src/assets/images/electric_pedal.png" alt="electric pedal" />
            <p className="text-xs">RF coalowl うるせー！ <br />reprint edition</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-1">
            <p>bass</p>
            <img src="/src/assets/images/bass_pedal.png" alt="bass pedal" />
            <p className="text-xs">PPDS coalowl 押せ！引け！<br />reprint edition</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-1">
            <p>more</p>
            <img src="/src/assets/images/more_pedal.png" alt="more pedal" />
            <p className="text-xs">DOMB might 日差し<br />reprint edition</p>
          </div>
        </div>
      </div>
      {/* Upload Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-20 backdrop-blur-sm">
          <div className="bg-beige p-10 rounded-lg w-96 space-y-4">
            <h2 className="text-center text-l">ACOUSTIC GUITAR SAMPLE (.wav)</h2>
            <input 
              type="file"
              id="fileUpload"
              accept=".wav,audio/wav"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="fileUpload"
              className="block w-full text-center bg-dark text-beige py-3 rounded "
            >
              CHOOSE FILE
            </label>
            {file && (
              <div className="text-center p-2">
                <p>selected file: {file.name}</p>
              </div>
            )}
            <div className="flex justify-around">
              <button onClick={handleClosePopup} className="bg-dark text-beige px-4 py-2 rounded">
                cancel
              </button>
              <button
                onClick={handleFileUpload}
                disabled={!file}
                className={`bg-dark text-beige px-4 py-2 rounded ${!file ? 'opacity-60' : ''}`}
              >
                upload
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Results modal */}
      {isResultOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-beige text-dark w-[min(42rem,60vw)] max-h-[80vh] rounded-lg p-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg">Transcribed Notes</h2>
              <button
                onClick={handleCloseResult}
                className="px-3 py-1 rounded bg-dark text-beige"
              >
                close
              </button>
            </div>
            {/* RESULTS HERE */}
            <pre className="bg-dark text-beige p-4 rounded overflow-auto whitespace-pre-wrap break-words">
{Array.isArray(resultTab) ? resultTab.join(', ') : resultTab}
            </pre>
            <div className="mt-4 flex gap-3">
              <button onClick={handleCopy} className="px-3 py-2 rounded bg-dark text-beige">
                  copy
              </button>
              <a
                href={`data:text/plain;charset=utf-8,${encodeURIComponent(resultTab)}`}
                download="notes.txt"
                className="px-3 py-2 rounded bg-dark inline-block"
              >
                download .txt
              </a>
            </div>
          </div>
        </div>
      )}

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
