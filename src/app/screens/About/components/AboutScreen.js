import React from 'react'
import data from 'app/config/data'
import ExternalLink from 'components/ExternalLink'
import ScreenHelmet from 'components/ScreenHelmet'

function AboutScreen () {
  return (
    <section className="o-wrapper c-about-screen">
      <ScreenHelmet
        title={data.screens.about.title}
        description={data.screens.about.description}
        canonicalHref={data.screens.about.canonicalHref}
      />

      <header className="c-about-screen__profile">
        {/* <div className="c-about-screen__profile-image">
          <img src="http://placehold.it/350x400" alt="Gean Carlos Bonifacio Marroquin" />
        </div> */}
        <h1 className="u-fz-h4 u-m0">
          <span className="u-caps u-fz-h2 u-mb2 u-block">Gean Marroquin, </span>
          <span className="u-fz-sm u-fw-s-bold u-m0 u-block">Front-end developer</span>
        </h1>
      </header>

      <div className="c-about-screen__info">
        <section className="u-mb5">
          <h2 className="u-caps u-mb3">Sobre mi</h2>
          <div className="o-grid o-grid--gutter-x-5 o-grid--gutter-y-3">
            <div className="o-grid__item u-12/12 u-6/12@tablet">
              <p className="u-mb0">{data.about}</p>
            </div>
            <div className="o-grid__item u-12/12 u-6/12@tablet">
              <p>¿Desea contratarme para trabajar en su empresa por tiempo completo o parcial?</p>
              {/* <p>¿Formamos equipo? .</p> */}
              {/* <p className="u-mb0"><a href={`mailto:${data.email}`}>Enviame un mensaje</a></p> */}
              <p className="u-mb0 u-flex u-items-center">
                <i className="u-icon u-fz-h2 u-mr2">arrow_drop_down_circle</i>
                <a href="/static/cv_es.pdf"><strong>Descarga mi CV</strong></a>
              </p>
            </div>
          </div>
        </section>
        <section className="u-mb5">
          <h2 className="u-caps u-mb3">Skills</h2>
          <ul className="o-grid o-grid--gutter-x-5 o-grid--gutter-y-3 u-list-reset">
            <li className="o-grid__item u-12/12 u-6/12@tablet">
              <h3 className="u-fz-inherit u-mb2">CSS</h3>
              <ul>
                <li>
                  <strong>Frameworks: </strong> <ExternalLink href="https://github.com/wocss" title="WOCSS" />, <ExternalLink href="http://materializecss.com/" title="Materialize" />
                </li>
                <li>
                  <strong>Coding conventions/Guidelines: </strong> <ExternalLink href="http://cssguidelin.es/" title="Harry Roberts's CSS Guidelines" />, <ExternalLink href="http://csswizardry.net/talks/2014/11/itcss-dafed.pdf" title="ITCSS" />, <ExternalLink href="http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/" title="BEMIT" />
                </li>
                <li>
                  <strong>Procesadores: </strong> <ExternalLink href="http://sass-lang.com/" title="SASS" />, <ExternalLink href="http://stylus-lang.com/" title="Stylus" />, <ExternalLink href="http://postcss.org/" title="PostCSS" />
                </li>
              </ul>
            </li>
            <li className="o-grid__item u-12/12 u-6/12@tablet">
              <h3 className="u-fz-inherit u-mb2">JS (ES2015)</h3>
              <ul>
                <li>
                  <strong>Frameworks: </strong> <ExternalLink href="https://facebook.github.io/react/" title="React" />, <ExternalLink href="https://vuejs.org/" title="Vue.js" />
                </li>
                <li>
                  <strong>Coding conventions/Guidelines: </strong> <ExternalLink href="http://standardjs.com/rules.html" title="JavaScript Standard Style" />, <ExternalLink href="https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346" title="by Route hierarchy" />
                </li>
                <li>
                  <strong>Procesadores: </strong> <ExternalLink href="https://babeljs.io/" title="BABEL" />
                </li>
              </ul>
            </li>
            <li className="o-grid__item u-12/12 u-6/12@tablet">
              <h3 className="u-fz-inherit u-mb2">Tooling/Workflow</h3>
              <ul>
                <li>
                  <strong>Build system: </strong> <ExternalLink href="https://webpack.github.io/" title="Webpack" />
                </li>
                <li>
                  <strong>Task runner: </strong> <ExternalLink href="https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8?gi=64bf3727f8f3" title="NPM scripts" />
                </li>
                <li>
                  <strong>Package management: </strong> <ExternalLink href="https://yarnpkg.com/" title="Yarn" />, <ExternalLink href="https://www.npmjs.com/" title="npm" />
                </li>
                <li>
                  <strong>Testing: </strong> <ExternalLink href="https://facebook.github.io/jest/" title="Jest" />
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="u-caps u-mb3">Cursos que realize</h2>
          <ul className="o-grid o-grid--gutter-x-5 o-grid--gutter-y-3 u-list-reset">
            <li className="o-grid__item u-12/12 u-6/12@tablet">
              <h3 className="u-fz-inherit u-mb3">Frontend Masters</h3>
              <ul>
                <li>
                  <h4 className="u-fz-inherit u-mb0">
                    <ExternalLink href="https://frontendmasters.com/courses/advanced-javascript/" title="Advanced JS" />
                  </h4>
                  <p className="u-mb0">2016</p>
                </li>
              </ul>
            </li>
            <li className="o-grid__item u-12/12 u-6/12@tablet">
              <h3 className="u-fz-inherit u-mb3">Udacity</h3>
              <ul>
                <li>
                  <h4 className="u-fz-inherit u-mb0">
                    <ExternalLink href="https://www.udacity.com/course/website-performance-optimization--ud884" title="Website Performance Optimization" />
                  </h4>
                  <p className="u-mb0">2016</p>
                </li>
                <li>
                  <h4 className="u-fz-inherit u-mb0">
                    <ExternalLink href="https://www.udacity.com/course/browser-rendering-optimization--ud860" title="Browser Rendering Optimization" />
                  </h4>
                  <p className="u-mb0">2016</p>
                </li>
              </ul>
            </li>
            <li className="o-grid__item u-12/12 u-6/12@tablet">
              <h3 className="u-fz-inherit u-mb3">Egghead</h3>
              <ul>
                <li>
                  <h4 className="u-fz-inherit u-mb0">
                    <ExternalLink href="https://egghead.io/courses/building-react-applications-with-idiomatic-redux" title="Building React Applications with Idiomatic Redux" />
                  </h4>
                  <p className="u-mb0">2016</p>
                </li>
                <li>
                  <h4 className="u-fz-inherit u-mb0">
                    <ExternalLink href="https://egghead.io/courses/getting-started-with-redux" title="Getting Started with Redux" />
                  </h4>
                  <p className="u-mb0">2016</p>
                </li>
              </ul>
            </li>
            <li className="o-grid__item u-12/12 u-6/12@tablet">
              <h3 className="u-fz-inherit u-mb3">CodeSchool</h3>
              <ul>
                <li>
                  <h4 className="u-fz-inherit u-mb0">
                    <ExternalLink href="https://www.codeschool.com/courses/es2015-the-shape-of-javascript-to-come" title="ES2015: The Shape of JavaScript to Come" />
                  </h4>
                  <p className="u-mb0">2016</p>
                </li>
                <li>
                  <h4 className="u-fz-inherit u-mb0">
                    <ExternalLink href="https://www.codeschool.com/courses/powering-up-with-react" title="Powering Up With React" />
                  </h4>
                  <p className="u-mb0">2016</p>
                </li>
                <li>
                  <h4 className="u-fz-inherit u-mb0">
                    <ExternalLink href="https://www.codeschool.com/courses/javascript-best-practices" title="JavaScript Best Practices" />
                  </h4>
                  <p className="u-mb0">2016</p>
                </li>
                <li>
                  <h4 className="u-fz-inherit u-mb0">
                    <ExternalLink href="https://www.codeschool.com/courses/discover-devtools" title="Discover DevTools" />
                  </h4>
                  <p className="u-mb0">2016</p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </section>
  )
}

export default AboutScreen
