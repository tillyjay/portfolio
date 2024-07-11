require ('bootstrap/dist/css/bootstrap.min.css');

const Layout = require("./src/components/app/Layout").default
const React = require("react")

// browser icon
document.head.appendChild(document.createElement('link'));
document.querySelector('link').setAttribute('rel', 'shortcut icon');
document.querySelector('link').setAttribute('href', '/src/images/icon.png');

exports.wrapPageElement = ({element, props}) => {
    return <Layout {...props}>{element}</Layout>
}