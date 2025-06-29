from pydub import AudioSegment
import librosa
import numpy as np
import io
import crepe

def transcribe_audio(contents: bytes, filename: str) -> list:
    # Load WAV from bytes
    audio = AudioSegment.from_file(io.BytesIO(contents), format="wav")

    # Convert to mono, 16kHz for CREPE
    audio = audio.set_channels(1).set_frame_rate(16000)
    samples = np.array(audio.get_array_of_samples()).astype(np.float32)
    samples /= np.iinfo(audio.array_type).max  # normalize to [-1.0, 1.0]

    # Pitch tracking with CREPE
    time, frequency, confidence, _ = crepe.predict(samples, 16000, step_size=10, viterbi=True)

    note_list = []
    last_note = None
    step = 5         # Analyze every 5th frame
    threshold = 0.8  # Minimum confidence

    for i in range(0, len(frequency), step):
        pitch = frequency[i]
        conf = confidence[i]

        if conf > threshold and pitch > 0:
            midi_note = librosa.hz_to_midi(pitch)
            note = librosa.midi_to_note(midi_note, octave=True)

            # Avoid duplicates
            if note != last_note:
                note_list.append(note)
                last_note = note

    return note_list
