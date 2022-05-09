import React from 'react';

const Experience = () => {
    return (
        <div className='experience'>
            <h3>Expériences</h3>
            <div className="exp-1">
                <h4>Apprentissage autodidacte - Chez moi</h4>
                <h5>Juillet 2021 - Aujourd'hui</h5>
                <p>Suite à la semaine de l'alternance, j'ai commencé a programmer plusieurs projets que vous aurez accès via l'onglet 'Portfolio',
                    c'est à travers divers tutoriels et cours en ligne que j'ai pu programmé certaines de ces applications/sites.
                    Sur des conseils de professionnels, je me spécialise d'abord dans le front-end grâce à Javascript,
                    pour ensuite apprendre le back-end et enfin devenir full-stack.
                </p>
            </div>
            <div className="exp-2">
                <h4>Etudiant - Lycée Apollinaire Anova</h4>
                <h5>Février 2018 - Décembre 2018</h5>
                <p>En tant qu'étudiant en STI2D spé. SIN, le projet qui m'a était attribué était de créer une usine de biogaz.
                    Ma tâche dans ce projet était de programmer un détecteur de méthane et de gaz biodégradable,
                    pour cela j'avais en ma disposition une carte Arduino et le détecteur.
                    C'est à partir de ce projet que j'ai découvert l'univers du code et voulu en faire un métier.
                </p>
            </div>
           
        </div>
    );
};

export default Experience;