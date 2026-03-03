import React from 'react';
import Header from './components/Header';
import Article from './components/Article';
import archivedArticles from './data/archivedArticles';
import favoritedArticles from './data/favoritedArticles';
import savedArticles from './data/savedArticles';
import trashedArticles from './data/trashedArticles';
import './style.css';

export default function App() {
  const [articleQueue, setArticleQueue] = React.useState(savedArticles);

  const stats = getStats();

  const articleComponents = articleQueue.map((articleData) => {
    return <Article articleData={articleData} key={articleData.id} />;
  });

  const noArticlesMessage = (
    <p className="no-articles-message">There are no articles to show.</p>
  );

  function getStats() {
    return {
      numOfFavorites: favoritedArticles.length,
      numOfArchived: archivedArticles.length,
      numOfTrashed: trashedArticles.length,
    };
  }

  function getTargetArticle(id) {
    return savedArticles.find((item) => item.id === id);
  }

  function removeFromSavedArticles(targetArticle) {
    const targetIndex = savedArticles.indexOf(targetArticle);
    savedArticles.splice(targetIndex, 1);
  }

  /*-----State Setting Functions-------------------------------------------*/

  function favorite(id) {
    const targetArticle = getTargetArticle(id);
    if (favoritedArticles.includes(targetArticle)) {
      const targetIndex = favoritedArticles.indexOf(targetArticle);
      favoritedArticles.splice(targetIndex, 1);
    } else {
      favoritedArticles.push(targetArticle);
    }
    setArticleQueue([...savedArticles]);
  }

  function archive(id) {
    const targetArticle = getTargetArticle(id);
    removeFromSavedArticles(targetArticle);
    archivedArticles.push(targetArticle);
    setArticleQueue([...savedArticles]);
  }

  function trash(id) {
    const targetArticle = getTargetArticle(id);
    removeFromSavedArticles(targetArticle);
    if (favoritedArticles.includes(targetArticle)) {
      const targetIndex = favoritedArticles.indexOf(targetArticle);
      favoritedArticles.splice(targetIndex, 1);
    }
    trashedArticles.push(targetArticle);
    setArticleQueue([...savedArticles]);
  }

  function toggleExpand(id) {
    const targetArticle = getTargetArticle(id);
    targetArticle.expanded = !targetArticle.expanded;
    setArticleQueue([...savedArticles]);
  }

  function handleClick(e) {
    const buttonType = e.target.dataset.buttonType;
    const articleId = e.target.dataset.articleId;
    switch (buttonType) {
      case 'favorite':
        favorite(articleId);
        break;
      case 'archive':
        archive(articleId);
        break;
      case 'trash':
        trash(articleId);
        break;
      case 'toggleExpand':
        toggleExpand(articleId);
        break;
    }

    setArticleQueue([...savedArticles]);
  }

  return (
    <div className="read-me-later">
      <div className="wrapper">
        <Header stats={stats} setArticleQueue={setArticleQueue} />
        <div className="articles-container" onClick={handleClick}>
          {articleQueue.length > 0 ? articleComponents : noArticlesMessage}
        </div>
      </div>
    </div>
  );
}
