import styles from "./VideoDetailView.module.css";

export default function VideoDetailView({ video, handleBackButtonClick }) {
  const handleBackClick = () => {
    handleBackButtonClick();
  };

  return (
    <div>
        <span onClick={handleBackClick}>X</span>
      <span>{video.title}</span>
    </div>
  );
}
