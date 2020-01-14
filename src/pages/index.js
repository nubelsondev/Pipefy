import React from "react"

import GlobalStyle from "../styles/global"

import Header from "../components/Header"
import Board from "../components/Board"

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Board />
        </>
    )
}

export default App
