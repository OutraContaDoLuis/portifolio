import '../../styles/ShowProjectCardHome.css';

function ShowProjectCardHome({titleCard, imgCard, apresentationText, linkGithub, linkProduction}) {
    return(
        <>
            <div id="card--show--project" className="box box--column card--project">
                <h2 className="align--right margin--bottom--card--project">{ titleCard }</h2>
                <div id="card--project__img" className="box margin--bottom--card--project">
                    <img src={ imgCard } alt="" />
                </div>
                <p className="margin--bottom--card--project align--right">{ apresentationText }</p>
                <div className="box box--row align--right">
                    <button className="box box--row card--project__button" onClick={() => window.open(linkGithub)}>
                        <div className="margin--icon_button">
                            <i class="bi bi-github"></i>
                        </div>
                        Github
                    </button>
                    <button className="box box--row card--project__button" onClick={() => window.open(linkProduction)}>
                        <div className="margin--icon_button">
                            <i class="bi bi-eye-fill"></i>
                        </div>
                        Ver Projeto
                    </button>
                </div>
            </div>
        </>
    )
}

export default ShowProjectCardHome
