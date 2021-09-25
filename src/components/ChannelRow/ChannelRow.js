import "./ChannelRow.scss";
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from "@material-ui/icons/VerifiedUser";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  videosNo,
  description,
}) => {
  return (
    <div className="channel-row">
      <Avatar src={image} alt={channel} className="channel-row__avatar" />
      <div className="channel-row__text">
        <h4 className="channel-row__channel-name">
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p className="channel-row__channel-details">
          {subs} subscribers * {videosNo} videos
        </p>
        <p className="channel-row__desc">{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
