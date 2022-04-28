import { useEffect, useState } from "react";

function useAudio(audioRef, barRef) {
  const [audio, setAudio] = useState();
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((curTime * 100) / duration);
  }, [curTime, duration]);

  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);

  const goForward = sec => {
    audio.currentTime += sec;
    setCurTime(audio.currentTime);
  };
  const goBackward = sec => {
    audio.currentTime -= sec;
    setCurTime(audio.currentTime);
  };

  useEffect(() => {
    setAudio(audioRef.current);
  }, [audioRef]);

  useEffect(() => {
    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };
    const setAudioTime = () => {
      if (audio.currentTime === audio.duration) {
        pause();
        audio.currentTime = 0;
      }
      setCurTime(audio.currentTime);
    };

    if (audio) {
      // DOM listeners: update React state on DOM events
      audio.addEventListener("loadeddata", setAudioData);

      audio.addEventListener("timeupdate", setAudioTime);

      // React state listeners: update DOM on React state changes
      playing ? audio.play() : audio.pause();

      if (clickedTime && clickedTime !== curTime) {
        audio.currentTime = clickedTime;
        setClickedTime(null);
      }
    }

    // effect cleanup
    return () => {
      if (audio) {
        audio.removeEventListener("loadeddata", setAudioData);
        audio.removeEventListener("timeupdate", setAudioTime);
      }
    };
  }, [audio, playing, clickedTime, curTime]);

  const calcClickedTime = e => {
    const clickPositionInPage = e.pageX;
    const barStart =
      barRef.current.getBoundingClientRect().left + window.scrollX;
    const barWidth = barRef.current.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  };

  const handleDrag = e => {
    setClickedTime(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      setClickedTime(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);
    document.addEventListener("touchmove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
    document.addEventListener("touchend", () => {
      document.removeEventListener("touchmove", updateTimeOnMove);
    });
  };

  return {
    curTime,
    duration,
    progress,
    playing,
    play,
    pause,
    goForward,
    goBackward,
    handleDrag
  };
}

export default useAudio;
