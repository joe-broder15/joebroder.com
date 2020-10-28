import React from "react";
import Projects from "./components/projects";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div className="container">
                <h1>Joe Broder</h1>
                <p>
                    Tempor mollit eu et duis consectetur dolor voluptate quis
                    dolor elit labore laboris ullamco enim. Exercitation eiusmod
                    magna proident amet. Cupidatat excepteur quis ex amet ipsum
                    labore deserunt aliquip eu mollit ullamco enim enim
                    proident. Aliquip culpa excepteur ea do elit.
                </p>
            </div>
        );
    }
}
