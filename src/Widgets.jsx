import { FiberManualRecord, Info } from "@mui/icons-material";
import "./Widgets.css";

const Widgets = () => {
  const newsArticle = (heading, subtitles) => {
    return (
      <div className="widgets__article">
        <div className="widgets__article-left">
          <FiberManualRecord className="widgets__artilce-icon" />
        </div>
        <div className="widgets__article-right">
          <h4>{heading}</h4>
          <p> {subtitles}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("I AM BACK", "Top news - 999 readers")}
      {newsArticle("I AM BACK", "Top news - 999 readers")}
      {newsArticle("I AM BACK", "Top news - 999 readers")}
      {newsArticle("I AM BACK", "Top news - 999 readers")}
      {newsArticle("I AM BACK", "Top news - 999 readers")}
    </div>
  );
};

export default Widgets;
