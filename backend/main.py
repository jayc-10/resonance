from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from transcriber import transcribe_audio
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

@app.post("/upload/")
async def upload_audio(file: UploadFile = File(...)):
    contents = await file.read()
    tab = transcribe_audio(contents, file.filename)
    return JSONResponse(content={"tab": tab})

origins = [
    "http://localhost",
    "http://localhost:5173",
    "http://127.0.0.1",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)