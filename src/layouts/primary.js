// Primary

import React from "react"

import "../assets/stylesheets/tadao.scss"

export default function Primary({ children }) {
  return (
    <>
      <header className="universal header">
        <div className="universal-box">
          <div className="universal-row"></div>
        </div>
      </header>
      <div className="sticky-footer">
        <main className="universal main">
          <div className="universal-box">
            <div className="universal-row flex-h-center">
              <div className="artboard-l">{children}</div>
            </div>
          </div>
        </main>
      </div>
      <footer className="universal footer">
        <div className="universal-box">
          <div className="universal-row">
            <div className="artboard-l"></div>
          </div>
        </div>
      </footer>
    </>
  )
}
