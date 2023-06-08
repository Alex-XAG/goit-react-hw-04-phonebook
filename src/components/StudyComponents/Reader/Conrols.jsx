import React from 'react';

export const Controls = ({ publicationIndex, publications, changeIndex }) => {
  return (
    <section>
      <button
        disabled={publicationIndex === 0}
        type="button"
        onClick={() => changeIndex(-1)}
      >
        Back
      </button>
      <button
        disabled={publicationIndex === publications.length - 1}
        type="button"
        onClick={() => changeIndex(1)}
      >
        Next
      </button>
    </section>
  );
};
