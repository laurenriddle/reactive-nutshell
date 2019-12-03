import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import ArticleManager from '../../modules/ArticleManager';
import { Button } from 'react-bootstrap';


class ArticleList extends Component {
    state = {
        articles:[]
    }

    componentDidMount() {
        console.log("ARTICLE LIST: ComponentDidMount");
        ArticleManager.getAllArticles()
        .then(articles => {
            console.log(articles)
            this.setState({
                articles: articles,
            })
        })
    }

    deleteArticle = article => {
        ArticleManager.deleteArticle(article)
        .then(() => {
            ArticleManager.getAllArticles()
            .then((newArticles) => {
                this.setState({
                    articles: newArticles
                })
            })
        })
    }

    render() {
        console.log("ARTICLE LIST: Render");
        return (
            <React.Fragment>
            <div className="button-new">
                <Button variant="primary" type="button" onClick={() => this.props.history.push("articles/new")}>New Article</Button>
            </div>
            <div className="container-cards">
                {this.state.articles.map(article => 
                <ArticleCard 
                key={article.id} 
                article={article} 
                deleteArticle = {this.deleteArticle}
                /> )}
            </div>
            </React.Fragment>
        )
    }
}



export default ArticleList