let audioCtx = null;
let soundEnabled = localStorage.getItem('portfolio-sound-enabled') === 'true';

// Pentatonic scale frequencies for pleasant hover sounds
const HOVER_FREQS = [
  261.63, // C4
  293.66, // D4
  329.63, // E4
  392.00, // G4
  440.00, // A4
  523.25, // C5
  587.33, // D5
  659.25, // E5
  783.99, // G5
  880.00, // A5
  1046.50, // C6
];

export const initAudioContext = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
};

export const isSoundEnabled = () => soundEnabled;

export const setSoundEnabled = (enabled) => {
  soundEnabled = enabled;
  localStorage.setItem('portfolio-sound-enabled', enabled ? 'true' : 'false');
  if (enabled) {
    initAudioContext();
  }
};

export const toggleSound = () => {
  const nextState = !soundEnabled;
  setSoundEnabled(nextState);
  return nextState;
};

// Play a mechanical keyboard style click sound
export const playClick = () => {
  if (!soundEnabled) return;
  
  try {
    initAudioContext();
    if (!audioCtx || audioCtx.state === 'suspended') return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    // Mechanical snap: rapid frequency slide and very fast decay
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.06);
  } catch (error) {
    console.warn('Audio click play failed:', error);
  }
};

// Play a pleasant synthesizer tone based on hover index
export const playHover = (index = 0) => {
  if (!soundEnabled) return;

  try {
    initAudioContext();
    if (!audioCtx || audioCtx.state === 'suspended') return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    // Select a frequency from the pentatonic scale (wrap around if index is large)
    const freq = HOVER_FREQS[index % HOVER_FREQS.length];

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    // Slight pitch slide up for a clean digital sweep
    osc.frequency.exponentialRampToValueAtTime(freq * 1.05, audioCtx.currentTime + 0.08);

    // Smooth envelope: quick fade-in, quick decay
    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.16);
  } catch (error) {
    console.warn('Audio hover play failed:', error);
  }
};
