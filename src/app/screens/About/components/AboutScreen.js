import React from 'react'
import data from 'app/config/data'
import ExternalLink from 'components/ExternalLink'
import ScreenHelmet from 'components/ScreenHelmet'
import aboutData from '../config/data'

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
            {aboutData.skills.map((skill, index) => (
              <li className="o-grid__item u-12/12 u-6/12@tablet" key={index}>
                <h3 className="u-fz-inherit u-mb2">{skill.title}</h3>
                <ul className="u-mb0">
                  {skill.rows.map((row, _index) => (
                    <li key={_index}>
                      <strong>{row.title}: </strong> {row.items.map((item, __index) => (
                        [
                          <ExternalLink href={item.link} title={item.title} />,
                          __index === row.items.length - 1 ? null : ', '
                        ]
                      ))}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="u-caps u-mb3">Cursos que realize</h2>
          <ul className="o-grid o-grid--gutter-x-5 o-grid--gutter-y-3 u-list-reset">
            {aboutData.moocs.map((mooc, index) => (
              <li className="o-grid__item u-12/12 u-6/12@tablet" key={index}>
                <h3 className="u-fz-inherit u-mb3">{mooc.title}</h3>
                <ul className="u-mb0">
                  {mooc.courses.map((course, _index) => (
                    <li key={_index}>
                      <h4 className="u-fz-inherit u-mb0">
                        <ExternalLink href={course.link} title={course.title} />
                      </h4>
                      <p className="u-mb0">{course.year}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}

export default AboutScreen
