import {useNavigate} from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleClick}>Back</button>
    </div>
  );
}