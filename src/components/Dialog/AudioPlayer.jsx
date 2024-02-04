import React from 'react';

export default function AudioPlayer({ audioUrl }) {
  return (
    <audio controls src={audioUrl}>
      Play
    </audio>
  );
}
