import React from "react";

const RichHeading = ({ type, text, color }) => {

    var coloredText = <div style={{ color: color }}>{text}</div>

    switch (type) {
        case 'heading1':
            return <h1>{coloredText}</h1>;
        case 'heading2':
            return <h2>{coloredText}</h2>;
        case 'heading3':
            return <h3>{coloredText}</h3>;
        case 'heading4':
            return <h4>{coloredText}</h4>;
        case 'heading5':
            return <h5>{coloredText}</h5>;
        case 'heading6':
            return <h6>{coloredText}</h6>;
        default:
            return <p>This type of text is not yet support</p>;
    }
}

export default RichHeading;