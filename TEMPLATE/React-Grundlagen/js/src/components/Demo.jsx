import React from 'react';

export default function Demo() {
  return <Emoji icon="😀" description="smiling" />;
}

function Emoji(props) {
  return (
    <span className="emoji" aria-label={props.description}>
      <h2> {props.icon}</h2>
    </span>
  );
}
