import React from 'react';
import articleIcon from '../../assets/article.svg';

const IndexButton = (Props: any) => {
  return (
    <React.Fragment>
        <div className="ArticleIcon-Component">
          <img className="article-icon" src={articleIcon} alt="article-icon"/>
        </div>
    </React.Fragment>
  )
}

type MyProps = {
  toggleIndexSidePanel: () => any;
};

type Props = MyProps;

export default IndexButton;