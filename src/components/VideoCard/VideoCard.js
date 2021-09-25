import "./VideoCard.scss";
import Avatar from "@material-ui/core/Avatar";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestapm,
  channelImage,
}) => {
  return (
    <div className="video-card">
      <img
        src={image}
        alt="video thumbnail"
        className="video-card__thumbnail"
      />
      <div className="video-card__info">
        <Avatar
          src={channelImage}
          alt="profile image"
          className="video-card__avatar"
        />
        <div className="video-card__video-text">
          <h4 className="video-card__video-title">{title}</h4>
          <p className="video-card__channel-name">{channel}</p>
          <p className="video-card__video-numbers">{views + " " + timestapm}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
