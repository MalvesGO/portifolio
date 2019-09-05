import React from 'react';
import './App.css'
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import {Link} from 'react-router-dom'

import Main from './components/main'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Portifólio Site" scroll>
            <Navigation>
                <Link to="/">Inicio</Link>
                <Link to="/resume">Resumo</Link>
                <Link to="/aboutme">Sobre Mim</Link>
                <Link to="/projects">Projetos</Link>
                <Link to="/contact">Contato</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/resume">Resumo</Link>
                <Link to="/aboutme">Sobre Mim</Link>
                <Link to="/projects">Projetos</Link>
                <Link to="/contact">Contato</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
