import React, { useEffect, useState } from 'react'
import './UnitContentPage.scss'
import { useParams } from 'react-router'
import { MathJax } from 'better-react-mathjax'
import { Link } from 'react-router-dom'

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
                <div className="container unitContentPage--header-container">
                    <h1><Link to={'/'}>Сана</Link></h1>
                </div>
            </header>

            <div className="container unitContentPage--container">
                <h1>{UnitContentHeading}</h1>

                {/* <Latex style={{ "textAlign": "justify" }} delimiters={[
                    { left: '$', right: '$', display: true },
                ]}>{UnitContentLatex}</Latex> */}
                
                <MathJax dangerouslySetInnerHTML={{__html: UnitContentLatex}}></MathJax>
            </div>
        </>
    )
}

export default UnitContentPage