import React, { useEffect, useState } from 'react'
import './UnitContentPage.scss'
import { useParams } from 'react-router'
import { MathJax } from 'better-react-mathjax'

function UnitContentPage() {

    const { id } = useParams()

    const [UnitContent, setUnitContent] = useState("")

    useEffect(() => {
        fetch(`https://math-a1n7.onrender.com/units/${id}`)
            .then(res => res.json())
            .then(data => setUnitContent(data));
    }, [id])

    let UnitContentLatex = UnitContent.latex
    let UnitContentHeading = UnitContent.name
    return (
        <>
            <header className="unitContentPage--header">
                <div className="container unitContentPage--container">
                    <h1>Сана</h1>
                </div>
            </header>

            <div className="container">
                <h1 style={{ "textAlign": "center", "margin": "1em 0" }}>{UnitContentHeading}</h1>

                {/* <Latex style={{ "textAlign": "justify" }} delimiters={[
                    { left: '$', right: '$', display: true },
                ]}>{UnitContentLatex}</Latex> */}
                
                <MathJax>{UnitContentLatex}</MathJax>
            </div>
        </>
    )
}

export default UnitContentPage