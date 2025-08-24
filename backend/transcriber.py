from pydub import AudioSegment
import librosa
import numpy as np
import io
import crepe

def transcribe_audio(contents: bytes, filename: str) -> list:
    """Takes a small audio clip and figures out what music notes are being played.

    Args:
        contents (bytes): Actual audio file
        filename (str): Name of the audio file

    Returns:
        list: Music notes
    """
    
    # (pydub) Load WAV from bytes
    audio = AudioSegment.from_file(io.BytesIO(contents), format="wav")

    # Convert to mono, 16kHz, normalize for CREPE
    audio = audio.set_channels(1).set_frame_rate(16000)
    samples = np.array(audio.get_array_of_samples()).astype(np.float32)
    samples /= np.iinfo(audio.array_type).max

    # (CREPE) Pitch tracking
    time, frequency, confidence, _ = crepe.predict(samples, 16000, step_size=10, viterbi=True)

    note_list = []
    last_note, last_time = None, -np.inf
    gap = 0.5        # Repeated note time frame
    step = 5         # Frame rate
    threshold = 0.8  # Confidence

    for i in range(0, len(frequency), step):
        pitch = frequency[i]
        conf = confidence[i]
        t = time[i]

        if conf > threshold and pitch > 0:
            # (librosa) Frequency to midi to note
            midi_note = librosa.hz_to_midi(pitch)
            note = librosa.midi_to_note(midi_note, octave=True)

            # Avoid duplicates
            if note != last_note or (t - last_time > gap):
                note_list.append(note)
                last_note = note
                last_time = t

    return note_list
