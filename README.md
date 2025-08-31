<img src=".github/assets/cover.png" alt="Cover" />

## 1&nbsp;&nbsp;: resonance
The idea for *Resonance* came while I was watching keshi's [*GABRIEL*](https://www.youtube.com/watch?v=Gt_x9ifcWpM) documentary. In the background, I heard a beautiful tune that wasn't listed of any track on the album, and I couldn't find it anywhere else. I wasn't musically gifted, so I wished I could learn to play it.

That's when I thought: what if I made a product that could take a sound and turn it into something you could play on the guitar?

Resonance is a guitar conversion tool that takes `.wav` files and transcribes them into music notes, which can then be used as tabs for learning and playing. Its been tested on acoustic guitar but was designed with future support for electric and bass in mind. Learning by ear can be frustrating; Resonance makes the process easier by bridging the gap between what you hear and what you can play.

**Please feel free to send feedback, I'd love to know how I can improve!**

[![Email](https://img.shields.io/badge/Email-jayc10%40uci.edu-373B41?style=for-the-badge&labelColor=000000&logo=gmail&logoColor=white)](mailto:jayc10@uci.edu) [![LinkedIn](https://img.shields.io/badge/linkedin-Jay%20Chan-DDD7C5?style=for-the-badge&labelColor=000000)](https://www.linkedin.com/in/jayc10/)

### Future Plans

<hr>

> - electric, bass, more  
> - `.mp3` file support  
> - note → TAB conversion

## 2&nbsp;&nbsp;: demo
<img src=".github/assets/demo.gif" alt="Demo" />

### Tutorial

<hr>

> Upload a short `.wav` file with clear, distinct notes being played. Wait a few seconds and the registered notes should popup! Copy or download the list of notes directly.

### Prerequisites
- Python 3.10-3.12
- Node.js 18+ and npm
- FFmpeg
- libsndfile

### 1. Clone Repo
```bash
git clone https://github.com/your-username/resonance.git
```
### 2. Install Dependencies
```bash
cd backend
pip install -r requirements.txt
cd ../frontend
npm install
```
### 3. Run Application
```bash
cd backend
uvicorn main:app --reload --port 8000
cd frontend
npm run dev
```

Open http://localhost:5173/ in browser!
## 3&nbsp;&nbsp;: architecture

<img src=".github/assets/architecture.png" alt="Architecture" />
