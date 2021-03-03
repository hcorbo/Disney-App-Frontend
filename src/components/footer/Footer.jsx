import React from "react";

export function Footer() {
    let year = new Date().getFullYear();
    //const [state, setState] = useState({year});

    return <footer className="footer">
        Copyright {year}
    </footer>
}