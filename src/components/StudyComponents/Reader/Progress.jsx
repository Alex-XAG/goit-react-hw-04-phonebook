export const Progress = ({ publicationIndex, publications }) => {
  return (
    <p>
      {publicationIndex + 1}/{publications.length}
    </p>
  );
};
