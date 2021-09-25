import "./VideoRow.scss";

const VideoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className="video-row">
      <img src={image} alt="thumbnail image" className="video-row__image" />
      <div className="video-row__text">
        <h3 className="video-row__title">{title}</h3>
        <p className="video-row__headline">
          {channel} *{" "}
          <span className="video-row__subs">
            <span className="video-row__subs-number">{subs}</span> Subscribers
          </span>{" "}
          {views} views * {timestamp}
        </p>
        <p className="video-row__description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
