from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from transcriber import transcribe_audio

app = FastAPI()

@app.post("/upload/")
async def upload_audio(file: UploadFile = File(...)):
    contents = await file.read()
    tab = transcribe_audio(contents, file.filename)
    return JSONResponse(content={"tab": tab})