import "./SidebarRow.scss";

const SidebarRow = ({ current, Icon, title }) => {
  return (
    <div className="sidebar-row">
      <Icon className={`sidebar-row__icon ${current && "current"}`} />
      <h2 className="sidebar-row__title">{title}</h2>
    </div>
  );
};

export default SidebarRow;
