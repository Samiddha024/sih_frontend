import React, { useState, useRef } from 'react';
import { Upload, Play, Pause, SkipForward, SkipBack } from 'lucide-react';

export default function TrainingAndTesting() {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('upload');
  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: Math.random() > 0.5 ? 'training' : 'testing',
      }));
      setFiles([...files, ...newFiles]);
    }
  };

  const handleUpload = () => {
    let uploadProgress = 0;
    const interval = setInterval(() => {
      uploadProgress += 10;
      setProgress(uploadProgress);
      if (uploadProgress >= 100) {
        clearInterval(interval);
        setActiveTab('datasets');
      }
    }, 500);
  };

  const handleAudioPlay = (file) => {
    setCurrentAudio(file);
    if (audioRef.current) {
      audioRef.current.src = `/placeholder-audio/${file.name}`;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkip = (direction) => {
    if (currentAudio) {
      const currentIndex = files.findIndex((file) => file.id === currentAudio.id);
      let newIndex = direction === 'forward' ? currentIndex + 1 : currentIndex - 1;
      if (newIndex < 0) newIndex = files.length - 1;
      if (newIndex >= files.length) newIndex = 0;
      handleAudioPlay(files[newIndex]);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Training & Testing</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${activeTab === 'upload' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('upload')}
          >
            Upload
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'datasets' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('datasets')}
          >
            Datasets
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'visualization' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('visualization')}
          >
            Visualization
          </button>
        </div>

        {activeTab === 'upload' && (
          <>
            <h2 className="text-xl font-semibold mb-4">Upload Audio Files</h2>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">WAV, MP3 or OGG (MAX. 10MB per file)</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  multiple
                  accept=".wav,.mp3,.ogg"
                />
              </label>
            </div>
            {files.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-gray-500">{files.length} file(s) selected</p>
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={handleUpload}
                >
                  Upload
                </button>
              </div>
            )}
            {progress > 0 && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-sm text-gray-500">{progress}% complete</p>
              </div>
            )}
          </>
        )}

        {activeTab === 'datasets' && (
          <>
            <h2 className="text-xl font-semibold mb-4">Datasets</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Training Dataset</h3>
                <ul className="space-y-2">
                  {files.filter((file) => file.type === 'training').map((file) => (
                    <li key={file.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                      <span>{file.name}</span>
                      <button onClick={() => handleAudioPlay(file)} className="text-blue-500 hover:text-blue-700">
                        <Play className="w-5 h-5" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Testing Dataset</h3>
                <ul className="space-y-2">
                  {files.filter((file) => file.type === 'testing').map((file) => (
                    <li key={file.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                      <span>{file.name}</span>
                      <button onClick={() => handleAudioPlay(file)} className="text-blue-500 hover:text-blue-700">
                        <Play className="w-5 h-5" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        {activeTab === 'visualization' && (
          <>
            <h2 className="text-xl font-semibold mb-4">Model Visualization</h2>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="text-center text-gray-500">Model visualization placeholder</p>
            </div>
            <h2 className="text-xl font-semibold mb-4">Audio Samples</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              {currentAudio ? (
                <div className="space-y-4">
                  <p className="font-medium">Now playing: {currentAudio.name}</p>
                  <div className="flex justify-center space-x-4">
                    <button onClick={() => handleSkip('backward')} className="p-2 bg-blue-500 text-white rounded-full">
                      <SkipBack className="w-6 h-6" />
                    </button>
                    <button onClick={togglePlayPause} className="p-2 bg-blue-500 text-white rounded-full">
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                    <button onClick={() => handleSkip('forward')} className="p-2 bg-blue-500 text-white rounded-full">
                      <SkipForward className="w-6 h-6" />
                    </button>
                  </div>
                  <audio ref={audioRef} className="w-full" controls />
                </div>
              ) : (
                <p className="text-center text-gray-500">Select an audio file to play</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

