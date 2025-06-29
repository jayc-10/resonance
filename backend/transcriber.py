from pydub import AudioSegment
import librosa
import numpy as np
import io

def transcribe_audio(contents: bytes, filename: str) -> list:
    # Load WAV from bytes
    audio = AudioSegment.from_file(io.BytesIO(contents), format="wav")

    # Convert to mono, 22050 Hz
    audio = audio.set_channels(1).set_frame_rate(22050)
    samples = np.array(audio.get_array_of_samples()).astype(np.float32)
    samples /= np.iinfo(audio.array_type).max  # normalize to [-1.0, 1.0]
    sr = audio.frame_rate

    # Extract pitch using librosa
    pitches, magnitudes = librosa.piptrack(y=samples, sr=sr)

    note_list = []
    last_note = None
    step = 5  # Process every 5 frames to reduce duplicates

    for i in range(0, pitches.shape[1], step):
        index = magnitudes[:, i].argmax()
        pitch = pitches[index, i]

        if pitch > 0:
            note = librosa.hz_to_note(pitch)
            # Filter out repeated consecutive notes
            if note != last_note:
                note_list.append(note)
                last_note = note

    return note_list
