import React, { useState, useEffect } from 'react';
import lessonsContent from '../data/lessonsContent'; // Ensure the path matches your project structure
import './PronunciationExercise.css';

const PronunciationExercise = () => {
  // State for dynamic lesson content based on user selection
  const [selectedLanguage, setSelectedLanguage] = useState('german');
  const [selectedChapter, setSelectedChapter] = useState('chapter1');
  const [selectedLesson, setSelectedLesson] = useState('lesson1');

  // State for speech recognition
  const [isRecording, setIsRecording] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [recognition, setRecognition] = useState(null);

  // State for feedback
  const [accuracy, setAccuracy] = useState(0); // Added state for accuracy percentage
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackGIF, setFeedbackGIF] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('black'); // Default color

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false; // Don't keep recording indefinitely
      recognitionInstance.lang = selectedLanguage === 'german' ? 'de-DE' : selectedLanguage === 'french' ? 'fr-FR' : 'en-US'; // Dynamic language support
      recognitionInstance.interimResults = false; // We only care about final results

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('You said: ', transcript);
        // Placeholder for comparison logic - replace with your own logic to calculate accuracy
        const calculatedAccuracy = Math.random() * 100; // Mock calculation for demonstration
        setAccuracy(calculatedAccuracy);
      };

      recognitionInstance.onerror = (event) => {
        if (event.error === 'not-allowed') {
          setPermissionDenied(true);
        }
        console.error('Speech recognition error', event.error);
      };

      recognitionInstance.onend = () => {
        setIsRecording(false);
      };

      setRecognition(recognitionInstance);
    } else {
      alert("Your browser doesn't support speech recognition.");
    }
  }, [selectedLanguage, selectedChapter, selectedLesson]);

  useEffect(() => {
    const feedback = getFeedbackBasedOnAccuracy();
    setFeedbackMessage(feedback.message);
    setFeedbackGIF(feedback.gif);
    setFeedbackColor(feedback.color);
  }, [accuracy]); // Update feedback when accuracy changes

  const getFeedbackBasedOnAccuracy = () => {
    if (accuracy < 50) {
      return {
        message: "Oops try next time about this, I know its difficult buttt... 😬",
        gif: "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",
        color: 'red',
      };
    } else if (accuracy >= 50 && accuracy < 80) {
      return {
        message: "Nice try but lets be honest it's not that difficult to learn a language 👏",
        gif: "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
        color: 'orange',
      };
    } else {
      return {
        message: "Amazing, brilliant, pretend you have done it you finished, when you win we will celebrate 🎉",
        gif: "https://media.giphy.com/media/xT0xezQGU5xCDJuCPe/giphy.gif",
        color: 'green',
      };
    }
  };

  const startRecording = () => {
    recognition?.start();
    setIsRecording(true);
    setPermissionDenied(false); // Reset permissions state
  };

  const stopRecording = () => {
    recognition?.stop();
  };

  return (
    <div className="pronunciation-exercise">
      <button onClick={!isRecording ? startRecording : stopRecording}>
        {!isRecording ? 'Start Recording' : 'Stop Recording'}
      </button>
      {permissionDenied && <p>Microphone access denied. Please enable microphone permissions in your browser settings.</p>}
      {isRecording && <div className="recording-indicator">Recording...</div>}
      <div style={{ color: feedbackColor, textAlign: 'center', fontSize: '24px' }}>
        {feedbackMessage}
        <img src={feedbackGIF} alt="Feedback GIF" style={{ margin: '20px auto', display: 'block' }} />
      </div>
    </div>
  );
};

export default PronunciationExercise;
