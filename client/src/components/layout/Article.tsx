import React from 'react';
import SampleImage from '../../components/assets/SampleImage';
import ArticleIndexBarComponent from '../layout/ArticleIndexBarComponent';
import ArticleBannerComponent from '../layout/ArticleBannerComponent';
import ArticleToolBar from '../layout/ArticleToolBarComponent';
import Info from '../../components/assets/InfoButton';
import NewArticle from '../../components/assets/NewArticle';
import EditArticle from '../../components/assets/EditArticle';
import Bookmark from '../../components/assets/Bookmark';

export default class Article extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <div className="article-container">
        <div className="article-toolbar">
          <EditArticle/>
          <NewArticle/>
          <Bookmark/>
          <Info/>
        </div>
        <ArticleIndexBarComponent/>
        <div className="TitleArea">
          <h1 className="article-title">USCENTCOM Medical Security Cooperation (MSC) Exchange</h1>
        </div>
        <div className="SectionArea">
          <h1 className="section-title">
            Davis Conference Center, MacDill AFB, FL - 1-5 April 2019
          </h1>
          <hr className="Title-LineBreak"/>
          <p className="section-paragraph">
            Vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
            optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae
            sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat.
          </p>
        </div>
        <div className="SectionArea">
          <h1 className="section-title">
            Davis Conference Center, MacDill AFB, FL - 1-5 April 2019
          </h1>
          <hr className="Title-LineBreak"/>
          <p className="section-paragraph">
            Vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
            optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae
            sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat.

          </p>
        </div>
        <div className="SectionArea">
          <h1 className="section-title">
            Davis Conference Center, MacDill AFB, FL - 1-5 April 2019
          </h1>
          <hr className="Title-LineBreak"/>
          <p className="section-paragraph">
            Vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
            optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae
            sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat.
          </p>
        </div>
        <div className="SectionArea">
          <h1 className="section-title">
            Davis Conference Center, MacDill AFB, FL - 1-5 April 2019
          </h1>
          <hr className="Title-LineBreak"/>
          <p className="section-paragraph">
            Vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
            optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae
            sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat.
          </p>
        </div>
        <div className="SectionArea">
          <h1 className="section-title">
            Davis Conference Center, MacDill AFB, FL - 1-5 April 2019
          </h1>
          <hr className="Title-LineBreak"/>
          <p className="section-paragraph">
            Vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
            optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae
            sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat.
          </p>
        </div>
        <div className="SectionArea">
          <h1 className="section-title">
            Davis Conference Center, MacDill AFB, FL - 1-5 April 2019
          </h1>
          <hr className="Title-LineBreak"/>
          <p className="section-paragraph">
            Vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
            optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae
            sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat.
          </p>
        </div>
        <ArticleToolBar/>
      </div>
    );
  }
}
