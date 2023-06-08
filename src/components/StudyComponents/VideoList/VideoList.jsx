export const VideoList = ({ videos, onSelect }) => {
  return (
    <ul>
      {videos.map(({ id, link }) => {
        return (
          <li
            style={{ cursor: 'pointer' }}
            key={id}
            onClick={() => onSelect(link)}
          >
            {link}
          </li>
        );
      })}
    </ul>
  );
};
